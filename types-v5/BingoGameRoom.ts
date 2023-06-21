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
} from "./common";

export declare namespace IBingoRoom {
  export type ParticipantStruct = {
    user: PromiseOrValue<string>;
    cardId: PromiseOrValue<BigNumberish>;
  };

  export type ParticipantStructOutput = [string, BigNumber] & {
    user: string;
    cardId: BigNumber;
  };

  export type GameRoundStruct = {
    round: PromiseOrValue<BigNumberish>;
    number: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    player: PromiseOrValue<string>;
  };

  export type GameRoundStructOutput = [number, number, number, string] & {
    round: number;
    number: number;
    timestamp: number;
    player: string;
  };

  export type RecentGameStruct = {
    gameId: PromiseOrValue<BigNumberish>;
    winner: PromiseOrValue<string>;
    cardNumbers: PromiseOrValue<BigNumberish>[][];
    selectedNumbers: PromiseOrValue<BigNumberish>[];
    players: IBingoRoom.ParticipantStruct[];
  };

  export type RecentGameStructOutput = [
    BigNumber,
    string,
    number[][],
    number[],
    IBingoRoom.ParticipantStructOutput[]
  ] & {
    gameId: BigNumber;
    winner: string;
    cardNumbers: number[][];
    selectedNumbers: number[];
    players: IBingoRoom.ParticipantStructOutput[];
  };
}

export interface BingoGameRoomInterface extends utils.Interface {
  functions: {
    "MAX_GAME_DURATION()": FunctionFragment;
    "RECENT_GAME_COUNTS()": FunctionFragment;
    "ROUND_DURATION()": FunctionFragment;
    "ROUND_TIMEOUT()": FunctionFragment;
    "bingo(uint256,uint8[][],bytes)": FunctionFragment;
    "expectedLines()": FunctionFragment;
    "fee()": FunctionFragment;
    "gameCard()": FunctionFragment;
    "getCurrentRound(uint256)": FunctionFragment;
    "getGameInfo(uint256)": FunctionFragment;
    "getLatestRound(uint256)": FunctionFragment;
    "getSelectedNumbers(uint256)": FunctionFragment;
    "playedGames(address,uint256)": FunctionFragment;
    "recentGames(uint8)": FunctionFragment;
    "selectAndBingo(uint256,uint8,uint8[][],bytes)": FunctionFragment;
    "selectNumber(uint256,uint8)": FunctionFragment;
    "summary()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_GAME_DURATION"
      | "RECENT_GAME_COUNTS"
      | "ROUND_DURATION"
      | "ROUND_TIMEOUT"
      | "bingo"
      | "expectedLines"
      | "fee"
      | "gameCard"
      | "getCurrentRound"
      | "getGameInfo"
      | "getLatestRound"
      | "getSelectedNumbers"
      | "playedGames"
      | "recentGames"
      | "selectAndBingo"
      | "selectNumber"
      | "summary"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_GAME_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RECENT_GAME_COUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUND_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROUND_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bingo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLines",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "gameCard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestRound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelectedNumbers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "playedGames",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "recentGames",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "selectAndBingo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selectNumber",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "summary", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MAX_GAME_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RECENT_GAME_COUNTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUND_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROUND_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bingo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expectedLines",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gameCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playedGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recentGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectAndBingo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "summary", data: BytesLike): Result;

  events: {
    "Bingo(uint256,address,uint8[][])": EventFragment;
    "GameParticipated(uint256,address,uint256,uint8)": EventFragment;
    "GameStarted(uint256,address)": EventFragment;
    "NumberSelected(uint256,uint32,address,uint8)": EventFragment;
    "RewardChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bingo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameParticipated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NumberSelected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardChanged"): EventFragment;
}

export interface BingoEventObject {
  gameId: BigNumber;
  player: string;
  playerCardNumbers: number[][];
}
export type BingoEvent = TypedEvent<
  [BigNumber, string, number[][]],
  BingoEventObject
>;

export type BingoEventFilter = TypedEventFilter<BingoEvent>;

export interface GameParticipatedEventObject {
  gameId: BigNumber;
  player: string;
  cardId: BigNumber;
  position: number;
}
export type GameParticipatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, number],
  GameParticipatedEventObject
>;

export type GameParticipatedEventFilter =
  TypedEventFilter<GameParticipatedEvent>;

export interface GameStartedEventObject {
  gameId: BigNumber;
  cardContract: string;
}
export type GameStartedEvent = TypedEvent<
  [BigNumber, string],
  GameStartedEventObject
>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface NumberSelectedEventObject {
  gameId: BigNumber;
  round: number;
  player: string;
  number: number;
}
export type NumberSelectedEvent = TypedEvent<
  [BigNumber, number, string, number],
  NumberSelectedEventObject
>;

export type NumberSelectedEventFilter = TypedEventFilter<NumberSelectedEvent>;

export interface RewardChangedEventObject {
  newReward: string;
  oldReward: string;
}
export type RewardChangedEvent = TypedEvent<
  [string, string],
  RewardChangedEventObject
>;

export type RewardChangedEventFilter = TypedEventFilter<RewardChangedEvent>;

export interface BingoGameRoom extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BingoGameRoomInterface;

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
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<[number]>;

    RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<[number]>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<[number]>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<[number]>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    expectedLines(overrides?: CallOverrides): Promise<[number]>;

    fee(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { value: BigNumber; deno: BigNumber }>;

    gameCard(overrides?: CallOverrides): Promise<[string]>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, number] & {
        round: number;
        player: string;
        remain: number;
      }
    >;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[]
      ] & {
        startedAt: number;
        endedAt: number;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
      }
    >;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IBingoRoom.GameRoundStructOutput] & {
        last: IBingoRoom.GameRoundStructOutput;
      }
    >;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]] & { numbers: number[] }>;

    playedGames(
      user: PromiseOrValue<string>,
      skip: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IBingoRoom.RecentGameStructOutput[]] & {
        games: IBingoRoom.RecentGameStructOutput[];
      }
    >;

    recentGames(
      filter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IBingoRoom.RecentGameStructOutput[]] & {
        games: IBingoRoom.RecentGameStructOutput[];
      }
    >;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    summary(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalGameStarted: BigNumber;
        totalPlayersJoined: BigNumber;
        totalRewardDistributed: BigNumber;
      }
    >;
  };

  MAX_GAME_DURATION(overrides?: CallOverrides): Promise<number>;

  RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<number>;

  ROUND_DURATION(overrides?: CallOverrides): Promise<number>;

  ROUND_TIMEOUT(overrides?: CallOverrides): Promise<number>;

  bingo(
    gameId: PromiseOrValue<BigNumberish>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  expectedLines(overrides?: CallOverrides): Promise<number>;

  fee(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { value: BigNumber; deno: BigNumber }>;

  gameCard(overrides?: CallOverrides): Promise<string>;

  getCurrentRound(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, string, number] & { round: number; player: string; remain: number }
  >;

  getGameInfo(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      number,
      string,
      IBingoRoom.ParticipantStructOutput[],
      IBingoRoom.GameRoundStructOutput[]
    ] & {
      startedAt: number;
      endedAt: number;
      winner: string;
      players: IBingoRoom.ParticipantStructOutput[];
      rounds: IBingoRoom.GameRoundStructOutput[];
    }
  >;

  getLatestRound(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IBingoRoom.GameRoundStructOutput>;

  getSelectedNumbers(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  playedGames(
    user: PromiseOrValue<string>,
    skip: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IBingoRoom.RecentGameStructOutput[]>;

  recentGames(
    filter: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IBingoRoom.RecentGameStructOutput[]>;

  selectAndBingo(
    gameId: PromiseOrValue<BigNumberish>,
    number: PromiseOrValue<BigNumberish>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selectNumber(
    gameId: PromiseOrValue<BigNumberish>,
    number: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  summary(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalGameStarted: BigNumber;
      totalPlayersJoined: BigNumber;
      totalRewardDistributed: BigNumber;
    }
  >;

  callStatic: {
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<number>;

    RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<number>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<number>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<number>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    expectedLines(overrides?: CallOverrides): Promise<number>;

    fee(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { value: BigNumber; deno: BigNumber }>;

    gameCard(overrides?: CallOverrides): Promise<string>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, number] & {
        round: number;
        player: string;
        remain: number;
      }
    >;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[]
      ] & {
        startedAt: number;
        endedAt: number;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
      }
    >;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IBingoRoom.GameRoundStructOutput>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;

    playedGames(
      user: PromiseOrValue<string>,
      skip: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IBingoRoom.RecentGameStructOutput[]>;

    recentGames(
      filter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IBingoRoom.RecentGameStructOutput[]>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    summary(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalGameStarted: BigNumber;
        totalPlayersJoined: BigNumber;
        totalRewardDistributed: BigNumber;
      }
    >;
  };

  filters: {
    "Bingo(uint256,address,uint8[][])"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      playerCardNumbers?: null
    ): BingoEventFilter;
    Bingo(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      playerCardNumbers?: null
    ): BingoEventFilter;

    "GameParticipated(uint256,address,uint256,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      cardId?: PromiseOrValue<BigNumberish> | null,
      position?: null
    ): GameParticipatedEventFilter;
    GameParticipated(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      cardId?: PromiseOrValue<BigNumberish> | null,
      position?: null
    ): GameParticipatedEventFilter;

    "GameStarted(uint256,address)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      cardContract?: null
    ): GameStartedEventFilter;
    GameStarted(
      gameId?: PromiseOrValue<BigNumberish> | null,
      cardContract?: null
    ): GameStartedEventFilter;

    "NumberSelected(uint256,uint32,address,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      round?: null,
      player?: PromiseOrValue<string> | null,
      number?: null
    ): NumberSelectedEventFilter;
    NumberSelected(
      gameId?: PromiseOrValue<BigNumberish> | null,
      round?: null,
      player?: PromiseOrValue<string> | null,
      number?: null
    ): NumberSelectedEventFilter;

    "RewardChanged(address,address)"(
      newReward?: PromiseOrValue<string> | null,
      oldReward?: PromiseOrValue<string> | null
    ): RewardChangedEventFilter;
    RewardChanged(
      newReward?: PromiseOrValue<string> | null,
      oldReward?: PromiseOrValue<string> | null
    ): RewardChangedEventFilter;
  };

  estimateGas: {
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<BigNumber>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    expectedLines(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    gameCard(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    playedGames(
      user: PromiseOrValue<string>,
      skip: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recentGames(
      filter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    summary(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_GAME_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RECENT_GAME_COUNTS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROUND_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUND_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    expectedLines(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gameCard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    playedGames(
      user: PromiseOrValue<string>,
      skip: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recentGames(
      filter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    summary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
