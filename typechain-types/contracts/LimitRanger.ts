/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace LimitRanger {
  export type PositionInfoStruct = {
    owner: PromiseOrValue<string>;
    sellTarget: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    sellAboveTarget: PromiseOrValue<boolean>;
    unwrapToNative: PromiseOrValue<boolean>;
  };

  export type PositionInfoStructOutput = [
    string,
    number,
    number,
    boolean,
    boolean
  ] & {
    owner: string;
    sellTarget: number;
    fee: number;
    sellAboveTarget: boolean;
    unwrapToNative: boolean;
  };

  export type MintParamsStruct = {
    token0: PromiseOrValue<string>;
    token1: PromiseOrValue<string>;
    token0Amount: PromiseOrValue<BigNumberish>;
    token1Amount: PromiseOrValue<BigNumberish>;
    lowerTick: PromiseOrValue<BigNumberish>;
    upperTick: PromiseOrValue<BigNumberish>;
    poolFee: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
    protocolFee: PromiseOrValue<BigNumberish>;
    unwrapToNative: PromiseOrValue<boolean>;
  };

  export type MintParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    BigNumber,
    number,
    boolean
  ] & {
    token0: string;
    token1: string;
    token0Amount: BigNumber;
    token1Amount: BigNumber;
    lowerTick: number;
    upperTick: number;
    poolFee: number;
    deadline: BigNumber;
    protocolFee: number;
    unwrapToNative: boolean;
  };
}

export interface LimitRangerInterface extends utils.Interface {
  functions: {
    "cancelPosition(uint256)": FunctionFragment;
    "currentMinFee()": FunctionFragment;
    "currentStopPositionReward()": FunctionFragment;
    "depositsActive()": FunctionFragment;
    "getOwnedPositions(address)": FunctionFragment;
    "getOwner(uint256)": FunctionFragment;
    "getPositionInfo(uint256)": FunctionFragment;
    "mintNewPosition((address,address,uint256,uint256,int24,int24,uint24,uint256,uint16,bool))": FunctionFragment;
    "nonfungiblePositionManager()": FunctionFragment;
    "positionInfos(uint256)": FunctionFragment;
    "protocolFeeReceiver()": FunctionFragment;
    "protocolOperator()": FunctionFragment;
    "retrieveERC20(address)": FunctionFragment;
    "retrieveEth()": FunctionFragment;
    "retrieveNFT(uint256)": FunctionFragment;
    "setDepositsActive(bool)": FunctionFragment;
    "setMinimumFee(uint16)": FunctionFragment;
    "setProtocolFeeReceiver(address)": FunctionFragment;
    "setProtocolOperator(address)": FunctionFragment;
    "setStopPositionReward(uint8)": FunctionFragment;
    "stopPosition(uint256)": FunctionFragment;
    "uniNft()": FunctionFragment;
    "uniswapV3Factory()": FunctionFragment;
    "weth9()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelPosition"
      | "currentMinFee"
      | "currentStopPositionReward"
      | "depositsActive"
      | "getOwnedPositions"
      | "getOwner"
      | "getPositionInfo"
      | "mintNewPosition"
      | "nonfungiblePositionManager"
      | "positionInfos"
      | "protocolFeeReceiver"
      | "protocolOperator"
      | "retrieveERC20"
      | "retrieveEth"
      | "retrieveNFT"
      | "setDepositsActive"
      | "setMinimumFee"
      | "setProtocolFeeReceiver"
      | "setProtocolOperator"
      | "setStopPositionReward"
      | "stopPosition"
      | "uniNft"
      | "uniswapV3Factory"
      | "weth9"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelPosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentMinFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentStopPositionReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositsActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnedPositions",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwner",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintNewPosition",
    values: [LimitRanger.MintParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "nonfungiblePositionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionInfos",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolOperator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveERC20",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveEth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositsActive",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFeeReceiver",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setStopPositionReward",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stopPosition",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "uniNft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniswapV3Factory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weth9", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "cancelPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentMinFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentStopPositionReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnedPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPositionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintNewPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonfungiblePositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionInfos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStopPositionReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uniNft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3Factory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth9", data: BytesLike): Result;

  events: {
    "AddPosition(uint256,address,uint128,bool)": EventFragment;
    "CancelPosition(uint256,address)": EventFragment;
    "ClosePosition(uint256,address)": EventFragment;
    "DepositsActiveSet(bool)": EventFragment;
    "FeeReceiverSet(address)": EventFragment;
    "MinimumFeeSet(uint16)": EventFragment;
    "OperatorSet(address)": EventFragment;
    "RemovePosition(uint256,address)": EventFragment;
    "StopPositionRewardSet(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositsActiveSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeReceiverSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinimumFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StopPositionRewardSet"): EventFragment;
}

export interface AddPositionEventObject {
  token: BigNumber;
  owner: string;
  liquidity: BigNumber;
  sellAbove: boolean;
}
export type AddPositionEvent = TypedEvent<
  [BigNumber, string, BigNumber, boolean],
  AddPositionEventObject
>;

export type AddPositionEventFilter = TypedEventFilter<AddPositionEvent>;

export interface CancelPositionEventObject {
  token: BigNumber;
  owner: string;
}
export type CancelPositionEvent = TypedEvent<
  [BigNumber, string],
  CancelPositionEventObject
>;

export type CancelPositionEventFilter = TypedEventFilter<CancelPositionEvent>;

export interface ClosePositionEventObject {
  token: BigNumber;
  owner: string;
}
export type ClosePositionEvent = TypedEvent<
  [BigNumber, string],
  ClosePositionEventObject
>;

export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>;

export interface DepositsActiveSetEventObject {
  active: boolean;
}
export type DepositsActiveSetEvent = TypedEvent<
  [boolean],
  DepositsActiveSetEventObject
>;

export type DepositsActiveSetEventFilter =
  TypedEventFilter<DepositsActiveSetEvent>;

export interface FeeReceiverSetEventObject {
  newFeeReceiver: string;
}
export type FeeReceiverSetEvent = TypedEvent<
  [string],
  FeeReceiverSetEventObject
>;

export type FeeReceiverSetEventFilter = TypedEventFilter<FeeReceiverSetEvent>;

export interface MinimumFeeSetEventObject {
  newFee: number;
}
export type MinimumFeeSetEvent = TypedEvent<[number], MinimumFeeSetEventObject>;

export type MinimumFeeSetEventFilter = TypedEventFilter<MinimumFeeSetEvent>;

export interface OperatorSetEventObject {
  newOperator: string;
}
export type OperatorSetEvent = TypedEvent<[string], OperatorSetEventObject>;

export type OperatorSetEventFilter = TypedEventFilter<OperatorSetEvent>;

export interface RemovePositionEventObject {
  token: BigNumber;
  owner: string;
}
export type RemovePositionEvent = TypedEvent<
  [BigNumber, string],
  RemovePositionEventObject
>;

export type RemovePositionEventFilter = TypedEventFilter<RemovePositionEvent>;

export interface StopPositionRewardSetEventObject {
  reward: number;
}
export type StopPositionRewardSetEvent = TypedEvent<
  [number],
  StopPositionRewardSetEventObject
>;

export type StopPositionRewardSetEventFilter =
  TypedEventFilter<StopPositionRewardSetEvent>;

export interface LimitRanger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LimitRangerInterface;

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

  functions: {
    cancelPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentMinFee(overrides?: CallOverrides): Promise<[number]>;

    currentStopPositionReward(overrides?: CallOverrides): Promise<[number]>;

    depositsActive(overrides?: CallOverrides): Promise<[boolean]>;

    getOwnedPositions(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPositionInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LimitRanger.PositionInfoStructOutput]>;

    mintNewPosition(
      params: LimitRanger.MintParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<[string]>;

    positionInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, boolean, boolean] & {
        owner: string;
        sellTarget: number;
        fee: number;
        sellAboveTarget: boolean;
        unwrapToNative: boolean;
      }
    >;

    protocolFeeReceiver(overrides?: CallOverrides): Promise<[string]>;

    protocolOperator(overrides?: CallOverrides): Promise<[string]>;

    retrieveERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieveEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieveNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDepositsActive(
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinimumFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProtocolFeeReceiver(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProtocolOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStopPositionReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stopPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniNft(overrides?: CallOverrides): Promise<[string]>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;

    weth9(overrides?: CallOverrides): Promise<[string]>;
  };

  cancelPosition(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentMinFee(overrides?: CallOverrides): Promise<number>;

  currentStopPositionReward(overrides?: CallOverrides): Promise<number>;

  depositsActive(overrides?: CallOverrides): Promise<boolean>;

  getOwnedPositions(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getOwner(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPositionInfo(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LimitRanger.PositionInfoStructOutput>;

  mintNewPosition(
    params: LimitRanger.MintParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

  positionInfos(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, number, number, boolean, boolean] & {
      owner: string;
      sellTarget: number;
      fee: number;
      sellAboveTarget: boolean;
      unwrapToNative: boolean;
    }
  >;

  protocolFeeReceiver(overrides?: CallOverrides): Promise<string>;

  protocolOperator(overrides?: CallOverrides): Promise<string>;

  retrieveERC20(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieveEth(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieveNFT(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDepositsActive(
    active: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinimumFee(
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProtocolFeeReceiver(
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProtocolOperator(
    newOperator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStopPositionReward(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stopPosition(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniNft(overrides?: CallOverrides): Promise<string>;

  uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  weth9(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancelPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    currentMinFee(overrides?: CallOverrides): Promise<number>;

    currentStopPositionReward(overrides?: CallOverrides): Promise<number>;

    depositsActive(overrides?: CallOverrides): Promise<boolean>;

    getOwnedPositions(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPositionInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LimitRanger.PositionInfoStructOutput>;

    mintNewPosition(
      params: LimitRanger.MintParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

    positionInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number, number, boolean, boolean] & {
        owner: string;
        sellTarget: number;
        fee: number;
        sellAboveTarget: boolean;
        unwrapToNative: boolean;
      }
    >;

    protocolFeeReceiver(overrides?: CallOverrides): Promise<string>;

    protocolOperator(overrides?: CallOverrides): Promise<string>;

    retrieveERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    retrieveEth(overrides?: CallOverrides): Promise<boolean>;

    retrieveNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDepositsActive(
      active: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFeeReceiver(
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStopPositionReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stopPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    uniNft(overrides?: CallOverrides): Promise<string>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

    weth9(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddPosition(uint256,address,uint128,bool)"(
      token?: null,
      owner?: PromiseOrValue<string> | null,
      liquidity?: null,
      sellAbove?: null
    ): AddPositionEventFilter;
    AddPosition(
      token?: null,
      owner?: PromiseOrValue<string> | null,
      liquidity?: null,
      sellAbove?: null
    ): AddPositionEventFilter;

    "CancelPosition(uint256,address)"(
      token?: null,
      owner?: PromiseOrValue<string> | null
    ): CancelPositionEventFilter;
    CancelPosition(
      token?: null,
      owner?: PromiseOrValue<string> | null
    ): CancelPositionEventFilter;

    "ClosePosition(uint256,address)"(
      token?: null,
      owner?: PromiseOrValue<string> | null
    ): ClosePositionEventFilter;
    ClosePosition(
      token?: null,
      owner?: PromiseOrValue<string> | null
    ): ClosePositionEventFilter;

    "DepositsActiveSet(bool)"(active?: null): DepositsActiveSetEventFilter;
    DepositsActiveSet(active?: null): DepositsActiveSetEventFilter;

    "FeeReceiverSet(address)"(newFeeReceiver?: null): FeeReceiverSetEventFilter;
    FeeReceiverSet(newFeeReceiver?: null): FeeReceiverSetEventFilter;

    "MinimumFeeSet(uint16)"(newFee?: null): MinimumFeeSetEventFilter;
    MinimumFeeSet(newFee?: null): MinimumFeeSetEventFilter;

    "OperatorSet(address)"(newOperator?: null): OperatorSetEventFilter;
    OperatorSet(newOperator?: null): OperatorSetEventFilter;

    "RemovePosition(uint256,address)"(
      token?: null,
      owner?: PromiseOrValue<string> | null
    ): RemovePositionEventFilter;
    RemovePosition(
      token?: null,
      owner?: PromiseOrValue<string> | null
    ): RemovePositionEventFilter;

    "StopPositionRewardSet(uint8)"(
      reward?: null
    ): StopPositionRewardSetEventFilter;
    StopPositionRewardSet(reward?: null): StopPositionRewardSetEventFilter;
  };

  estimateGas: {
    cancelPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentMinFee(overrides?: CallOverrides): Promise<BigNumber>;

    currentStopPositionReward(overrides?: CallOverrides): Promise<BigNumber>;

    depositsActive(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnedPositions(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositionInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintNewPosition(
      params: LimitRanger.MintParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonfungiblePositionManager(overrides?: CallOverrides): Promise<BigNumber>;

    positionInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolFeeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    protocolOperator(overrides?: CallOverrides): Promise<BigNumber>;

    retrieveERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieveEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieveNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDepositsActive(
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinimumFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProtocolFeeReceiver(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProtocolOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStopPositionReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stopPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniNft(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;

    weth9(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentMinFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentStopPositionReward(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositsActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwnedPositions(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPositionInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintNewPosition(
      params: LimitRanger.MintParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonfungiblePositionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolFeeReceiver(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    retrieveERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieveEth(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieveNFT(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDepositsActive(
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFeeReceiver(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolOperator(
      newOperator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStopPositionReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stopPosition(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
