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
import type { PromiseOrValue } from "../../common";
import type { Book, BookInterface } from "../../Book.sol/Book";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FloodRegistry",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_safeBlockThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_disputeBondPct",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tradeRebatePct",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerRefundPct",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feePct",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Book__AmountOutTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blocksLeft",
        type: "uint256",
      },
    ],
    name: "Book__DisputePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__DisputePeriodOver",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__FeePctTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__InvalidParamsCombination",
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
    name: "Book__InvalidToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Book__MaliciousCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__NotTrader",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__SameToken",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__SentToBlackHole",
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
    name: "Book__TradeNotCancelable",
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
    name: "Book__TradeNotFilled",
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
    name: "Book__TradeNotInFillableState",
    type: "error",
  },
  {
    inputs: [],
    name: "Book__ZeroAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feePct",
        type: "uint256",
      },
    ],
    name: "FeePctSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeBondPct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tradeRebatePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relayerRefundPct",
        type: "uint256",
      },
    ],
    name: "ParamsCombinationSet",
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
    name: "SafeBlockThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "tradeId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "TradeCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "disputeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "answer",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "TradeDisputeSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
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
        name: "filledAtBlock",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
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
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
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
        indexed: false,
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
        name: "minAmountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
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
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "filledAtBlock",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "TradeSettled",
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
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "cancelTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disputeBondPct",
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
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "disputeTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feePct",
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
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
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
    name: "numberOfTrades",
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
        name: "id",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "address",
            name: "disputer",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bond",
            type: "uint256",
          },
          {
            internalType: "enum RequestState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "answer",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Request",
        name: "request",
        type: "tuple",
      },
    ],
    name: "onPriceSettled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract AllKnowingOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract FloodRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerRefundPct",
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
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
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
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "status",
    outputs: [
      {
        internalType: "enum TradeStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tradeRebatePct",
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
] as const;

const _bytecode =
  "0x610160604052600080553480156200001657600080fd5b5060405162001b4c38038062001b4c83398101604081905262000039916200020e565b6001600160a01b03861661012081905260408051630175727b60e51b81529051632eae4f60916004808201926020929091908290030181865afa15801562000085573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ab919062000264565b6001600160a01b03166101405260808590526040518581527f882885d0e4612a71677644a9d70e58ca05fc5a1ea1b0875f6e46c315241bfe149060200160405180910390a1620000fd848484620001b6565b60a084905260c083905260e082905260408051858152602081018590529081018390527f8be1eb1cba497386c77933500158ebaaef9e51125fa5ebdfaa92139d320d43299060600160405180910390a16109c4811115620001715760405163b768880160e01b815260040160405180910390fd5b6101008190526040518181527f9e67c173f0d1bf66a955764a6b072d74e095af185e539f9f6570fb91d788fca59060200160405180910390a1505050505050620002b3565b80620001c383856200028b565b620001cf91906200028b565b606414620001f057604051639327bc8760e01b815260040160405180910390fd5b505050565b6001600160a01b03811681146200020b57600080fd5b50565b60008060008060008060c087890312156200022857600080fd5b86516200023581620001f5565b6020880151604089015160608a015160808b015160a0909b0151939c929b509099909850965090945092505050565b6000602082840312156200027757600080fd5b81516200028481620001f5565b9392505050565b80820180821115620002ad57634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a05160c05160e0516101005161012051610140516117e36200036960003960008181610247015281816104270152818161049d015281816105e3015261078b01526000818161020801528181610f7a015261102c015260006102b40152600081816101ce0152818161072f0152610bde0152600081816102db01526107f8015260008181610177015281816103d3015261044a01526000818161012a01528181610b710152610d0801526117e36000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637dc0d1d0116100a2578063a02cf93711610071578063a02cf937146102af578063c16402bb146102d6578063cd805d5e146102fd578063d70e3dfd14610306578063e66a34ee1461032f57600080fd5b80637dc0d1d0146102425780638b2cdb9d146102695780639170c05b1461027c5780639501325f1461028f57600080fd5b806352ad0d5e116100de57806352ad0d5e1461019957806353906a59146101c9578063734d1627146101f05780637b1039991461020357600080fd5b806309796dff146101105780630ff0c00e146101255780632d7e8e1c1461015f578063391fe4e214610172575b600080fd5b61012361011e36600461133d565b610342565b005b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61012361016d3660046113b8565b610617565b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b6101bc6101a736600461143d565b60036020526000908152604090205460ff1681565b604051610156919061146c565b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b6101236101fe366004611494565b610780565b61022a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610156565b61022a7f000000000000000000000000000000000000000000000000000000000000000081565b61012361027736600461133d565b610909565b61012361028a3660046114e3565b6109ea565b61014c61029d36600461143d565b60016020526000908152604090205481565b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b61014c60005481565b61022a61031436600461143d565b6002602052600090815260409020546001600160a01b031681565b61012361033d36600461133d565b610afe565b600061035388888888888888610c88565b60008181526001602052604081205491925081900361038d57604051630f70cbe360e41b8152600481018390526024015b60405180910390fd5b61039681610d00565b6103b357604051632fe1403160e21b815260040160405180910390fd5b6000828152600260205260408120546001600160a01b03169060646103f87f00000000000000000000000000000000000000000000000000000000000000008b611558565b6104029190611575565b905061040d84610d34565b6104226001600160a01b038c16333084610d6e565b6104997f000000000000000000000000000000000000000000000000000000000000000060647f00000000000000000000000000000000000000000000000000000000000000006104748d6002611558565b61047e9190611558565b6104889190611575565b6001600160a01b038e169190610ddf565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f7d3b58b84338f868f8e8e8e60405160200161050794939291909384526001600160a01b039283166020850152604084019190915216606082015260800190565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016105369594939291906115e7565b6020604051808303816000875af1158015610555573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105799190611622565b9050856001600160a01b031681887f611d2790eebc2dfbd3329eb8ce89302d94d2b42c489cfd3ba8dae42977a3f94286886040516105cc9291906001600160a01b03929092168252602082015260400190565b60405180910390a46106096001600160a01b038d167f00000000000000000000000000000000000000000000000000000000000000006000610ddf565b505050505050505050505050565b600061062889898989898989610c88565b9050600160008281526003602052604090205460ff16600281111561064f5761064f611456565b14610670576040516337d6ee8b60e11b815260048101829052602401610384565b858210156106915760405163122e33cf60e31b815260040160405180910390fd5b6000818152600160209081526040808320439055600280835281842080546001600160a01b031916339081179091556003845293829020805460ff19169091179055518481526001600160a01b03861692879290917f81f3dddde62cb8d590d391999bc1a4c362a03cf74718fb3bd8195b46fc1c1009910160405180910390a46107266001600160a01b038916338785610d6e565b600060646107547f00000000000000000000000000000000000000000000000000000000000000008a611558565b61075e9190611575565b90506107746001600160a01b038b163383610ef9565b50505050505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107cb5760405163347b0c3360e11b8152336004820152602401610384565b60008080806107dd60e086018661163b565b8101906107ea9190611689565b9350935093509350600060647f0000000000000000000000000000000000000000000000000000000000000000866108229190611558565b61082c9190611575565b90506001600160a01b03821687847ff27fbe6db06bb8ac8a2b4206eef25be7c007d9fd8d53a772c5ffa4d7487952b261086b60408b0160208c016116d3565b61087b60e08c0160c08d01611705565b604080516001600160a01b03909316835290151560208301520160405180910390a46108ad60e0870160c08801611705565b156108eb576108e66108c560408801602089016116d3565b826108d660808a0160608b016116d3565b6001600160a01b03169190610ef9565b610900565b61090084826108d660808a0160608b016116d3565b50505050505050565b336001600160a01b0382161461093257604051630e020a8960e31b815260040160405180910390fd5b600061094388888888888888610c88565b9050600160008281526003602052604090205460ff16600281111561096a5761096a611456565b1461098b5760405163069572a960e21b815260048101829052602401610384565b61099481610d34565b816001600160a01b031681847f4aaea9d289fcf796ee2d93ab7730c9a0afa79d03debf6528dd7f13a83613b7f460405160405180910390a46109e06001600160a01b0389168388610ef9565b5050505050505050565b6109f48585610f29565b8215806109ff575081155b15610a1d576040516305dc4f8360e21b815260040160405180910390fd5b6001600160a01b038116610a44576040516325f5bdf760e21b815260040160405180910390fd5b600054604080516001600160a01b0387811682526020820187905291810185905283821660608201523392918816907f8a923a6574cd5d908fa4e840c47fb64b874b2116a88d073e5fdbd834033932769060800160405180910390a46000610ab3868686868660005433610c88565b6000818152600360205260408120805460ff19166001179055805491925080610adb83611722565b90915550610af690506001600160a01b038716333087610d6e565b505050505050565b6000610b0f88888888888888610c88565b600081815260016020526040812054919250819003610b4457604051630f70cbe360e41b815260048101839052602401610384565b610b4d81610d00565b15610bb457600082815260016020526040812054610b6b904361173b565b610b95907f000000000000000000000000000000000000000000000000000000000000000061173b565b905080604051637be8522f60e01b815260040161038491815260200190565b6000828152600260205260409020546001600160a01b0316610bd583610d34565b60006064610c037f00000000000000000000000000000000000000000000000000000000000000008261173b565b610c0d908b611558565b610c179190611575565b9050846001600160a01b031686836001600160a01b03167fdeb6ee1bbbaaac1d6b7873a679d462110dd54d72915436622cc00525c2561cab86604051610c5f91815260200190565b60405180910390a4610c7b6001600160a01b038c168383610ef9565b5050505050505050505050565b6040516bffffffffffffffffffffffff19606089811b8216602084015288811b82166034840152604883018890526068830187905285811b82166088840152609c830185905283901b1660bc82015260009060d001604051602081830303815290604052805190602001209050979650505050505050565b6000610d2c827f000000000000000000000000000000000000000000000000000000000000000061174e565b431092915050565b60009081526001602090815260408083208390556002825280832080546001600160a01b031916905560039091529020805460ff19169055565b6040516001600160a01b0380851660248301528316604482015260648101829052610dd99085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526110c3565b50505050565b801580610e595750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610e33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e579190611622565b155b610ec45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610384565b6040516001600160a01b038316602482015260448101829052610ef490849063095ea7b360e01b90606401610da2565b505050565b6040516001600160a01b038316602482015260448101829052610ef490849063a9059cbb60e01b90606401610da2565b806001600160a01b0316826001600160a01b031603610f5b57604051636f8f06d360e01b815260040160405180910390fd5b60405163b5af090f60e01b81526001600160a01b0383811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063b5af090f90602401602060405180830381865afa158015610fc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe59190611761565b61100d576040516378abcf6760e11b81526001600160a01b0383166004820152602401610384565b60405163b5af090f60e01b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063b5af090f90602401602060405180830381865afa158015611073573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110979190611761565b6110bf576040516378abcf6760e11b81526001600160a01b0382166004820152602401610384565b5050565b6000611118826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111959092919063ffffffff16565b805190915015610ef457808060200190518101906111369190611761565b610ef45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610384565b60606111a484846000856111ac565b949350505050565b60608247101561120d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610384565b600080866001600160a01b03168587604051611229919061177e565b60006040518083038185875af1925050503d8060008114611266576040519150601f19603f3d011682016040523d82523d6000602084013e61126b565b606091505b509150915061127c87838387611287565b979650505050505050565b606083156112f65782516000036112ef576001600160a01b0385163b6112ef5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610384565b50816111a4565b6111a4838381511561130b5781518083602001fd5b8060405162461bcd60e51b8152600401610384919061179a565b6001600160a01b038116811461133a57600080fd5b50565b600080600080600080600060e0888a03121561135857600080fd5b873561136381611325565b9650602088013561137381611325565b95506040880135945060608801359350608088013561139181611325565b925060a0880135915060c08801356113a881611325565b8091505092959891949750929550565b600080600080600080600080610100898b0312156113d557600080fd5b88356113e081611325565b975060208901356113f081611325565b96506040890135955060608901359450608089013561140e81611325565b935060a0890135925060c089013561142581611325565b8092505060e089013590509295985092959890939650565b60006020828403121561144f57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b602081016003831061148e57634e487b7160e01b600052602160045260246000fd5b91905290565b600080604083850312156114a757600080fd5b82359150602083013567ffffffffffffffff8111156114c557600080fd5b830161010081860312156114d857600080fd5b809150509250929050565b600080600080600060a086880312156114fb57600080fd5b853561150681611325565b9450602086013561151681611325565b93506040860135925060608601359150608086013561153481611325565b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761156f5761156f611542565b92915050565b60008261159257634e487b7160e01b600052601260045260246000fd5b500490565b60005b838110156115b257818101518382015260200161159a565b50506000910152565b600081518084526115d3816020860160208601611597565b601f01601f19169290920160200192915050565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a06080820181905260009061127c908301846115bb565b60006020828403121561163457600080fd5b5051919050565b6000808335601e1984360301811261165257600080fd5b83018035915067ffffffffffffffff82111561166d57600080fd5b60200191503681900382131561168257600080fd5b9250929050565b6000806000806080858703121561169f57600080fd5b8435935060208501356116b181611325565b92506040850135915060608501356116c881611325565b939692955090935050565b6000602082840312156116e557600080fd5b81356116f081611325565b9392505050565b801515811461133a57600080fd5b60006020828403121561171757600080fd5b81356116f0816116f7565b60006001820161173457611734611542565b5060010190565b8181038181111561156f5761156f611542565b8082018082111561156f5761156f611542565b60006020828403121561177357600080fd5b81516116f0816116f7565b60008251611790818460208701611597565b9190910192915050565b6020815260006116f060208301846115bb56fea264697066735822122049b963fbdaa0e416cf20094ae74e607c663af49a12df7bddb5ca3f39533846ca64736f6c63430008110033";

type BookConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BookConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Book__factory extends ContractFactory {
  constructor(...args: BookConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _registry: PromiseOrValue<string>,
    _safeBlockThreshold: PromiseOrValue<BigNumberish>,
    _disputeBondPct: PromiseOrValue<BigNumberish>,
    _tradeRebatePct: PromiseOrValue<BigNumberish>,
    _relayerRefundPct: PromiseOrValue<BigNumberish>,
    _feePct: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Book> {
    return super.deploy(
      _registry,
      _safeBlockThreshold,
      _disputeBondPct,
      _tradeRebatePct,
      _relayerRefundPct,
      _feePct,
      overrides || {}
    ) as Promise<Book>;
  }
  override getDeployTransaction(
    _registry: PromiseOrValue<string>,
    _safeBlockThreshold: PromiseOrValue<BigNumberish>,
    _disputeBondPct: PromiseOrValue<BigNumberish>,
    _tradeRebatePct: PromiseOrValue<BigNumberish>,
    _relayerRefundPct: PromiseOrValue<BigNumberish>,
    _feePct: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _registry,
      _safeBlockThreshold,
      _disputeBondPct,
      _tradeRebatePct,
      _relayerRefundPct,
      _feePct,
      overrides || {}
    );
  }
  override attach(address: string): Book {
    return super.attach(address) as Book;
  }
  override connect(signer: Signer): Book__factory {
    return super.connect(signer) as Book__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BookInterface {
    return new utils.Interface(_abi) as BookInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Book {
    return new Contract(address, _abi, signerOrProvider) as Book;
  }
}