/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface VerifySignatureInterface extends ethers.utils.Interface {
  functions: {
    "getEthSignedMessageHash(bytes32)": FunctionFragment;
    "getMessageHash(address,uint256,string,uint256)": FunctionFragment;
    "recoverSigner(bytes32,bytes)": FunctionFragment;
    "splitSignature(bytes)": FunctionFragment;
    "verify(address,address,uint256,string,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getEthSignedMessageHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHash",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverSigner",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "splitSignature",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [string, string, BigNumberish, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEthSignedMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export class VerifySignature extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VerifySignatureInterface;

  functions: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getEthSignedMessageHash(bytes32)"(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMessageHash(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getMessageHash(address,uint256,string,uint256)"(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    recoverSigner(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "recoverSigner(bytes32,bytes)"(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    "splitSignature(bytes)"(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    verify(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verify(address,address,uint256,string,uint256,bytes)"(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getEthSignedMessageHash(
    _messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getEthSignedMessageHash(bytes32)"(
    _messageHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getMessageHash(
    _to: string,
    _amount: BigNumberish,
    _message: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getMessageHash(address,uint256,string,uint256)"(
    _to: string,
    _amount: BigNumberish,
    _message: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  recoverSigner(
    _ethSignedMessageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "recoverSigner(bytes32,bytes)"(
    _ethSignedMessageHash: BytesLike,
    _signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  splitSignature(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  "splitSignature(bytes)"(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  verify(
    _signer: string,
    _to: string,
    _amount: BigNumberish,
    _message: string,
    _nonce: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verify(address,address,uint256,string,uint256,bytes)"(
    _signer: string,
    _to: string,
    _amount: BigNumberish,
    _message: string,
    _nonce: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getEthSignedMessageHash(bytes32)"(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getMessageHash(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getMessageHash(address,uint256,string,uint256)"(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    recoverSigner(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "recoverSigner(bytes32,bytes)"(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    "splitSignature(bytes)"(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    verify(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verify(address,address,uint256,string,uint256,bytes)"(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEthSignedMessageHash(bytes32)"(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessageHash(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMessageHash(address,uint256,string,uint256)"(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recoverSigner(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "recoverSigner(bytes32,bytes)"(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "splitSignature(bytes)"(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verify(address,address,uint256,string,uint256,bytes)"(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEthSignedMessageHash(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEthSignedMessageHash(bytes32)"(
      _messageHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessageHash(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMessageHash(address,uint256,string,uint256)"(
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recoverSigner(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "recoverSigner(bytes32,bytes)"(
      _ethSignedMessageHash: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "splitSignature(bytes)"(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verify(address,address,uint256,string,uint256,bytes)"(
      _signer: string,
      _to: string,
      _amount: BigNumberish,
      _message: string,
      _nonce: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
