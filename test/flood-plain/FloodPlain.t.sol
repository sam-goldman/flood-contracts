// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "test/flood-plain/utils/FloodPlainTestShared.sol";

import {PermitHash} from "permit2/src/libraries/PermitHash.sol";
import {OrderHash} from "src/flood-plain/libraries/OrderHash.sol";

contract FloodPlainTest is FloodPlainTestShared {
    function test_fulfillBasicOrder() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        // Fill the order.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        // Assertions.
        assertEq(token0.balanceOf(address(account0.addr)), 0);
        assertEq(token1.balanceOf(address(account0.addr)), 500);
        assertEq(token0.balanceOf(address(fulfiller)), 500);
        assertEq(token1.balanceOf(address(fulfiller)), 0);
    }

    function test_fulfillEthOrder() public {
        (IFloodPlain.Order memory order,) = setup_mostBasicOrder();

        order.consideration[0].token = address(0);
        deal(address(fulfiller), 500);

        bytes memory sig = getSignature(order, account0);

        // Fill the order.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        // Assertions.
        assertEq(token0.balanceOf(address(account0.addr)), 0);
        assertEq(address(account0.addr).balance, 500);
        assertEq(token0.balanceOf(address(fulfiller)), 500);
        assertEq(address(fulfiller).balance, 0);
    }

    function test_fulfillMultiItemOrder() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_multiItemOrder();

        // Fill the order.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        // Assertions.
        assertEq(token0.balanceOf(address(account0.addr)), 0);
        assertEq(token1.balanceOf(address(account0.addr)), 0);
        assertEq(token2.balanceOf(address(account0.addr)), 0);
        assertEq(token3.balanceOf(address(account0.addr)), 400);
        assertEq(token4.balanceOf(address(account0.addr)), 500);
        assertEq(token5.balanceOf(address(account0.addr)), 600);
        assertEq(token0.balanceOf(address(fulfiller)), 100);
        assertEq(token1.balanceOf(address(fulfiller)), 200);
        assertEq(token2.balanceOf(address(fulfiller)), 300);
        assertEq(token3.balanceOf(address(fulfiller)), 0);
        assertEq(token4.balanceOf(address(fulfiller)), 0);
        assertEq(token5.balanceOf(address(fulfiller)), 0);
    }

    function test_RevertWhenInsufficientConsiderationReceived() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        deal(address(token1), address(maliciousFulfiller), 500);

        // Filling order fails.
        vm.expectRevert("ERC20: insufficient allowance");
        book.fulfillOrder(order, sig, address(maliciousFulfiller), "");
    }

    function test_RevertWhenInsufficientEthConsiderationReceived() public {
        (IFloodPlain.Order memory order,) = setup_mostBasicOrder();

        order.consideration[0].token = address(0);
        deal(address(maliciousFulfiller), 500);

        bytes memory sig = getSignature(order, account0);

        // Filling order fails.
        vm.expectRevert("Address: insufficient balance");
        book.fulfillOrder(order, sig, address(maliciousFulfiller), "");
    }

    function test_RevertWhenInsufficientConsiderationIndicated() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        deal(address(token1), address(maliciousFulfiller2), 500);

        // Filling order fails.
        vm.expectRevert(bytes4(keccak256("InsufficientAmountReceived()")));
        book.fulfillOrder(order, sig, address(maliciousFulfiller2), "");
    }

    function test_NonceValidity() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        assertTrue(book.getNonceStatus(account0.addr, 0));

        // Fill the order.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        assertFalse(book.getNonceStatus(account0.addr, 0));
    }

    function test_RevertWhenNonceReuse() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        // Fill the order.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        deal(address(token0), address(account0.addr), 500);
        deal(address(token1), address(fulfiller), 500);

        // Approve permit2 spending.
        vm.prank(account0.addr);
        token0.approve(address(permit2), 500);

        // Revert due to nonce reuse.
        vm.expectRevert(abi.encodePacked(bytes4(keccak256("InvalidNonce()"))));
        book.fulfillOrder(order, sig, address(fulfiller), "");
    }

    function test_RevertWhenDeadlineExpire() public {
        (IFloodPlain.Order memory order,) = setup_mostBasicOrder();

        // Set deadline to one second ago, and sign it.
        order.deadline = block.timestamp - 1;
        bytes memory sig = getSignature(order, account0);

        // Fill the order.
        vm.expectRevert(abi.encodePacked(bytes4(keccak256("SignatureExpired(uint256)")), bytes32(bytes20(address(0)))));
        book.fulfillOrder(order, sig, address(fulfiller), "");
    }

    function test_OrderPassingThroughZone() public {
        (IFloodPlain.Order memory order,) = setup_mostBasicOrder();

        // Set zone to pre deployed zone, and sign the order.
        order.zone = address(zone);
        bytes memory sig = getSignature(order, account0);

        // Fill the order without a problem.
        book.fulfillOrder(order, sig, address(fulfiller), "");
    }

    function test_RevertWhenZoneReverts() public {
        (IFloodPlain.Order memory order,) = setup_mostBasicOrder();

        // Set zone to pre deployed zone, and sign the order.
        order.zone = address(zone);
        bytes memory sig = getSignature(order, account0);

        // Make zone revert.
        zone.pause();

        // Fulfillment disabled by zone.
        vm.expectRevert("Pausable: paused");
        book.fulfillOrder(order, sig, address(fulfiller), "");
    }

    function test_OrderStatus() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        // Nonce available and deadline not passed.
        assertTrue(book.getOrderStatus(order));

        // Nonce available but deadline passed.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderStatus(order));
        order.deadline = type(uint256).max;

        // Fill the order, disables nonce.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        // Deadline not passed but nonce not available.
        assertFalse(book.getOrderStatus(order));

        // Deadline passed and nonce not available.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderStatus(order));
    }

    function test_OrderValidityWithoutZone() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        // Zone is not set.

        // Nonce available and deadline not passed.
        assertTrue(book.getOrderValidity(order, address(0), address(0), ""));

        // Nonce available but deadline passed.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));
        order.deadline = type(uint256).max;

        // Fill the order, disables nonce.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        // Deadline not passed but nonce not available.
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));

        // Deadline passed and nonce not available.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));
    }

    function test_OrderValidityWithUnpausedZone() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        // Zone is set but does not revert.

        order.zone = address(zone);
        sig = getSignature(order, account0);

        // Nonce available and deadline not passed.
        assertTrue(book.getOrderValidity(order, address(0), address(0), ""));

        // Nonce available but deadline passed.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));
        order.deadline = type(uint256).max;

        // Fill the order, disables nonce.
        book.fulfillOrder(order, sig, address(fulfiller), "");

        // Deadline not passed but nonce not available.
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));

        // Deadline passed and nonce not available.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));
    }

    function test_OrderValidityWithPausedZone() public {
        (IFloodPlain.Order memory order, bytes memory sig) = setup_mostBasicOrder();

        // Zone is set and reverts. Must always fail.

        order.zone = address(zone);
        sig = getSignature(order, account0);
        zone.pause();

        // Nonce available and deadline not passed.
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));

        // Nonce available but deadline passed.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));
        order.deadline = type(uint256).max;

        // Fill the order, disables nonce.
        zone.unpause();
        book.fulfillOrder(order, sig, address(fulfiller), "");
        zone.pause();

        // Deadline not passed but nonce not available.
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));

        // Deadline passed and nonce not available.
        order.deadline = block.timestamp - 1;
        assertFalse(book.getOrderValidity(order, address(0), address(0), ""));
    }

    function test_RevertWhenDeployedWithInvalidPermit2Contract() public {
        vm.expectRevert(bytes4(keccak256("NotAContract()")));
        new FloodPlainL2(address(0xd00d));
    }

    // Testing against following ethers v6 script output:
    //
    // ```
    // const ethers = require('ethers');
    //
    // const ORDER = {
    //   Order: [{
    //     name: 'offerer',
    //     type: 'address'
    //     },
    //     {
    //     name: 'zone',
    //     type: 'address'
    //     },
    //     {
    //     name: 'offer',
    //     type: 'Item[]'
    //     },
    //     {
    //     name: 'consideration',
    //     type: 'Item[]'
    //     },
    //     {
    //     name: 'deadline',
    //     type: 'uint256'
    //     },
    //     {
    //     name: 'nonce',
    //     type: 'uint256'
    //     }],
    //   Item: [{
    //     name: 'token',
    //     type: 'address'
    //     },
    //     {
    //     name: 'amount',
    //     type: 'uint256'
    //     }]
    // }
    //
    // const item = {
    //   token: ethers.ZeroAddress,
    //   amount: 0
    // }
    //
    // const order = {
    //   offerer: ethers.ZeroAddress,
    //   zone: ethers.ZeroAddress,
    //   offer: [item],
    //   consideration: [item, item, item],
    //   deadline: 0,
    //   nonce: 0
    // }
    //
    //
    // const orderHash = ethers.TypedDataEncoder.hashStruct("Order", ORDER, order)
    //
    // console.log(orderHash);
    // ```
    function test_OrderHash() public {
        IFloodPlain.Item memory item = IFloodPlain.Item({token: address(0), amount: 0});

        IFloodPlain.Item[] memory offer = new IFloodPlain.Item[](1);
        offer[0] = item;

        IFloodPlain.Item[] memory consideration = new IFloodPlain.Item[](3);
        consideration[0] = item;
        consideration[1] = item;
        consideration[2] = item;

        IFloodPlain.Order memory order = IFloodPlain.Order({
            offerer: address(0),
            zone: address(0),
            offer: offer,
            consideration: consideration,
            deadline: 0,
            nonce: 0
        });

        bytes32 orderHash = book.getOrderHash(order);

        // Confirmed through EthersV6. See OrderHash.t.sol for details.
        assertEq(orderHash, 0x7c035b41df11b270e3f066ebabf4714b283035deadec175a375ee86e1304a31b);
    }

    // Testing against following ethers v6 script output:
    //
    // ```
    // const ethers = require('ethers');
    //
    // const PERMIT = {
    //   PermitBatchWitnessTransferFrom: [{
    //     name: 'permitted',
    //     type: 'TokenPermissions[]'
    //     },
    //     {
    //     name: 'spender',
    //     type: 'address'
    //     },
    //     {
    //     name: 'nonce',
    //     type: 'uint256'
    //     },
    //     {
    //     name: 'deadline',
    //     type: 'uint256'
    //     },
    //     {
    //     name: 'witness',
    //     type: 'Order'
    //   }],
    //   TokenPermissions: [{
    //     name: 'token',
    //     type: 'address'
    //     },
    //     {
    //     name: 'amount',
    //     type: 'uint256'
    //   }],
    //   Item: [{
    //     name: 'token',
    //     type: 'address'
    //     },
    //     {
    //     name: 'amount',
    //     type: 'uint256'
    //   }],
    //   Order: [{
    //     name: 'offerer',
    //     type: 'address'
    //     },
    //     {
    //     name: 'zone',
    //     type: 'address'
    //     },
    //     {
    //     name: 'offer',
    //     type: 'Item[]'
    //     },
    //     {
    //     name: 'consideration',
    //     type: 'Item[]'
    //     },
    //     {
    //     name: 'deadline',
    //     type: 'uint256'
    //     },
    //     {
    //     name: 'nonce',
    //     type: 'uint256'
    //   }]
    // }
    //
    // const item = {
    //   token: ethers.ZeroAddress,
    //   amount: 0
    // }
    //
    // const order = {
    //   offerer: ethers.ZeroAddress,
    //   zone: ethers.ZeroAddress,
    //   offer: [item],
    //   consideration: [item, item, item],
    //   deadline: 0,
    //   nonce: 0
    // }
    //
    // const permit = {
    //   permitted: [item],
    //   spender: ethers.getAddress('0x5615deb798bb3e4dfa0139dfa1b3d433cc23b72f'),
    //   nonce: 0,
    //   deadline: 0,
    //   witness: order
    // }
    //
    // const permitHash = ethers.TypedDataEncoder.hashStruct("PermitBatchWitnessTransferFrom", PERMIT, permit)
    //
    // console.log(permitHash);
    // ```
    function test_PermitHash() public {
        IFloodPlain.Item memory item = IFloodPlain.Item({token: address(0), amount: 0});

        IFloodPlain.Item[] memory offer = new IFloodPlain.Item[](1);
        offer[0] = item;

        IFloodPlain.Item[] memory consideration = new IFloodPlain.Item[](3);
        consideration[0] = item;
        consideration[1] = item;
        consideration[2] = item;

        IFloodPlain.Order memory order = IFloodPlain.Order({
            offerer: address(0),
            zone: address(0),
            offer: offer,
            consideration: consideration,
            deadline: 0,
            nonce: 0
        });

        bytes32 permitHash = book.getPermitHash(order);

        assertEq(permitHash, 0xd42a97ef3ee49aedb736ce1ad96d68b14af54cbb77d5dfd676bcc90e7f3e25a8);
    }
}