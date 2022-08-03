/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BridgeBase } from "../BridgeBase";

export class BridgeBase__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeBase> {
    return super.deploy(_token, overrides || {}) as Promise<BridgeBase>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): BridgeBase {
    return super.attach(address) as BridgeBase;
  }
  connect(signer: Signer): BridgeBase__factory {
    return super.connect(signer) as BridgeBase__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeBase {
    return new Contract(address, _abi, signerOrProvider) as BridgeBase;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum BridgeBase.Step",
        name: "step",
        type: "uint8",
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
        name: "to",
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
      {
        internalType: "uint256",
        name: "otherChainNonce",
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
    name: "nonce",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "processedNonces",
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
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161057038038061057083398101604081905261002f91610062565b60008054336001600160a01b031991821617909155600180549091166001600160a01b0392909216919091179055610090565b600060208284031215610073578081fd5b81516001600160a01b0381168114610089578182fd5b9392505050565b6104d18061009f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063156e29f61461006757806391dae5191461007c5780639dc29fac146100a5578063affed0e0146100b8578063f851a440146100cd578063fc0c546a146100e2575b600080fd5b61007a61007536600461035d565b6100ea565b005b61008f61008a36600461038f565b610218565b60405161009c9190610405565b60405180910390f35b61007a6100b3366004610334565b61022d565b6100c06102f4565b60405161009c919061046b565b6100d56102fa565b60405161009c91906103a7565b6100d5610309565b6000546001600160a01b0316331461011d5760405162461bcd60e51b815260040161011490610410565b60405180910390fd5b60008181526003602052604090205460ff161561014c5760405162461bcd60e51b815260040161011490610434565b60008181526003602052604090819020805460ff191660019081179091555490516340c10f1960e01b81526001600160a01b03909116906340c10f199061019990869086906004016103ec565b600060405180830381600087803b1580156101b357600080fd5b505af11580156101c7573d6000803e3d6000fd5b50600192506101d4915050565b7f27757542a5e1b9e8cef80f584e094d4eb63b9802f355c61b3640b71b618d5c8e338585428660405161020b9594939291906103bb565b60405180910390a2505050565b60036020526000908152604090205460ff1681565b600154604051632770a7eb60e21b81526001600160a01b0390911690639dc29fac9061025f90339085906004016103ec565b600060405180830381600087803b15801561027957600080fd5b505af115801561028d573d6000803e3d6000fd5b506000925061029a915050565b7f27757542a5e1b9e8cef80f584e094d4eb63b9802f355c61b3640b71b618d5c8e338484426002546040516102d39594939291906103bb565b60405180910390a2600280549060006102eb83610474565b91905055505050565b60025481565b6000546001600160a01b031681565b6001546001600160a01b031681565b80356001600160a01b038116811461032f57600080fd5b919050565b60008060408385031215610346578182fd5b61034f83610318565b946020939093013593505050565b600080600060608486031215610371578081fd5b61037a84610318565b95602085013595506040909401359392505050565b6000602082840312156103a0578081fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b03958616815293909416602084015260408301919091526060820152608081019190915260a00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6020808252600a908201526937b7363c9030b236b4b760b11b604082015260600190565b6020808252601a908201527f7472616e7366657220616c72656164792070726f636573736564000000000000604082015260600190565b90815260200190565b600060001982141561049457634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220dd6ebf5686e3ac5783c443ae2ea38d93f60a08b299ddedf4323aeb3c2bb4aefc64736f6c63430008000033";