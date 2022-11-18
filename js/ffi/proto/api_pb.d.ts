// package: api
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as google_api_visibility_pb from "./google/api/visibility_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "./protoc-gen-openapiv2/options/annotations_pb";

export class GetMarketsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketsRequest): GetMarketsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketsRequest;
    static deserializeBinaryFromReader(message: GetMarketsRequest, reader: jspb.BinaryReader): GetMarketsRequest;
}

export namespace GetMarketsRequest {
    export type AsObject = {
    }
}

export class GetMarketsResponse extends jspb.Message { 

    getMarketsMap(): jspb.Map<string, Market>;
    clearMarketsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketsResponse): GetMarketsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketsResponse;
    static deserializeBinaryFromReader(message: GetMarketsResponse, reader: jspb.BinaryReader): GetMarketsResponse;
}

export namespace GetMarketsResponse {
    export type AsObject = {

        marketsMap: Array<[string, Market.AsObject]>,
    }
}

export class Market extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): Market;
    getStatus(): MarketStatus;
    setStatus(value: MarketStatus): Market;
    getAddress(): string;
    setAddress(value: string): Market;
    getBasemint(): string;
    setBasemint(value: string): Market;
    getQuotedmint(): string;
    setQuotedmint(value: string): Market;
    getBasedecimals(): number;
    setBasedecimals(value: number): Market;
    getQuotedecimals(): number;
    setQuotedecimals(value: number): Market;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        market: string,
        status: MarketStatus,
        address: string,
        basemint: string,
        quotedmint: string,
        basedecimals: number,
        quotedecimals: number,
    }
}

export class GetTickersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetTickersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersRequest): GetTickersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersRequest;
    static deserializeBinaryFromReader(message: GetTickersRequest, reader: jspb.BinaryReader): GetTickersRequest;
}

export namespace GetTickersRequest {
    export type AsObject = {
        market: string,
    }
}

export class GetTickersResponse extends jspb.Message { 
    clearTickersList(): void;
    getTickersList(): Array<Ticker>;
    setTickersList(value: Array<Ticker>): GetTickersResponse;
    addTickers(value?: Ticker, index?: number): Ticker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersResponse): GetTickersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersResponse;
    static deserializeBinaryFromReader(message: GetTickersResponse, reader: jspb.BinaryReader): GetTickersResponse;
}

export namespace GetTickersResponse {
    export type AsObject = {
        tickersList: Array<Ticker.AsObject>,
    }
}

export class Ticker extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): Ticker;
    getMarketaddress(): string;
    setMarketaddress(value: string): Ticker;
    getBid(): number;
    setBid(value: number): Ticker;
    getBidsize(): number;
    setBidsize(value: number): Ticker;
    getAsk(): number;
    setAsk(value: number): Ticker;
    getAsksize(): number;
    setAsksize(value: number): Ticker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ticker.AsObject;
    static toObject(includeInstance: boolean, msg: Ticker): Ticker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ticker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ticker;
    static deserializeBinaryFromReader(message: Ticker, reader: jspb.BinaryReader): Ticker;
}

export namespace Ticker {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bid: number,
        bidsize: number,
        ask: number,
        asksize: number,
    }
}

export class GetKlineRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetKlineRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetKlineRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetKlineRequest;
    getResolution(): string;
    setResolution(value: string): GetKlineRequest;
    getLimit(): number;
    setLimit(value: number): GetKlineRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetKlineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetKlineRequest): GetKlineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetKlineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetKlineRequest;
    static deserializeBinaryFromReader(message: GetKlineRequest, reader: jspb.BinaryReader): GetKlineRequest;
}

export namespace GetKlineRequest {
    export type AsObject = {
        market: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        resolution: string,
        limit: number,
    }
}

export class GetKlineResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetKlineResponse;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetKlineResponse;
    clearCandlesList(): void;
    getCandlesList(): Array<Candle>;
    setCandlesList(value: Array<Candle>): GetKlineResponse;
    addCandles(value?: Candle, index?: number): Candle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetKlineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetKlineResponse): GetKlineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetKlineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetKlineResponse;
    static deserializeBinaryFromReader(message: GetKlineResponse, reader: jspb.BinaryReader): GetKlineResponse;
}

export namespace GetKlineResponse {
    export type AsObject = {
        market: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        candlesList: Array<Candle.AsObject>,
    }
}

export class Candle extends jspb.Message { 

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;

    hasUpdatetime(): boolean;
    clearUpdatetime(): void;
    getUpdatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatetime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;
    getOpen(): number;
    setOpen(value: number): Candle;
    getClose(): number;
    setClose(value: number): Candle;
    getLow(): number;
    setLow(value: number): Candle;
    getHigh(): number;
    setHigh(value: number): Candle;
    getAmount(): number;
    setAmount(value: number): Candle;
    getVolume(): number;
    setVolume(value: number): Candle;
    getCount(): number;
    setCount(value: number): Candle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Candle.AsObject;
    static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Candle;
    static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
    export type AsObject = {
        starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        open: number,
        close: number,
        low: number,
        high: number,
        amount: number,
        volume: number,
        count: number,
    }
}

export class GetOrderbookRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderbookRequest;
    getLimit(): number;
    setLimit(value: number): GetOrderbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbookRequest): GetOrderbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbookRequest;
    static deserializeBinaryFromReader(message: GetOrderbookRequest, reader: jspb.BinaryReader): GetOrderbookRequest;
}

export namespace GetOrderbookRequest {
    export type AsObject = {
        market: string,
        limit: number,
    }
}

export class GetOrderbooksRequest extends jspb.Message { 
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetOrderbooksRequest;
    addMarkets(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetOrderbooksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbooksRequest): GetOrderbooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbooksRequest;
    static deserializeBinaryFromReader(message: GetOrderbooksRequest, reader: jspb.BinaryReader): GetOrderbooksRequest;
}

export namespace GetOrderbooksRequest {
    export type AsObject = {
        marketsList: Array<string>,
        limit: number,
    }
}

export class GetOrderbookResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderbookResponse;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetOrderbookResponse;
    clearBidsList(): void;
    getBidsList(): Array<OrderbookItem>;
    setBidsList(value: Array<OrderbookItem>): GetOrderbookResponse;
    addBids(value?: OrderbookItem, index?: number): OrderbookItem;
    clearAsksList(): void;
    getAsksList(): Array<OrderbookItem>;
    setAsksList(value: Array<OrderbookItem>): GetOrderbookResponse;
    addAsks(value?: OrderbookItem, index?: number): OrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbookResponse): GetOrderbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbookResponse;
    static deserializeBinaryFromReader(message: GetOrderbookResponse, reader: jspb.BinaryReader): GetOrderbookResponse;
}

export namespace GetOrderbookResponse {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<OrderbookItem.AsObject>,
        asksList: Array<OrderbookItem.AsObject>,
    }
}

export class OrderbookItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): OrderbookItem;
    getSize(): number;
    setSize(value: number): OrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderbookItem.AsObject;
    static toObject(includeInstance: boolean, msg: OrderbookItem): OrderbookItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderbookItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderbookItem;
    static deserializeBinaryFromReader(message: OrderbookItem, reader: jspb.BinaryReader): OrderbookItem;
}

export namespace OrderbookItem {
    export type AsObject = {
        price: number,
        size: number,
    }
}

export class GetTradesRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetTradesRequest;
    getLimit(): number;
    setLimit(value: number): GetTradesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesRequest): GetTradesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesRequest;
    static deserializeBinaryFromReader(message: GetTradesRequest, reader: jspb.BinaryReader): GetTradesRequest;
}

export namespace GetTradesRequest {
    export type AsObject = {
        market: string,
        limit: number,
    }
}

export class GetTradesResponse extends jspb.Message { 
    clearTradesList(): void;
    getTradesList(): Array<Trade>;
    setTradesList(value: Array<Trade>): GetTradesResponse;
    addTrades(value?: Trade, index?: number): Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesResponse): GetTradesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesResponse;
    static deserializeBinaryFromReader(message: GetTradesResponse, reader: jspb.BinaryReader): GetTradesResponse;
}

export namespace GetTradesResponse {
    export type AsObject = {
        tradesList: Array<Trade.AsObject>,
    }
}

export class Trade extends jspb.Message { 
    getSide(): Side;
    setSide(value: Side): Trade;
    getSize(): number;
    setSize(value: number): Trade;
    getPrice(): number;
    setPrice(value: number): Trade;
    getOrderid(): string;
    setOrderid(value: string): Trade;
    getIsmaker(): boolean;
    setIsmaker(value: boolean): Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trade.AsObject;
    static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trade;
    static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
    export type AsObject = {
        side: Side,
        size: number,
        price: number,
        orderid: string,
        ismaker: boolean,
    }
}

export class GetServerTimeRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerTimeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerTimeRequest): GetServerTimeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerTimeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerTimeRequest;
    static deserializeBinaryFromReader(message: GetServerTimeRequest, reader: jspb.BinaryReader): GetServerTimeRequest;
}

export namespace GetServerTimeRequest {
    export type AsObject = {
    }
}

export class GetServerTimeResponse extends jspb.Message { 
    getTimestamp(): string;
    setTimestamp(value: string): GetServerTimeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerTimeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerTimeResponse): GetServerTimeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerTimeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerTimeResponse;
    static deserializeBinaryFromReader(message: GetServerTimeResponse, reader: jspb.BinaryReader): GetServerTimeResponse;
}

export namespace GetServerTimeResponse {
    export type AsObject = {
        timestamp: string,
    }
}

export class GetAccountBalanceRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetAccountBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountBalanceRequest): GetAccountBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountBalanceRequest;
    static deserializeBinaryFromReader(message: GetAccountBalanceRequest, reader: jspb.BinaryReader): GetAccountBalanceRequest;
}

export namespace GetAccountBalanceRequest {
    export type AsObject = {
        owneraddress: string,
    }
}

export class GetAccountBalanceResponse extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<TokenBalance>;
    setTokensList(value: Array<TokenBalance>): GetAccountBalanceResponse;
    addTokens(value?: TokenBalance, index?: number): TokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountBalanceResponse): GetAccountBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountBalanceResponse;
    static deserializeBinaryFromReader(message: GetAccountBalanceResponse, reader: jspb.BinaryReader): GetAccountBalanceResponse;
}

export namespace GetAccountBalanceResponse {
    export type AsObject = {
        tokensList: Array<TokenBalance.AsObject>,
    }
}

export class TokenBalance extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): TokenBalance;
    getAddress(): string;
    setAddress(value: string): TokenBalance;
    getWalletamount(): number;
    setWalletamount(value: number): TokenBalance;
    getUnsettledamount(): number;
    setUnsettledamount(value: number): TokenBalance;
    getOpenordersamount(): number;
    setOpenordersamount(value: number): TokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenBalance.AsObject;
    static toObject(includeInstance: boolean, msg: TokenBalance): TokenBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenBalance;
    static deserializeBinaryFromReader(message: TokenBalance, reader: jspb.BinaryReader): TokenBalance;
}

export namespace TokenBalance {
    export type AsObject = {
        symbol: string,
        address: string,
        walletamount: number,
        unsettledamount: number,
        openordersamount: number,
    }
}

export class PostOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostOrderRequest;
    getPayeraddress(): string;
    setPayeraddress(value: string): PostOrderRequest;
    getMarket(): string;
    setMarket(value: string): PostOrderRequest;
    getSide(): Side;
    setSide(value: Side): PostOrderRequest;
    clearTypeList(): void;
    getTypeList(): Array<OrderType>;
    setTypeList(value: Array<OrderType>): PostOrderRequest;
    addType(value: OrderType, index?: number): OrderType;
    getAmount(): number;
    setAmount(value: number): PostOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderRequest): PostOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderRequest;
    static deserializeBinaryFromReader(message: PostOrderRequest, reader: jspb.BinaryReader): PostOrderRequest;
}

export namespace PostOrderRequest {
    export type AsObject = {
        owneraddress: string,
        payeraddress: string,
        market: string,
        side: Side,
        typeList: Array<OrderType>,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
    }
}

export class PostReplaceOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostReplaceOrderRequest;
    getPayeraddress(): string;
    setPayeraddress(value: string): PostReplaceOrderRequest;
    getMarket(): string;
    setMarket(value: string): PostReplaceOrderRequest;
    getSide(): Side;
    setSide(value: Side): PostReplaceOrderRequest;
    clearTypeList(): void;
    getTypeList(): Array<OrderType>;
    setTypeList(value: Array<OrderType>): PostReplaceOrderRequest;
    addType(value: OrderType, index?: number): OrderType;
    getAmount(): number;
    setAmount(value: number): PostReplaceOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostReplaceOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostReplaceOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostReplaceOrderRequest;
    getOrderid(): string;
    setOrderid(value: string): PostReplaceOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostReplaceOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostReplaceOrderRequest): PostReplaceOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostReplaceOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostReplaceOrderRequest;
    static deserializeBinaryFromReader(message: PostReplaceOrderRequest, reader: jspb.BinaryReader): PostReplaceOrderRequest;
}

export namespace PostReplaceOrderRequest {
    export type AsObject = {
        owneraddress: string,
        payeraddress: string,
        market: string,
        side: Side,
        typeList: Array<OrderType>,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        orderid: string,
    }
}

export class PostOrderResponse extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): PostOrderResponse;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderResponse): PostOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderResponse;
    static deserializeBinaryFromReader(message: PostOrderResponse, reader: jspb.BinaryReader): PostOrderResponse;
}

export namespace PostOrderResponse {
    export type AsObject = {
        transaction: string,
        openordersaddress: string,
    }
}

export class PostCancelOrderRequest extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): PostCancelOrderRequest;
    getSide(): Side;
    setSide(value: Side): PostCancelOrderRequest;
    getMarketaddress(): string;
    setMarketaddress(value: string): PostCancelOrderRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostCancelOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelOrderRequest): PostCancelOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelOrderRequest;
    static deserializeBinaryFromReader(message: PostCancelOrderRequest, reader: jspb.BinaryReader): PostCancelOrderRequest;
}

export namespace PostCancelOrderRequest {
    export type AsObject = {
        orderid: string,
        side: Side,
        marketaddress: string,
        owneraddress: string,
        openordersaddress: string,
    }
}

export class PostCancelByClientOrderIDRequest extends jspb.Message { 
    getClientorderid(): number;
    setClientorderid(value: number): PostCancelByClientOrderIDRequest;
    getMarketaddress(): string;
    setMarketaddress(value: string): PostCancelByClientOrderIDRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelByClientOrderIDRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostCancelByClientOrderIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelByClientOrderIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelByClientOrderIDRequest): PostCancelByClientOrderIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelByClientOrderIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelByClientOrderIDRequest;
    static deserializeBinaryFromReader(message: PostCancelByClientOrderIDRequest, reader: jspb.BinaryReader): PostCancelByClientOrderIDRequest;
}

export namespace PostCancelByClientOrderIDRequest {
    export type AsObject = {
        clientorderid: number,
        marketaddress: string,
        owneraddress: string,
        openordersaddress: string,
    }
}

export class PostCancelOrderResponse extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): PostCancelOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelOrderResponse): PostCancelOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelOrderResponse;
    static deserializeBinaryFromReader(message: PostCancelOrderResponse, reader: jspb.BinaryReader): PostCancelOrderResponse;
}

export namespace PostCancelOrderResponse {
    export type AsObject = {
        transaction: string,
    }
}

export class PostCancelAllRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): PostCancelAllRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelAllRequest;
    clearOpenordersaddressesList(): void;
    getOpenordersaddressesList(): Array<string>;
    setOpenordersaddressesList(value: Array<string>): PostCancelAllRequest;
    addOpenordersaddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelAllRequest): PostCancelAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelAllRequest;
    static deserializeBinaryFromReader(message: PostCancelAllRequest, reader: jspb.BinaryReader): PostCancelAllRequest;
}

export namespace PostCancelAllRequest {
    export type AsObject = {
        market: string,
        owneraddress: string,
        openordersaddressesList: Array<string>,
    }
}

export class PostCancelAllResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<string>;
    setTransactionsList(value: Array<string>): PostCancelAllResponse;
    addTransactions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelAllResponse): PostCancelAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelAllResponse;
    static deserializeBinaryFromReader(message: PostCancelAllResponse, reader: jspb.BinaryReader): PostCancelAllResponse;
}

export namespace PostCancelAllResponse {
    export type AsObject = {
        transactionsList: Array<string>,
    }
}

export class PostSettleRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostSettleRequest;
    getMarket(): string;
    setMarket(value: string): PostSettleRequest;
    getBasetokenwallet(): string;
    setBasetokenwallet(value: string): PostSettleRequest;
    getQuotetokenwallet(): string;
    setQuotetokenwallet(value: string): PostSettleRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostSettleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettleRequest): PostSettleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettleRequest;
    static deserializeBinaryFromReader(message: PostSettleRequest, reader: jspb.BinaryReader): PostSettleRequest;
}

export namespace PostSettleRequest {
    export type AsObject = {
        owneraddress: string,
        market: string,
        basetokenwallet: string,
        quotetokenwallet: string,
        openordersaddress: string,
    }
}

export class PostSettleResponse extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): PostSettleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettleResponse): PostSettleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettleResponse;
    static deserializeBinaryFromReader(message: PostSettleResponse, reader: jspb.BinaryReader): PostSettleResponse;
}

export namespace PostSettleResponse {
    export type AsObject = {
        transaction: string,
    }
}

export class Settlement extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): Settlement;
    getUnsettled(): number;
    setUnsettled(value: number): Settlement;
    getAmount(): number;
    setAmount(value: number): Settlement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Settlement.AsObject;
    static toObject(includeInstance: boolean, msg: Settlement): Settlement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Settlement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Settlement;
    static deserializeBinaryFromReader(message: Settlement, reader: jspb.BinaryReader): Settlement;
}

export namespace Settlement {
    export type AsObject = {
        symbol: string,
        unsettled: number,
        amount: number,
    }
}

export class GetOrdersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrdersRequest;
    getStatus(): OrderStatus;
    setStatus(value: OrderStatus): GetOrdersRequest;
    getSide(): Side;
    setSide(value: Side): GetOrdersRequest;
    clearTypesList(): void;
    getTypesList(): Array<OrderType>;
    setTypesList(value: Array<OrderType>): GetOrdersRequest;
    addTypes(value: OrderType, index?: number): OrderType;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetOrdersRequest;
    getLimit(): number;
    setLimit(value: number): GetOrdersRequest;
    getDirection(): Direction;
    setDirection(value: Direction): GetOrdersRequest;
    getAddress(): string;
    setAddress(value: string): GetOrdersRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): GetOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
    static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
    export type AsObject = {
        market: string,
        status: OrderStatus,
        side: Side,
        typesList: Array<OrderType>,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        limit: number,
        direction: Direction,
        address: string,
        openordersaddress: string,
    }
}

export class GetOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): GetOrdersResponse;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
    static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}

export class Order extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): Order;
    getMarket(): string;
    setMarket(value: string): Order;
    getSide(): Side;
    setSide(value: Side): Order;
    clearTypesList(): void;
    getTypesList(): Array<OrderType>;
    setTypesList(value: Array<OrderType>): Order;
    addTypes(value: OrderType, index?: number): OrderType;
    getPrice(): number;
    setPrice(value: number): Order;
    getRemainingsize(): number;
    setRemainingsize(value: number): Order;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Order;
    getClientorderid(): string;
    setClientorderid(value: string): Order;
    getOpenorderaccount(): string;
    setOpenorderaccount(value: string): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        orderid: string,
        market: string,
        side: Side,
        typesList: Array<OrderType>,
        price: number,
        remainingsize: number,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clientorderid: string,
        openorderaccount: string,
    }
}

export class GetOrderStatusStreamRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderStatusStreamRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetOrderStatusStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStatusStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStatusStreamRequest): GetOrderStatusStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStatusStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStatusStreamRequest;
    static deserializeBinaryFromReader(message: GetOrderStatusStreamRequest, reader: jspb.BinaryReader): GetOrderStatusStreamRequest;
}

export namespace GetOrderStatusStreamRequest {
    export type AsObject = {
        market: string,
        owneraddress: string,
    }
}

export class GetOrderStatusStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetOrderStatusStreamResponse;

    hasOrderinfo(): boolean;
    clearOrderinfo(): void;
    getOrderinfo(): GetOrderStatusResponse | undefined;
    setOrderinfo(value?: GetOrderStatusResponse): GetOrderStatusStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStatusStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStatusStreamResponse): GetOrderStatusStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStatusStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStatusStreamResponse;
    static deserializeBinaryFromReader(message: GetOrderStatusStreamResponse, reader: jspb.BinaryReader): GetOrderStatusStreamResponse;
}

export namespace GetOrderStatusStreamResponse {
    export type AsObject = {
        slot: number,
        orderinfo?: GetOrderStatusResponse.AsObject,
    }
}

export class GetOrderStatusResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderStatusResponse;
    getOpenorderaddress(): string;
    setOpenorderaddress(value: string): GetOrderStatusResponse;
    getOrderid(): string;
    setOrderid(value: string): GetOrderStatusResponse;
    getClientorderid(): number;
    setClientorderid(value: number): GetOrderStatusResponse;
    getQuantityreleased(): number;
    setQuantityreleased(value: number): GetOrderStatusResponse;
    getQuantityremaining(): number;
    setQuantityremaining(value: number): GetOrderStatusResponse;
    getPrice(): number;
    setPrice(value: number): GetOrderStatusResponse;
    getSide(): Side;
    setSide(value: Side): GetOrderStatusResponse;
    getOrderstatus(): OrderStatus;
    setOrderstatus(value: OrderStatus): GetOrderStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStatusResponse): GetOrderStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStatusResponse;
    static deserializeBinaryFromReader(message: GetOrderStatusResponse, reader: jspb.BinaryReader): GetOrderStatusResponse;
}

export namespace GetOrderStatusResponse {
    export type AsObject = {
        market: string,
        openorderaddress: string,
        orderid: string,
        clientorderid: number,
        quantityreleased: number,
        quantityremaining: number,
        price: number,
        side: Side,
        orderstatus: OrderStatus,
    }
}

export class PostSubmitRequest extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): PostSubmitRequest;
    getSkippreflight(): boolean;
    setSkippreflight(value: boolean): PostSubmitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitRequest): PostSubmitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitRequest;
    static deserializeBinaryFromReader(message: PostSubmitRequest, reader: jspb.BinaryReader): PostSubmitRequest;
}

export namespace PostSubmitRequest {
    export type AsObject = {
        transaction: string,
        skippreflight: boolean,
    }
}

export class PostSubmitResponse extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): PostSubmitResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitResponse): PostSubmitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitResponse;
    static deserializeBinaryFromReader(message: PostSubmitResponse, reader: jspb.BinaryReader): PostSubmitResponse;
}

export namespace PostSubmitResponse {
    export type AsObject = {
        signature: string,
    }
}

export class GetOpenOrdersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOpenOrdersRequest;
    getLimit(): number;
    setLimit(value: number): GetOpenOrdersRequest;
    getAddress(): string;
    setAddress(value: string): GetOpenOrdersRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): GetOpenOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenOrdersRequest): GetOpenOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenOrdersRequest;
    static deserializeBinaryFromReader(message: GetOpenOrdersRequest, reader: jspb.BinaryReader): GetOpenOrdersRequest;
}

export namespace GetOpenOrdersRequest {
    export type AsObject = {
        market: string,
        limit: number,
        address: string,
        openordersaddress: string,
    }
}

export class GetOpenOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): GetOpenOrdersResponse;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenOrdersResponse): GetOpenOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenOrdersResponse;
    static deserializeBinaryFromReader(message: GetOpenOrdersResponse, reader: jspb.BinaryReader): GetOpenOrdersResponse;
}

export namespace GetOpenOrdersResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}

export class GetOrderByIDRequest extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): GetOrderByIDRequest;
    getMarket(): string;
    setMarket(value: string): GetOrderByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderByIDRequest): GetOrderByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderByIDRequest;
    static deserializeBinaryFromReader(message: GetOrderByIDRequest, reader: jspb.BinaryReader): GetOrderByIDRequest;
}

export namespace GetOrderByIDRequest {
    export type AsObject = {
        orderid: string,
        market: string,
    }
}

export class GetOrderByIDResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): GetOrderByIDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderByIDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderByIDResponse): GetOrderByIDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderByIDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderByIDResponse;
    static deserializeBinaryFromReader(message: GetOrderByIDResponse, reader: jspb.BinaryReader): GetOrderByIDResponse;
}

export namespace GetOrderByIDResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class GetUnsettledRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetUnsettledRequest;
    getOwner(): string;
    setOwner(value: string): GetUnsettledRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnsettledRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnsettledRequest): GetUnsettledRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnsettledRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnsettledRequest;
    static deserializeBinaryFromReader(message: GetUnsettledRequest, reader: jspb.BinaryReader): GetUnsettledRequest;
}

export namespace GetUnsettledRequest {
    export type AsObject = {
        market: string,
        owner: string,
    }
}

export class UnsettledAccountToken extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): UnsettledAccountToken;
    getAmount(): number;
    setAmount(value: number): UnsettledAccountToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsettledAccountToken.AsObject;
    static toObject(includeInstance: boolean, msg: UnsettledAccountToken): UnsettledAccountToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsettledAccountToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsettledAccountToken;
    static deserializeBinaryFromReader(message: UnsettledAccountToken, reader: jspb.BinaryReader): UnsettledAccountToken;
}

export namespace UnsettledAccountToken {
    export type AsObject = {
        address: string,
        amount: number,
    }
}

export class UnsettledAccount extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): UnsettledAccount;

    hasBasetoken(): boolean;
    clearBasetoken(): void;
    getBasetoken(): UnsettledAccountToken | undefined;
    setBasetoken(value?: UnsettledAccountToken): UnsettledAccount;

    hasQuotetoken(): boolean;
    clearQuotetoken(): void;
    getQuotetoken(): UnsettledAccountToken | undefined;
    setQuotetoken(value?: UnsettledAccountToken): UnsettledAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsettledAccount.AsObject;
    static toObject(includeInstance: boolean, msg: UnsettledAccount): UnsettledAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsettledAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsettledAccount;
    static deserializeBinaryFromReader(message: UnsettledAccount, reader: jspb.BinaryReader): UnsettledAccount;
}

export namespace UnsettledAccount {
    export type AsObject = {
        account: string,
        basetoken?: UnsettledAccountToken.AsObject,
        quotetoken?: UnsettledAccountToken.AsObject,
    }
}

export class GetUnsettledResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetUnsettledResponse;
    clearUnsettledList(): void;
    getUnsettledList(): Array<UnsettledAccount>;
    setUnsettledList(value: Array<UnsettledAccount>): GetUnsettledResponse;
    addUnsettled(value?: UnsettledAccount, index?: number): UnsettledAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnsettledResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnsettledResponse): GetUnsettledResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnsettledResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnsettledResponse;
    static deserializeBinaryFromReader(message: GetUnsettledResponse, reader: jspb.BinaryReader): GetUnsettledResponse;
}

export namespace GetUnsettledResponse {
    export type AsObject = {
        market: string,
        unsettledList: Array<UnsettledAccount.AsObject>,
    }
}

export class GetOrderbooksStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetOrderbooksStreamResponse;

    hasOrderbook(): boolean;
    clearOrderbook(): void;
    getOrderbook(): GetOrderbookResponse | undefined;
    setOrderbook(value?: GetOrderbookResponse): GetOrderbooksStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbooksStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbooksStreamResponse): GetOrderbooksStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbooksStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbooksStreamResponse;
    static deserializeBinaryFromReader(message: GetOrderbooksStreamResponse, reader: jspb.BinaryReader): GetOrderbooksStreamResponse;
}

export namespace GetOrderbooksStreamResponse {
    export type AsObject = {
        slot: number,
        orderbook?: GetOrderbookResponse.AsObject,
    }
}

export class GetTickersStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetTickersStreamResponse;

    hasTicker(): boolean;
    clearTicker(): void;
    getTicker(): GetTickersResponse | undefined;
    setTicker(value?: GetTickersResponse): GetTickersStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersStreamResponse): GetTickersStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersStreamResponse;
    static deserializeBinaryFromReader(message: GetTickersStreamResponse, reader: jspb.BinaryReader): GetTickersStreamResponse;
}

export namespace GetTickersStreamResponse {
    export type AsObject = {
        slot: number,
        ticker?: GetTickersResponse.AsObject,
    }
}

export class GetMarketDepthRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthRequest;
    getDepth(): number;
    setDepth(value: number): GetMarketDepthRequest;
    getStep(): Step;
    setStep(value: Step): GetMarketDepthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthRequest): GetMarketDepthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthRequest;
    static deserializeBinaryFromReader(message: GetMarketDepthRequest, reader: jspb.BinaryReader): GetMarketDepthRequest;
}

export namespace GetMarketDepthRequest {
    export type AsObject = {
        market: string,
        depth: number,
        step: Step,
    }
}

export class GetMarketDepthStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetMarketDepthStreamResponse;

    hasTick(): boolean;
    clearTick(): void;
    getTick(): MarketDepthTick | undefined;
    setTick(value?: MarketDepthTick): GetMarketDepthStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthStreamResponse): GetMarketDepthStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthStreamResponse;
    static deserializeBinaryFromReader(message: GetMarketDepthStreamResponse, reader: jspb.BinaryReader): GetMarketDepthStreamResponse;
}

export namespace GetMarketDepthStreamResponse {
    export type AsObject = {
        slot: number,
        tick?: MarketDepthTick.AsObject,
    }
}

export class MarketDepthTick extends jspb.Message { 
    getPrevslot(): number;
    setPrevslot(value: number): MarketDepthTick;
    clearAsksList(): void;
    getAsksList(): Array<OrderbookItem>;
    setAsksList(value: Array<OrderbookItem>): MarketDepthTick;
    addAsks(value?: OrderbookItem, index?: number): OrderbookItem;
    clearBidsList(): void;
    getBidsList(): Array<OrderbookItem>;
    setBidsList(value: Array<OrderbookItem>): MarketDepthTick;
    addBids(value?: OrderbookItem, index?: number): OrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthTick.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthTick): MarketDepthTick.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthTick, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthTick;
    static deserializeBinaryFromReader(message: MarketDepthTick, reader: jspb.BinaryReader): MarketDepthTick;
}

export namespace MarketDepthTick {
    export type AsObject = {
        prevslot: number,
        asksList: Array<OrderbookItem.AsObject>,
        bidsList: Array<OrderbookItem.AsObject>,
    }
}

export class GetTradesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetTradesStreamResponse;

    hasTrades(): boolean;
    clearTrades(): void;
    getTrades(): GetTradesResponse | undefined;
    setTrades(value?: GetTradesResponse): GetTradesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesStreamResponse): GetTradesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesStreamResponse;
    static deserializeBinaryFromReader(message: GetTradesStreamResponse, reader: jspb.BinaryReader): GetTradesStreamResponse;
}

export namespace GetTradesStreamResponse {
    export type AsObject = {
        slot: number,
        trades?: GetTradesResponse.AsObject,
    }
}

export class GetQuotesRequest extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetQuotesRequest;
    getOuttoken(): string;
    setOuttoken(value: string): GetQuotesRequest;
    getInamount(): number;
    setInamount(value: number): GetQuotesRequest;
    getSlippage(): number;
    setSlippage(value: number): GetQuotesRequest;
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetQuotesRequest;
    addProjects(value: Project, index?: number): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesRequest): GetQuotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesRequest;
    static deserializeBinaryFromReader(message: GetQuotesRequest, reader: jspb.BinaryReader): GetQuotesRequest;
}

export namespace GetQuotesRequest {
    export type AsObject = {
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
        projectsList: Array<Project>,
    }
}

export class GetQuotesResponse extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetQuotesResponse;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetQuotesResponse;
    getOuttoken(): string;
    setOuttoken(value: string): GetQuotesResponse;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetQuotesResponse;
    getInamount(): number;
    setInamount(value: number): GetQuotesResponse;
    clearQuotesList(): void;
    getQuotesList(): Array<ProjectQuote>;
    setQuotesList(value: Array<ProjectQuote>): GetQuotesResponse;
    addQuotes(value?: ProjectQuote, index?: number): ProjectQuote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesResponse): GetQuotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesResponse;
    static deserializeBinaryFromReader(message: GetQuotesResponse, reader: jspb.BinaryReader): GetQuotesResponse;
}

export namespace GetQuotesResponse {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        quotesList: Array<ProjectQuote.AsObject>,
    }
}

export class ProjectQuote extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): ProjectQuote;
    clearRoutesList(): void;
    getRoutesList(): Array<QuoteRoute>;
    setRoutesList(value: Array<QuoteRoute>): ProjectQuote;
    addRoutes(value?: QuoteRoute, index?: number): QuoteRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectQuote.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectQuote): ProjectQuote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectQuote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectQuote;
    static deserializeBinaryFromReader(message: ProjectQuote, reader: jspb.BinaryReader): ProjectQuote;
}

export namespace ProjectQuote {
    export type AsObject = {
        project: Project,
        routesList: Array<QuoteRoute.AsObject>,
    }
}

export class TradeSwapRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): TradeSwapRequest;
    getOwner(): string;
    setOwner(value: string): TradeSwapRequest;
    getIntoken(): string;
    setIntoken(value: string): TradeSwapRequest;
    getOuttoken(): string;
    setOuttoken(value: string): TradeSwapRequest;
    getInamount(): number;
    setInamount(value: number): TradeSwapRequest;
    getSlippage(): number;
    setSlippage(value: number): TradeSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradeSwapRequest): TradeSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeSwapRequest;
    static deserializeBinaryFromReader(message: TradeSwapRequest, reader: jspb.BinaryReader): TradeSwapRequest;
}

export namespace TradeSwapRequest {
    export type AsObject = {
        project: Project,
        owner: string,
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
    }
}

export class TradeSwapResponse extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): TradeSwapResponse;
    clearTransactionsList(): void;
    getTransactionsList(): Array<string>;
    setTransactionsList(value: Array<string>): TradeSwapResponse;
    addTransactions(value: string, index?: number): string;
    getOutamount(): number;
    setOutamount(value: number): TradeSwapResponse;
    getMinoutamount(): number;
    setMinoutamount(value: number): TradeSwapResponse;
    getPriceimpact(): number;
    setPriceimpact(value: number): TradeSwapResponse;
    getFee(): number;
    setFee(value: number): TradeSwapResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeSwapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradeSwapResponse): TradeSwapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeSwapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeSwapResponse;
    static deserializeBinaryFromReader(message: TradeSwapResponse, reader: jspb.BinaryReader): TradeSwapResponse;
}

export namespace TradeSwapResponse {
    export type AsObject = {
        project: Project,
        transactionsList: Array<string>,
        outamount: number,
        minoutamount: number,
        priceimpact: number,
        fee: number,
    }
}

export class QuoteRoute extends jspb.Message { 
    getInamount(): number;
    setInamount(value: number): QuoteRoute;
    getOutamount(): number;
    setOutamount(value: number): QuoteRoute;
    clearStepsList(): void;
    getStepsList(): Array<QuoteStep>;
    setStepsList(value: Array<QuoteStep>): QuoteRoute;
    addSteps(value?: QuoteStep, index?: number): QuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteRoute.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteRoute): QuoteRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteRoute;
    static deserializeBinaryFromReader(message: QuoteRoute, reader: jspb.BinaryReader): QuoteRoute;
}

export namespace QuoteRoute {
    export type AsObject = {
        inamount: number,
        outamount: number,
        stepsList: Array<QuoteStep.AsObject>,
    }
}

export class QuoteStep extends jspb.Message { 
    getExchange(): string;
    setExchange(value: string): QuoteStep;
    getIntoken(): string;
    setIntoken(value: string): QuoteStep;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): QuoteStep;
    getOuttoken(): string;
    setOuttoken(value: string): QuoteStep;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): QuoteStep;
    getInamount(): number;
    setInamount(value: number): QuoteStep;
    getOutamount(): number;
    setOutamount(value: number): QuoteStep;
    getSlippage(): number;
    setSlippage(value: number): QuoteStep;
    getPriceimpactpercent(): number;
    setPriceimpactpercent(value: number): QuoteStep;
    getFee(): number;
    setFee(value: number): QuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteStep.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteStep): QuoteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteStep;
    static deserializeBinaryFromReader(message: QuoteStep, reader: jspb.BinaryReader): QuoteStep;
}

export namespace QuoteStep {
    export type AsObject = {
        exchange: string,
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        slippage: number,
        priceimpactpercent: number,
        fee: number,
    }
}

export class GetRecentBlockHashRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecentBlockHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecentBlockHashRequest): GetRecentBlockHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecentBlockHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecentBlockHashRequest;
    static deserializeBinaryFromReader(message: GetRecentBlockHashRequest, reader: jspb.BinaryReader): GetRecentBlockHashRequest;
}

export namespace GetRecentBlockHashRequest {
    export type AsObject = {
    }
}

export class GetRecentBlockHashResponse extends jspb.Message { 
    getBlockhash(): string;
    setBlockhash(value: string): GetRecentBlockHashResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecentBlockHashResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecentBlockHashResponse): GetRecentBlockHashResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecentBlockHashResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecentBlockHashResponse;
    static deserializeBinaryFromReader(message: GetRecentBlockHashResponse, reader: jspb.BinaryReader): GetRecentBlockHashResponse;
}

export namespace GetRecentBlockHashResponse {
    export type AsObject = {
        blockhash: string,
    }
}

export class GetPoolsRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<string>;
    setProjectsList(value: Array<string>): GetPoolsRequest;
    addProjects(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolsRequest): GetPoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolsRequest;
    static deserializeBinaryFromReader(message: GetPoolsRequest, reader: jspb.BinaryReader): GetPoolsRequest;
}

export namespace GetPoolsRequest {
    export type AsObject = {
        projectsList: Array<string>,
    }
}

export class GetPoolsResponse extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<ProjectPools>;
    setProjectsList(value: Array<ProjectPools>): GetPoolsResponse;
    addProjects(value?: ProjectPools, index?: number): ProjectPools;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolsResponse): GetPoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolsResponse;
    static deserializeBinaryFromReader(message: GetPoolsResponse, reader: jspb.BinaryReader): GetPoolsResponse;
}

export namespace GetPoolsResponse {
    export type AsObject = {
        projectsList: Array<ProjectPools.AsObject>,
    }
}

export class ProjectPools extends jspb.Message { 
    getProject(): string;
    setProject(value: string): ProjectPools;
    clearPoolsList(): void;
    getPoolsList(): Array<ProjectPool>;
    setPoolsList(value: Array<ProjectPool>): ProjectPools;
    addPools(value?: ProjectPool, index?: number): ProjectPool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectPools.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectPools): ProjectPools.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectPools, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectPools;
    static deserializeBinaryFromReader(message: ProjectPools, reader: jspb.BinaryReader): ProjectPools;
}

export namespace ProjectPools {
    export type AsObject = {
        project: string,
        poolsList: Array<ProjectPool.AsObject>,
    }
}

export class ProjectPool extends jspb.Message { 
    getName(): string;
    setName(value: string): ProjectPool;
    getAddress(): string;
    setAddress(value: string): ProjectPool;
    getToken1mintaddress(): string;
    setToken1mintaddress(value: string): ProjectPool;
    getToken1mintsymbol(): string;
    setToken1mintsymbol(value: string): ProjectPool;
    getToken2mintaddress(): string;
    setToken2mintaddress(value: string): ProjectPool;
    getToken2mintsymbol(): string;
    setToken2mintsymbol(value: string): ProjectPool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectPool.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectPool): ProjectPool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectPool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectPool;
    static deserializeBinaryFromReader(message: ProjectPool, reader: jspb.BinaryReader): ProjectPool;
}

export namespace ProjectPool {
    export type AsObject = {
        name: string,
        address: string,
        token1mintaddress: string,
        token1mintsymbol: string,
        token2mintaddress: string,
        token2mintsymbol: string,
    }
}

export enum MarketStatus {
    MS_UNKNOWN = 0,
    MS_ONLINE = 1,
}

export enum Side {
    S_UNKNOWN = 0,
    S_BID = 1,
    S_ASK = 2,
}

export enum OrderType {
    OT_MARKET = 0,
    OT_LIMIT = 1,
    OT_IOC = 2,
    OT_POST = 3,
}

export enum OrderStatus {
    OS_UNKNOWN = 0,
    OS_OPEN = 1,
    OS_PARTIAL_FILL = 2,
    OS_CANCELLED = 3,
    OS_FILLED = 4,
}

export enum Direction {
    D_ASCENDING = 0,
    D_DESCENDING = 1,
}

export enum Step {
    STEP0 = 0,
    STEP1 = 1,
    STEP2 = 2,
    STEP3 = 3,
}

export enum Project {
    P_UNKNOWN = 0,
    P_JUPITER = 1,
    P_RAYDIUM = 2,
    P_ALL = 3,
}
