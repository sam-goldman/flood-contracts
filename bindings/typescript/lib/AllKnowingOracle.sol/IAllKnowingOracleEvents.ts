/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IAllKnowingOracleEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "NewRequest(bytes32,address,address,address,uint256)": EventFragment;
    "RequestSettled(bytes32,bool)": EventFragment;
    "RequesterWhitelisted(address,bool)": EventFragment;
    "SettlerWhitelisted(address,bool)": EventFragment;
    "TokenWhitelisted(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequesterWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SettlerWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenWhitelisted"): EventFragment;
}

export interface NewRequestEventObject {
  id: string;
  proposer: string;
  disputer: string;
  currency: string;
  bond: BigNumber;
}
export type NewRequestEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  NewRequestEventObject
>;

export type NewRequestEventFilter = TypedEventFilter<NewRequestEvent>;

export interface RequestSettledEventObject {
  id: string;
  answer: boolean;
}
export type RequestSettledEvent = TypedEvent<
  [string, boolean],
  RequestSettledEventObject
>;

export type RequestSettledEventFilter = TypedEventFilter<RequestSettledEvent>;

export interface RequesterWhitelistedEventObject {
  requester: string;
  enabled: boolean;
}
export type RequesterWhitelistedEvent = TypedEvent<
  [string, boolean],
  RequesterWhitelistedEventObject
>;

export type RequesterWhitelistedEventFilter =
  TypedEventFilter<RequesterWhitelistedEvent>;

export interface SettlerWhitelistedEventObject {
  settler: string;
  enabled: boolean;
}
export type SettlerWhitelistedEvent = TypedEvent<
  [string, boolean],
  SettlerWhitelistedEventObject
>;

export type SettlerWhitelistedEventFilter =
  TypedEventFilter<SettlerWhitelistedEvent>;

export interface TokenWhitelistedEventObject {
  token: string;
  enabled: boolean;
}
export type TokenWhitelistedEvent = TypedEvent<
  [string, boolean],
  TokenWhitelistedEventObject
>;

export type TokenWhitelistedEventFilter =
  TypedEventFilter<TokenWhitelistedEvent>;

export interface IAllKnowingOracleEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAllKnowingOracleEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "NewRequest(bytes32,address,address,address,uint256)"(
      id?: PromiseOrValue<BytesLike> | null,
      proposer?: PromiseOrValue<string> | null,
      disputer?: PromiseOrValue<string> | null,
      currency?: null,
      bond?: null
    ): NewRequestEventFilter;
    NewRequest(
      id?: PromiseOrValue<BytesLike> | null,
      proposer?: PromiseOrValue<string> | null,
      disputer?: PromiseOrValue<string> | null,
      currency?: null,
      bond?: null
    ): NewRequestEventFilter;

    "RequestSettled(bytes32,bool)"(
      id?: PromiseOrValue<BytesLike> | null,
      answer?: null
    ): RequestSettledEventFilter;
    RequestSettled(
      id?: PromiseOrValue<BytesLike> | null,
      answer?: null
    ): RequestSettledEventFilter;

    "RequesterWhitelisted(address,bool)"(
      requester?: PromiseOrValue<string> | null,
      enabled?: null
    ): RequesterWhitelistedEventFilter;
    RequesterWhitelisted(
      requester?: PromiseOrValue<string> | null,
      enabled?: null
    ): RequesterWhitelistedEventFilter;

    "SettlerWhitelisted(address,bool)"(
      settler?: PromiseOrValue<string> | null,
      enabled?: null
    ): SettlerWhitelistedEventFilter;
    SettlerWhitelisted(
      settler?: PromiseOrValue<string> | null,
      enabled?: null
    ): SettlerWhitelistedEventFilter;

    "TokenWhitelisted(address,bool)"(
      token?: PromiseOrValue<string> | null,
      enabled?: null
    ): TokenWhitelistedEventFilter;
    TokenWhitelisted(
      token?: PromiseOrValue<string> | null,
      enabled?: null
    ): TokenWhitelistedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}