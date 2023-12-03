// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {BetterScript, console2 as console} from "./BetterScript.s.sol";
import {Zone, IAuthZone} from "src/Zone.sol";

contract ZoneScript is BetterScript {
    function run() public {
        address zoneAdmin = vm.envAddress("ZONE_ADMIN_ADDRESS");
        console.logBytes32(keccak256(bytes.concat(type(Zone).creationCode, abi.encode(zoneAdmin))));
        string memory profile = vm.envString("FOUNDRY_PROFILE");
        require(keccak256(bytes(profile)) == keccak256(bytes("deploy")), " not deploy profile");
        bytes32 SALT = 0x45bddd7a4404868c5a41cb716e01a4006b38bab06c000000000000000001abdd;
        vm.broadcast(zoneAdmin);
        address zone = deploy2("MainZone", SALT, abi.encode(zoneAdmin));

        console.log("MainZone deployed at", zone);
        require(Zone(zone).owner() == zoneAdmin, "Zone: wrong owner");
    }

    function addFulfiller(Zone zone, address fulfiller) public {
        address zoneAdmin = vm.envAddress("ZONE_ADMIN_ADDRESS");
        IAuthZone.AddressFilter memory emptyAddressFilter = IAuthZone.AddressFilter({value: address(0), exclude: false});
        IAuthZone.RangeFilter memory emptyRangeFilter = IAuthZone.RangeFilter({gte: 0, lte: 0});
        IAuthZone.ItemFilter memory emptyItemFilter =
            IAuthZone.ItemFilter({token: emptyAddressFilter, amount: emptyRangeFilter});
        IAuthZone.ItemFilter[] memory emptyItemFilters;

        vm.startBroadcast(zoneAdmin);
        zone.grantRole(zone.FULFILLER_ROLE(), fulfiller);
        zone.setAuthorizationFilter(
            fulfiller,
            IAuthZone.AuthFilter({
                initialized: true,
                offerer: emptyAddressFilter,
                offer: emptyItemFilters,
                consideration: emptyItemFilter,
                deadline: emptyRangeFilter,
                nonce: emptyRangeFilter
            })
        );
        vm.stopBroadcast();
    }
}
