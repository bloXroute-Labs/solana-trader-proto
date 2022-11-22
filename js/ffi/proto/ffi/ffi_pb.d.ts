// package: ffi
// file: ffi/ffi.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as api_pb from "../api_pb";

export class SolanaAccountsRequest extends jspb.Message { 
    clearAccountpksList(): void;
    getAccountpksList(): Array<string>;
    setAccountpksList(value: Array<string>): SolanaAccountsRequest;
    addAccountpks(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaAccountsRequest): SolanaAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaAccountsRequest;
    static deserializeBinaryFromReader(message: SolanaAccountsRequest, reader: jspb.BinaryReader): SolanaAccountsRequest;
}

export namespace SolanaAccountsRequest {
    export type AsObject = {
        accountpksList: Array<string>,
    }
}

export class SolanaAccountsResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<SolanaAccount>;
    setAccountsList(value: Array<SolanaAccount>): SolanaAccountsResponse;
    addAccounts(value?: SolanaAccount, index?: number): SolanaAccount;
    clearAccountpksList(): void;
    getAccountpksList(): Array<string>;
    setAccountpksList(value: Array<string>): SolanaAccountsResponse;
    addAccountpks(value: string, index?: number): string;
    getError(): string;
    setError(value: string): SolanaAccountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaAccountsResponse): SolanaAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaAccountsResponse;
    static deserializeBinaryFromReader(message: SolanaAccountsResponse, reader: jspb.BinaryReader): SolanaAccountsResponse;
}

export namespace SolanaAccountsResponse {
    export type AsObject = {
        accountsList: Array<SolanaAccount.AsObject>,
        accountpksList: Array<string>,
        error: string,
    }
}

export class SolanaAccount extends jspb.Message { 
    getLamports(): number;
    setLamports(value: number): SolanaAccount;
    getOwner(): Uint8Array | string;
    getOwner_asU8(): Uint8Array;
    getOwner_asB64(): string;
    setOwner(value: Uint8Array | string): SolanaAccount;
    getData(): string;
    setData(value: string): SolanaAccount;
    getExecutable(): boolean;
    setExecutable(value: boolean): SolanaAccount;
    getRentepoch(): number;
    setRentepoch(value: number): SolanaAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SolanaAccount.AsObject;
    static toObject(includeInstance: boolean, msg: SolanaAccount): SolanaAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SolanaAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SolanaAccount;
    static deserializeBinaryFromReader(message: SolanaAccount, reader: jspb.BinaryReader): SolanaAccount;
}

export namespace SolanaAccount {
    export type AsObject = {
        lamports: number,
        owner: Uint8Array | string,
        data: string,
        executable: boolean,
        rentepoch: number,
    }
}

export class JupiterPairToAccountsRequest extends jspb.Message { 
    getInputmint(): string;
    setInputmint(value: string): JupiterPairToAccountsRequest;
    getOutputmint(): string;
    setOutputmint(value: string): JupiterPairToAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterPairToAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterPairToAccountsRequest): JupiterPairToAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterPairToAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterPairToAccountsRequest;
    static deserializeBinaryFromReader(message: JupiterPairToAccountsRequest, reader: jspb.BinaryReader): JupiterPairToAccountsRequest;
}

export namespace JupiterPairToAccountsRequest {
    export type AsObject = {
        inputmint: string,
        outputmint: string,
    }
}

export class JupiterPairToAccountsResponse extends jspb.Message { 
    clearAccountpksList(): void;
    getAccountpksList(): Array<string>;
    setAccountpksList(value: Array<string>): JupiterPairToAccountsResponse;
    addAccountpks(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterPairToAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterPairToAccountsResponse): JupiterPairToAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterPairToAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterPairToAccountsResponse;
    static deserializeBinaryFromReader(message: JupiterPairToAccountsResponse, reader: jspb.BinaryReader): JupiterPairToAccountsResponse;
}

export namespace JupiterPairToAccountsResponse {
    export type AsObject = {
        accountpksList: Array<string>,
    }
}

export class JupiterIsReadyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterIsReadyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterIsReadyRequest): JupiterIsReadyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterIsReadyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterIsReadyRequest;
    static deserializeBinaryFromReader(message: JupiterIsReadyRequest, reader: jspb.BinaryReader): JupiterIsReadyRequest;
}

export namespace JupiterIsReadyRequest {
    export type AsObject = {
    }
}

export class JupiterIsReadyResponse extends jspb.Message { 
    getReady(): boolean;
    setReady(value: boolean): JupiterIsReadyResponse;
    clearAccountpksList(): void;
    getAccountpksList(): Array<string>;
    setAccountpksList(value: Array<string>): JupiterIsReadyResponse;
    addAccountpks(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterIsReadyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterIsReadyResponse): JupiterIsReadyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterIsReadyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterIsReadyResponse;
    static deserializeBinaryFromReader(message: JupiterIsReadyResponse, reader: jspb.BinaryReader): JupiterIsReadyResponse;
}

export namespace JupiterIsReadyResponse {
    export type AsObject = {
        ready: boolean,
        accountpksList: Array<string>,
    }
}

export class JupiterComputeRoutesRequest extends jspb.Message { 
    getInputmint(): string;
    setInputmint(value: string): JupiterComputeRoutesRequest;
    getOutputmint(): string;
    setOutputmint(value: string): JupiterComputeRoutesRequest;
    getAmount(): number;
    setAmount(value: number): JupiterComputeRoutesRequest;
    getSlippage(): number;
    setSlippage(value: number): JupiterComputeRoutesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterComputeRoutesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterComputeRoutesRequest): JupiterComputeRoutesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterComputeRoutesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterComputeRoutesRequest;
    static deserializeBinaryFromReader(message: JupiterComputeRoutesRequest, reader: jspb.BinaryReader): JupiterComputeRoutesRequest;
}

export namespace JupiterComputeRoutesRequest {
    export type AsObject = {
        inputmint: string,
        outputmint: string,
        amount: number,
        slippage: number,
    }
}

export class JupiterComputeRoutesResponse extends jspb.Message { 
    clearRouteinfosList(): void;
    getRouteinfosList(): Array<JupiterRouteInfo>;
    setRouteinfosList(value: Array<JupiterRouteInfo>): JupiterComputeRoutesResponse;
    addRouteinfos(value?: JupiterRouteInfo, index?: number): JupiterRouteInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterComputeRoutesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterComputeRoutesResponse): JupiterComputeRoutesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterComputeRoutesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterComputeRoutesResponse;
    static deserializeBinaryFromReader(message: JupiterComputeRoutesResponse, reader: jspb.BinaryReader): JupiterComputeRoutesResponse;
}

export namespace JupiterComputeRoutesResponse {
    export type AsObject = {
        routeinfosList: Array<JupiterRouteInfo.AsObject>,
    }
}

export class JupiterSwapTxRequest extends jspb.Message { 
    clearStepsList(): void;
    getStepsList(): Array<JupiterMarketInfo>;
    setStepsList(value: Array<JupiterMarketInfo>): JupiterSwapTxRequest;
    addSteps(value?: JupiterMarketInfo, index?: number): JupiterMarketInfo;
    getInamount(): number;
    setInamount(value: number): JupiterSwapTxRequest;
    getOutamount(): number;
    setOutamount(value: number): JupiterSwapTxRequest;
    getAmount(): number;
    setAmount(value: number): JupiterSwapTxRequest;
    getOtheramountthreshold(): number;
    setOtheramountthreshold(value: number): JupiterSwapTxRequest;
    getSwapmode(): JupiterSwapMode;
    setSwapmode(value: JupiterSwapMode): JupiterSwapTxRequest;

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): api_pb.PriceImpactPercent | undefined;
    setPriceimpactpercent(value?: api_pb.PriceImpactPercent): JupiterSwapTxRequest;
    getUserpublickey(): string;
    setUserpublickey(value: string): JupiterSwapTxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterSwapTxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterSwapTxRequest): JupiterSwapTxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterSwapTxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterSwapTxRequest;
    static deserializeBinaryFromReader(message: JupiterSwapTxRequest, reader: jspb.BinaryReader): JupiterSwapTxRequest;
}

export namespace JupiterSwapTxRequest {
    export type AsObject = {
        stepsList: Array<JupiterMarketInfo.AsObject>,
        inamount: number,
        outamount: number,
        amount: number,
        otheramountthreshold: number,
        swapmode: JupiterSwapMode,
        priceimpactpercent?: api_pb.PriceImpactPercent.AsObject,
        userpublickey: string,
    }
}

export class JupiterSwapTxResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): JupiterSwapTxResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterSwapTxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterSwapTxResponse): JupiterSwapTxResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterSwapTxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterSwapTxResponse;
    static deserializeBinaryFromReader(message: JupiterSwapTxResponse, reader: jspb.BinaryReader): JupiterSwapTxResponse;
}

export namespace JupiterSwapTxResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class TransactionMessage extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): TransactionMessage;
    getIscleanup(): boolean;
    setIscleanup(value: boolean): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMessage): TransactionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMessage;
    static deserializeBinaryFromReader(message: TransactionMessage, reader: jspb.BinaryReader): TransactionMessage;
}

export namespace TransactionMessage {
    export type AsObject = {
        content: Uint8Array | string,
        iscleanup: boolean,
    }
}

export class JupiterRouteInfo extends jspb.Message { 
    clearMarketinfosList(): void;
    getMarketinfosList(): Array<JupiterMarketInfo>;
    setMarketinfosList(value: Array<JupiterMarketInfo>): JupiterRouteInfo;
    addMarketinfos(value?: JupiterMarketInfo, index?: number): JupiterMarketInfo;
    getInamount(): number;
    setInamount(value: number): JupiterRouteInfo;
    getOutamount(): number;
    setOutamount(value: number): JupiterRouteInfo;
    getAmount(): number;
    setAmount(value: number): JupiterRouteInfo;
    getOtheramountthreshold(): number;
    setOtheramountthreshold(value: number): JupiterRouteInfo;
    getSwapmode(): JupiterSwapMode;
    setSwapmode(value: JupiterSwapMode): JupiterRouteInfo;

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): api_pb.PriceImpactPercent | undefined;
    setPriceimpactpercent(value?: api_pb.PriceImpactPercent): JupiterRouteInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterRouteInfo.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterRouteInfo): JupiterRouteInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterRouteInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterRouteInfo;
    static deserializeBinaryFromReader(message: JupiterRouteInfo, reader: jspb.BinaryReader): JupiterRouteInfo;
}

export namespace JupiterRouteInfo {
    export type AsObject = {
        marketinfosList: Array<JupiterMarketInfo.AsObject>,
        inamount: number,
        outamount: number,
        amount: number,
        otheramountthreshold: number,
        swapmode: JupiterSwapMode,
        priceimpactpercent?: api_pb.PriceImpactPercent.AsObject,
    }
}

export class JupiterMarketInfo extends jspb.Message { 

    hasAmm(): boolean;
    clearAmm(): void;
    getAmm(): JupiterAmm | undefined;
    setAmm(value?: JupiterAmm): JupiterMarketInfo;
    getInputmint(): string;
    setInputmint(value: string): JupiterMarketInfo;
    getOutputmint(): string;
    setOutputmint(value: string): JupiterMarketInfo;
    getInamount(): number;
    setInamount(value: number): JupiterMarketInfo;
    getOutamount(): number;
    setOutamount(value: number): JupiterMarketInfo;

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): api_pb.PriceImpactPercent | undefined;
    setPriceimpactpercent(value?: api_pb.PriceImpactPercent): JupiterMarketInfo;

    hasLiquiditypoolfee(): boolean;
    clearLiquiditypoolfee(): void;
    getLiquiditypoolfee(): api_pb.Fee | undefined;
    setLiquiditypoolfee(value?: api_pb.Fee): JupiterMarketInfo;

    hasPlatformfee(): boolean;
    clearPlatformfee(): void;
    getPlatformfee(): api_pb.Fee | undefined;
    setPlatformfee(value?: api_pb.Fee): JupiterMarketInfo;
    getNotenoughliquidity(): boolean;
    setNotenoughliquidity(value: boolean): JupiterMarketInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterMarketInfo.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterMarketInfo): JupiterMarketInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterMarketInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterMarketInfo;
    static deserializeBinaryFromReader(message: JupiterMarketInfo, reader: jspb.BinaryReader): JupiterMarketInfo;
}

export namespace JupiterMarketInfo {
    export type AsObject = {
        amm?: JupiterAmm.AsObject,
        inputmint: string,
        outputmint: string,
        inamount: number,
        outamount: number,
        priceimpactpercent?: api_pb.PriceImpactPercent.AsObject,
        liquiditypoolfee?: api_pb.Fee.AsObject,
        platformfee?: api_pb.Fee.AsObject,
        notenoughliquidity: boolean,
    }
}

export class JupiterAmm extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): JupiterAmm;
    getId(): string;
    setId(value: string): JupiterAmm;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterAmm.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterAmm): JupiterAmm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterAmm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterAmm;
    static deserializeBinaryFromReader(message: JupiterAmm, reader: jspb.BinaryReader): JupiterAmm;
}

export namespace JupiterAmm {
    export type AsObject = {
        label: string,
        id: string,
    }
}

export enum JupiterSwapMode {
    JSM_EXACT_IN = 0,
    JSM_EXACT_OUT = 1,
}
