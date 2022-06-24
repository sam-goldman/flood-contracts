/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BookSingleChain,
  BookSingleChainInterface,
} from "../BookSingleChain";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_safeBlockThreshold",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_oracleAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blocksLeft",
        type: "uint256",
      },
    ],
    name: "BookSingleChain__DisputePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__DisputePeriodOver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "BookSingleChain__FeePctTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "BookSingleChain__InvalidToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__NewFeePctTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__SameToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__SentToBlackHole",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
    ],
    name: "BookSingleChain__TradeAlreadyFilled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
    ],
    name: "BookSingleChain__TradeNotFilled",
    type: "error",
  },
  {
    inputs: [],
    name: "BookSingleChain__ZeroAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "newMaxFeePct",
        type: "uint128",
      },
    ],
    name: "MaxFeePctChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSafeBlockThreshold",
        type: "uint256",
      },
    ],
    name: "SafeBlockThresholdChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "TokenWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "disputeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "filledAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
    ],
    name: "TradeDisputed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "filledAtBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "TradeFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
    ],
    name: "TradeRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "filledAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
    ],
    name: "TradeSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFeePct",
        type: "uint256",
      },
    ],
    name: "UpdatedFeeForTrade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "tradeIndex",
        type: "uint128",
      },
    ],
    name: "disputeTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "tradeIndex",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountToSend",
        type: "uint256",
      },
    ],
    name: "fillTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "tradeIndex",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountToSend",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newFeePct",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "traderSignature",
        type: "bytes",
      },
    ],
    name: "fillTradeWithUpdatedFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "filledAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "filledAtBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "filledBy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxFeePct",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfTrades",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "requestTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safeBlockThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "newMaxFeePct",
        type: "uint128",
      },
    ],
    name: "setMaxFeePct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSafeBlockThreshold",
        type: "uint256",
      },
    ],
    name: "setSafeBlockThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "tradeIndex",
        type: "uint128",
      },
    ],
    name: "settleTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newFeePct",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "traderSignature",
        type: "bytes",
      },
    ],
    name: "updateFeeForTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "whitelistToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052600180546001600160801b031916905534801561002057600080fd5b5060405161193e38038061193e83398101604081905261003f9161011c565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506001600160a01b03811660805260028290556040518281527fcf29a5174acb8c175d760a7381ffc52c6ae644e3a4ba3fa7e01344f959cd76159060200160405180910390a1600380546001600160801b0319166703782dace9d900009081179091556040519081527f248707dbfdce07115740191c2a4ec04702f5d55967ca82b9dc65c55801531f7f9060200160405180910390a15050610159565b6000806040838503121561012f57600080fd5b825160208401519092506001600160a01b038116811461014e57600080fd5b809150509250929050565b6080516117bc610182600039600081816101c801528181610b200152610b7c01526117bc6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80638da5cb5b116100ad578063d70e3dfd11610071578063d70e3dfd14610299578063d8642295146102c2578063daf9c210146102d5578063fbc534ef14610308578063fc711c3a1461031b57600080fd5b80638da5cb5b146102155780639170c05b146102285780639362776f1461023b5780639501325f1461024e578063cd805d5e1461026e57600080fd5b80632613f307116100f45780632613f3071461018a578063436146791461019d5780636f1335b9146101b05780637dc0d1d0146101c357806382b2ec3e1461020257600080fd5b80630b20b7bc146101265780630ff0c00e146101595780630ffb1d8b1461016257806313af403514610177575b600080fd5b610146610134366004611366565b60076020526000908152604090205481565b6040519081526020015b60405180910390f35b61014660025481565b61017561017036600461139b565b61032e565b005b6101756101853660046113d7565b6103c0565b610175610198366004611366565b610435565b6101756101ab366004611410565b61049b565b6101756101be366004611476565b6105fe565b6101ea7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610150565b610175610210366004611491565b6106b0565b6000546101ea906001600160a01b031681565b610175610236366004611502565b610747565b61017561024936600461159b565b610932565b61014661025c366004611366565b60056020526000908152604090205481565b600154610281906001600160801b031681565b6040516001600160801b039091168152602001610150565b6101ea6102a7366004611366565b6006602052600090815260409020546001600160a01b031681565b6101756102d0366004611603565b6109e9565b6102f86102e33660046113d7565b60046020526000908152604090205460ff1681565b6040519015158152602001610150565b610175610316366004611410565b610a60565b600354610281906001600160801b031681565b6000546001600160a01b031633146103615760405162461bcd60e51b8152600401610358906116c6565b60405180910390fd5b6001600160a01b038216600081815260046020908152604091829020805460ff191685151590811790915591519182527fef81a9943b96c8df4ef243401c9bf5159146166211356898b52d382086168d92910160405180910390a25050565b6000546001600160a01b031633146103ea5760405162461bcd60e51b8152600401610358906116c6565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b0316331461045f5760405162461bcd60e51b8152600401610358906116c6565b60028190556040518181527fcf29a5174acb8c175d760a7381ffc52c6ae644e3a4ba3fa7e01344f959cd7615906020015b60405180910390a150565b60006104ab878787878787610c48565b600081815260056020526040812054919250036104de5760405163cc4f06a160e01b815260048101829052602401610358565b6002546000828152600560205260409020546104fa9043611702565b1015610545576000818152600560205260408120546105199043611702565b6002546105269190611702565b9050806040516325797e0360e11b815260040161035891815260200190565b600081815260076020818152604080842080546006845282862080546005865293872087905580546001600160a01b031916905593909252929055906001600160a01b039081169061059a9089168684610cac565b6105ae6001600160a01b038a168289610cac565b8183826001600160a01b03167ff74daea4b4b80ee368b87f2feb712805f4ef30acd087e35c5d16df8736c2d6f2896040516105eb91815260200190565b60405180910390a4505050505050505050565b6000546001600160a01b031633146106285760405162461bcd60e51b8152600401610358906116c6565b670de0b6b3a7640000816001600160801b03161061065957604051636a143fdd60e11b815260040160405180910390fd5b600380546fffffffffffffffffffffffffffffffff19166001600160801b0383169081179091556040519081527f248707dbfdce07115740191c2a4ec04702f5d55967ca82b9dc65c55801531f7f90602001610490565b60006106c0888888888888610c48565b600081815260056020526040902054909150156106f3576040516304daa62560e21b815260048101829052602401610358565b6106fe878284610d2a565b60408051868152602081018490524391839133917f9e2cd6515276369145ad3c2ee5eb7c8f09ca9c99e8e7d6e68de40895a72f3464910160405180910390a45050505050505050565b6001600160a01b03851660009081526004602052604090205460ff1661078b5760405163f602627d60e01b81526001600160a01b0386166004820152602401610358565b6001600160a01b03841660009081526004602052604090205460ff166107cf5760405163f602627d60e01b81526001600160a01b0385166004820152602401610358565b836001600160a01b0316856001600160a01b03160361080157604051631d2792fb60e31b815260040160405180910390fd5b6003546001600160801b0316821115610830576040516305bf279d60e41b815260048101839052602401610358565b826000036108515760405163abc5ee6f60e01b815260040160405180910390fd5b6001600160a01b03811661087857604051631feef77d60e01b815260040160405180910390fd5b61088d6001600160a01b038616333086610d7e565b60015460408051858152602081018590526001600160a01b038481168284015291516001600160801b0390931692878316928916917f7361c265d28ece9d5df249995186533440e0b7a1310ae54d496fa1783056e3da919081900360600190a4600180546001600160801b031690600061090683611719565b91906101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b0316831115610961576040516305bf279d60e41b815260048101849052602401610358565b60008481526005602052604090205415610991576040516304daa62560e21b815260048101859052602401610358565b61099e8585858585610e08565b83856001600160a01b03167f2932e14c54a9749927aed2cd6d014eb7cd6a224f5fe6dfb944d9ced9b04c4f47856040516109da91815260200190565b60405180910390a35050505050565b60006109f98c8c8c8c8c8c610c48565b9050610a088582868686610e08565b610a138b8288610d2a565b60408051858152602081018890524391839133917f9e2cd6515276369145ad3c2ee5eb7c8f09ca9c99e8e7d6e68de40895a72f3464910160405180910390a4505050505050505050505050565b6000610a70878787878787610c48565b600081815260056020526040812054919250819003610aa55760405163cc4f06a160e01b815260048101839052602401610358565b600254610ab28243611702565b10610ad057604051632c02744560e11b815260040160405180910390fd5b600082815260076020818152604080842080546006845282862080546005865293872087905580546001600160a01b031916905593909252929055906001600160a01b0390811690610b45908a167f000000000000000000000000000000000000000000000000000000000000000084610f7e565b604051632bd6267f60e21b81526001600160a01b0382811660048301523360248301528a81166044830152606482018490526000917f00000000000000000000000000000000000000000000000000000000000000009091169063af5899fc906084016020604051808303816000875af1158015610bc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610beb919061173f565b90508085836001600160a01b03167f4c186453d95c0773fbc07552af2dfc2204868070daf519de8996684a6c957a86868c604051610c33929190918252602082015260400190565b60405180910390a45050505050505050505050565b604080516001600160a01b039788166020808301919091529688168183015260608101959095526080850193909352941660a08301526001600160801b0390931660c0808301919091528351808303909101815260e0909101909252815191012090565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610d245760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610358565b50505050565b60008281526005602090815260408083204390556006825280832080546001600160a01b031916339081179091556007909252909120829055610d79906001600160a01b038516903084610d7e565b505050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080610e015760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610358565b5050505050565b6003546001600160801b0316831115610e37576040516305bf279d60e41b815260048101849052602401610358565b60008481526005602052604090205415610e67576040516304daa62560e21b815260048101859052602401610358565b604080517f0efb9dda140a951df4393d44ca40349032d31811466afd20eacd4b4136c3f4986020808301919091528183018790526060808301879052835180840390910181526080830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060a084015260bc8084018290528451808503909101815260dc90930190935281519101206000610f408286868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ff592505050565b9050876001600160a01b0316816001600160a01b031614610f74576040516324a0dbd760e21b815260040160405180910390fd5b5050505050505050565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610d245760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b6044820152606401610358565b60008060006110048585611019565b9150915061101181611087565b509392505050565b600080825160410361104f5760208301516040840151606085015160001a61104387828585611240565b94509450505050611080565b8251604003611078576020830151604084015161106d86838361132d565b935093505050611080565b506000905060025b9250929050565b600081600481111561109b5761109b611758565b036110a35750565b60018160048111156110b7576110b7611758565b036111045760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610358565b600281600481111561111857611118611758565b036111655760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610358565b600381600481111561117957611179611758565b036111d15760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610358565b60048160048111156111e5576111e5611758565b0361123d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610358565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156112775750600090506003611324565b8460ff16601b1415801561128f57508460ff16601c14155b156112a05750600090506004611324565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156112f4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661131d57600060019250925050611324565b9150600090505b94509492505050565b6000806001600160ff1b0383168161134a60ff86901c601b61176e565b905061135887828885611240565b935093505050935093915050565b60006020828403121561137857600080fd5b5035919050565b80356001600160a01b038116811461139657600080fd5b919050565b600080604083850312156113ae57600080fd5b6113b78361137f565b9150602083013580151581146113cc57600080fd5b809150509250929050565b6000602082840312156113e957600080fd5b6113f28261137f565b9392505050565b80356001600160801b038116811461139657600080fd5b60008060008060008060c0878903121561142957600080fd5b6114328761137f565b95506114406020880161137f565b9450604087013593506060870135925061145c6080880161137f565b915061146a60a088016113f9565b90509295509295509295565b60006020828403121561148857600080fd5b6113f2826113f9565b600080600080600080600060e0888a0312156114ac57600080fd5b6114b58861137f565b96506114c36020890161137f565b955060408801359450606088013593506114df6080890161137f565b92506114ed60a089016113f9565b915060c0880135905092959891949750929550565b600080600080600060a0868803121561151a57600080fd5b6115238661137f565b94506115316020870161137f565b9350604086013592506060860135915061154d6080870161137f565b90509295509295909350565b60008083601f84011261156b57600080fd5b50813567ffffffffffffffff81111561158357600080fd5b60208301915083602082850101111561108057600080fd5b6000806000806000608086880312156115b357600080fd5b6115bc8661137f565b94506020860135935060408601359250606086013567ffffffffffffffff8111156115e657600080fd5b6115f288828901611559565b969995985093965092949392505050565b60008060008060008060008060008060006101408c8e03121561162557600080fd5b61162e8c61137f565b9a5061163c60208d0161137f565b995060408c0135985060608c0135975061165860808d0161137f565b965061166660a08d016113f9565b955060c08c0135945061167b60e08d0161137f565b93506101008c013592506101208c013567ffffffffffffffff8111156116a057600080fd5b6116ac8e828f01611559565b915080935050809150509295989b509295989b9093969950565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015611714576117146116ec565b500390565b60006001600160801b03808316818103611735576117356116ec565b6001019392505050565b60006020828403121561175157600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b60008219821115611781576117816116ec565b50019056fea2646970667358221220c06d83f2f906750c25dc63189d4872ba8dded630b17e94e15887f4cc4f53070d64736f6c634300080f0033";

type BookSingleChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BookSingleChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BookSingleChain__factory extends ContractFactory {
  constructor(...args: BookSingleChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _safeBlockThreshold: PromiseOrValue<BigNumberish>,
    _oracleAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BookSingleChain> {
    return super.deploy(
      _safeBlockThreshold,
      _oracleAddress,
      overrides || {}
    ) as Promise<BookSingleChain>;
  }
  override getDeployTransaction(
    _safeBlockThreshold: PromiseOrValue<BigNumberish>,
    _oracleAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _safeBlockThreshold,
      _oracleAddress,
      overrides || {}
    );
  }
  override attach(address: string): BookSingleChain {
    return super.attach(address) as BookSingleChain;
  }
  override connect(signer: Signer): BookSingleChain__factory {
    return super.connect(signer) as BookSingleChain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BookSingleChainInterface {
    return new utils.Interface(_abi) as BookSingleChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BookSingleChain {
    return new Contract(address, _abi, signerOrProvider) as BookSingleChain;
  }
}
