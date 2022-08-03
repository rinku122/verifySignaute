/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TokenBsc } from "../TokenBsc";

export class TokenBsc__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenBsc> {
    return super.deploy(overrides || {}) as Promise<TokenBsc>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenBsc {
    return super.attach(address) as TokenBsc;
  }
  connect(signer: Signer): TokenBsc__factory {
    return super.connect(signer) as TokenBsc__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenBsc {
    return new Contract(address, _abi, signerOrProvider) as TokenBsc;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "updateAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060098152602001682129a1902a37b5b2b760b91b8152506040518060400160405280600381526020016242544b60e81b815250818181600390805190602001906200006a9291906200009e565b508051620000809060049060208401906200009e565b5050600580546001600160a01b031916331790555062000181915050565b828054620000ac9062000144565b90600052602060002090601f016020900481019282620000d057600085556200011b565b82601f10620000eb57805160ff19168380011785556200011b565b828001600101855582156200011b579182015b828111156200011b578251825591602001919060010190620000fe565b50620001299291506200012d565b5090565b5b808211156200012957600081556001016200012e565b6002810460018216806200015957607f821691505b602082108114156200017b57634e487b7160e01b600052602260045260246000fd5b50919050565b610ddb80620001916000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb146101de578063dd62ed3e146101f1578063e2f273bd14610204578063f851a44014610217576100f5565b806370a082311461019d57806395d89b41146101b05780639dc29fac146101b8578063a457c2d7146101cb576100f5565b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461017557806340c10f1914610188576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610138575b600080fd5b61010261022c565b60405161010f91906109fc565b60405180910390f35b61012b6101263660046109b4565b6102be565b60405161010f91906109f1565b6101406102db565b60405161010f9190610d0e565b61012b61015b366004610979565b6102e1565b610168610381565b60405161010f9190610d17565b61012b6101833660046109b4565b610386565b61019b6101963660046109b4565b6103d5565b005b6101406101ab366004610926565b61040d565b61010261042c565b61019b6101c63660046109b4565b61043b565b61012b6101d93660046109b4565b61046f565b61012b6101ec3660046109b4565b6104ea565b6101406101ff366004610947565b6104fe565b61019b610212366004610926565b610529565b61021f610575565b60405161010f91906109dd565b60606003805461023b90610d54565b80601f016020809104026020016040519081016040528092919081815260200182805461026790610d54565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b5050505050905090565b60006102d26102cb610584565b8484610588565b50600192915050565b60025490565b60006102ee84848461063c565b6001600160a01b03841660009081526001602052604081208161030f610584565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508281101561035b5760405162461bcd60e51b815260040161035290610b80565b60405180910390fd5b61037685610367610584565b6103718685610d3d565b610588565b506001949350505050565b601290565b60006102d2610393610584565b8484600160006103a1610584565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103719190610d25565b6005546001600160a01b031633146103ff5760405162461bcd60e51b815260040161035290610b5c565b6104098282610764565b5050565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461023b90610d54565b6005546001600160a01b031633146104655760405162461bcd60e51b815260040161035290610b5c565b6104098282610824565b6000806001600061047e610584565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156104ca5760405162461bcd60e51b815260040161035290610c92565b6104e06104d5610584565b856103718685610d3d565b5060019392505050565b60006102d26104f7610584565b848461063c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546001600160a01b031633146105535760405162461bcd60e51b815260040161035290610b5c565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b031681565b3390565b6001600160a01b0383166105ae5760405162461bcd60e51b815260040161035290610c4e565b6001600160a01b0382166105d45760405162461bcd60e51b815260040161035290610ad4565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061062f908590610d0e565b60405180910390a3505050565b6001600160a01b0383166106625760405162461bcd60e51b815260040161035290610c09565b6001600160a01b0382166106885760405162461bcd60e51b815260040161035290610a4f565b61069383838361090a565b6001600160a01b038316600090815260208190526040902054818110156106cc5760405162461bcd60e51b815260040161035290610b16565b6106d68282610d3d565b6001600160a01b03808616600090815260208190526040808220939093559085168152908120805484929061070c908490610d25565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107569190610d0e565b60405180910390a350505050565b6001600160a01b03821661078a5760405162461bcd60e51b815260040161035290610cd7565b6107966000838361090a565b80600260008282546107a89190610d25565b90915550506001600160a01b038216600090815260208190526040812080548392906107d5908490610d25565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610818908590610d0e565b60405180910390a35050565b6001600160a01b03821661084a5760405162461bcd60e51b815260040161035290610bc8565b6108568260008361090a565b6001600160a01b0382166000908152602081905260409020548181101561088f5760405162461bcd60e51b815260040161035290610a92565b6108998282610d3d565b6001600160a01b038416600090815260208190526040812091909155600280548492906108c7908490610d3d565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061062f908690610d0e565b505050565b80356001600160a01b038116811461042757600080fd5b600060208284031215610937578081fd5b6109408261090f565b9392505050565b60008060408385031215610959578081fd5b6109628361090f565b91506109706020840161090f565b90509250929050565b60008060006060848603121561098d578081fd5b6109968461090f565b92506109a46020850161090f565b9150604084013590509250925092565b600080604083850312156109c6578182fd5b6109cf8361090f565b946020939093013593505050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610a2857858101830151858201604001528201610a0c565b81811115610a395783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b6020808252600a908201526937b7363c9030b236b4b760b11b604082015260600190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610d3857610d38610d8f565b500190565b600082821015610d4f57610d4f610d8f565b500390565b600281046001821680610d6857607f821691505b60208210811415610d8957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122046a2e42589623c37c977c7b1c0dc2c33e863ff39a9a284a73a2f918c0d961e7164736f6c63430008000033";