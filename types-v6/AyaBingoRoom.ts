/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace IBingoRoom {
  export type ParticipantStruct = { user: AddressLike; cardId: BigNumberish };

  export type ParticipantStructOutput = [user: string, cardId: bigint] & {
    user: string;
    cardId: bigint;
  };

  export type GameRoundStruct = {
    round: BigNumberish;
    number: BigNumberish;
    timestamp: BigNumberish;
    player: AddressLike;
  };

  export type GameRoundStructOutput = [
    round: bigint,
    number: bigint,
    timestamp: bigint,
    player: string
  ] & { round: bigint; number: bigint; timestamp: bigint; player: string };

  export type RecentGameStruct = {
    gameId: BigNumberish;
    status: string;
    winner: AddressLike;
    cardNumbers: BigNumberish[][];
    selectedNumbers: BigNumberish[];
    players: IBingoRoom.ParticipantStruct[];
  };

  export type RecentGameStructOutput = [
    gameId: bigint,
    status: string,
    winner: string,
    cardNumbers: bigint[][],
    selectedNumbers: bigint[],
    players: IBingoRoom.ParticipantStructOutput[]
  ] & {
    gameId: bigint;
    status: string;
    winner: string;
    cardNumbers: bigint[][];
    selectedNumbers: bigint[];
    players: IBingoRoom.ParticipantStructOutput[];
  };
}

export interface AyaBingoRoomInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "RECENT_GAME_COUNTS"
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
      | "restoreGame"
      | "selectAndBingo"
      | "selectNumber"
      | "summary"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Bingo"
      | "GameHalted"
      | "GameParticipated"
      | "GameStarted"
      | "NumberSelected"
      | "RewardChanged"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "RECENT_GAME_COUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bingo",
    values: [BigNumberish, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLines",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "gameCard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestRound",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelectedNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "playedGames",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recentGames",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "restoreGame",
    values: [AddressLike, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectAndBingo",
    values: [BigNumberish, BigNumberish, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectNumber",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "summary", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "RECENT_GAME_COUNTS",
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
    functionFragment: "restoreGame",
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
}

export namespace BingoEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player: AddressLike,
    playerCardNumbers: BigNumberish[][]
  ];
  export type OutputTuple = [
    gameId: bigint,
    player: string,
    playerCardNumbers: bigint[][]
  ];
  export interface OutputObject {
    gameId: bigint;
    player: string;
    playerCardNumbers: bigint[][];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameHaltedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    user: AddressLike,
    isOvertime: boolean
  ];
  export type OutputTuple = [gameId: bigint, user: string, isOvertime: boolean];
  export interface OutputObject {
    gameId: bigint;
    user: string;
    isOvertime: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameParticipatedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player: AddressLike,
    cardId: BigNumberish,
    position: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    player: string,
    cardId: bigint,
    position: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    player: string;
    cardId: bigint;
    position: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameStartedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    cardContract: AddressLike,
    players: AddressLike[]
  ];
  export type OutputTuple = [
    gameId: bigint,
    cardContract: string,
    players: string[]
  ];
  export interface OutputObject {
    gameId: bigint;
    cardContract: string;
    players: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NumberSelectedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    round: BigNumberish,
    player: AddressLike,
    number: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    round: bigint,
    player: string,
    number: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    round: bigint;
    player: string;
    number: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardChangedEvent {
  export type InputTuple = [newReward: AddressLike, oldReward: AddressLike];
  export type OutputTuple = [newReward: string, oldReward: string];
  export interface OutputObject {
    newReward: string;
    oldReward: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AyaBingoRoom extends BaseContract {
  connect(runner?: ContractRunner | null): AyaBingoRoom;
  waitForDeployment(): Promise<this>;

  interface: AyaBingoRoomInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  RECENT_GAME_COUNTS: TypedContractMethod<[], [bigint], "view">;

  bingo: TypedContractMethod<
    [
      gameId: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  expectedLines: TypedContractMethod<[], [bigint], "view">;

  fee: TypedContractMethod<
    [],
    [[bigint, bigint] & { value: bigint; deno: bigint }],
    "view"
  >;

  gameCard: TypedContractMethod<[], [string], "view">;

  getCurrentRound: TypedContractMethod<
    [gameId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        round: bigint;
        player: string;
        remain: bigint;
        status: string;
      }
    ],
    "view"
  >;

  getGameInfo: TypedContractMethod<
    [gameId: BigNumberish],
    [
      [
        bigint,
        bigint,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        string
      ] & {
        startedAt: bigint;
        endedAt: bigint;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        status: string;
      }
    ],
    "view"
  >;

  getLatestRound: TypedContractMethod<
    [gameId: BigNumberish],
    [IBingoRoom.GameRoundStructOutput],
    "view"
  >;

  getSelectedNumbers: TypedContractMethod<
    [gameId: BigNumberish],
    [bigint[]],
    "view"
  >;

  playedGames: TypedContractMethod<
    [user: AddressLike, skip: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;

  recentGames: TypedContractMethod<
    [filter: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;

  restoreGame: TypedContractMethod<
    [
      player: AddressLike,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [
      [bigint, bigint, boolean] & {
        playingGameId: bigint;
        autoEndTime: bigint;
        isCardContentMatched: boolean;
      }
    ],
    "nonpayable"
  >;

  selectAndBingo: TypedContractMethod<
    [
      gameId: BigNumberish,
      number: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  selectNumber: TypedContractMethod<
    [gameId: BigNumberish, number: BigNumberish],
    [void],
    "nonpayable"
  >;

  summary: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        totalGameStarted: bigint;
        totalPlayersJoined: bigint;
        totalRewardDistributed: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "RECENT_GAME_COUNTS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bingo"
  ): TypedContractMethod<
    [
      gameId: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "expectedLines"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { value: bigint; deno: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "gameCard"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCurrentRound"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        round: bigint;
        player: string;
        remain: bigint;
        status: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getGameInfo"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [
      [
        bigint,
        bigint,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        string
      ] & {
        startedAt: bigint;
        endedAt: bigint;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        status: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLatestRound"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [IBingoRoom.GameRoundStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSelectedNumbers"
  ): TypedContractMethod<[gameId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "playedGames"
  ): TypedContractMethod<
    [user: AddressLike, skip: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "recentGames"
  ): TypedContractMethod<
    [filter: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "restoreGame"
  ): TypedContractMethod<
    [
      player: AddressLike,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [
      [bigint, bigint, boolean] & {
        playingGameId: bigint;
        autoEndTime: bigint;
        isCardContentMatched: boolean;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "selectAndBingo"
  ): TypedContractMethod<
    [
      gameId: BigNumberish,
      number: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedLabel: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "selectNumber"
  ): TypedContractMethod<
    [gameId: BigNumberish, number: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "summary"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        totalGameStarted: bigint;
        totalPlayersJoined: bigint;
        totalRewardDistributed: bigint;
      }
    ],
    "view"
  >;

  getEvent(
    key: "Bingo"
  ): TypedContractEvent<
    BingoEvent.InputTuple,
    BingoEvent.OutputTuple,
    BingoEvent.OutputObject
  >;
  getEvent(
    key: "GameHalted"
  ): TypedContractEvent<
    GameHaltedEvent.InputTuple,
    GameHaltedEvent.OutputTuple,
    GameHaltedEvent.OutputObject
  >;
  getEvent(
    key: "GameParticipated"
  ): TypedContractEvent<
    GameParticipatedEvent.InputTuple,
    GameParticipatedEvent.OutputTuple,
    GameParticipatedEvent.OutputObject
  >;
  getEvent(
    key: "GameStarted"
  ): TypedContractEvent<
    GameStartedEvent.InputTuple,
    GameStartedEvent.OutputTuple,
    GameStartedEvent.OutputObject
  >;
  getEvent(
    key: "NumberSelected"
  ): TypedContractEvent<
    NumberSelectedEvent.InputTuple,
    NumberSelectedEvent.OutputTuple,
    NumberSelectedEvent.OutputObject
  >;
  getEvent(
    key: "RewardChanged"
  ): TypedContractEvent<
    RewardChangedEvent.InputTuple,
    RewardChangedEvent.OutputTuple,
    RewardChangedEvent.OutputObject
  >;

  filters: {
    "Bingo(uint256,address,uint8[][])": TypedContractEvent<
      BingoEvent.InputTuple,
      BingoEvent.OutputTuple,
      BingoEvent.OutputObject
    >;
    Bingo: TypedContractEvent<
      BingoEvent.InputTuple,
      BingoEvent.OutputTuple,
      BingoEvent.OutputObject
    >;

    "GameHalted(uint256,address,bool)": TypedContractEvent<
      GameHaltedEvent.InputTuple,
      GameHaltedEvent.OutputTuple,
      GameHaltedEvent.OutputObject
    >;
    GameHalted: TypedContractEvent<
      GameHaltedEvent.InputTuple,
      GameHaltedEvent.OutputTuple,
      GameHaltedEvent.OutputObject
    >;

    "GameParticipated(uint256,address,uint256,uint8)": TypedContractEvent<
      GameParticipatedEvent.InputTuple,
      GameParticipatedEvent.OutputTuple,
      GameParticipatedEvent.OutputObject
    >;
    GameParticipated: TypedContractEvent<
      GameParticipatedEvent.InputTuple,
      GameParticipatedEvent.OutputTuple,
      GameParticipatedEvent.OutputObject
    >;

    "GameStarted(uint256,address,address[])": TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;
    GameStarted: TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;

    "NumberSelected(uint256,uint32,address,uint8)": TypedContractEvent<
      NumberSelectedEvent.InputTuple,
      NumberSelectedEvent.OutputTuple,
      NumberSelectedEvent.OutputObject
    >;
    NumberSelected: TypedContractEvent<
      NumberSelectedEvent.InputTuple,
      NumberSelectedEvent.OutputTuple,
      NumberSelectedEvent.OutputObject
    >;

    "RewardChanged(address,address)": TypedContractEvent<
      RewardChangedEvent.InputTuple,
      RewardChangedEvent.OutputTuple,
      RewardChangedEvent.OutputObject
    >;
    RewardChanged: TypedContractEvent<
      RewardChangedEvent.InputTuple,
      RewardChangedEvent.OutputTuple,
      RewardChangedEvent.OutputObject
    >;
  };
}
