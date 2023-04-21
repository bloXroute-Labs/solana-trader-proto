// package: common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PriceImpactPercent extends jspb.Message { 
    getPercent(): number;
    setPercent(value: number): PriceImpactPercent;
    getInfinity(): Infinity;
    setInfinity(value: Infinity): PriceImpactPercent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceImpactPercent.AsObject;
    static toObject(includeInstance: boolean, msg: PriceImpactPercent): PriceImpactPercent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceImpactPercent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceImpactPercent;
    static deserializeBinaryFromReader(message: PriceImpactPercent, reader: jspb.BinaryReader): PriceImpactPercent;
}

export namespace PriceImpactPercent {
    export type AsObject = {
        percent: number,
        infinity: Infinity,
    }
}

export class Fee extends jspb.Message { 
    getAmount(): number;
    setAmount(value: number): Fee;
    getMint(): string;
    setMint(value: string): Fee;
    getPercent(): number;
    setPercent(value: number): Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fee.AsObject;
    static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fee;
    static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
    export type AsObject = {
        amount: number,
        mint: string,
        percent: number,
    }
}

export enum OrderType {
    OT_MARKET = 0,
    OT_LIMIT = 1,
    OT_IOC = 2,
    OT_POST = 3,
}

export enum DriftOrderType {
    POT_UNKNOWN = 0,
    POT_MARKET = 1,
    POT_LIMIT = 2,
    POT_TRIGGER_MARKET = 3,
    POT_TRIGGER_LIMIT = 4,
}

export enum PositionSide {
    PS_UNKNOWN = 0,
    PS_LONG = 1,
    PS_SHORT = 2,
}

export enum PostOnlyParams {
    PO_NONE = 0,
    PO_MUST_POST_ONLY = 1,
    PO_TRY_POST_ONLY = 2,
}

export enum SpotContract {
    ALL_SPOTS = 0,
    SOL_SPOT = 1,
    USDC_SPOT = 2,
}

export enum PerpContract {
    ALL = 0,
    SOL_PERP = 1,
    ETH_PERP = 2,
    BTC_PERP = 3,
    APT_PERP = 4,
    BONK_PERP = 5,
    MATIC_PERP = 6,
    ARB_PERP = 7,
}

export enum PerpCollateralType {
    PCT_DEPOSIT = 0,
    PCT_WITHDRAWAL = 1,
    PCT_TRANSFER = 2,
}

export enum PerpCollateralToken {
    PCTK_USDC = 0,
    PCTK_SOL = 1,
}

export enum Infinity {
    INF_NOT = 0,
    INF_POSITIVE = 1,
    INF_NEGATIVE = 2,
}
