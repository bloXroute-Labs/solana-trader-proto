// package: api
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as google_api_visibility_pb from "./google/api/visibility_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "./protoc-gen-openapiv2/options/annotations_pb";
import * as common_pb from "./common_pb";

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
    getProject(): Project;
    setProject(value: Project): Market;

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
        project: Project,
    }
}

export class GetTickersRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetTickersRequest;
    getProject(): Project;
    setProject(value: Project): GetTickersRequest;

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
        project: Project,
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
    getProject(): Project;
    setProject(value: Project): Ticker;

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
        project: Project,
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
    getProject(): Project;
    setProject(value: Project): GetOrderbookRequest;

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
        project: Project,
    }
}

export class GetOrderbooksRequest extends jspb.Message { 
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetOrderbooksRequest;
    addMarkets(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetOrderbooksRequest;
    getProject(): Project;
    setProject(value: Project): GetOrderbooksRequest;

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
        project: Project,
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
    getOrderid(): string;
    setOrderid(value: string): OrderbookItem;
    getClientorderid(): number;
    setClientorderid(value: number): OrderbookItem;
    getOwneraddress(): string;
    setOwneraddress(value: string): OrderbookItem;

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
        orderid: string,
        clientorderid: number,
        owneraddress: string,
    }
}

export class GetMarketDepthRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthRequest;
    getLimit(): number;
    setLimit(value: number): GetMarketDepthRequest;
    getProject(): Project;
    setProject(value: Project): GetMarketDepthRequest;

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
        limit: number,
        project: Project,
    }
}

export class GetMarketDepthsRequest extends jspb.Message { 
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetMarketDepthsRequest;
    addMarkets(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetMarketDepthsRequest;
    getProject(): Project;
    setProject(value: Project): GetMarketDepthsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthsRequest): GetMarketDepthsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthsRequest;
    static deserializeBinaryFromReader(message: GetMarketDepthsRequest, reader: jspb.BinaryReader): GetMarketDepthsRequest;
}

export namespace GetMarketDepthsRequest {
    export type AsObject = {
        marketsList: Array<string>,
        limit: number,
        project: Project,
    }
}

export class GetMarketDepthResponse extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthResponse;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetMarketDepthResponse;
    clearBidsList(): void;
    getBidsList(): Array<MarketDepthItem>;
    setBidsList(value: Array<MarketDepthItem>): GetMarketDepthResponse;
    addBids(value?: MarketDepthItem, index?: number): MarketDepthItem;
    clearAsksList(): void;
    getAsksList(): Array<MarketDepthItem>;
    setAsksList(value: Array<MarketDepthItem>): GetMarketDepthResponse;
    addAsks(value?: MarketDepthItem, index?: number): MarketDepthItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthResponse): GetMarketDepthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthResponse;
    static deserializeBinaryFromReader(message: GetMarketDepthResponse, reader: jspb.BinaryReader): GetMarketDepthResponse;
}

export namespace GetMarketDepthResponse {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<MarketDepthItem.AsObject>,
        asksList: Array<MarketDepthItem.AsObject>,
    }
}

export class MarketDepthItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): MarketDepthItem;
    getSize(): number;
    setSize(value: number): MarketDepthItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthItem.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthItem): MarketDepthItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthItem;
    static deserializeBinaryFromReader(message: MarketDepthItem, reader: jspb.BinaryReader): MarketDepthItem;
}

export namespace MarketDepthItem {
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
    getProject(): Project;
    setProject(value: Project): GetTradesRequest;

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
        project: Project,
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
    getFillprice(): number;
    setFillprice(value: number): Trade;
    getOrderid(): string;
    setOrderid(value: string): Trade;
    getIsmaker(): boolean;
    setIsmaker(value: boolean): Trade;
    getAddress(): string;
    setAddress(value: string): Trade;
    getFeeorrebate(): number;
    setFeeorrebate(value: number): Trade;
    getOrderprice(): number;
    setOrderprice(value: number): Trade;

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
        fillprice: number,
        orderid: string,
        ismaker: boolean,
        address: string,
        feeorrebate: number,
        orderprice: number,
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
    getTokenmint(): string;
    setTokenmint(value: string): TokenBalance;
    getSettledamount(): number;
    setSettledamount(value: number): TokenBalance;
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
        tokenmint: string,
        settledamount: number,
        unsettledamount: number,
        openordersamount: number,
    }
}

export class GetTokenAccountsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetTokenAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenAccountsRequest): GetTokenAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenAccountsRequest;
    static deserializeBinaryFromReader(message: GetTokenAccountsRequest, reader: jspb.BinaryReader): GetTokenAccountsRequest;
}

export namespace GetTokenAccountsRequest {
    export type AsObject = {
        owneraddress: string,
    }
}

export class GetTokenAccountsResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<TokenAccount>;
    setAccountsList(value: Array<TokenAccount>): GetTokenAccountsResponse;
    addAccounts(value?: TokenAccount, index?: number): TokenAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenAccountsResponse): GetTokenAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenAccountsResponse;
    static deserializeBinaryFromReader(message: GetTokenAccountsResponse, reader: jspb.BinaryReader): GetTokenAccountsResponse;
}

export namespace GetTokenAccountsResponse {
    export type AsObject = {
        accountsList: Array<TokenAccount.AsObject>,
    }
}

export class TokenAccount extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): TokenAccount;
    getTokenmint(): string;
    setTokenmint(value: string): TokenAccount;
    getTokenaccount(): string;
    setTokenaccount(value: string): TokenAccount;
    getAmount(): number;
    setAmount(value: number): TokenAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenAccount.AsObject;
    static toObject(includeInstance: boolean, msg: TokenAccount): TokenAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenAccount;
    static deserializeBinaryFromReader(message: TokenAccount, reader: jspb.BinaryReader): TokenAccount;
}

export namespace TokenAccount {
    export type AsObject = {
        symbol: string,
        tokenmint: string,
        tokenaccount: string,
        amount: number,
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
    getTypeList(): Array<common_pb.OrderType>;
    setTypeList(value: Array<common_pb.OrderType>): PostOrderRequest;
    addType(value: common_pb.OrderType, index?: number): common_pb.OrderType;
    getAmount(): number;
    setAmount(value: number): PostOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostOrderRequest;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostOrderRequest;
    getComputelimit(): number;
    setComputelimit(value: number): PostOrderRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostOrderRequest;

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
        typeList: Array<common_pb.OrderType>,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        computelimit: number,
        computeprice: number,
        project: Project,
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
    getTypeList(): Array<common_pb.OrderType>;
    setTypeList(value: Array<common_pb.OrderType>): PostReplaceOrderRequest;
    addType(value: common_pb.OrderType, index?: number): common_pb.OrderType;
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
    getComputelimit(): number;
    setComputelimit(value: number): PostReplaceOrderRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostReplaceOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostReplaceOrderRequest;

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
        typeList: Array<common_pb.OrderType>,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        orderid: string,
        computelimit: number,
        computeprice: number,
        project: Project,
    }
}

export class PostOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostOrderResponse;
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
        transaction?: TransactionMessage.AsObject,
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
    getComputelimit(): number;
    setComputelimit(value: number): PostCancelOrderRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostCancelOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelOrderRequest;

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
        computelimit: number,
        computeprice: number,
        project: Project,
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
    getComputelimit(): number;
    setComputelimit(value: number): PostCancelByClientOrderIDRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostCancelByClientOrderIDRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelByClientOrderIDRequest;

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
        computelimit: number,
        computeprice: number,
        project: Project,
    }
}

export class PostCancelOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostCancelOrderResponse;

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
        transaction?: TransactionMessage.AsObject,
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
    getComputelimit(): number;
    setComputelimit(value: number): PostCancelAllRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostCancelAllRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelAllRequest;

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
        computelimit: number,
        computeprice: number,
        project: Project,
    }
}

export class TransactionMessage extends jspb.Message { 
    getContent(): string;
    setContent(value: string): TransactionMessage;
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
        content: string,
        iscleanup: boolean,
    }
}

export class PostCancelAllResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostCancelAllResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

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
        transactionsList: Array<TransactionMessage.AsObject>,
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
    getComputelimit(): number;
    setComputelimit(value: number): PostSettleRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostSettleRequest;
    getProject(): Project;
    setProject(value: Project): PostSettleRequest;

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
        computelimit: number,
        computeprice: number,
        project: Project,
    }
}

export class PostSettleResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSettleResponse;

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
        transaction?: TransactionMessage.AsObject,
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
    getTypesList(): Array<common_pb.OrderType>;
    setTypesList(value: Array<common_pb.OrderType>): GetOrdersRequest;
    addTypes(value: common_pb.OrderType, index?: number): common_pb.OrderType;

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
    getProject(): Project;
    setProject(value: Project): GetOrdersRequest;

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
        typesList: Array<common_pb.OrderType>,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        limit: number,
        direction: Direction,
        address: string,
        openordersaddress: string,
        project: Project,
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
    getTypesList(): Array<common_pb.OrderType>;
    setTypesList(value: Array<common_pb.OrderType>): Order;
    addTypes(value: common_pb.OrderType, index?: number): common_pb.OrderType;
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
        typesList: Array<common_pb.OrderType>,
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
    getProject(): Project;
    setProject(value: Project): GetOrderStatusStreamRequest;

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
        project: Project,
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
    getFillprice(): number;
    setFillprice(value: number): GetOrderStatusResponse;
    getSide(): Side;
    setSide(value: Side): GetOrderStatusResponse;
    getOrderstatus(): OrderStatus;
    setOrderstatus(value: OrderStatus): GetOrderStatusResponse;
    getOrderprice(): number;
    setOrderprice(value: number): GetOrderStatusResponse;

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
        fillprice: number,
        side: Side,
        orderstatus: OrderStatus,
        orderprice: number,
    }
}

export class PostSubmitRequest extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSubmitRequest;
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
        transaction?: TransactionMessage.AsObject,
        skippreflight: boolean,
    }
}

export class PostSubmitRequestEntry extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSubmitRequestEntry;
    getSkippreflight(): boolean;
    setSkippreflight(value: boolean): PostSubmitRequestEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitRequestEntry.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitRequestEntry): PostSubmitRequestEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitRequestEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitRequestEntry;
    static deserializeBinaryFromReader(message: PostSubmitRequestEntry, reader: jspb.BinaryReader): PostSubmitRequestEntry;
}

export namespace PostSubmitRequestEntry {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
        skippreflight: boolean,
    }
}

export class PostSubmitBatchRequest extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<PostSubmitRequestEntry>;
    setEntriesList(value: Array<PostSubmitRequestEntry>): PostSubmitBatchRequest;
    addEntries(value?: PostSubmitRequestEntry, index?: number): PostSubmitRequestEntry;
    getSubmitstrategy(): SubmitStrategy;
    setSubmitstrategy(value: SubmitStrategy): PostSubmitBatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitBatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitBatchRequest): PostSubmitBatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitBatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitBatchRequest;
    static deserializeBinaryFromReader(message: PostSubmitBatchRequest, reader: jspb.BinaryReader): PostSubmitBatchRequest;
}

export namespace PostSubmitBatchRequest {
    export type AsObject = {
        entriesList: Array<PostSubmitRequestEntry.AsObject>,
        submitstrategy: SubmitStrategy,
    }
}

export class PostSubmitBatchResponseEntry extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): PostSubmitBatchResponseEntry;
    getError(): string;
    setError(value: string): PostSubmitBatchResponseEntry;
    getSubmitted(): boolean;
    setSubmitted(value: boolean): PostSubmitBatchResponseEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitBatchResponseEntry.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitBatchResponseEntry): PostSubmitBatchResponseEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitBatchResponseEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitBatchResponseEntry;
    static deserializeBinaryFromReader(message: PostSubmitBatchResponseEntry, reader: jspb.BinaryReader): PostSubmitBatchResponseEntry;
}

export namespace PostSubmitBatchResponseEntry {
    export type AsObject = {
        signature: string,
        error: string,
        submitted: boolean,
    }
}

export class PostSubmitBatchResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<PostSubmitBatchResponseEntry>;
    setTransactionsList(value: Array<PostSubmitBatchResponseEntry>): PostSubmitBatchResponse;
    addTransactions(value?: PostSubmitBatchResponseEntry, index?: number): PostSubmitBatchResponseEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSubmitBatchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSubmitBatchResponse): PostSubmitBatchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSubmitBatchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSubmitBatchResponse;
    static deserializeBinaryFromReader(message: PostSubmitBatchResponse, reader: jspb.BinaryReader): PostSubmitBatchResponse;
}

export namespace PostSubmitBatchResponse {
    export type AsObject = {
        transactionsList: Array<PostSubmitBatchResponseEntry.AsObject>,
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
    getProject(): Project;
    setProject(value: Project): GetOpenOrdersRequest;

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
        project: Project,
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
    getProject(): Project;
    setProject(value: Project): GetOrderByIDRequest;

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
        project: Project,
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
    getOwneraddress(): string;
    setOwneraddress(value: string): GetUnsettledRequest;
    getProject(): Project;
    setProject(value: Project): GetUnsettledRequest;

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
        owneraddress: string,
        project: Project,
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

export class GetMarketDepthsStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetMarketDepthsStreamResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetMarketDepthResponse | undefined;
    setData(value?: GetMarketDepthResponse): GetMarketDepthsStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthsStreamResponse): GetMarketDepthsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthsStreamResponse;
    static deserializeBinaryFromReader(message: GetMarketDepthsStreamResponse, reader: jspb.BinaryReader): GetMarketDepthsStreamResponse;
}

export namespace GetMarketDepthsStreamResponse {
    export type AsObject = {
        slot: number,
        data?: GetMarketDepthResponse.AsObject,
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
    getLimit(): number;
    setLimit(value: number): GetQuotesRequest;
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
        limit: number,
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

export class GetRaydiumQuotesRequest extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetRaydiumQuotesRequest;
    getOuttoken(): string;
    setOuttoken(value: string): GetRaydiumQuotesRequest;
    getInamount(): number;
    setInamount(value: number): GetRaydiumQuotesRequest;
    getSlippage(): number;
    setSlippage(value: number): GetRaydiumQuotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRaydiumQuotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRaydiumQuotesRequest): GetRaydiumQuotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRaydiumQuotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRaydiumQuotesRequest;
    static deserializeBinaryFromReader(message: GetRaydiumQuotesRequest, reader: jspb.BinaryReader): GetRaydiumQuotesRequest;
}

export namespace GetRaydiumQuotesRequest {
    export type AsObject = {
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
    }
}

export class GetRaydiumQuotesResponse extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetRaydiumQuotesResponse;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetRaydiumQuotesResponse;
    getOuttoken(): string;
    setOuttoken(value: string): GetRaydiumQuotesResponse;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetRaydiumQuotesResponse;
    getInamount(): number;
    setInamount(value: number): GetRaydiumQuotesResponse;
    clearRoutesList(): void;
    getRoutesList(): Array<RaydiumQuoteRoute>;
    setRoutesList(value: Array<RaydiumQuoteRoute>): GetRaydiumQuotesResponse;
    addRoutes(value?: RaydiumQuoteRoute, index?: number): RaydiumQuoteRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRaydiumQuotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRaydiumQuotesResponse): GetRaydiumQuotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRaydiumQuotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRaydiumQuotesResponse;
    static deserializeBinaryFromReader(message: GetRaydiumQuotesResponse, reader: jspb.BinaryReader): GetRaydiumQuotesResponse;
}

export namespace GetRaydiumQuotesResponse {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        routesList: Array<RaydiumQuoteRoute.AsObject>,
    }
}

export class GetJupiterQuotesRequest extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetJupiterQuotesRequest;
    getOuttoken(): string;
    setOuttoken(value: string): GetJupiterQuotesRequest;
    getInamount(): number;
    setInamount(value: number): GetJupiterQuotesRequest;
    getSlippage(): number;
    setSlippage(value: number): GetJupiterQuotesRequest;
    getLimit(): number;
    setLimit(value: number): GetJupiterQuotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJupiterQuotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJupiterQuotesRequest): GetJupiterQuotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJupiterQuotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJupiterQuotesRequest;
    static deserializeBinaryFromReader(message: GetJupiterQuotesRequest, reader: jspb.BinaryReader): GetJupiterQuotesRequest;
}

export namespace GetJupiterQuotesRequest {
    export type AsObject = {
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
        limit: number,
    }
}

export class GetJupiterQuotesResponse extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetJupiterQuotesResponse;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetJupiterQuotesResponse;
    getOuttoken(): string;
    setOuttoken(value: string): GetJupiterQuotesResponse;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetJupiterQuotesResponse;
    getInamount(): number;
    setInamount(value: number): GetJupiterQuotesResponse;
    clearRoutesList(): void;
    getRoutesList(): Array<JupiterQuoteRoute>;
    setRoutesList(value: Array<JupiterQuoteRoute>): GetJupiterQuotesResponse;
    addRoutes(value?: JupiterQuoteRoute, index?: number): JupiterQuoteRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJupiterQuotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetJupiterQuotesResponse): GetJupiterQuotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJupiterQuotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJupiterQuotesResponse;
    static deserializeBinaryFromReader(message: GetJupiterQuotesResponse, reader: jspb.BinaryReader): GetJupiterQuotesResponse;
}

export namespace GetJupiterQuotesResponse {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        routesList: Array<JupiterQuoteRoute.AsObject>,
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
    getOwneraddress(): string;
    setOwneraddress(value: string): TradeSwapRequest;
    getIntoken(): string;
    setIntoken(value: string): TradeSwapRequest;
    getOuttoken(): string;
    setOuttoken(value: string): TradeSwapRequest;
    getInamount(): number;
    setInamount(value: number): TradeSwapRequest;
    getSlippage(): number;
    setSlippage(value: number): TradeSwapRequest;
    getComputelimit(): number;
    setComputelimit(value: number): TradeSwapRequest;
    getComputeprice(): number;
    setComputeprice(value: number): TradeSwapRequest;

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
        owneraddress: string,
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
        computelimit: number,
        computeprice: number,
    }
}

export class PostJupiterSwapRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostJupiterSwapRequest;
    getIntoken(): string;
    setIntoken(value: string): PostJupiterSwapRequest;
    getOuttoken(): string;
    setOuttoken(value: string): PostJupiterSwapRequest;
    getInamount(): number;
    setInamount(value: number): PostJupiterSwapRequest;
    getSlippage(): number;
    setSlippage(value: number): PostJupiterSwapRequest;
    getComputelimit(): number;
    setComputelimit(value: number): PostJupiterSwapRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostJupiterSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostJupiterSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostJupiterSwapRequest): PostJupiterSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostJupiterSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostJupiterSwapRequest;
    static deserializeBinaryFromReader(message: PostJupiterSwapRequest, reader: jspb.BinaryReader): PostJupiterSwapRequest;
}

export namespace PostJupiterSwapRequest {
    export type AsObject = {
        owneraddress: string,
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
        computelimit: number,
        computeprice: number,
    }
}

export class PostRaydiumSwapRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostRaydiumSwapRequest;
    getIntoken(): string;
    setIntoken(value: string): PostRaydiumSwapRequest;
    getOuttoken(): string;
    setOuttoken(value: string): PostRaydiumSwapRequest;
    getInamount(): number;
    setInamount(value: number): PostRaydiumSwapRequest;
    getSlippage(): number;
    setSlippage(value: number): PostRaydiumSwapRequest;
    getComputelimit(): number;
    setComputelimit(value: number): PostRaydiumSwapRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostRaydiumSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRaydiumSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostRaydiumSwapRequest): PostRaydiumSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRaydiumSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRaydiumSwapRequest;
    static deserializeBinaryFromReader(message: PostRaydiumSwapRequest, reader: jspb.BinaryReader): PostRaydiumSwapRequest;
}

export namespace PostRaydiumSwapRequest {
    export type AsObject = {
        owneraddress: string,
        intoken: string,
        outtoken: string,
        inamount: number,
        slippage: number,
        computelimit: number,
        computeprice: number,
    }
}

export class PostRaydiumSwapResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostRaydiumSwapResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;
    getOutamount(): number;
    setOutamount(value: number): PostRaydiumSwapResponse;
    getOutamountmin(): number;
    setOutamountmin(value: number): PostRaydiumSwapResponse;

    hasPriceimpact(): boolean;
    clearPriceimpact(): void;
    getPriceimpact(): common_pb.PriceImpactPercentV2 | undefined;
    setPriceimpact(value?: common_pb.PriceImpactPercentV2): PostRaydiumSwapResponse;
    clearFeesList(): void;
    getFeesList(): Array<common_pb.Fee>;
    setFeesList(value: Array<common_pb.Fee>): PostRaydiumSwapResponse;
    addFees(value?: common_pb.Fee, index?: number): common_pb.Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRaydiumSwapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostRaydiumSwapResponse): PostRaydiumSwapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRaydiumSwapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRaydiumSwapResponse;
    static deserializeBinaryFromReader(message: PostRaydiumSwapResponse, reader: jspb.BinaryReader): PostRaydiumSwapResponse;
}

export namespace PostRaydiumSwapResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
        outamount: number,
        outamountmin: number,
        priceimpact?: common_pb.PriceImpactPercentV2.AsObject,
        feesList: Array<common_pb.Fee.AsObject>,
    }
}

export class PostJupiterSwapResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostJupiterSwapResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;
    getOutamount(): number;
    setOutamount(value: number): PostJupiterSwapResponse;
    getOutamountmin(): number;
    setOutamountmin(value: number): PostJupiterSwapResponse;

    hasPriceimpact(): boolean;
    clearPriceimpact(): void;
    getPriceimpact(): common_pb.PriceImpactPercentV2 | undefined;
    setPriceimpact(value?: common_pb.PriceImpactPercentV2): PostJupiterSwapResponse;
    clearFeesList(): void;
    getFeesList(): Array<common_pb.Fee>;
    setFeesList(value: Array<common_pb.Fee>): PostJupiterSwapResponse;
    addFees(value?: common_pb.Fee, index?: number): common_pb.Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostJupiterSwapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostJupiterSwapResponse): PostJupiterSwapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostJupiterSwapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostJupiterSwapResponse;
    static deserializeBinaryFromReader(message: PostJupiterSwapResponse, reader: jspb.BinaryReader): PostJupiterSwapResponse;
}

export namespace PostJupiterSwapResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
        outamount: number,
        outamountmin: number,
        priceimpact?: common_pb.PriceImpactPercentV2.AsObject,
        feesList: Array<common_pb.Fee.AsObject>,
    }
}

export class PostRaydiumRouteSwapResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostRaydiumRouteSwapResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;
    getOutamount(): number;
    setOutamount(value: number): PostRaydiumRouteSwapResponse;
    getOutamountmin(): number;
    setOutamountmin(value: number): PostRaydiumRouteSwapResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRaydiumRouteSwapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostRaydiumRouteSwapResponse): PostRaydiumRouteSwapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRaydiumRouteSwapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRaydiumRouteSwapResponse;
    static deserializeBinaryFromReader(message: PostRaydiumRouteSwapResponse, reader: jspb.BinaryReader): PostRaydiumRouteSwapResponse;
}

export namespace PostRaydiumRouteSwapResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
        outamount: number,
        outamountmin: number,
    }
}

export class PostJupiterRouteSwapResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostJupiterRouteSwapResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;
    getOutamount(): number;
    setOutamount(value: number): PostJupiterRouteSwapResponse;
    getOutamountmin(): number;
    setOutamountmin(value: number): PostJupiterRouteSwapResponse;

    hasPriceimpact(): boolean;
    clearPriceimpact(): void;
    getPriceimpact(): common_pb.PriceImpactPercentV2 | undefined;
    setPriceimpact(value?: common_pb.PriceImpactPercentV2): PostJupiterRouteSwapResponse;
    clearFeesList(): void;
    getFeesList(): Array<common_pb.Fee>;
    setFeesList(value: Array<common_pb.Fee>): PostJupiterRouteSwapResponse;
    addFees(value?: common_pb.Fee, index?: number): common_pb.Fee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostJupiterRouteSwapResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostJupiterRouteSwapResponse): PostJupiterRouteSwapResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostJupiterRouteSwapResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostJupiterRouteSwapResponse;
    static deserializeBinaryFromReader(message: PostJupiterRouteSwapResponse, reader: jspb.BinaryReader): PostJupiterRouteSwapResponse;
}

export namespace PostJupiterRouteSwapResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
        outamount: number,
        outamountmin: number,
        priceimpact?: common_pb.PriceImpactPercentV2.AsObject,
        feesList: Array<common_pb.Fee.AsObject>,
    }
}

export class RouteTradeSwapRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): RouteTradeSwapRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): RouteTradeSwapRequest;
    clearStepsList(): void;
    getStepsList(): Array<RouteStep>;
    setStepsList(value: Array<RouteStep>): RouteTradeSwapRequest;
    addSteps(value?: RouteStep, index?: number): RouteStep;
    getSlippage(): number;
    setSlippage(value: number): RouteTradeSwapRequest;
    getComputelimit(): number;
    setComputelimit(value: number): RouteTradeSwapRequest;
    getComputeprice(): number;
    setComputeprice(value: number): RouteTradeSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteTradeSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RouteTradeSwapRequest): RouteTradeSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteTradeSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteTradeSwapRequest;
    static deserializeBinaryFromReader(message: RouteTradeSwapRequest, reader: jspb.BinaryReader): RouteTradeSwapRequest;
}

export namespace RouteTradeSwapRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        stepsList: Array<RouteStep.AsObject>,
        slippage: number,
        computelimit: number,
        computeprice: number,
    }
}

export class PostRaydiumRouteSwapRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostRaydiumRouteSwapRequest;
    clearStepsList(): void;
    getStepsList(): Array<RaydiumRouteStep>;
    setStepsList(value: Array<RaydiumRouteStep>): PostRaydiumRouteSwapRequest;
    addSteps(value?: RaydiumRouteStep, index?: number): RaydiumRouteStep;
    getSlippage(): number;
    setSlippage(value: number): PostRaydiumRouteSwapRequest;
    getComputelimit(): number;
    setComputelimit(value: number): PostRaydiumRouteSwapRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostRaydiumRouteSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRaydiumRouteSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostRaydiumRouteSwapRequest): PostRaydiumRouteSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRaydiumRouteSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRaydiumRouteSwapRequest;
    static deserializeBinaryFromReader(message: PostRaydiumRouteSwapRequest, reader: jspb.BinaryReader): PostRaydiumRouteSwapRequest;
}

export namespace PostRaydiumRouteSwapRequest {
    export type AsObject = {
        owneraddress: string,
        stepsList: Array<RaydiumRouteStep.AsObject>,
        slippage: number,
        computelimit: number,
        computeprice: number,
    }
}

export class RaydiumRouteStep extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): RaydiumRouteStep;
    getInamount(): number;
    setInamount(value: number): RaydiumRouteStep;
    getOuttoken(): string;
    setOuttoken(value: string): RaydiumRouteStep;
    getOutamount(): number;
    setOutamount(value: number): RaydiumRouteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): RaydiumRouteStep;
    getPooladdress(): string;
    setPooladdress(value: string): RaydiumRouteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaydiumRouteStep.AsObject;
    static toObject(includeInstance: boolean, msg: RaydiumRouteStep): RaydiumRouteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaydiumRouteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaydiumRouteStep;
    static deserializeBinaryFromReader(message: RaydiumRouteStep, reader: jspb.BinaryReader): RaydiumRouteStep;
}

export namespace RaydiumRouteStep {
    export type AsObject = {
        intoken: string,
        inamount: number,
        outtoken: string,
        outamount: number,
        outamountmin: number,
        pooladdress: string,
    }
}

export class PostJupiterRouteSwapRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostJupiterRouteSwapRequest;
    clearStepsList(): void;
    getStepsList(): Array<JupiterRouteStep>;
    setStepsList(value: Array<JupiterRouteStep>): PostJupiterRouteSwapRequest;
    addSteps(value?: JupiterRouteStep, index?: number): JupiterRouteStep;
    getSlippage(): number;
    setSlippage(value: number): PostJupiterRouteSwapRequest;
    getComputelimit(): number;
    setComputelimit(value: number): PostJupiterRouteSwapRequest;
    getComputeprice(): number;
    setComputeprice(value: number): PostJupiterRouteSwapRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostJupiterRouteSwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostJupiterRouteSwapRequest): PostJupiterRouteSwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostJupiterRouteSwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostJupiterRouteSwapRequest;
    static deserializeBinaryFromReader(message: PostJupiterRouteSwapRequest, reader: jspb.BinaryReader): PostJupiterRouteSwapRequest;
}

export namespace PostJupiterRouteSwapRequest {
    export type AsObject = {
        owneraddress: string,
        stepsList: Array<JupiterRouteStep.AsObject>,
        slippage: number,
        computelimit: number,
        computeprice: number,
    }
}

export class JupiterRouteStep extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): JupiterRouteStep;
    getInamount(): number;
    setInamount(value: number): JupiterRouteStep;
    getOuttoken(): string;
    setOuttoken(value: string): JupiterRouteStep;
    getOutamount(): number;
    setOutamount(value: number): JupiterRouteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): JupiterRouteStep;

    hasProject(): boolean;
    clearProject(): void;
    getProject(): StepProject | undefined;
    setProject(value?: StepProject): JupiterRouteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterRouteStep.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterRouteStep): JupiterRouteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterRouteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterRouteStep;
    static deserializeBinaryFromReader(message: JupiterRouteStep, reader: jspb.BinaryReader): JupiterRouteStep;
}

export namespace JupiterRouteStep {
    export type AsObject = {
        intoken: string,
        inamount: number,
        outtoken: string,
        outamount: number,
        outamountmin: number,
        project?: StepProject.AsObject,
    }
}

export class RouteStep extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): RouteStep;
    getInamount(): number;
    setInamount(value: number): RouteStep;
    getOuttoken(): string;
    setOuttoken(value: string): RouteStep;
    getOutamount(): number;
    setOutamount(value: number): RouteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): RouteStep;

    hasProject(): boolean;
    clearProject(): void;
    getProject(): StepProject | undefined;
    setProject(value?: StepProject): RouteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteStep.AsObject;
    static toObject(includeInstance: boolean, msg: RouteStep): RouteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteStep;
    static deserializeBinaryFromReader(message: RouteStep, reader: jspb.BinaryReader): RouteStep;
}

export namespace RouteStep {
    export type AsObject = {
        intoken: string,
        inamount: number,
        outtoken: string,
        outamount: number,
        outamountmin: number,
        project?: StepProject.AsObject,
    }
}

export class TradeSwapResponse extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): TradeSwapResponse;
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): TradeSwapResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;
    getOutamount(): number;
    setOutamount(value: number): TradeSwapResponse;
    getOutamountmin(): number;
    setOutamountmin(value: number): TradeSwapResponse;

    hasPriceimpact(): boolean;
    clearPriceimpact(): void;
    getPriceimpact(): common_pb.PriceImpactPercent | undefined;
    setPriceimpact(value?: common_pb.PriceImpactPercent): TradeSwapResponse;
    clearFeesList(): void;
    getFeesList(): Array<common_pb.Fee>;
    setFeesList(value: Array<common_pb.Fee>): TradeSwapResponse;
    addFees(value?: common_pb.Fee, index?: number): common_pb.Fee;

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
        transactionsList: Array<TransactionMessage.AsObject>,
        outamount: number,
        outamountmin: number,
        priceimpact?: common_pb.PriceImpactPercent.AsObject,
        feesList: Array<common_pb.Fee.AsObject>,
    }
}

export class QuoteRoute extends jspb.Message { 
    getInamount(): number;
    setInamount(value: number): QuoteRoute;
    getOutamount(): number;
    setOutamount(value: number): QuoteRoute;
    getOutamountmin(): number;
    setOutamountmin(value: number): QuoteRoute;
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
        outamountmin: number,
        stepsList: Array<QuoteStep.AsObject>,
    }
}

export class QuoteStep extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): StepProject | undefined;
    setProject(value?: StepProject): QuoteStep;
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

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): common_pb.PriceImpactPercent | undefined;
    setPriceimpactpercent(value?: common_pb.PriceImpactPercent): QuoteStep;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): common_pb.Fee | undefined;
    setFee(value?: common_pb.Fee): QuoteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): QuoteStep;

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
        project?: StepProject.AsObject,
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        slippage: number,
        priceimpactpercent?: common_pb.PriceImpactPercent.AsObject,
        fee?: common_pb.Fee.AsObject,
        outamountmin: number,
    }
}

export class JupiterQuoteRoute extends jspb.Message { 
    getInamount(): number;
    setInamount(value: number): JupiterQuoteRoute;
    getOutamount(): number;
    setOutamount(value: number): JupiterQuoteRoute;
    getOutamountmin(): number;
    setOutamountmin(value: number): JupiterQuoteRoute;
    clearStepsList(): void;
    getStepsList(): Array<JupiterQuoteStep>;
    setStepsList(value: Array<JupiterQuoteStep>): JupiterQuoteRoute;
    addSteps(value?: JupiterQuoteStep, index?: number): JupiterQuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterQuoteRoute.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterQuoteRoute): JupiterQuoteRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterQuoteRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterQuoteRoute;
    static deserializeBinaryFromReader(message: JupiterQuoteRoute, reader: jspb.BinaryReader): JupiterQuoteRoute;
}

export namespace JupiterQuoteRoute {
    export type AsObject = {
        inamount: number,
        outamount: number,
        outamountmin: number,
        stepsList: Array<JupiterQuoteStep.AsObject>,
    }
}

export class JupiterQuoteStep extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): StepProject | undefined;
    setProject(value?: StepProject): JupiterQuoteStep;
    getIntoken(): string;
    setIntoken(value: string): JupiterQuoteStep;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): JupiterQuoteStep;
    getOuttoken(): string;
    setOuttoken(value: string): JupiterQuoteStep;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): JupiterQuoteStep;
    getInamount(): number;
    setInamount(value: number): JupiterQuoteStep;
    getOutamount(): number;
    setOutamount(value: number): JupiterQuoteStep;
    getSlippage(): number;
    setSlippage(value: number): JupiterQuoteStep;

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): common_pb.PriceImpactPercentV2 | undefined;
    setPriceimpactpercent(value?: common_pb.PriceImpactPercentV2): JupiterQuoteStep;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): common_pb.Fee | undefined;
    setFee(value?: common_pb.Fee): JupiterQuoteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): JupiterQuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JupiterQuoteStep.AsObject;
    static toObject(includeInstance: boolean, msg: JupiterQuoteStep): JupiterQuoteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JupiterQuoteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JupiterQuoteStep;
    static deserializeBinaryFromReader(message: JupiterQuoteStep, reader: jspb.BinaryReader): JupiterQuoteStep;
}

export namespace JupiterQuoteStep {
    export type AsObject = {
        project?: StepProject.AsObject,
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        slippage: number,
        priceimpactpercent?: common_pb.PriceImpactPercentV2.AsObject,
        fee?: common_pb.Fee.AsObject,
        outamountmin: number,
    }
}

export class RaydiumQuoteRoute extends jspb.Message { 
    getInamount(): number;
    setInamount(value: number): RaydiumQuoteRoute;
    getOutamount(): number;
    setOutamount(value: number): RaydiumQuoteRoute;
    getOutamountmin(): number;
    setOutamountmin(value: number): RaydiumQuoteRoute;
    clearStepsList(): void;
    getStepsList(): Array<RaydiumQuoteStep>;
    setStepsList(value: Array<RaydiumQuoteStep>): RaydiumQuoteRoute;
    addSteps(value?: RaydiumQuoteStep, index?: number): RaydiumQuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaydiumQuoteRoute.AsObject;
    static toObject(includeInstance: boolean, msg: RaydiumQuoteRoute): RaydiumQuoteRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaydiumQuoteRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaydiumQuoteRoute;
    static deserializeBinaryFromReader(message: RaydiumQuoteRoute, reader: jspb.BinaryReader): RaydiumQuoteRoute;
}

export namespace RaydiumQuoteRoute {
    export type AsObject = {
        inamount: number,
        outamount: number,
        outamountmin: number,
        stepsList: Array<RaydiumQuoteStep.AsObject>,
    }
}

export class RaydiumQuoteStep extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): RaydiumQuoteStep;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): RaydiumQuoteStep;
    getOuttoken(): string;
    setOuttoken(value: string): RaydiumQuoteStep;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): RaydiumQuoteStep;
    getInamount(): number;
    setInamount(value: number): RaydiumQuoteStep;
    getOutamount(): number;
    setOutamount(value: number): RaydiumQuoteStep;
    getSlippage(): number;
    setSlippage(value: number): RaydiumQuoteStep;

    hasPriceimpactpercent(): boolean;
    clearPriceimpactpercent(): void;
    getPriceimpactpercent(): common_pb.PriceImpactPercentV2 | undefined;
    setPriceimpactpercent(value?: common_pb.PriceImpactPercentV2): RaydiumQuoteStep;

    hasFee(): boolean;
    clearFee(): void;
    getFee(): common_pb.Fee | undefined;
    setFee(value?: common_pb.Fee): RaydiumQuoteStep;
    getOutamountmin(): number;
    setOutamountmin(value: number): RaydiumQuoteStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaydiumQuoteStep.AsObject;
    static toObject(includeInstance: boolean, msg: RaydiumQuoteStep): RaydiumQuoteStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaydiumQuoteStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaydiumQuoteStep;
    static deserializeBinaryFromReader(message: RaydiumQuoteStep, reader: jspb.BinaryReader): RaydiumQuoteStep;
}

export namespace RaydiumQuoteStep {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        slippage: number,
        priceimpactpercent?: common_pb.PriceImpactPercentV2.AsObject,
        fee?: common_pb.Fee.AsObject,
        outamountmin: number,
    }
}

export class StepProject extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): StepProject;
    getId(): string;
    setId(value: string): StepProject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StepProject.AsObject;
    static toObject(includeInstance: boolean, msg: StepProject): StepProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StepProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StepProject;
    static deserializeBinaryFromReader(message: StepProject, reader: jspb.BinaryReader): StepProject;
}

export namespace StepProject {
    export type AsObject = {
        label: string,
        id: string,
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

export class Block extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): Block;
    getHash(): string;
    setHash(value: string): Block;
    getTime(): number;
    setTime(value: number): Block;
    getHeight(): number;
    setHeight(value: number): Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        slot: number,
        hash: string,
        time: number,
        height: number,
    }
}

export class GetBlockStreamRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockStreamRequest): GetBlockStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockStreamRequest;
    static deserializeBinaryFromReader(message: GetBlockStreamRequest, reader: jspb.BinaryReader): GetBlockStreamRequest;
}

export namespace GetBlockStreamRequest {
    export type AsObject = {
    }
}

export class GetBlockStreamResponse extends jspb.Message { 

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): Block | undefined;
    setBlock(value?: Block): GetBlockStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockStreamResponse): GetBlockStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockStreamResponse;
    static deserializeBinaryFromReader(message: GetBlockStreamResponse, reader: jspb.BinaryReader): GetBlockStreamResponse;
}

export namespace GetBlockStreamResponse {
    export type AsObject = {
        block?: Block.AsObject,
    }
}

export class GetPoolsRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetPoolsRequest;
    addProjects(value: Project, index?: number): Project;
    getPairoraddress(): string;
    setPairoraddress(value: string): GetPoolsRequest;

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
        projectsList: Array<Project>,
        pairoraddress: string,
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

export class GetRaydiumPoolsRequest extends jspb.Message { 
    getPairoraddress(): string;
    setPairoraddress(value: string): GetRaydiumPoolsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRaydiumPoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRaydiumPoolsRequest): GetRaydiumPoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRaydiumPoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRaydiumPoolsRequest;
    static deserializeBinaryFromReader(message: GetRaydiumPoolsRequest, reader: jspb.BinaryReader): GetRaydiumPoolsRequest;
}

export namespace GetRaydiumPoolsRequest {
    export type AsObject = {
        pairoraddress: string,
    }
}

export class GetRaydiumPoolsResponse extends jspb.Message { 
    clearPoolsList(): void;
    getPoolsList(): Array<ProjectPool>;
    setPoolsList(value: Array<ProjectPool>): GetRaydiumPoolsResponse;
    addPools(value?: ProjectPool, index?: number): ProjectPool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRaydiumPoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRaydiumPoolsResponse): GetRaydiumPoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRaydiumPoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRaydiumPoolsResponse;
    static deserializeBinaryFromReader(message: GetRaydiumPoolsResponse, reader: jspb.BinaryReader): GetRaydiumPoolsResponse;
}

export namespace GetRaydiumPoolsResponse {
    export type AsObject = {
        poolsList: Array<ProjectPool.AsObject>,
    }
}

export class GetTransactionRequest extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): GetTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
    static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
    export type AsObject = {
        signature: string,
    }
}

export class GetTransactionResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): GetTransactionResponse;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): TransactionMeta | undefined;
    setMetadata(value?: TransactionMeta): GetTransactionResponse;
    getSlot(): number;
    setSlot(value: number): GetTransactionResponse;
    getBlockTime(): number;
    setBlockTime(value: number): GetTransactionResponse;
    getVersion(): number;
    setVersion(value: number): GetTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionResponse): GetTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionResponse;
    static deserializeBinaryFromReader(message: GetTransactionResponse, reader: jspb.BinaryReader): GetTransactionResponse;
}

export namespace GetTransactionResponse {
    export type AsObject = {
        status: string,
        metadata?: TransactionMeta.AsObject,
        slot: number,
        blockTime: number,
        version: number,
    }
}

export class Instruction extends jspb.Message { 
    getProgramIdIndex(): number;
    setProgramIdIndex(value: number): Instruction;
    clearAccountsList(): void;
    getAccountsList(): Array<number>;
    setAccountsList(value: Array<number>): Instruction;
    addAccounts(value: number, index?: number): number;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Instruction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instruction.AsObject;
    static toObject(includeInstance: boolean, msg: Instruction): Instruction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instruction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instruction;
    static deserializeBinaryFromReader(message: Instruction, reader: jspb.BinaryReader): Instruction;
}

export namespace Instruction {
    export type AsObject = {
        programIdIndex: number,
        accountsList: Array<number>,
        data: Uint8Array | string,
    }
}

export class TransactionMeta extends jspb.Message { 
    getErr(): string;
    setErr(value: string): TransactionMeta;
    getErrored(): boolean;
    setErrored(value: boolean): TransactionMeta;
    getFee(): number;
    setFee(value: number): TransactionMeta;
    clearPreBalancesList(): void;
    getPreBalancesList(): Array<number>;
    setPreBalancesList(value: Array<number>): TransactionMeta;
    addPreBalances(value: number, index?: number): number;
    clearPostBalancesList(): void;
    getPostBalancesList(): Array<number>;
    setPostBalancesList(value: Array<number>): TransactionMeta;
    addPostBalances(value: number, index?: number): number;
    clearInnerInstructionsList(): void;
    getInnerInstructionsList(): Array<TransactionMetaInnerInstruction>;
    setInnerInstructionsList(value: Array<TransactionMetaInnerInstruction>): TransactionMeta;
    addInnerInstructions(value?: TransactionMetaInnerInstruction, index?: number): TransactionMetaInnerInstruction;
    clearLogMessagesList(): void;
    getLogMessagesList(): Array<string>;
    setLogMessagesList(value: Array<string>): TransactionMeta;
    addLogMessages(value: string, index?: number): string;
    clearPreTokenBalancesList(): void;
    getPreTokenBalancesList(): Array<TransactionMetaTokenBalance>;
    setPreTokenBalancesList(value: Array<TransactionMetaTokenBalance>): TransactionMeta;
    addPreTokenBalances(value?: TransactionMetaTokenBalance, index?: number): TransactionMetaTokenBalance;
    clearPostTokenBalancesList(): void;
    getPostTokenBalancesList(): Array<TransactionMetaTokenBalance>;
    setPostTokenBalancesList(value: Array<TransactionMetaTokenBalance>): TransactionMeta;
    addPostTokenBalances(value?: TransactionMetaTokenBalance, index?: number): TransactionMetaTokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMeta.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMeta): TransactionMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMeta;
    static deserializeBinaryFromReader(message: TransactionMeta, reader: jspb.BinaryReader): TransactionMeta;
}

export namespace TransactionMeta {
    export type AsObject = {
        err: string,
        errored: boolean,
        fee: number,
        preBalancesList: Array<number>,
        postBalancesList: Array<number>,
        innerInstructionsList: Array<TransactionMetaInnerInstruction.AsObject>,
        logMessagesList: Array<string>,
        preTokenBalancesList: Array<TransactionMetaTokenBalance.AsObject>,
        postTokenBalancesList: Array<TransactionMetaTokenBalance.AsObject>,
    }
}

export class TransactionMetaInnerInstruction extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): TransactionMetaInnerInstruction;
    clearInstructionsList(): void;
    getInstructionsList(): Array<Instruction>;
    setInstructionsList(value: Array<Instruction>): TransactionMetaInnerInstruction;
    addInstructions(value?: Instruction, index?: number): Instruction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMetaInnerInstruction.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMetaInnerInstruction): TransactionMetaInnerInstruction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMetaInnerInstruction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMetaInnerInstruction;
    static deserializeBinaryFromReader(message: TransactionMetaInnerInstruction, reader: jspb.BinaryReader): TransactionMetaInnerInstruction;
}

export namespace TransactionMetaInnerInstruction {
    export type AsObject = {
        index: number,
        instructionsList: Array<Instruction.AsObject>,
    }
}

export class TransactionMetaTokenBalance extends jspb.Message { 
    getAccountindex(): number;
    setAccountindex(value: number): TransactionMetaTokenBalance;
    getMint(): string;
    setMint(value: string): TransactionMetaTokenBalance;

    hasUiTokenAmount(): boolean;
    clearUiTokenAmount(): void;
    getUiTokenAmount(): UITokenAmount | undefined;
    setUiTokenAmount(value?: UITokenAmount): TransactionMetaTokenBalance;
    getOwner(): string;
    setOwner(value: string): TransactionMetaTokenBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMetaTokenBalance.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMetaTokenBalance): TransactionMetaTokenBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMetaTokenBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMetaTokenBalance;
    static deserializeBinaryFromReader(message: TransactionMetaTokenBalance, reader: jspb.BinaryReader): TransactionMetaTokenBalance;
}

export namespace TransactionMetaTokenBalance {
    export type AsObject = {
        accountindex: number,
        mint: string,
        uiTokenAmount?: UITokenAmount.AsObject,
        owner: string,
    }
}

export class UITokenAmount extends jspb.Message { 
    getUiAmount(): number;
    setUiAmount(value: number): UITokenAmount;
    getDecimals(): number;
    setDecimals(value: number): UITokenAmount;
    getAmount(): string;
    setAmount(value: string): UITokenAmount;
    getUiAmountString(): string;
    setUiAmountString(value: string): UITokenAmount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UITokenAmount.AsObject;
    static toObject(includeInstance: boolean, msg: UITokenAmount): UITokenAmount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UITokenAmount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UITokenAmount;
    static deserializeBinaryFromReader(message: UITokenAmount, reader: jspb.BinaryReader): UITokenAmount;
}

export namespace UITokenAmount {
    export type AsObject = {
        uiAmount: number,
        decimals: number,
        amount: string,
        uiAmountString: string,
    }
}

export class ProjectPools extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): ProjectPools;
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
        project: Project,
        poolsList: Array<ProjectPool.AsObject>,
    }
}

export class ProjectPool extends jspb.Message { 
    getPool(): string;
    setPool(value: string): ProjectPool;
    getPooladdress(): string;
    setPooladdress(value: string): ProjectPool;
    getToken1reserves(): number;
    setToken1reserves(value: number): ProjectPool;
    getToken1mintaddress(): string;
    setToken1mintaddress(value: string): ProjectPool;
    getToken1mintsymbol(): string;
    setToken1mintsymbol(value: string): ProjectPool;
    getToken2reserves(): number;
    setToken2reserves(value: number): ProjectPool;
    getToken2mintaddress(): string;
    setToken2mintaddress(value: string): ProjectPool;
    getToken2mintsymbol(): string;
    setToken2mintsymbol(value: string): ProjectPool;
    getOpentime(): number;
    setOpentime(value: number): ProjectPool;

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
        pool: string,
        pooladdress: string,
        token1reserves: number,
        token1mintaddress: string,
        token1mintsymbol: string,
        token2reserves: number,
        token2mintaddress: string,
        token2mintsymbol: string,
        opentime: number,
    }
}

export class GetQuotesStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetQuotesStreamRequest;
    addProjects(value: Project, index?: number): Project;
    clearTokenpairsList(): void;
    getTokenpairsList(): Array<TokenPair>;
    setTokenpairsList(value: Array<TokenPair>): GetQuotesStreamRequest;
    addTokenpairs(value?: TokenPair, index?: number): TokenPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesStreamRequest): GetQuotesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesStreamRequest;
    static deserializeBinaryFromReader(message: GetQuotesStreamRequest, reader: jspb.BinaryReader): GetQuotesStreamRequest;
}

export namespace GetQuotesStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        tokenpairsList: Array<TokenPair.AsObject>,
    }
}

export class GetQuotesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetQuotesStreamResponse;

    hasQuote(): boolean;
    clearQuote(): void;
    getQuote(): GetQuotesStreamUpdate | undefined;
    setQuote(value?: GetQuotesStreamUpdate): GetQuotesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesStreamResponse): GetQuotesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesStreamResponse;
    static deserializeBinaryFromReader(message: GetQuotesStreamResponse, reader: jspb.BinaryReader): GetQuotesStreamResponse;
}

export namespace GetQuotesStreamResponse {
    export type AsObject = {
        slot: number,
        quote?: GetQuotesStreamUpdate.AsObject,
    }
}

export class GetQuotesStreamUpdate extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): GetQuotesStreamUpdate;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetQuotesStreamUpdate;
    getOuttoken(): string;
    setOuttoken(value: string): GetQuotesStreamUpdate;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetQuotesStreamUpdate;
    getInamount(): number;
    setInamount(value: number): GetQuotesStreamUpdate;
    getOutamount(): number;
    setOutamount(value: number): GetQuotesStreamUpdate;
    getProject(): Project;
    setProject(value: Project): GetQuotesStreamUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuotesStreamUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuotesStreamUpdate): GetQuotesStreamUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuotesStreamUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuotesStreamUpdate;
    static deserializeBinaryFromReader(message: GetQuotesStreamUpdate, reader: jspb.BinaryReader): GetQuotesStreamUpdate;
}

export namespace GetQuotesStreamUpdate {
    export type AsObject = {
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamount: number,
        project: Project,
    }
}

export class GetSwapsStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetSwapsStreamRequest;
    addProjects(value: Project, index?: number): Project;
    clearPoolsList(): void;
    getPoolsList(): Array<string>;
    setPoolsList(value: Array<string>): GetSwapsStreamRequest;
    addPools(value: string, index?: number): string;
    getIncludefailed(): boolean;
    setIncludefailed(value: boolean): GetSwapsStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSwapsStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSwapsStreamRequest): GetSwapsStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSwapsStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSwapsStreamRequest;
    static deserializeBinaryFromReader(message: GetSwapsStreamRequest, reader: jspb.BinaryReader): GetSwapsStreamRequest;
}

export namespace GetSwapsStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        poolsList: Array<string>,
        includefailed: boolean,
    }
}

export class GetSwapsStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetSwapsStreamResponse;

    hasSwap(): boolean;
    clearSwap(): void;
    getSwap(): GetSwapsStreamUpdate | undefined;
    setSwap(value?: GetSwapsStreamUpdate): GetSwapsStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSwapsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSwapsStreamResponse): GetSwapsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSwapsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSwapsStreamResponse;
    static deserializeBinaryFromReader(message: GetSwapsStreamResponse, reader: jspb.BinaryReader): GetSwapsStreamResponse;
}

export namespace GetSwapsStreamResponse {
    export type AsObject = {
        slot: number,
        swap?: GetSwapsStreamUpdate.AsObject,
    }
}

export class GetNewRaydiumPoolsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNewRaydiumPoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNewRaydiumPoolsRequest): GetNewRaydiumPoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNewRaydiumPoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNewRaydiumPoolsRequest;
    static deserializeBinaryFromReader(message: GetNewRaydiumPoolsRequest, reader: jspb.BinaryReader): GetNewRaydiumPoolsRequest;
}

export namespace GetNewRaydiumPoolsRequest {
    export type AsObject = {
    }
}

export class GetNewRaydiumPoolsResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetNewRaydiumPoolsResponse;

    hasPool(): boolean;
    clearPool(): void;
    getPool(): ProjectPool | undefined;
    setPool(value?: ProjectPool): GetNewRaydiumPoolsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNewRaydiumPoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNewRaydiumPoolsResponse): GetNewRaydiumPoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNewRaydiumPoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNewRaydiumPoolsResponse;
    static deserializeBinaryFromReader(message: GetNewRaydiumPoolsResponse, reader: jspb.BinaryReader): GetNewRaydiumPoolsResponse;
}

export namespace GetNewRaydiumPoolsResponse {
    export type AsObject = {
        slot: number,
        pool?: ProjectPool.AsObject,
    }
}

export class GetSwapsStreamUpdate extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): GetSwapsStreamUpdate;
    getProject(): Project;
    setProject(value: Project): GetSwapsStreamUpdate;
    getPooladdress(): string;
    setPooladdress(value: string): GetSwapsStreamUpdate;
    getIntoken(): string;
    setIntoken(value: string): GetSwapsStreamUpdate;
    getIntokenaddress(): string;
    setIntokenaddress(value: string): GetSwapsStreamUpdate;
    getOuttoken(): string;
    setOuttoken(value: string): GetSwapsStreamUpdate;
    getOuttokenaddress(): string;
    setOuttokenaddress(value: string): GetSwapsStreamUpdate;
    getInamount(): number;
    setInamount(value: number): GetSwapsStreamUpdate;
    getOutamountmin(): number;
    setOutamountmin(value: number): GetSwapsStreamUpdate;
    getSourceaccount(): string;
    setSourceaccount(value: string): GetSwapsStreamUpdate;
    getDestinationaccount(): string;
    setDestinationaccount(value: string): GetSwapsStreamUpdate;
    getOwneraccount(): string;
    setOwneraccount(value: string): GetSwapsStreamUpdate;
    getSignature(): string;
    setSignature(value: string): GetSwapsStreamUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSwapsStreamUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: GetSwapsStreamUpdate): GetSwapsStreamUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSwapsStreamUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSwapsStreamUpdate;
    static deserializeBinaryFromReader(message: GetSwapsStreamUpdate, reader: jspb.BinaryReader): GetSwapsStreamUpdate;
}

export namespace GetSwapsStreamUpdate {
    export type AsObject = {
        success: boolean,
        project: Project,
        pooladdress: string,
        intoken: string,
        intokenaddress: string,
        outtoken: string,
        outtokenaddress: string,
        inamount: number,
        outamountmin: number,
        sourceaccount: string,
        destinationaccount: string,
        owneraccount: string,
        signature: string,
    }
}

export class TokenPair extends jspb.Message { 
    getIntoken(): string;
    setIntoken(value: string): TokenPair;
    getOuttoken(): string;
    setOuttoken(value: string): TokenPair;
    getInamount(): number;
    setInamount(value: number): TokenPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenPair.AsObject;
    static toObject(includeInstance: boolean, msg: TokenPair): TokenPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenPair;
    static deserializeBinaryFromReader(message: TokenPair, reader: jspb.BinaryReader): TokenPair;
}

export namespace TokenPair {
    export type AsObject = {
        intoken: string,
        outtoken: string,
        inamount: number,
    }
}

export class GetPriceRequest extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): GetPriceRequest;
    addTokens(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPriceRequest): GetPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPriceRequest;
    static deserializeBinaryFromReader(message: GetPriceRequest, reader: jspb.BinaryReader): GetPriceRequest;
}

export namespace GetPriceRequest {
    export type AsObject = {
        tokensList: Array<string>,
    }
}

export class GetPriceResponse extends jspb.Message { 
    clearTokenpricesList(): void;
    getTokenpricesList(): Array<TokenPrice>;
    setTokenpricesList(value: Array<TokenPrice>): GetPriceResponse;
    addTokenprices(value?: TokenPrice, index?: number): TokenPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPriceResponse): GetPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPriceResponse;
    static deserializeBinaryFromReader(message: GetPriceResponse, reader: jspb.BinaryReader): GetPriceResponse;
}

export namespace GetPriceResponse {
    export type AsObject = {
        tokenpricesList: Array<TokenPrice.AsObject>,
    }
}

export class GetRaydiumPricesRequest extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): GetRaydiumPricesRequest;
    addTokens(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRaydiumPricesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRaydiumPricesRequest): GetRaydiumPricesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRaydiumPricesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRaydiumPricesRequest;
    static deserializeBinaryFromReader(message: GetRaydiumPricesRequest, reader: jspb.BinaryReader): GetRaydiumPricesRequest;
}

export namespace GetRaydiumPricesRequest {
    export type AsObject = {
        tokensList: Array<string>,
    }
}

export class GetJupiterPricesRequest extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): GetJupiterPricesRequest;
    addTokens(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJupiterPricesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJupiterPricesRequest): GetJupiterPricesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJupiterPricesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJupiterPricesRequest;
    static deserializeBinaryFromReader(message: GetJupiterPricesRequest, reader: jspb.BinaryReader): GetJupiterPricesRequest;
}

export namespace GetJupiterPricesRequest {
    export type AsObject = {
        tokensList: Array<string>,
    }
}

export class GetRaydiumPricesResponse extends jspb.Message { 
    clearTokenpricesList(): void;
    getTokenpricesList(): Array<TokenPriceV2>;
    setTokenpricesList(value: Array<TokenPriceV2>): GetRaydiumPricesResponse;
    addTokenprices(value?: TokenPriceV2, index?: number): TokenPriceV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRaydiumPricesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRaydiumPricesResponse): GetRaydiumPricesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRaydiumPricesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRaydiumPricesResponse;
    static deserializeBinaryFromReader(message: GetRaydiumPricesResponse, reader: jspb.BinaryReader): GetRaydiumPricesResponse;
}

export namespace GetRaydiumPricesResponse {
    export type AsObject = {
        tokenpricesList: Array<TokenPriceV2.AsObject>,
    }
}

export class GetJupiterPricesResponse extends jspb.Message { 
    clearTokenpricesList(): void;
    getTokenpricesList(): Array<TokenPriceV2>;
    setTokenpricesList(value: Array<TokenPriceV2>): GetJupiterPricesResponse;
    addTokenprices(value?: TokenPriceV2, index?: number): TokenPriceV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJupiterPricesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetJupiterPricesResponse): GetJupiterPricesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJupiterPricesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJupiterPricesResponse;
    static deserializeBinaryFromReader(message: GetJupiterPricesResponse, reader: jspb.BinaryReader): GetJupiterPricesResponse;
}

export namespace GetJupiterPricesResponse {
    export type AsObject = {
        tokenpricesList: Array<TokenPriceV2.AsObject>,
    }
}

export class TokenPrice extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenPrice;
    getTokenaddress(): string;
    setTokenaddress(value: string): TokenPrice;
    getProject(): Project;
    setProject(value: Project): TokenPrice;
    getBuy(): number;
    setBuy(value: number): TokenPrice;
    getBuysize(): number;
    setBuysize(value: number): TokenPrice;
    getSell(): number;
    setSell(value: number): TokenPrice;
    getSellsize(): number;
    setSellsize(value: number): TokenPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenPrice.AsObject;
    static toObject(includeInstance: boolean, msg: TokenPrice): TokenPrice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenPrice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenPrice;
    static deserializeBinaryFromReader(message: TokenPrice, reader: jspb.BinaryReader): TokenPrice;
}

export namespace TokenPrice {
    export type AsObject = {
        token: string,
        tokenaddress: string,
        project: Project,
        buy: number,
        buysize: number,
        sell: number,
        sellsize: number,
    }
}

export class TokenPriceV2 extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenPriceV2;
    getTokenaddress(): string;
    setTokenaddress(value: string): TokenPriceV2;
    getBuy(): number;
    setBuy(value: number): TokenPriceV2;
    getBuysize(): number;
    setBuysize(value: number): TokenPriceV2;
    getSell(): number;
    setSell(value: number): TokenPriceV2;
    getSellsize(): number;
    setSellsize(value: number): TokenPriceV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenPriceV2.AsObject;
    static toObject(includeInstance: boolean, msg: TokenPriceV2): TokenPriceV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenPriceV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenPriceV2;
    static deserializeBinaryFromReader(message: TokenPriceV2, reader: jspb.BinaryReader): TokenPriceV2;
}

export namespace TokenPriceV2 {
    export type AsObject = {
        token: string,
        tokenaddress: string,
        buy: number,
        buysize: number,
        sell: number,
        sellsize: number,
    }
}

export class GetPoolReservesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetPoolReservesStreamResponse;

    hasReserves(): boolean;
    clearReserves(): void;
    getReserves(): PoolReserves | undefined;
    setReserves(value?: PoolReserves): GetPoolReservesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolReservesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolReservesStreamResponse): GetPoolReservesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolReservesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolReservesStreamResponse;
    static deserializeBinaryFromReader(message: GetPoolReservesStreamResponse, reader: jspb.BinaryReader): GetPoolReservesStreamResponse;
}

export namespace GetPoolReservesStreamResponse {
    export type AsObject = {
        slot: number,
        reserves?: PoolReserves.AsObject,
    }
}

export class PoolReserves extends jspb.Message { 
    getToken1reserves(): string;
    setToken1reserves(value: string): PoolReserves;
    getToken1address(): string;
    setToken1address(value: string): PoolReserves;
    getToken2reserves(): string;
    setToken2reserves(value: string): PoolReserves;
    getToken2address(): string;
    setToken2address(value: string): PoolReserves;
    getPooladdress(): string;
    setPooladdress(value: string): PoolReserves;
    getProject(): Project;
    setProject(value: Project): PoolReserves;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PoolReserves.AsObject;
    static toObject(includeInstance: boolean, msg: PoolReserves): PoolReserves.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PoolReserves, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PoolReserves;
    static deserializeBinaryFromReader(message: PoolReserves, reader: jspb.BinaryReader): PoolReserves;
}

export namespace PoolReserves {
    export type AsObject = {
        token1reserves: string,
        token1address: string,
        token2reserves: string,
        token2address: string,
        pooladdress: string,
        project: Project,
    }
}

export class GetPoolReservesStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetPoolReservesStreamRequest;
    addProjects(value: Project, index?: number): Project;
    getPairoraddress(): string;
    setPairoraddress(value: string): GetPoolReservesStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPoolReservesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPoolReservesStreamRequest): GetPoolReservesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPoolReservesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPoolReservesStreamRequest;
    static deserializeBinaryFromReader(message: GetPoolReservesStreamRequest, reader: jspb.BinaryReader): GetPoolReservesStreamRequest;
}

export namespace GetPoolReservesStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        pairoraddress: string,
    }
}

export class GetPricesStreamRequest extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<Project>;
    setProjectsList(value: Array<Project>): GetPricesStreamRequest;
    addProjects(value: Project, index?: number): Project;
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): GetPricesStreamRequest;
    addTokens(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricesStreamRequest): GetPricesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricesStreamRequest;
    static deserializeBinaryFromReader(message: GetPricesStreamRequest, reader: jspb.BinaryReader): GetPricesStreamRequest;
}

export namespace GetPricesStreamRequest {
    export type AsObject = {
        projectsList: Array<Project>,
        tokensList: Array<string>,
    }
}

export class GetPricesStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetPricesStreamResponse;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): TokenPrice | undefined;
    setPrice(value?: TokenPrice): GetPricesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPricesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPricesStreamResponse): GetPricesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPricesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPricesStreamResponse;
    static deserializeBinaryFromReader(message: GetPricesStreamResponse, reader: jspb.BinaryReader): GetPricesStreamResponse;
}

export namespace GetPricesStreamResponse {
    export type AsObject = {
        slot: number,
        price?: TokenPrice.AsObject,
    }
}

export class GetPerpOrderbookRequest extends jspb.Message { 
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): GetPerpOrderbookRequest;
    getLimit(): number;
    setLimit(value: number): GetPerpOrderbookRequest;
    getProject(): Project;
    setProject(value: Project): GetPerpOrderbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpOrderbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpOrderbookRequest): GetPerpOrderbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpOrderbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpOrderbookRequest;
    static deserializeBinaryFromReader(message: GetPerpOrderbookRequest, reader: jspb.BinaryReader): GetPerpOrderbookRequest;
}

export namespace GetPerpOrderbookRequest {
    export type AsObject = {
        contract: common_pb.PerpContract,
        limit: number,
        project: Project,
    }
}

export class GetPerpOrderbooksRequest extends jspb.Message { 
    clearContractsList(): void;
    getContractsList(): Array<common_pb.PerpContract>;
    setContractsList(value: Array<common_pb.PerpContract>): GetPerpOrderbooksRequest;
    addContracts(value: common_pb.PerpContract, index?: number): common_pb.PerpContract;
    getLimit(): number;
    setLimit(value: number): GetPerpOrderbooksRequest;
    getProject(): Project;
    setProject(value: Project): GetPerpOrderbooksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpOrderbooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpOrderbooksRequest): GetPerpOrderbooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpOrderbooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpOrderbooksRequest;
    static deserializeBinaryFromReader(message: GetPerpOrderbooksRequest, reader: jspb.BinaryReader): GetPerpOrderbooksRequest;
}

export namespace GetPerpOrderbooksRequest {
    export type AsObject = {
        contractsList: Array<common_pb.PerpContract>,
        limit: number,
        project: Project,
    }
}

export class GetPerpOrderbookResponse extends jspb.Message { 
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): GetPerpOrderbookResponse;
    clearBidsList(): void;
    getBidsList(): Array<PerpOrderbookItem>;
    setBidsList(value: Array<PerpOrderbookItem>): GetPerpOrderbookResponse;
    addBids(value?: PerpOrderbookItem, index?: number): PerpOrderbookItem;
    clearAsksList(): void;
    getAsksList(): Array<PerpOrderbookItem>;
    setAsksList(value: Array<PerpOrderbookItem>): GetPerpOrderbookResponse;
    addAsks(value?: PerpOrderbookItem, index?: number): PerpOrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpOrderbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpOrderbookResponse): GetPerpOrderbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpOrderbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpOrderbookResponse;
    static deserializeBinaryFromReader(message: GetPerpOrderbookResponse, reader: jspb.BinaryReader): GetPerpOrderbookResponse;
}

export namespace GetPerpOrderbookResponse {
    export type AsObject = {
        contract: common_pb.PerpContract,
        bidsList: Array<PerpOrderbookItem.AsObject>,
        asksList: Array<PerpOrderbookItem.AsObject>,
    }
}

export class PerpOrderbookItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): PerpOrderbookItem;
    getSize(): number;
    setSize(value: number): PerpOrderbookItem;
    getOrderid(): string;
    setOrderid(value: string): PerpOrderbookItem;
    getClientorderid(): string;
    setClientorderid(value: string): PerpOrderbookItem;
    getStatus(): string;
    setStatus(value: string): PerpOrderbookItem;
    getOrdertype(): string;
    setOrdertype(value: string): PerpOrderbookItem;
    getSlot(): number;
    setSlot(value: number): PerpOrderbookItem;
    getReduceonly(): boolean;
    setReduceonly(value: boolean): PerpOrderbookItem;
    getTriggerprice(): number;
    setTriggerprice(value: number): PerpOrderbookItem;
    getTriggercondition(): string;
    setTriggercondition(value: string): PerpOrderbookItem;
    getPostonly(): boolean;
    setPostonly(value: boolean): PerpOrderbookItem;
    getOraclepriceoffset(): number;
    setOraclepriceoffset(value: number): PerpOrderbookItem;
    getAuctionduration(): number;
    setAuctionduration(value: number): PerpOrderbookItem;
    getAuctionstartprice(): number;
    setAuctionstartprice(value: number): PerpOrderbookItem;
    getAuctionendprice(): number;
    setAuctionendprice(value: number): PerpOrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerpOrderbookItem.AsObject;
    static toObject(includeInstance: boolean, msg: PerpOrderbookItem): PerpOrderbookItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerpOrderbookItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerpOrderbookItem;
    static deserializeBinaryFromReader(message: PerpOrderbookItem, reader: jspb.BinaryReader): PerpOrderbookItem;
}

export namespace PerpOrderbookItem {
    export type AsObject = {
        price: number,
        size: number,
        orderid: string,
        clientorderid: string,
        status: string,
        ordertype: string,
        slot: number,
        reduceonly: boolean,
        triggerprice: number,
        triggercondition: string,
        postonly: boolean,
        oraclepriceoffset: number,
        auctionduration: number,
        auctionstartprice: number,
        auctionendprice: number,
    }
}

export class GetPerpOrderbooksStreamResponse extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): GetPerpOrderbooksStreamResponse;

    hasOrderbook(): boolean;
    clearOrderbook(): void;
    getOrderbook(): GetPerpOrderbookResponse | undefined;
    setOrderbook(value?: GetPerpOrderbookResponse): GetPerpOrderbooksStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpOrderbooksStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpOrderbooksStreamResponse): GetPerpOrderbooksStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpOrderbooksStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpOrderbooksStreamResponse;
    static deserializeBinaryFromReader(message: GetPerpOrderbooksStreamResponse, reader: jspb.BinaryReader): GetPerpOrderbooksStreamResponse;
}

export namespace GetPerpOrderbooksStreamResponse {
    export type AsObject = {
        slot: number,
        orderbook?: GetPerpOrderbookResponse.AsObject,
    }
}

export class GetUserRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetUserRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetUserRequest;
    getProject(): Project;
    setProject(value: Project): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        project: Project,
    }
}

export class GetUserResponse extends jspb.Message { 
    clearUseraccountsList(): void;
    getUseraccountsList(): Array<UserDetail>;
    setUseraccountsList(value: Array<UserDetail>): GetUserResponse;
    addUseraccounts(value?: UserDetail, index?: number): UserDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        useraccountsList: Array<UserDetail.AsObject>,
    }
}

export class UserDetail extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): UserDetail;
    getSubaccountid(): number;
    setSubaccountid(value: number): UserDetail;
    getAccountaddress(): string;
    setAccountaddress(value: string): UserDetail;
    getAccountname(): string;
    setAccountname(value: string): UserDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetail.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetail;
    static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
    export type AsObject = {
        status: string,
        subaccountid: number,
        accountaddress: string,
        accountname: string,
    }
}

export class PostCreateUserRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCreateUserRequest;
    getProject(): Project;
    setProject(value: Project): PostCreateUserRequest;
    getAction(): string;
    setAction(value: string): PostCreateUserRequest;
    getSubaccountid(): number;
    setSubaccountid(value: number): PostCreateUserRequest;
    getAccountname(): string;
    setAccountname(value: string): PostCreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCreateUserRequest): PostCreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCreateUserRequest;
    static deserializeBinaryFromReader(message: PostCreateUserRequest, reader: jspb.BinaryReader): PostCreateUserRequest;
}

export namespace PostCreateUserRequest {
    export type AsObject = {
        owneraddress: string,
        project: Project,
        action: string,
        subaccountid: number,
        accountname: string,
    }
}

export class PostCreateUserResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostCreateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCreateUserResponse): PostCreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCreateUserResponse;
    static deserializeBinaryFromReader(message: PostCreateUserResponse, reader: jspb.BinaryReader): PostCreateUserResponse;
}

export namespace PostCreateUserResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostCancelPerpOrdersRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelPerpOrdersRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelPerpOrdersRequest;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PostCancelPerpOrdersRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostCancelPerpOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelPerpOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelPerpOrdersRequest): PostCancelPerpOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelPerpOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelPerpOrdersRequest;
    static deserializeBinaryFromReader(message: PostCancelPerpOrdersRequest, reader: jspb.BinaryReader): PostCancelPerpOrdersRequest;
}

export namespace PostCancelPerpOrdersRequest {
    export type AsObject = {
        owneraddress: string,
        project: Project,
        contract: common_pb.PerpContract,
        accountaddress: string,
    }
}

export class PostCancelPerpOrdersResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostCancelPerpOrdersResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelPerpOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelPerpOrdersResponse): PostCancelPerpOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelPerpOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelPerpOrdersResponse;
    static deserializeBinaryFromReader(message: PostCancelPerpOrdersResponse, reader: jspb.BinaryReader): PostCancelPerpOrdersResponse;
}

export namespace PostCancelPerpOrdersResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostCancelDriftMarginOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelDriftMarginOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostCancelDriftMarginOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostCancelDriftMarginOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): PostCancelDriftMarginOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelDriftMarginOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelDriftMarginOrderRequest): PostCancelDriftMarginOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelDriftMarginOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelDriftMarginOrderRequest;
    static deserializeBinaryFromReader(message: PostCancelDriftMarginOrderRequest, reader: jspb.BinaryReader): PostCancelDriftMarginOrderRequest;
}

export namespace PostCancelDriftMarginOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        clientorderid: number,
        orderid: number,
    }
}

export class PostCancelDriftMarginOrderResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostCancelDriftMarginOrderResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelDriftMarginOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelDriftMarginOrderResponse): PostCancelDriftMarginOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelDriftMarginOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelDriftMarginOrderResponse;
    static deserializeBinaryFromReader(message: PostCancelDriftMarginOrderResponse, reader: jspb.BinaryReader): PostCancelDriftMarginOrderResponse;
}

export namespace PostCancelDriftMarginOrderResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostModifyDriftOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostModifyDriftOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostModifyDriftOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): PostModifyDriftOrderRequest;
    getNewpositionside(): string;
    setNewpositionside(value: string): PostModifyDriftOrderRequest;
    getPostonly(): string;
    setPostonly(value: string): PostModifyDriftOrderRequest;
    getNewbaseamount(): number;
    setNewbaseamount(value: number): PostModifyDriftOrderRequest;
    getNewlimitprice(): number;
    setNewlimitprice(value: number): PostModifyDriftOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModifyDriftOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModifyDriftOrderRequest): PostModifyDriftOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModifyDriftOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModifyDriftOrderRequest;
    static deserializeBinaryFromReader(message: PostModifyDriftOrderRequest, reader: jspb.BinaryReader): PostModifyDriftOrderRequest;
}

export namespace PostModifyDriftOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        orderid: number,
        newpositionside: string,
        postonly: string,
        newbaseamount: number,
        newlimitprice: number,
    }
}

export class PostModifyDriftOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostModifyDriftOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModifyDriftOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostModifyDriftOrderResponse): PostModifyDriftOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModifyDriftOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModifyDriftOrderResponse;
    static deserializeBinaryFromReader(message: PostModifyDriftOrderResponse, reader: jspb.BinaryReader): PostModifyDriftOrderResponse;
}

export namespace PostModifyDriftOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostCancelPerpOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelPerpOrderRequest;
    getProject(): Project;
    setProject(value: Project): PostCancelPerpOrderRequest;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PostCancelPerpOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostCancelPerpOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): PostCancelPerpOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostCancelPerpOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelPerpOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelPerpOrderRequest): PostCancelPerpOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelPerpOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelPerpOrderRequest;
    static deserializeBinaryFromReader(message: PostCancelPerpOrderRequest, reader: jspb.BinaryReader): PostCancelPerpOrderRequest;
}

export namespace PostCancelPerpOrderRequest {
    export type AsObject = {
        owneraddress: string,
        project: Project,
        contract: common_pb.PerpContract,
        clientorderid: number,
        orderid: number,
        accountaddress: string,
    }
}

export class PostCancelPerpOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostCancelPerpOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelPerpOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelPerpOrderResponse): PostCancelPerpOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelPerpOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelPerpOrderResponse;
    static deserializeBinaryFromReader(message: PostCancelPerpOrderResponse, reader: jspb.BinaryReader): PostCancelPerpOrderResponse;
}

export namespace PostCancelPerpOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostCreateDriftUserRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCreateDriftUserRequest;
    getAction(): string;
    setAction(value: string): PostCreateDriftUserRequest;
    getSubaccountid(): number;
    setSubaccountid(value: number): PostCreateDriftUserRequest;
    getAccountname(): string;
    setAccountname(value: string): PostCreateDriftUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCreateDriftUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCreateDriftUserRequest): PostCreateDriftUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCreateDriftUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCreateDriftUserRequest;
    static deserializeBinaryFromReader(message: PostCreateDriftUserRequest, reader: jspb.BinaryReader): PostCreateDriftUserRequest;
}

export namespace PostCreateDriftUserRequest {
    export type AsObject = {
        owneraddress: string,
        action: string,
        subaccountid: number,
        accountname: string,
    }
}

export class PostCreateDriftUserResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostCreateDriftUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCreateDriftUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCreateDriftUserResponse): PostCreateDriftUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCreateDriftUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCreateDriftUserResponse;
    static deserializeBinaryFromReader(message: PostCreateDriftUserResponse, reader: jspb.BinaryReader): PostCreateDriftUserResponse;
}

export namespace PostCreateDriftUserResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetDriftUserRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftUserRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftUserRequest): GetDriftUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftUserRequest;
    static deserializeBinaryFromReader(message: GetDriftUserRequest, reader: jspb.BinaryReader): GetDriftUserRequest;
}

export namespace GetDriftUserRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
    }
}

export class GetDriftUserResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftUserResponse;
    clearUseraccountsList(): void;
    getUseraccountsList(): Array<UserDetail>;
    setUseraccountsList(value: Array<UserDetail>): GetDriftUserResponse;
    addUseraccounts(value?: UserDetail, index?: number): UserDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftUserResponse): GetDriftUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftUserResponse;
    static deserializeBinaryFromReader(message: GetDriftUserResponse, reader: jspb.BinaryReader): GetDriftUserResponse;
}

export namespace GetDriftUserResponse {
    export type AsObject = {
        context?: Context.AsObject,
        useraccountsList: Array<UserDetail.AsObject>,
    }
}

export class PostCloseDriftPerpPositionsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCloseDriftPerpPositionsRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostCloseDriftPerpPositionsRequest;
    clearContractsList(): void;
    getContractsList(): Array<string>;
    setContractsList(value: Array<string>): PostCloseDriftPerpPositionsRequest;
    addContracts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCloseDriftPerpPositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCloseDriftPerpPositionsRequest): PostCloseDriftPerpPositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCloseDriftPerpPositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCloseDriftPerpPositionsRequest;
    static deserializeBinaryFromReader(message: PostCloseDriftPerpPositionsRequest, reader: jspb.BinaryReader): PostCloseDriftPerpPositionsRequest;
}

export namespace PostCloseDriftPerpPositionsRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        contractsList: Array<string>,
    }
}

export class PostCloseDriftPerpPositionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostCloseDriftPerpPositionsResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCloseDriftPerpPositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostCloseDriftPerpPositionsResponse): PostCloseDriftPerpPositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCloseDriftPerpPositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCloseDriftPerpPositionsResponse;
    static deserializeBinaryFromReader(message: PostCloseDriftPerpPositionsResponse, reader: jspb.BinaryReader): PostCloseDriftPerpPositionsResponse;
}

export namespace PostCloseDriftPerpPositionsResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class GetDriftPerpOrderbookRequest extends jspb.Message { 
    getContract(): string;
    setContract(value: string): GetDriftPerpOrderbookRequest;
    getLimit(): number;
    setLimit(value: number): GetDriftPerpOrderbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpOrderbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpOrderbookRequest): GetDriftPerpOrderbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpOrderbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpOrderbookRequest;
    static deserializeBinaryFromReader(message: GetDriftPerpOrderbookRequest, reader: jspb.BinaryReader): GetDriftPerpOrderbookRequest;
}

export namespace GetDriftPerpOrderbookRequest {
    export type AsObject = {
        contract: string,
        limit: number,
    }
}

export class GetDriftPerpOrderbookResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftPerpOrderbookResponse;
    getContract(): string;
    setContract(value: string): GetDriftPerpOrderbookResponse;
    clearBidsList(): void;
    getBidsList(): Array<PerpOrderbookItem>;
    setBidsList(value: Array<PerpOrderbookItem>): GetDriftPerpOrderbookResponse;
    addBids(value?: PerpOrderbookItem, index?: number): PerpOrderbookItem;
    clearAsksList(): void;
    getAsksList(): Array<PerpOrderbookItem>;
    setAsksList(value: Array<PerpOrderbookItem>): GetDriftPerpOrderbookResponse;
    addAsks(value?: PerpOrderbookItem, index?: number): PerpOrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpOrderbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpOrderbookResponse): GetDriftPerpOrderbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpOrderbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpOrderbookResponse;
    static deserializeBinaryFromReader(message: GetDriftPerpOrderbookResponse, reader: jspb.BinaryReader): GetDriftPerpOrderbookResponse;
}

export namespace GetDriftPerpOrderbookResponse {
    export type AsObject = {
        context?: Context.AsObject,
        contract: string,
        bidsList: Array<PerpOrderbookItem.AsObject>,
        asksList: Array<PerpOrderbookItem.AsObject>,
    }
}

export class PostManageCollateralRequest extends jspb.Message { 
    getAccountaddress(): string;
    setAccountaddress(value: string): PostManageCollateralRequest;
    getAmount(): number;
    setAmount(value: number): PostManageCollateralRequest;
    getProject(): Project;
    setProject(value: Project): PostManageCollateralRequest;
    getType(): common_pb.PerpCollateralType;
    setType(value: common_pb.PerpCollateralType): PostManageCollateralRequest;
    getToken(): common_pb.PerpCollateralToken;
    setToken(value: common_pb.PerpCollateralToken): PostManageCollateralRequest;
    getToaccountaddress(): string;
    setToaccountaddress(value: string): PostManageCollateralRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostManageCollateralRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostManageCollateralRequest): PostManageCollateralRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostManageCollateralRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostManageCollateralRequest;
    static deserializeBinaryFromReader(message: PostManageCollateralRequest, reader: jspb.BinaryReader): PostManageCollateralRequest;
}

export namespace PostManageCollateralRequest {
    export type AsObject = {
        accountaddress: string,
        amount: number,
        project: Project,
        type: common_pb.PerpCollateralType,
        token: common_pb.PerpCollateralToken,
        toaccountaddress: string,
    }
}

export class PostManageCollateralResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostManageCollateralResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostManageCollateralResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostManageCollateralResponse): PostManageCollateralResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostManageCollateralResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostManageCollateralResponse;
    static deserializeBinaryFromReader(message: PostManageCollateralResponse, reader: jspb.BinaryReader): PostManageCollateralResponse;
}

export namespace PostManageCollateralResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetDriftOpenMarginOrdersRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenMarginOrdersRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftOpenMarginOrdersRequest;
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetDriftOpenMarginOrdersRequest;
    addMarkets(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenMarginOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenMarginOrdersRequest): GetDriftOpenMarginOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenMarginOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenMarginOrdersRequest;
    static deserializeBinaryFromReader(message: GetDriftOpenMarginOrdersRequest, reader: jspb.BinaryReader): GetDriftOpenMarginOrdersRequest;
}

export namespace GetDriftOpenMarginOrdersRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        marketsList: Array<string>,
    }
}

export class GetDriftOpenMarginOrdersResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftOpenMarginOrdersResponse;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenMarginOrdersResponse;
    clearOrdersList(): void;
    getOrdersList(): Array<DriftMarginOrder>;
    setOrdersList(value: Array<DriftMarginOrder>): GetDriftOpenMarginOrdersResponse;
    addOrders(value?: DriftMarginOrder, index?: number): DriftMarginOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenMarginOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenMarginOrdersResponse): GetDriftOpenMarginOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenMarginOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenMarginOrdersResponse;
    static deserializeBinaryFromReader(message: GetDriftOpenMarginOrdersResponse, reader: jspb.BinaryReader): GetDriftOpenMarginOrdersResponse;
}

export namespace GetDriftOpenMarginOrdersResponse {
    export type AsObject = {
        context?: Context.AsObject,
        owneraddress: string,
        ordersList: Array<DriftMarginOrder.AsObject>,
    }
}

export class DriftMarginOrder extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): DriftMarginOrder;
    getClientorderid(): number;
    setClientorderid(value: number): DriftMarginOrder;
    getMarket(): string;
    setMarket(value: string): DriftMarginOrder;
    getPositionside(): string;
    setPositionside(value: string): DriftMarginOrder;
    getOrdertype(): string;
    setOrdertype(value: string): DriftMarginOrder;
    getPrice(): number;
    setPrice(value: number): DriftMarginOrder;
    getSize(): number;
    setSize(value: number): DriftMarginOrder;
    getRemainingsize(): number;
    setRemainingsize(value: number): DriftMarginOrder;
    getStatus(): string;
    setStatus(value: string): DriftMarginOrder;
    getAccountaddress(): string;
    setAccountaddress(value: string): DriftMarginOrder;
    getSubaccountid(): number;
    setSubaccountid(value: number): DriftMarginOrder;
    getPostonly(): boolean;
    setPostonly(value: boolean): DriftMarginOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriftMarginOrder.AsObject;
    static toObject(includeInstance: boolean, msg: DriftMarginOrder): DriftMarginOrder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DriftMarginOrder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriftMarginOrder;
    static deserializeBinaryFromReader(message: DriftMarginOrder, reader: jspb.BinaryReader): DriftMarginOrder;
}

export namespace DriftMarginOrder {
    export type AsObject = {
        orderid: number,
        clientorderid: number,
        market: string,
        positionside: string,
        ordertype: string,
        price: number,
        size: number,
        remainingsize: number,
        status: string,
        accountaddress: string,
        subaccountid: number,
        postonly: boolean,
    }
}

export class GetOpenPerpOrdersRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): GetOpenPerpOrdersRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetOpenPerpOrdersRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetOpenPerpOrdersRequest;
    clearContractsList(): void;
    getContractsList(): Array<common_pb.PerpContract>;
    setContractsList(value: Array<common_pb.PerpContract>): GetOpenPerpOrdersRequest;
    addContracts(value: common_pb.PerpContract, index?: number): common_pb.PerpContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenPerpOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenPerpOrdersRequest): GetOpenPerpOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenPerpOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenPerpOrdersRequest;
    static deserializeBinaryFromReader(message: GetOpenPerpOrdersRequest, reader: jspb.BinaryReader): GetOpenPerpOrdersRequest;
}

export namespace GetOpenPerpOrdersRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        accountaddress: string,
        contractsList: Array<common_pb.PerpContract>,
    }
}

export class GetOpenPerpOrdersResponse extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetOpenPerpOrdersResponse;
    clearOrdersList(): void;
    getOrdersList(): Array<PerpOrder>;
    setOrdersList(value: Array<PerpOrder>): GetOpenPerpOrdersResponse;
    addOrders(value?: PerpOrder, index?: number): PerpOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenPerpOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenPerpOrdersResponse): GetOpenPerpOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenPerpOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenPerpOrdersResponse;
    static deserializeBinaryFromReader(message: GetOpenPerpOrdersResponse, reader: jspb.BinaryReader): GetOpenPerpOrdersResponse;
}

export namespace GetOpenPerpOrdersResponse {
    export type AsObject = {
        owneraddress: string,
        ordersList: Array<PerpOrder.AsObject>,
    }
}

export class PerpOrder extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): PerpOrder;
    getClientorderid(): number;
    setClientorderid(value: number): PerpOrder;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PerpOrder;
    getPositionside(): common_pb.PerpPositionSide;
    setPositionside(value: common_pb.PerpPositionSide): PerpOrder;
    getOrdertype(): string;
    setOrdertype(value: string): PerpOrder;
    getPrice(): number;
    setPrice(value: number): PerpOrder;
    getSize(): number;
    setSize(value: number): PerpOrder;
    getRemainingsize(): number;
    setRemainingsize(value: number): PerpOrder;
    getStatus(): string;
    setStatus(value: string): PerpOrder;
    getAccountaddress(): string;
    setAccountaddress(value: string): PerpOrder;
    getSubaccountid(): number;
    setSubaccountid(value: number): PerpOrder;
    getPostonly(): boolean;
    setPostonly(value: boolean): PerpOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerpOrder.AsObject;
    static toObject(includeInstance: boolean, msg: PerpOrder): PerpOrder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerpOrder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerpOrder;
    static deserializeBinaryFromReader(message: PerpOrder, reader: jspb.BinaryReader): PerpOrder;
}

export namespace PerpOrder {
    export type AsObject = {
        orderid: number,
        clientorderid: number,
        contract: common_pb.PerpContract,
        positionside: common_pb.PerpPositionSide,
        ordertype: string,
        price: number,
        size: number,
        remainingsize: number,
        status: string,
        accountaddress: string,
        subaccountid: number,
        postonly: boolean,
    }
}

export class GetPerpPositionsRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): GetPerpPositionsRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetPerpPositionsRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetPerpPositionsRequest;
    clearContractsList(): void;
    getContractsList(): Array<common_pb.PerpContract>;
    setContractsList(value: Array<common_pb.PerpContract>): GetPerpPositionsRequest;
    addContracts(value: common_pb.PerpContract, index?: number): common_pb.PerpContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpPositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpPositionsRequest): GetPerpPositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpPositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpPositionsRequest;
    static deserializeBinaryFromReader(message: GetPerpPositionsRequest, reader: jspb.BinaryReader): GetPerpPositionsRequest;
}

export namespace GetPerpPositionsRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        accountaddress: string,
        contractsList: Array<common_pb.PerpContract>,
    }
}

export class GetPerpPositionsResponse extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetPerpPositionsResponse;
    clearPerppositionsList(): void;
    getPerppositionsList(): Array<PerpPosition>;
    setPerppositionsList(value: Array<PerpPosition>): GetPerpPositionsResponse;
    addPerppositions(value?: PerpPosition, index?: number): PerpPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpPositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpPositionsResponse): GetPerpPositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpPositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpPositionsResponse;
    static deserializeBinaryFromReader(message: GetPerpPositionsResponse, reader: jspb.BinaryReader): GetPerpPositionsResponse;
}

export namespace GetPerpPositionsResponse {
    export type AsObject = {
        owneraddress: string,
        perppositionsList: Array<PerpPosition.AsObject>,
    }
}

export class PostClosePerpPositionsRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): PostClosePerpPositionsRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostClosePerpPositionsRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostClosePerpPositionsRequest;
    clearContractsList(): void;
    getContractsList(): Array<common_pb.PerpContract>;
    setContractsList(value: Array<common_pb.PerpContract>): PostClosePerpPositionsRequest;
    addContracts(value: common_pb.PerpContract, index?: number): common_pb.PerpContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostClosePerpPositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostClosePerpPositionsRequest): PostClosePerpPositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostClosePerpPositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostClosePerpPositionsRequest;
    static deserializeBinaryFromReader(message: PostClosePerpPositionsRequest, reader: jspb.BinaryReader): PostClosePerpPositionsRequest;
}

export namespace PostClosePerpPositionsRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        accountaddress: string,
        contractsList: Array<common_pb.PerpContract>,
    }
}

export class PostClosePerpPositionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostClosePerpPositionsResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostClosePerpPositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostClosePerpPositionsResponse): PostClosePerpPositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostClosePerpPositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostClosePerpPositionsResponse;
    static deserializeBinaryFromReader(message: PostClosePerpPositionsResponse, reader: jspb.BinaryReader): PostClosePerpPositionsResponse;
}

export namespace PostClosePerpPositionsResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PerpPosition extends jspb.Message { 
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PerpPosition;
    getVolumeavailable(): number;
    setVolumeavailable(value: number): PerpPosition;
    getVolumeinorder(): number;
    setVolumeinorder(value: number): PerpPosition;
    getPositionmargin(): number;
    setPositionmargin(value: number): PerpPosition;
    getPositionside(): common_pb.PerpPositionSide;
    setPositionside(value: common_pb.PerpPositionSide): PerpPosition;
    getNotionalvalue(): number;
    setNotionalvalue(value: number): PerpPosition;
    getIndexprice(): number;
    setIndexprice(value: number): PerpPosition;
    getLiquidationprice(): number;
    setLiquidationprice(value: number): PerpPosition;
    getAccountaddress(): string;
    setAccountaddress(value: string): PerpPosition;
    getSubaccountid(): number;
    setSubaccountid(value: number): PerpPosition;
    getUnrealizedpnl(): number;
    setUnrealizedpnl(value: number): PerpPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerpPosition.AsObject;
    static toObject(includeInstance: boolean, msg: PerpPosition): PerpPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerpPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerpPosition;
    static deserializeBinaryFromReader(message: PerpPosition, reader: jspb.BinaryReader): PerpPosition;
}

export namespace PerpPosition {
    export type AsObject = {
        contract: common_pb.PerpContract,
        volumeavailable: number,
        volumeinorder: number,
        positionmargin: number,
        positionside: common_pb.PerpPositionSide,
        notionalvalue: number,
        indexprice: number,
        liquidationprice: number,
        accountaddress: string,
        subaccountid: number,
        unrealizedpnl: number,
    }
}

export class PostPerpOrderRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): PostPerpOrderRequest;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostPerpOrderRequest;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PostPerpOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostPerpOrderRequest;
    getPositionside(): common_pb.PerpPositionSide;
    setPositionside(value: common_pb.PerpPositionSide): PostPerpOrderRequest;
    getSlippage(): number;
    setSlippage(value: number): PostPerpOrderRequest;
    getType(): common_pb.PerpOrderType;
    setType(value: common_pb.PerpOrderType): PostPerpOrderRequest;
    getAmount(): number;
    setAmount(value: number): PostPerpOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostPerpOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostPerpOrderRequest;
    getPostonly(): common_pb.PostOnlyParams;
    setPostonly(value: common_pb.PostOnlyParams): PostPerpOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostPerpOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostPerpOrderRequest): PostPerpOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostPerpOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostPerpOrderRequest;
    static deserializeBinaryFromReader(message: PostPerpOrderRequest, reader: jspb.BinaryReader): PostPerpOrderRequest;
}

export namespace PostPerpOrderRequest {
    export type AsObject = {
        project: Project,
        owneraddress: string,
        contract: common_pb.PerpContract,
        accountaddress: string,
        positionside: common_pb.PerpPositionSide,
        slippage: number,
        type: common_pb.PerpOrderType,
        amount: number,
        price: number,
        clientorderid: number,
        postonly: common_pb.PostOnlyParams,
    }
}

export class PostPerpOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostPerpOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostPerpOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostPerpOrderResponse): PostPerpOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostPerpOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostPerpOrderResponse;
    static deserializeBinaryFromReader(message: PostPerpOrderResponse, reader: jspb.BinaryReader): PostPerpOrderResponse;
}

export namespace PostPerpOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostDriftPerpOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostDriftPerpOrderRequest;
    getContract(): string;
    setContract(value: string): PostDriftPerpOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostDriftPerpOrderRequest;
    getPositionside(): string;
    setPositionside(value: string): PostDriftPerpOrderRequest;
    getSlippage(): number;
    setSlippage(value: number): PostDriftPerpOrderRequest;
    getType(): string;
    setType(value: string): PostDriftPerpOrderRequest;
    getAmount(): number;
    setAmount(value: number): PostDriftPerpOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostDriftPerpOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostDriftPerpOrderRequest;
    getPostonly(): string;
    setPostonly(value: string): PostDriftPerpOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftPerpOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftPerpOrderRequest): PostDriftPerpOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftPerpOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftPerpOrderRequest;
    static deserializeBinaryFromReader(message: PostDriftPerpOrderRequest, reader: jspb.BinaryReader): PostDriftPerpOrderRequest;
}

export namespace PostDriftPerpOrderRequest {
    export type AsObject = {
        owneraddress: string,
        contract: string,
        accountaddress: string,
        positionside: string,
        slippage: number,
        type: string,
        amount: number,
        price: number,
        clientorderid: number,
        postonly: string,
    }
}

export class PostDriftPerpOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostDriftPerpOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftPerpOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftPerpOrderResponse): PostDriftPerpOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftPerpOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftPerpOrderResponse;
    static deserializeBinaryFromReader(message: PostDriftPerpOrderResponse, reader: jspb.BinaryReader): PostDriftPerpOrderResponse;
}

export namespace PostDriftPerpOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostDriftMarginOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostDriftMarginOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostDriftMarginOrderRequest;
    getMarket(): string;
    setMarket(value: string): PostDriftMarginOrderRequest;
    getPositionside(): string;
    setPositionside(value: string): PostDriftMarginOrderRequest;
    getSlippage(): number;
    setSlippage(value: number): PostDriftMarginOrderRequest;
    getType(): string;
    setType(value: string): PostDriftMarginOrderRequest;
    getAmount(): number;
    setAmount(value: number): PostDriftMarginOrderRequest;
    getPrice(): number;
    setPrice(value: number): PostDriftMarginOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostDriftMarginOrderRequest;
    getPostonly(): string;
    setPostonly(value: string): PostDriftMarginOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftMarginOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftMarginOrderRequest): PostDriftMarginOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftMarginOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftMarginOrderRequest;
    static deserializeBinaryFromReader(message: PostDriftMarginOrderRequest, reader: jspb.BinaryReader): PostDriftMarginOrderRequest;
}

export namespace PostDriftMarginOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        market: string,
        positionside: string,
        slippage: number,
        type: string,
        amount: number,
        price: number,
        clientorderid: number,
        postonly: string,
    }
}

export class PostDriftMarginOrderResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostDriftMarginOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftMarginOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftMarginOrderResponse): PostDriftMarginOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftMarginOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftMarginOrderResponse;
    static deserializeBinaryFromReader(message: PostDriftMarginOrderResponse, reader: jspb.BinaryReader): PostDriftMarginOrderResponse;
}

export namespace PostDriftMarginOrderResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class PostDriftEnableMarginTradingRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostDriftEnableMarginTradingRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostDriftEnableMarginTradingRequest;
    getEnablemargin(): boolean;
    setEnablemargin(value: boolean): PostDriftEnableMarginTradingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftEnableMarginTradingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftEnableMarginTradingRequest): PostDriftEnableMarginTradingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftEnableMarginTradingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftEnableMarginTradingRequest;
    static deserializeBinaryFromReader(message: PostDriftEnableMarginTradingRequest, reader: jspb.BinaryReader): PostDriftEnableMarginTradingRequest;
}

export namespace PostDriftEnableMarginTradingRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        enablemargin: boolean,
    }
}

export class PostDriftEnableMarginTradingResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostDriftEnableMarginTradingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftEnableMarginTradingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftEnableMarginTradingResponse): PostDriftEnableMarginTradingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftEnableMarginTradingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftEnableMarginTradingResponse;
    static deserializeBinaryFromReader(message: PostDriftEnableMarginTradingResponse, reader: jspb.BinaryReader): PostDriftEnableMarginTradingResponse;
}

export namespace PostDriftEnableMarginTradingResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetPerpTradesStreamRequest extends jspb.Message { 
    clearContractsList(): void;
    getContractsList(): Array<common_pb.PerpContract>;
    setContractsList(value: Array<common_pb.PerpContract>): GetPerpTradesStreamRequest;
    addContracts(value: common_pb.PerpContract, index?: number): common_pb.PerpContract;
    getProject(): Project;
    setProject(value: Project): GetPerpTradesStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpTradesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpTradesStreamRequest): GetPerpTradesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpTradesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpTradesStreamRequest;
    static deserializeBinaryFromReader(message: GetPerpTradesStreamRequest, reader: jspb.BinaryReader): GetPerpTradesStreamRequest;
}

export namespace GetPerpTradesStreamRequest {
    export type AsObject = {
        contractsList: Array<common_pb.PerpContract>,
        project: Project,
    }
}

export class GetPerpTradesStreamResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetPerpTradesStreamResponse;

    hasTrade(): boolean;
    clearTrade(): void;
    getTrade(): GetPerpTradesResponse | undefined;
    setTrade(value?: GetPerpTradesResponse): GetPerpTradesStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpTradesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpTradesStreamResponse): GetPerpTradesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpTradesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpTradesStreamResponse;
    static deserializeBinaryFromReader(message: GetPerpTradesStreamResponse, reader: jspb.BinaryReader): GetPerpTradesStreamResponse;
}

export namespace GetPerpTradesStreamResponse {
    export type AsObject = {
        context?: Context.AsObject,
        trade?: GetPerpTradesResponse.AsObject,
    }
}

export class GetPerpTradesResponse extends jspb.Message { 
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): GetPerpTradesResponse;
    getIndexprice(): number;
    setIndexprice(value: number): GetPerpTradesResponse;
    getMarketindex(): number;
    setMarketindex(value: number): GetPerpTradesResponse;
    getFiller(): string;
    setFiller(value: string): GetPerpTradesResponse;
    getFillerreward(): number;
    setFillerreward(value: number): GetPerpTradesResponse;
    getFillrecordid(): number;
    setFillrecordid(value: number): GetPerpTradesResponse;
    getBaseassetamountfilled(): number;
    setBaseassetamountfilled(value: number): GetPerpTradesResponse;
    getQuoteassetamountfilled(): number;
    setQuoteassetamountfilled(value: number): GetPerpTradesResponse;
    getTakerfee(): number;
    setTakerfee(value: number): GetPerpTradesResponse;
    getMakerfee(): number;
    setMakerfee(value: number): GetPerpTradesResponse;
    getReferrerreward(): number;
    setReferrerreward(value: number): GetPerpTradesResponse;
    getQuoteassetamountsurplus(): number;
    setQuoteassetamountsurplus(value: number): GetPerpTradesResponse;
    getSpotfulfillmentmethodfee(): number;
    setSpotfulfillmentmethodfee(value: number): GetPerpTradesResponse;
    getTaker(): string;
    setTaker(value: string): GetPerpTradesResponse;
    getTakerorderid(): number;
    setTakerorderid(value: number): GetPerpTradesResponse;
    getTakerorderdirection(): string;
    setTakerorderdirection(value: string): GetPerpTradesResponse;
    getTakerorderbaseassetamount(): number;
    setTakerorderbaseassetamount(value: number): GetPerpTradesResponse;
    getTakerordercumulativebaseassetamountfilled(): number;
    setTakerordercumulativebaseassetamountfilled(value: number): GetPerpTradesResponse;
    getTakerordercumulativequoteassetamountfilled(): number;
    setTakerordercumulativequoteassetamountfilled(value: number): GetPerpTradesResponse;
    getMaker(): string;
    setMaker(value: string): GetPerpTradesResponse;
    getMakerorderid(): number;
    setMakerorderid(value: number): GetPerpTradesResponse;
    getMakerorderdirection(): string;
    setMakerorderdirection(value: string): GetPerpTradesResponse;
    getMakerorderbaseassetamount(): number;
    setMakerorderbaseassetamount(value: number): GetPerpTradesResponse;
    getMakerordercumulativebaseassetamountfilled(): number;
    setMakerordercumulativebaseassetamountfilled(value: number): GetPerpTradesResponse;
    getMakerordercumulativequoteassetamountfilled(): number;
    setMakerordercumulativequoteassetamountfilled(value: number): GetPerpTradesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpTradesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpTradesResponse): GetPerpTradesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpTradesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpTradesResponse;
    static deserializeBinaryFromReader(message: GetPerpTradesResponse, reader: jspb.BinaryReader): GetPerpTradesResponse;
}

export namespace GetPerpTradesResponse {
    export type AsObject = {
        contract: common_pb.PerpContract,
        indexprice: number,
        marketindex: number,
        filler: string,
        fillerreward: number,
        fillrecordid: number,
        baseassetamountfilled: number,
        quoteassetamountfilled: number,
        takerfee: number,
        makerfee: number,
        referrerreward: number,
        quoteassetamountsurplus: number,
        spotfulfillmentmethodfee: number,
        taker: string,
        takerorderid: number,
        takerorderdirection: string,
        takerorderbaseassetamount: number,
        takerordercumulativebaseassetamountfilled: number,
        takerordercumulativequoteassetamountfilled: number,
        maker: string,
        makerorderid: number,
        makerorderdirection: string,
        makerorderbaseassetamount: number,
        makerordercumulativebaseassetamountfilled: number,
        makerordercumulativequoteassetamountfilled: number,
    }
}

export class PostSettlePNLRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostSettlePNLRequest;
    getSettleeaccountaddress(): string;
    setSettleeaccountaddress(value: string): PostSettlePNLRequest;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PostSettlePNLRequest;
    getProject(): Project;
    setProject(value: Project): PostSettlePNLRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettlePNLRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettlePNLRequest): PostSettlePNLRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettlePNLRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettlePNLRequest;
    static deserializeBinaryFromReader(message: PostSettlePNLRequest, reader: jspb.BinaryReader): PostSettlePNLRequest;
}

export namespace PostSettlePNLRequest {
    export type AsObject = {
        owneraddress: string,
        settleeaccountaddress: string,
        contract: common_pb.PerpContract,
        project: Project,
    }
}

export class PostSettlePNLResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostSettlePNLResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettlePNLResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettlePNLResponse): PostSettlePNLResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettlePNLResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettlePNLResponse;
    static deserializeBinaryFromReader(message: PostSettlePNLResponse, reader: jspb.BinaryReader): PostSettlePNLResponse;
}

export namespace PostSettlePNLResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetAssetsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetAssetsRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetAssetsRequest;
    getProject(): Project;
    setProject(value: Project): GetAssetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetsRequest): GetAssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetsRequest;
    static deserializeBinaryFromReader(message: GetAssetsRequest, reader: jspb.BinaryReader): GetAssetsRequest;
}

export namespace GetAssetsRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        project: Project,
    }
}

export class Asset extends jspb.Message { 
    getValuationasset(): string;
    setValuationasset(value: string): Asset;
    getBalance(): number;
    setBalance(value: number): Asset;
    getValuation(): number;
    setValuation(value: number): Asset;
    getAccountaddress(): string;
    setAccountaddress(value: string): Asset;
    getSubaccountid(): number;
    setSubaccountid(value: number): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
    export type AsObject = {
        valuationasset: string,
        balance: number,
        valuation: number,
        accountaddress: string,
        subaccountid: number,
    }
}

export class GetAssetsResponse extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetAssetsResponse;
    clearAssetsList(): void;
    getAssetsList(): Array<Asset>;
    setAssetsList(value: Array<Asset>): GetAssetsResponse;
    addAssets(value?: Asset, index?: number): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetsResponse): GetAssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetsResponse;
    static deserializeBinaryFromReader(message: GetAssetsResponse, reader: jspb.BinaryReader): GetAssetsResponse;
}

export namespace GetAssetsResponse {
    export type AsObject = {
        owneraddress: string,
        assetsList: Array<Asset.AsObject>,
    }
}

export class PostSettlePNLsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostSettlePNLsRequest;
    clearSettleeaccountaddressesList(): void;
    getSettleeaccountaddressesList(): Array<string>;
    setSettleeaccountaddressesList(value: Array<string>): PostSettlePNLsRequest;
    addSettleeaccountaddresses(value: string, index?: number): string;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PostSettlePNLsRequest;
    getProject(): Project;
    setProject(value: Project): PostSettlePNLsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettlePNLsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettlePNLsRequest): PostSettlePNLsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettlePNLsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettlePNLsRequest;
    static deserializeBinaryFromReader(message: PostSettlePNLsRequest, reader: jspb.BinaryReader): PostSettlePNLsRequest;
}

export namespace PostSettlePNLsRequest {
    export type AsObject = {
        owneraddress: string,
        settleeaccountaddressesList: Array<string>,
        contract: common_pb.PerpContract,
        project: Project,
    }
}

export class PostSettlePNLsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostSettlePNLsResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettlePNLsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettlePNLsResponse): PostSettlePNLsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettlePNLsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettlePNLsResponse;
    static deserializeBinaryFromReader(message: PostSettlePNLsResponse, reader: jspb.BinaryReader): PostSettlePNLsResponse;
}

export namespace PostSettlePNLsResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostLiquidatePerpRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostLiquidatePerpRequest;
    getSettleeaccountaddress(): string;
    setSettleeaccountaddress(value: string): PostLiquidatePerpRequest;
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): PostLiquidatePerpRequest;
    getAmount(): number;
    setAmount(value: number): PostLiquidatePerpRequest;
    getProject(): Project;
    setProject(value: Project): PostLiquidatePerpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostLiquidatePerpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostLiquidatePerpRequest): PostLiquidatePerpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostLiquidatePerpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostLiquidatePerpRequest;
    static deserializeBinaryFromReader(message: PostLiquidatePerpRequest, reader: jspb.BinaryReader): PostLiquidatePerpRequest;
}

export namespace PostLiquidatePerpRequest {
    export type AsObject = {
        owneraddress: string,
        settleeaccountaddress: string,
        contract: common_pb.PerpContract,
        amount: number,
        project: Project,
    }
}

export class PostLiquidatePerpResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostLiquidatePerpResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostLiquidatePerpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostLiquidatePerpResponse): PostLiquidatePerpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostLiquidatePerpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostLiquidatePerpResponse;
    static deserializeBinaryFromReader(message: PostLiquidatePerpResponse, reader: jspb.BinaryReader): PostLiquidatePerpResponse;
}

export namespace PostLiquidatePerpResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetPerpContractsRequest extends jspb.Message { 
    getProject(): Project;
    setProject(value: Project): GetPerpContractsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpContractsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpContractsRequest): GetPerpContractsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpContractsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpContractsRequest;
    static deserializeBinaryFromReader(message: GetPerpContractsRequest, reader: jspb.BinaryReader): GetPerpContractsRequest;
}

export namespace GetPerpContractsRequest {
    export type AsObject = {
        project: Project,
    }
}

export class ContractInfo extends jspb.Message { 
    getContract(): common_pb.PerpContract;
    setContract(value: common_pb.PerpContract): ContractInfo;
    getContractaddress(): string;
    setContractaddress(value: string): ContractInfo;
    getFundingrate(): number;
    setFundingrate(value: number): ContractInfo;
    getMinsize(): number;
    setMinsize(value: number): ContractInfo;
    getPerpprice(): number;
    setPerpprice(value: number): ContractInfo;
    getIndexprice(): number;
    setIndexprice(value: number): ContractInfo;
    getOpeninterest(): number;
    setOpeninterest(value: number): ContractInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractInfo;
    static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
}

export namespace ContractInfo {
    export type AsObject = {
        contract: common_pb.PerpContract,
        contractaddress: string,
        fundingrate: number,
        minsize: number,
        perpprice: number,
        indexprice: number,
        openinterest: number,
    }
}

export class GetPerpContractsResponse extends jspb.Message { 
    clearContractsList(): void;
    getContractsList(): Array<ContractInfo>;
    setContractsList(value: Array<ContractInfo>): GetPerpContractsResponse;
    addContracts(value?: ContractInfo, index?: number): ContractInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPerpContractsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPerpContractsResponse): GetPerpContractsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPerpContractsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPerpContractsResponse;
    static deserializeBinaryFromReader(message: GetPerpContractsResponse, reader: jspb.BinaryReader): GetPerpContractsResponse;
}

export namespace GetPerpContractsResponse {
    export type AsObject = {
        contractsList: Array<ContractInfo.AsObject>,
    }
}

export class GetOpenPerpOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetOpenPerpOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetOpenPerpOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): GetOpenPerpOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): GetOpenPerpOrderRequest;
    getProject(): Project;
    setProject(value: Project): GetOpenPerpOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenPerpOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenPerpOrderRequest): GetOpenPerpOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenPerpOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenPerpOrderRequest;
    static deserializeBinaryFromReader(message: GetOpenPerpOrderRequest, reader: jspb.BinaryReader): GetOpenPerpOrderRequest;
}

export namespace GetOpenPerpOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        orderid: number,
        clientorderid: number,
        project: Project,
    }
}

export class GetOpenPerpOrderResponse extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetOpenPerpOrderResponse;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): PerpOrder | undefined;
    setOrder(value?: PerpOrder): GetOpenPerpOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenPerpOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenPerpOrderResponse): GetOpenPerpOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenPerpOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenPerpOrderResponse;
    static deserializeBinaryFromReader(message: GetOpenPerpOrderResponse, reader: jspb.BinaryReader): GetOpenPerpOrderResponse;
}

export namespace GetOpenPerpOrderResponse {
    export type AsObject = {
        owneraddress: string,
        order?: PerpOrder.AsObject,
    }
}

export class GetDriftOpenMarginOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenMarginOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftOpenMarginOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): GetDriftOpenMarginOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): GetDriftOpenMarginOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenMarginOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenMarginOrderRequest): GetDriftOpenMarginOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenMarginOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenMarginOrderRequest;
    static deserializeBinaryFromReader(message: GetDriftOpenMarginOrderRequest, reader: jspb.BinaryReader): GetDriftOpenMarginOrderRequest;
}

export namespace GetDriftOpenMarginOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        orderid: number,
        clientorderid: number,
    }
}

export class GetDriftOpenMarginOrderResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftOpenMarginOrderResponse;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenMarginOrderResponse;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): DriftMarginOrder | undefined;
    setOrder(value?: DriftMarginOrder): GetDriftOpenMarginOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenMarginOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenMarginOrderResponse): GetDriftOpenMarginOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenMarginOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenMarginOrderResponse;
    static deserializeBinaryFromReader(message: GetDriftOpenMarginOrderResponse, reader: jspb.BinaryReader): GetDriftOpenMarginOrderResponse;
}

export namespace GetDriftOpenMarginOrderResponse {
    export type AsObject = {
        context?: Context.AsObject,
        owneraddress: string,
        order?: DriftMarginOrder.AsObject,
    }
}

export class GetDriftOpenPerpOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenPerpOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftOpenPerpOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): GetDriftOpenPerpOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): GetDriftOpenPerpOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenPerpOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenPerpOrderRequest): GetDriftOpenPerpOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenPerpOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenPerpOrderRequest;
    static deserializeBinaryFromReader(message: GetDriftOpenPerpOrderRequest, reader: jspb.BinaryReader): GetDriftOpenPerpOrderRequest;
}

export namespace GetDriftOpenPerpOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        orderid: number,
        clientorderid: number,
    }
}

export class GetDriftOpenPerpOrderResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftOpenPerpOrderResponse;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenPerpOrderResponse;

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): DriftPerpOrder | undefined;
    setOrder(value?: DriftPerpOrder): GetDriftOpenPerpOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenPerpOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenPerpOrderResponse): GetDriftOpenPerpOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenPerpOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenPerpOrderResponse;
    static deserializeBinaryFromReader(message: GetDriftOpenPerpOrderResponse, reader: jspb.BinaryReader): GetDriftOpenPerpOrderResponse;
}

export namespace GetDriftOpenPerpOrderResponse {
    export type AsObject = {
        context?: Context.AsObject,
        owneraddress: string,
        order?: DriftPerpOrder.AsObject,
    }
}

export class PostDriftManageCollateralRequest extends jspb.Message { 
    getAccountaddress(): string;
    setAccountaddress(value: string): PostDriftManageCollateralRequest;
    getAmount(): number;
    setAmount(value: number): PostDriftManageCollateralRequest;
    getType(): string;
    setType(value: string): PostDriftManageCollateralRequest;
    getToken(): string;
    setToken(value: string): PostDriftManageCollateralRequest;
    getToaccountaddress(): string;
    setToaccountaddress(value: string): PostDriftManageCollateralRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftManageCollateralRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftManageCollateralRequest): PostDriftManageCollateralRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftManageCollateralRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftManageCollateralRequest;
    static deserializeBinaryFromReader(message: PostDriftManageCollateralRequest, reader: jspb.BinaryReader): PostDriftManageCollateralRequest;
}

export namespace PostDriftManageCollateralRequest {
    export type AsObject = {
        accountaddress: string,
        amount: number,
        type: string,
        token: string,
        toaccountaddress: string,
    }
}

export class PostDriftManageCollateralResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostDriftManageCollateralResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftManageCollateralResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftManageCollateralResponse): PostDriftManageCollateralResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftManageCollateralResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftManageCollateralResponse;
    static deserializeBinaryFromReader(message: PostDriftManageCollateralResponse, reader: jspb.BinaryReader): PostDriftManageCollateralResponse;
}

export namespace PostDriftManageCollateralResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetDriftPerpContractsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpContractsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpContractsRequest): GetDriftPerpContractsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpContractsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpContractsRequest;
    static deserializeBinaryFromReader(message: GetDriftPerpContractsRequest, reader: jspb.BinaryReader): GetDriftPerpContractsRequest;
}

export namespace GetDriftPerpContractsRequest {
    export type AsObject = {
    }
}

export class GetDriftPerpContractsResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftPerpContractsResponse;
    clearContractsList(): void;
    getContractsList(): Array<ContractInfo>;
    setContractsList(value: Array<ContractInfo>): GetDriftPerpContractsResponse;
    addContracts(value?: ContractInfo, index?: number): ContractInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpContractsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpContractsResponse): GetDriftPerpContractsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpContractsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpContractsResponse;
    static deserializeBinaryFromReader(message: GetDriftPerpContractsResponse, reader: jspb.BinaryReader): GetDriftPerpContractsResponse;
}

export namespace GetDriftPerpContractsResponse {
    export type AsObject = {
        context?: Context.AsObject,
        contractsList: Array<ContractInfo.AsObject>,
    }
}

export class PostDriftSettlePNLRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostDriftSettlePNLRequest;
    getSettleeaccountaddress(): string;
    setSettleeaccountaddress(value: string): PostDriftSettlePNLRequest;
    getContract(): string;
    setContract(value: string): PostDriftSettlePNLRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftSettlePNLRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftSettlePNLRequest): PostDriftSettlePNLRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftSettlePNLRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftSettlePNLRequest;
    static deserializeBinaryFromReader(message: PostDriftSettlePNLRequest, reader: jspb.BinaryReader): PostDriftSettlePNLRequest;
}

export namespace PostDriftSettlePNLRequest {
    export type AsObject = {
        owneraddress: string,
        settleeaccountaddress: string,
        contract: string,
    }
}

export class PostDriftSettlePNLResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostDriftSettlePNLResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftSettlePNLResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftSettlePNLResponse): PostDriftSettlePNLResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftSettlePNLResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftSettlePNLResponse;
    static deserializeBinaryFromReader(message: PostDriftSettlePNLResponse, reader: jspb.BinaryReader): PostDriftSettlePNLResponse;
}

export namespace PostDriftSettlePNLResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class GetDriftAssetsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftAssetsRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftAssetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftAssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftAssetsRequest): GetDriftAssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftAssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftAssetsRequest;
    static deserializeBinaryFromReader(message: GetDriftAssetsRequest, reader: jspb.BinaryReader): GetDriftAssetsRequest;
}

export namespace GetDriftAssetsRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
    }
}

export class GetDriftAssetsResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftAssetsResponse;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftAssetsResponse;
    clearAssetsList(): void;
    getAssetsList(): Array<Asset>;
    setAssetsList(value: Array<Asset>): GetDriftAssetsResponse;
    addAssets(value?: Asset, index?: number): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftAssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftAssetsResponse): GetDriftAssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftAssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftAssetsResponse;
    static deserializeBinaryFromReader(message: GetDriftAssetsResponse, reader: jspb.BinaryReader): GetDriftAssetsResponse;
}

export namespace GetDriftAssetsResponse {
    export type AsObject = {
        context?: Context.AsObject,
        owneraddress: string,
        assetsList: Array<Asset.AsObject>,
    }
}

export class PostDriftSettlePNLsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostDriftSettlePNLsRequest;
    clearSettleeaccountaddressesList(): void;
    getSettleeaccountaddressesList(): Array<string>;
    setSettleeaccountaddressesList(value: Array<string>): PostDriftSettlePNLsRequest;
    addSettleeaccountaddresses(value: string, index?: number): string;
    getContract(): string;
    setContract(value: string): PostDriftSettlePNLsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftSettlePNLsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftSettlePNLsRequest): PostDriftSettlePNLsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftSettlePNLsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftSettlePNLsRequest;
    static deserializeBinaryFromReader(message: PostDriftSettlePNLsRequest, reader: jspb.BinaryReader): PostDriftSettlePNLsRequest;
}

export namespace PostDriftSettlePNLsRequest {
    export type AsObject = {
        owneraddress: string,
        settleeaccountaddressesList: Array<string>,
        contract: string,
    }
}

export class PostDriftSettlePNLsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostDriftSettlePNLsResponse;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftSettlePNLsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftSettlePNLsResponse): PostDriftSettlePNLsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftSettlePNLsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftSettlePNLsResponse;
    static deserializeBinaryFromReader(message: PostDriftSettlePNLsResponse, reader: jspb.BinaryReader): PostDriftSettlePNLsResponse;
}

export namespace PostDriftSettlePNLsResponse {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostLiquidateDriftPerpRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostLiquidateDriftPerpRequest;
    getSettleeaccountaddress(): string;
    setSettleeaccountaddress(value: string): PostLiquidateDriftPerpRequest;
    getContract(): string;
    setContract(value: string): PostLiquidateDriftPerpRequest;
    getAmount(): number;
    setAmount(value: number): PostLiquidateDriftPerpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostLiquidateDriftPerpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostLiquidateDriftPerpRequest): PostLiquidateDriftPerpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostLiquidateDriftPerpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostLiquidateDriftPerpRequest;
    static deserializeBinaryFromReader(message: PostLiquidateDriftPerpRequest, reader: jspb.BinaryReader): PostLiquidateDriftPerpRequest;
}

export namespace PostLiquidateDriftPerpRequest {
    export type AsObject = {
        owneraddress: string,
        settleeaccountaddress: string,
        contract: string,
        amount: number,
    }
}

export class PostLiquidateDriftPerpResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): TransactionMessage | undefined;
    setTransaction(value?: TransactionMessage): PostLiquidateDriftPerpResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostLiquidateDriftPerpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostLiquidateDriftPerpResponse): PostLiquidateDriftPerpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostLiquidateDriftPerpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostLiquidateDriftPerpResponse;
    static deserializeBinaryFromReader(message: PostLiquidateDriftPerpResponse, reader: jspb.BinaryReader): PostLiquidateDriftPerpResponse;
}

export namespace PostLiquidateDriftPerpResponse {
    export type AsObject = {
        transaction?: TransactionMessage.AsObject,
    }
}

export class Context extends jspb.Message { 
    getSlot(): number;
    setSlot(value: number): Context;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
}

export namespace Context {
    export type AsObject = {
        slot: number,
    }
}

export class GetDriftOpenPerpOrdersRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenPerpOrdersRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftOpenPerpOrdersRequest;
    clearContractsList(): void;
    getContractsList(): Array<string>;
    setContractsList(value: Array<string>): GetDriftOpenPerpOrdersRequest;
    addContracts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenPerpOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenPerpOrdersRequest): GetDriftOpenPerpOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenPerpOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenPerpOrdersRequest;
    static deserializeBinaryFromReader(message: GetDriftOpenPerpOrdersRequest, reader: jspb.BinaryReader): GetDriftOpenPerpOrdersRequest;
}

export namespace GetDriftOpenPerpOrdersRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        contractsList: Array<string>,
    }
}

export class GetDriftOpenPerpOrdersValue extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftOpenPerpOrdersValue;
    clearOrdersList(): void;
    getOrdersList(): Array<DriftPerpOrder>;
    setOrdersList(value: Array<DriftPerpOrder>): GetDriftOpenPerpOrdersValue;
    addOrders(value?: DriftPerpOrder, index?: number): DriftPerpOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenPerpOrdersValue.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenPerpOrdersValue): GetDriftOpenPerpOrdersValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenPerpOrdersValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenPerpOrdersValue;
    static deserializeBinaryFromReader(message: GetDriftOpenPerpOrdersValue, reader: jspb.BinaryReader): GetDriftOpenPerpOrdersValue;
}

export namespace GetDriftOpenPerpOrdersValue {
    export type AsObject = {
        owneraddress: string,
        ordersList: Array<DriftPerpOrder.AsObject>,
    }
}

export class GetDriftOpenPerpOrdersResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftOpenPerpOrdersResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetDriftOpenPerpOrdersValue | undefined;
    setData(value?: GetDriftOpenPerpOrdersValue): GetDriftOpenPerpOrdersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftOpenPerpOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftOpenPerpOrdersResponse): GetDriftOpenPerpOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftOpenPerpOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftOpenPerpOrdersResponse;
    static deserializeBinaryFromReader(message: GetDriftOpenPerpOrdersResponse, reader: jspb.BinaryReader): GetDriftOpenPerpOrdersResponse;
}

export namespace GetDriftOpenPerpOrdersResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: GetDriftOpenPerpOrdersValue.AsObject,
    }
}

export class DriftPerpOrder extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): DriftPerpOrder;
    getClientorderid(): number;
    setClientorderid(value: number): DriftPerpOrder;
    getContract(): string;
    setContract(value: string): DriftPerpOrder;
    getPositionside(): string;
    setPositionside(value: string): DriftPerpOrder;
    getOrdertype(): string;
    setOrdertype(value: string): DriftPerpOrder;
    getPrice(): number;
    setPrice(value: number): DriftPerpOrder;
    getSize(): number;
    setSize(value: number): DriftPerpOrder;
    getRemainingsize(): number;
    setRemainingsize(value: number): DriftPerpOrder;
    getStatus(): string;
    setStatus(value: string): DriftPerpOrder;
    getAccountaddress(): string;
    setAccountaddress(value: string): DriftPerpOrder;
    getSubaccountid(): number;
    setSubaccountid(value: number): DriftPerpOrder;
    getPostonly(): boolean;
    setPostonly(value: boolean): DriftPerpOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriftPerpOrder.AsObject;
    static toObject(includeInstance: boolean, msg: DriftPerpOrder): DriftPerpOrder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DriftPerpOrder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriftPerpOrder;
    static deserializeBinaryFromReader(message: DriftPerpOrder, reader: jspb.BinaryReader): DriftPerpOrder;
}

export namespace DriftPerpOrder {
    export type AsObject = {
        orderid: number,
        clientorderid: number,
        contract: string,
        positionside: string,
        ordertype: string,
        price: number,
        size: number,
        remainingsize: number,
        status: string,
        accountaddress: string,
        subaccountid: number,
        postonly: boolean,
    }
}

export class PostDriftCancelPerpOrderRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostDriftCancelPerpOrderRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): PostDriftCancelPerpOrderRequest;
    getContract(): string;
    setContract(value: string): PostDriftCancelPerpOrderRequest;
    getClientorderid(): number;
    setClientorderid(value: number): PostDriftCancelPerpOrderRequest;
    getOrderid(): number;
    setOrderid(value: number): PostDriftCancelPerpOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftCancelPerpOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftCancelPerpOrderRequest): PostDriftCancelPerpOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftCancelPerpOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftCancelPerpOrderRequest;
    static deserializeBinaryFromReader(message: PostDriftCancelPerpOrderRequest, reader: jspb.BinaryReader): PostDriftCancelPerpOrderRequest;
}

export namespace PostDriftCancelPerpOrderRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        contract: string,
        clientorderid: number,
        orderid: number,
    }
}

export class PostDriftCancelPerpOrderValue extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostDriftCancelPerpOrderValue;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftCancelPerpOrderValue.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftCancelPerpOrderValue): PostDriftCancelPerpOrderValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftCancelPerpOrderValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftCancelPerpOrderValue;
    static deserializeBinaryFromReader(message: PostDriftCancelPerpOrderValue, reader: jspb.BinaryReader): PostDriftCancelPerpOrderValue;
}

export namespace PostDriftCancelPerpOrderValue {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostDriftCancelPerpOrderResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): PostDriftCancelPerpOrderResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): PostDriftCancelPerpOrderValue | undefined;
    setData(value?: PostDriftCancelPerpOrderValue): PostDriftCancelPerpOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDriftCancelPerpOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostDriftCancelPerpOrderResponse): PostDriftCancelPerpOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDriftCancelPerpOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDriftCancelPerpOrderResponse;
    static deserializeBinaryFromReader(message: PostDriftCancelPerpOrderResponse, reader: jspb.BinaryReader): PostDriftCancelPerpOrderResponse;
}

export namespace PostDriftCancelPerpOrderResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: PostDriftCancelPerpOrderValue.AsObject,
    }
}

export class GetDriftPerpPositionsRequest extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftPerpPositionsRequest;
    getAccountaddress(): string;
    setAccountaddress(value: string): GetDriftPerpPositionsRequest;
    clearContractsList(): void;
    getContractsList(): Array<string>;
    setContractsList(value: Array<string>): GetDriftPerpPositionsRequest;
    addContracts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpPositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpPositionsRequest): GetDriftPerpPositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpPositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpPositionsRequest;
    static deserializeBinaryFromReader(message: GetDriftPerpPositionsRequest, reader: jspb.BinaryReader): GetDriftPerpPositionsRequest;
}

export namespace GetDriftPerpPositionsRequest {
    export type AsObject = {
        owneraddress: string,
        accountaddress: string,
        contractsList: Array<string>,
    }
}

export class GetDriftPerpPositionsValue extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): GetDriftPerpPositionsValue;
    clearPerppositionsList(): void;
    getPerppositionsList(): Array<DriftPerpPosition>;
    setPerppositionsList(value: Array<DriftPerpPosition>): GetDriftPerpPositionsValue;
    addPerppositions(value?: DriftPerpPosition, index?: number): DriftPerpPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpPositionsValue.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpPositionsValue): GetDriftPerpPositionsValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpPositionsValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpPositionsValue;
    static deserializeBinaryFromReader(message: GetDriftPerpPositionsValue, reader: jspb.BinaryReader): GetDriftPerpPositionsValue;
}

export namespace GetDriftPerpPositionsValue {
    export type AsObject = {
        owneraddress: string,
        perppositionsList: Array<DriftPerpPosition.AsObject>,
    }
}

export class GetDriftPerpPositionsResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftPerpPositionsResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetDriftPerpPositionsValue | undefined;
    setData(value?: GetDriftPerpPositionsValue): GetDriftPerpPositionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftPerpPositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftPerpPositionsResponse): GetDriftPerpPositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftPerpPositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftPerpPositionsResponse;
    static deserializeBinaryFromReader(message: GetDriftPerpPositionsResponse, reader: jspb.BinaryReader): GetDriftPerpPositionsResponse;
}

export namespace GetDriftPerpPositionsResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: GetDriftPerpPositionsValue.AsObject,
    }
}

export class DriftPerpPosition extends jspb.Message { 
    getContract(): string;
    setContract(value: string): DriftPerpPosition;
    getAccountaddress(): string;
    setAccountaddress(value: string): DriftPerpPosition;
    getSubaccountid(): number;
    setSubaccountid(value: number): DriftPerpPosition;
    getVolumeavailable(): number;
    setVolumeavailable(value: number): DriftPerpPosition;
    getVolumeinorder(): number;
    setVolumeinorder(value: number): DriftPerpPosition;
    getPositionmargin(): number;
    setPositionmargin(value: number): DriftPerpPosition;
    getPositionside(): string;
    setPositionside(value: string): DriftPerpPosition;
    getNotionalvalue(): number;
    setNotionalvalue(value: number): DriftPerpPosition;
    getIndexprice(): number;
    setIndexprice(value: number): DriftPerpPosition;
    getLiquidationprice(): number;
    setLiquidationprice(value: number): DriftPerpPosition;
    getUnrealizedpnl(): number;
    setUnrealizedpnl(value: number): DriftPerpPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriftPerpPosition.AsObject;
    static toObject(includeInstance: boolean, msg: DriftPerpPosition): DriftPerpPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DriftPerpPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriftPerpPosition;
    static deserializeBinaryFromReader(message: DriftPerpPosition, reader: jspb.BinaryReader): DriftPerpPosition;
}

export namespace DriftPerpPosition {
    export type AsObject = {
        contract: string,
        accountaddress: string,
        subaccountid: number,
        volumeavailable: number,
        volumeinorder: number,
        positionmargin: number,
        positionside: string,
        notionalvalue: number,
        indexprice: number,
        liquidationprice: number,
        unrealizedpnl: number,
    }
}

export class GetDriftMarginOrderbooksRequest extends jspb.Message { 
    clearMarketsList(): void;
    getMarketsList(): Array<string>;
    setMarketsList(value: Array<string>): GetDriftMarginOrderbooksRequest;
    addMarkets(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetDriftMarginOrderbooksRequest;
    getMetadata(): boolean;
    setMetadata(value: boolean): GetDriftMarginOrderbooksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarginOrderbooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarginOrderbooksRequest): GetDriftMarginOrderbooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarginOrderbooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarginOrderbooksRequest;
    static deserializeBinaryFromReader(message: GetDriftMarginOrderbooksRequest, reader: jspb.BinaryReader): GetDriftMarginOrderbooksRequest;
}

export namespace GetDriftMarginOrderbooksRequest {
    export type AsObject = {
        marketsList: Array<string>,
        limit: number,
        metadata: boolean,
    }
}

export class GetDriftMarginOrderbooksStreamResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftMarginOrderbooksStreamResponse;

    hasOrderbook(): boolean;
    clearOrderbook(): void;
    getOrderbook(): GetDriftMarginOrderbookResponse | undefined;
    setOrderbook(value?: GetDriftMarginOrderbookResponse): GetDriftMarginOrderbooksStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarginOrderbooksStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarginOrderbooksStreamResponse): GetDriftMarginOrderbooksStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarginOrderbooksStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarginOrderbooksStreamResponse;
    static deserializeBinaryFromReader(message: GetDriftMarginOrderbooksStreamResponse, reader: jspb.BinaryReader): GetDriftMarginOrderbooksStreamResponse;
}

export namespace GetDriftMarginOrderbooksStreamResponse {
    export type AsObject = {
        context?: Context.AsObject,
        orderbook?: GetDriftMarginOrderbookResponse.AsObject,
    }
}

export class GetDriftMarginOrderbookRequest extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetDriftMarginOrderbookRequest;
    getLimit(): number;
    setLimit(value: number): GetDriftMarginOrderbookRequest;
    getMetadata(): boolean;
    setMetadata(value: boolean): GetDriftMarginOrderbookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarginOrderbookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarginOrderbookRequest): GetDriftMarginOrderbookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarginOrderbookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarginOrderbookRequest;
    static deserializeBinaryFromReader(message: GetDriftMarginOrderbookRequest, reader: jspb.BinaryReader): GetDriftMarginOrderbookRequest;
}

export namespace GetDriftMarginOrderbookRequest {
    export type AsObject = {
        market: string,
        limit: number,
        metadata: boolean,
    }
}

export class GetDriftMarginOrderbookValue extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetDriftMarginOrderbookValue;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetDriftMarginOrderbookValue;
    clearBidsList(): void;
    getBidsList(): Array<DriftMarginOrderbookItem>;
    setBidsList(value: Array<DriftMarginOrderbookItem>): GetDriftMarginOrderbookValue;
    addBids(value?: DriftMarginOrderbookItem, index?: number): DriftMarginOrderbookItem;
    clearAsksList(): void;
    getAsksList(): Array<DriftMarginOrderbookItem>;
    setAsksList(value: Array<DriftMarginOrderbookItem>): GetDriftMarginOrderbookValue;
    addAsks(value?: DriftMarginOrderbookItem, index?: number): DriftMarginOrderbookItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarginOrderbookValue.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarginOrderbookValue): GetDriftMarginOrderbookValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarginOrderbookValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarginOrderbookValue;
    static deserializeBinaryFromReader(message: GetDriftMarginOrderbookValue, reader: jspb.BinaryReader): GetDriftMarginOrderbookValue;
}

export namespace GetDriftMarginOrderbookValue {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<DriftMarginOrderbookItem.AsObject>,
        asksList: Array<DriftMarginOrderbookItem.AsObject>,
    }
}

export class GetDriftMarginOrderbookResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftMarginOrderbookResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetDriftMarginOrderbookValue | undefined;
    setData(value?: GetDriftMarginOrderbookValue): GetDriftMarginOrderbookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarginOrderbookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarginOrderbookResponse): GetDriftMarginOrderbookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarginOrderbookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarginOrderbookResponse;
    static deserializeBinaryFromReader(message: GetDriftMarginOrderbookResponse, reader: jspb.BinaryReader): GetDriftMarginOrderbookResponse;
}

export namespace GetDriftMarginOrderbookResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: GetDriftMarginOrderbookValue.AsObject,
    }
}

export class DriftMarginOrderbookItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): DriftMarginOrderbookItem;
    getSize(): number;
    setSize(value: number): DriftMarginOrderbookItem;
    getOrderid(): string;
    setOrderid(value: string): DriftMarginOrderbookItem;
    getClientorderid(): number;
    setClientorderid(value: number): DriftMarginOrderbookItem;
    getOwneraddress(): string;
    setOwneraddress(value: string): DriftMarginOrderbookItem;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriftMarginOrderbookItem.AsObject;
    static toObject(includeInstance: boolean, msg: DriftMarginOrderbookItem): DriftMarginOrderbookItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DriftMarginOrderbookItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriftMarginOrderbookItem;
    static deserializeBinaryFromReader(message: DriftMarginOrderbookItem, reader: jspb.BinaryReader): DriftMarginOrderbookItem;
}

export namespace DriftMarginOrderbookItem {
    export type AsObject = {
        price: number,
        size: number,
        orderid: string,
        clientorderid: number,
        owneraddress: string,

        metadataMap: Array<[string, string]>,
    }
}

export class GetDriftMarketsRequest extends jspb.Message { 
    getMetadata(): boolean;
    setMetadata(value: boolean): GetDriftMarketsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketsRequest): GetDriftMarketsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketsRequest;
    static deserializeBinaryFromReader(message: GetDriftMarketsRequest, reader: jspb.BinaryReader): GetDriftMarketsRequest;
}

export namespace GetDriftMarketsRequest {
    export type AsObject = {
        metadata: boolean,
    }
}

export class GetDriftMarketsValue extends jspb.Message { 

    getMarketsMap(): jspb.Map<string, DriftMarket>;
    clearMarketsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketsValue.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketsValue): GetDriftMarketsValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketsValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketsValue;
    static deserializeBinaryFromReader(message: GetDriftMarketsValue, reader: jspb.BinaryReader): GetDriftMarketsValue;
}

export namespace GetDriftMarketsValue {
    export type AsObject = {

        marketsMap: Array<[string, DriftMarket.AsObject]>,
    }
}

export class GetDriftMarketsResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftMarketsResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetDriftMarketsValue | undefined;
    setData(value?: GetDriftMarketsValue): GetDriftMarketsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketsResponse): GetDriftMarketsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketsResponse;
    static deserializeBinaryFromReader(message: GetDriftMarketsResponse, reader: jspb.BinaryReader): GetDriftMarketsResponse;
}

export namespace GetDriftMarketsResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: GetDriftMarketsValue.AsObject,
    }
}

export class DriftMarket extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): DriftMarket;
    getStatus(): string;
    setStatus(value: string): DriftMarket;
    getAddress(): string;
    setAddress(value: string): DriftMarket;
    getBasemint(): string;
    setBasemint(value: string): DriftMarket;
    getQuotedmint(): string;
    setQuotedmint(value: string): DriftMarket;
    getBasedecimals(): number;
    setBasedecimals(value: number): DriftMarket;
    getQuotedecimals(): number;
    setQuotedecimals(value: number): DriftMarket;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriftMarket.AsObject;
    static toObject(includeInstance: boolean, msg: DriftMarket): DriftMarket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DriftMarket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriftMarket;
    static deserializeBinaryFromReader(message: DriftMarket, reader: jspb.BinaryReader): DriftMarket;
}

export namespace DriftMarket {
    export type AsObject = {
        market: string,
        status: string,
        address: string,
        basemint: string,
        quotedmint: string,
        basedecimals: number,
        quotedecimals: number,

        metadataMap: Array<[string, string]>,
    }
}

export class GetDriftMarketDepthRequest extends jspb.Message { 
    getContract(): string;
    setContract(value: string): GetDriftMarketDepthRequest;
    getLimit(): number;
    setLimit(value: number): GetDriftMarketDepthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketDepthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketDepthRequest): GetDriftMarketDepthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketDepthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketDepthRequest;
    static deserializeBinaryFromReader(message: GetDriftMarketDepthRequest, reader: jspb.BinaryReader): GetDriftMarketDepthRequest;
}

export namespace GetDriftMarketDepthRequest {
    export type AsObject = {
        contract: string,
        limit: number,
    }
}

export class GetDriftMarketDepthsStreamRequest extends jspb.Message { 
    clearContractsList(): void;
    getContractsList(): Array<string>;
    setContractsList(value: Array<string>): GetDriftMarketDepthsStreamRequest;
    addContracts(value: string, index?: number): string;
    getLimit(): number;
    setLimit(value: number): GetDriftMarketDepthsStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketDepthsStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketDepthsStreamRequest): GetDriftMarketDepthsStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketDepthsStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketDepthsStreamRequest;
    static deserializeBinaryFromReader(message: GetDriftMarketDepthsStreamRequest, reader: jspb.BinaryReader): GetDriftMarketDepthsStreamRequest;
}

export namespace GetDriftMarketDepthsStreamRequest {
    export type AsObject = {
        contractsList: Array<string>,
        limit: number,
    }
}

export class GetDriftMarketDepthStreamResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftMarketDepthStreamResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetDriftMarketDepthResponse | undefined;
    setData(value?: GetDriftMarketDepthResponse): GetDriftMarketDepthStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketDepthStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketDepthStreamResponse): GetDriftMarketDepthStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketDepthStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketDepthStreamResponse;
    static deserializeBinaryFromReader(message: GetDriftMarketDepthStreamResponse, reader: jspb.BinaryReader): GetDriftMarketDepthStreamResponse;
}

export namespace GetDriftMarketDepthStreamResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: GetDriftMarketDepthResponse.AsObject,
    }
}

export class DriftMarketDepthItem extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): DriftMarketDepthItem;
    getSize(): number;
    setSize(value: number): DriftMarketDepthItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriftMarketDepthItem.AsObject;
    static toObject(includeInstance: boolean, msg: DriftMarketDepthItem): DriftMarketDepthItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DriftMarketDepthItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriftMarketDepthItem;
    static deserializeBinaryFromReader(message: DriftMarketDepthItem, reader: jspb.BinaryReader): DriftMarketDepthItem;
}

export namespace DriftMarketDepthItem {
    export type AsObject = {
        price: number,
        size: number,
    }
}

export class GetDriftMarketDepthValue extends jspb.Message { 
    getContract(): string;
    setContract(value: string): GetDriftMarketDepthValue;
    clearBidsList(): void;
    getBidsList(): Array<DriftMarketDepthItem>;
    setBidsList(value: Array<DriftMarketDepthItem>): GetDriftMarketDepthValue;
    addBids(value?: DriftMarketDepthItem, index?: number): DriftMarketDepthItem;
    clearAsksList(): void;
    getAsksList(): Array<DriftMarketDepthItem>;
    setAsksList(value: Array<DriftMarketDepthItem>): GetDriftMarketDepthValue;
    addAsks(value?: DriftMarketDepthItem, index?: number): DriftMarketDepthItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketDepthValue.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketDepthValue): GetDriftMarketDepthValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketDepthValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketDepthValue;
    static deserializeBinaryFromReader(message: GetDriftMarketDepthValue, reader: jspb.BinaryReader): GetDriftMarketDepthValue;
}

export namespace GetDriftMarketDepthValue {
    export type AsObject = {
        contract: string,
        bidsList: Array<DriftMarketDepthItem.AsObject>,
        asksList: Array<DriftMarketDepthItem.AsObject>,
    }
}

export class GetDriftMarketDepthResponse extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): Context | undefined;
    setContext(value?: Context): GetDriftMarketDepthResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): GetDriftMarketDepthValue | undefined;
    setData(value?: GetDriftMarketDepthValue): GetDriftMarketDepthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDriftMarketDepthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDriftMarketDepthResponse): GetDriftMarketDepthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDriftMarketDepthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDriftMarketDepthResponse;
    static deserializeBinaryFromReader(message: GetDriftMarketDepthResponse, reader: jspb.BinaryReader): GetDriftMarketDepthResponse;
}

export namespace GetDriftMarketDepthResponse {
    export type AsObject = {
        context?: Context.AsObject,
        data?: GetDriftMarketDepthValue.AsObject,
    }
}

export class GetMarketsRequestV2 extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketsRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketsRequestV2): GetMarketsRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketsRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketsRequestV2;
    static deserializeBinaryFromReader(message: GetMarketsRequestV2, reader: jspb.BinaryReader): GetMarketsRequestV2;
}

export namespace GetMarketsRequestV2 {
    export type AsObject = {
    }
}

export class GetMarketsResponseV2 extends jspb.Message { 

    getMarketsMap(): jspb.Map<string, MarketV2>;
    clearMarketsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketsResponseV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketsResponseV2): GetMarketsResponseV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketsResponseV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketsResponseV2;
    static deserializeBinaryFromReader(message: GetMarketsResponseV2, reader: jspb.BinaryReader): GetMarketsResponseV2;
}

export namespace GetMarketsResponseV2 {
    export type AsObject = {

        marketsMap: Array<[string, MarketV2.AsObject]>,
    }
}

export class MarketV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): MarketV2;
    getAddress(): string;
    setAddress(value: string): MarketV2;
    getBasemint(): string;
    setBasemint(value: string): MarketV2;
    getQuotedmint(): string;
    setQuotedmint(value: string): MarketV2;
    getBasedecimals(): number;
    setBasedecimals(value: number): MarketV2;
    getQuotedecimals(): number;
    setQuotedecimals(value: number): MarketV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketV2.AsObject;
    static toObject(includeInstance: boolean, msg: MarketV2): MarketV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketV2;
    static deserializeBinaryFromReader(message: MarketV2, reader: jspb.BinaryReader): MarketV2;
}

export namespace MarketV2 {
    export type AsObject = {
        market: string,
        address: string,
        basemint: string,
        quotedmint: string,
        basedecimals: number,
        quotedecimals: number,
    }
}

export class GetTickersRequestV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetTickersRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersRequestV2): GetTickersRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersRequestV2;
    static deserializeBinaryFromReader(message: GetTickersRequestV2, reader: jspb.BinaryReader): GetTickersRequestV2;
}

export namespace GetTickersRequestV2 {
    export type AsObject = {
        market: string,
    }
}

export class GetTickersResponseV2 extends jspb.Message { 
    clearTickersList(): void;
    getTickersList(): Array<TickerV2>;
    setTickersList(value: Array<TickerV2>): GetTickersResponseV2;
    addTickers(value?: TickerV2, index?: number): TickerV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTickersResponseV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetTickersResponseV2): GetTickersResponseV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTickersResponseV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTickersResponseV2;
    static deserializeBinaryFromReader(message: GetTickersResponseV2, reader: jspb.BinaryReader): GetTickersResponseV2;
}

export namespace GetTickersResponseV2 {
    export type AsObject = {
        tickersList: Array<TickerV2.AsObject>,
    }
}

export class TickerV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): TickerV2;
    getMarketaddress(): string;
    setMarketaddress(value: string): TickerV2;
    getBid(): number;
    setBid(value: number): TickerV2;
    getBidsize(): number;
    setBidsize(value: number): TickerV2;
    getAsk(): number;
    setAsk(value: number): TickerV2;
    getAsksize(): number;
    setAsksize(value: number): TickerV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TickerV2.AsObject;
    static toObject(includeInstance: boolean, msg: TickerV2): TickerV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TickerV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TickerV2;
    static deserializeBinaryFromReader(message: TickerV2, reader: jspb.BinaryReader): TickerV2;
}

export namespace TickerV2 {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bid: number,
        bidsize: number,
        ask: number,
        asksize: number,
    }
}

export class GetOrderbookRequestV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderbookRequestV2;
    getLimit(): number;
    setLimit(value: number): GetOrderbookRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbookRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbookRequestV2): GetOrderbookRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbookRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbookRequestV2;
    static deserializeBinaryFromReader(message: GetOrderbookRequestV2, reader: jspb.BinaryReader): GetOrderbookRequestV2;
}

export namespace GetOrderbookRequestV2 {
    export type AsObject = {
        market: string,
        limit: number,
    }
}

export class GetOrderbookResponseV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOrderbookResponseV2;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetOrderbookResponseV2;
    clearBidsList(): void;
    getBidsList(): Array<OrderbookItemV2>;
    setBidsList(value: Array<OrderbookItemV2>): GetOrderbookResponseV2;
    addBids(value?: OrderbookItemV2, index?: number): OrderbookItemV2;
    clearAsksList(): void;
    getAsksList(): Array<OrderbookItemV2>;
    setAsksList(value: Array<OrderbookItemV2>): GetOrderbookResponseV2;
    addAsks(value?: OrderbookItemV2, index?: number): OrderbookItemV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderbookResponseV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderbookResponseV2): GetOrderbookResponseV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderbookResponseV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderbookResponseV2;
    static deserializeBinaryFromReader(message: GetOrderbookResponseV2, reader: jspb.BinaryReader): GetOrderbookResponseV2;
}

export namespace GetOrderbookResponseV2 {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<OrderbookItemV2.AsObject>,
        asksList: Array<OrderbookItemV2.AsObject>,
    }
}

export class OrderbookItemV2 extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): OrderbookItemV2;
    getSize(): number;
    setSize(value: number): OrderbookItemV2;
    getOrderid(): string;
    setOrderid(value: string): OrderbookItemV2;
    getClientorderid(): number;
    setClientorderid(value: number): OrderbookItemV2;
    getOwneraddress(): string;
    setOwneraddress(value: string): OrderbookItemV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderbookItemV2.AsObject;
    static toObject(includeInstance: boolean, msg: OrderbookItemV2): OrderbookItemV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderbookItemV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderbookItemV2;
    static deserializeBinaryFromReader(message: OrderbookItemV2, reader: jspb.BinaryReader): OrderbookItemV2;
}

export namespace OrderbookItemV2 {
    export type AsObject = {
        price: number,
        size: number,
        orderid: string,
        clientorderid: number,
        owneraddress: string,
    }
}

export class GetMarketDepthRequestV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthRequestV2;
    getLimit(): number;
    setLimit(value: number): GetMarketDepthRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthRequestV2): GetMarketDepthRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthRequestV2;
    static deserializeBinaryFromReader(message: GetMarketDepthRequestV2, reader: jspb.BinaryReader): GetMarketDepthRequestV2;
}

export namespace GetMarketDepthRequestV2 {
    export type AsObject = {
        market: string,
        limit: number,
    }
}

export class GetMarketDepthResponseV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetMarketDepthResponseV2;
    getMarketaddress(): string;
    setMarketaddress(value: string): GetMarketDepthResponseV2;
    clearBidsList(): void;
    getBidsList(): Array<MarketDepthItemV2>;
    setBidsList(value: Array<MarketDepthItemV2>): GetMarketDepthResponseV2;
    addBids(value?: MarketDepthItemV2, index?: number): MarketDepthItemV2;
    clearAsksList(): void;
    getAsksList(): Array<MarketDepthItemV2>;
    setAsksList(value: Array<MarketDepthItemV2>): GetMarketDepthResponseV2;
    addAsks(value?: MarketDepthItemV2, index?: number): MarketDepthItemV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMarketDepthResponseV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetMarketDepthResponseV2): GetMarketDepthResponseV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMarketDepthResponseV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMarketDepthResponseV2;
    static deserializeBinaryFromReader(message: GetMarketDepthResponseV2, reader: jspb.BinaryReader): GetMarketDepthResponseV2;
}

export namespace GetMarketDepthResponseV2 {
    export type AsObject = {
        market: string,
        marketaddress: string,
        bidsList: Array<MarketDepthItemV2.AsObject>,
        asksList: Array<MarketDepthItemV2.AsObject>,
    }
}

export class MarketDepthItemV2 extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): MarketDepthItemV2;
    getSize(): number;
    setSize(value: number): MarketDepthItemV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDepthItemV2.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDepthItemV2): MarketDepthItemV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDepthItemV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDepthItemV2;
    static deserializeBinaryFromReader(message: MarketDepthItemV2, reader: jspb.BinaryReader): MarketDepthItemV2;
}

export namespace MarketDepthItemV2 {
    export type AsObject = {
        price: number,
        size: number,
    }
}

export class PostOrderRequestV2 extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostOrderRequestV2;
    getPayeraddress(): string;
    setPayeraddress(value: string): PostOrderRequestV2;
    getMarket(): string;
    setMarket(value: string): PostOrderRequestV2;
    getSide(): string;
    setSide(value: string): PostOrderRequestV2;
    getType(): string;
    setType(value: string): PostOrderRequestV2;
    getAmount(): number;
    setAmount(value: number): PostOrderRequestV2;
    getPrice(): number;
    setPrice(value: number): PostOrderRequestV2;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostOrderRequestV2;
    getClientorderid(): number;
    setClientorderid(value: number): PostOrderRequestV2;
    getComputelimit(): number;
    setComputelimit(value: number): PostOrderRequestV2;
    getComputeprice(): number;
    setComputeprice(value: number): PostOrderRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderRequestV2): PostOrderRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderRequestV2;
    static deserializeBinaryFromReader(message: PostOrderRequestV2, reader: jspb.BinaryReader): PostOrderRequestV2;
}

export namespace PostOrderRequestV2 {
    export type AsObject = {
        owneraddress: string,
        payeraddress: string,
        market: string,
        side: string,
        type: string,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        computelimit: number,
        computeprice: number,
    }
}

export class PostReplaceOrderRequestV2 extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostReplaceOrderRequestV2;
    getPayeraddress(): string;
    setPayeraddress(value: string): PostReplaceOrderRequestV2;
    getMarket(): string;
    setMarket(value: string): PostReplaceOrderRequestV2;
    getSide(): string;
    setSide(value: string): PostReplaceOrderRequestV2;
    getType(): string;
    setType(value: string): PostReplaceOrderRequestV2;
    getAmount(): number;
    setAmount(value: number): PostReplaceOrderRequestV2;
    getPrice(): number;
    setPrice(value: number): PostReplaceOrderRequestV2;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostReplaceOrderRequestV2;
    getClientorderid(): number;
    setClientorderid(value: number): PostReplaceOrderRequestV2;
    getOrderid(): string;
    setOrderid(value: string): PostReplaceOrderRequestV2;
    getComputelimit(): number;
    setComputelimit(value: number): PostReplaceOrderRequestV2;
    getComputeprice(): number;
    setComputeprice(value: number): PostReplaceOrderRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostReplaceOrderRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: PostReplaceOrderRequestV2): PostReplaceOrderRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostReplaceOrderRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostReplaceOrderRequestV2;
    static deserializeBinaryFromReader(message: PostReplaceOrderRequestV2, reader: jspb.BinaryReader): PostReplaceOrderRequestV2;
}

export namespace PostReplaceOrderRequestV2 {
    export type AsObject = {
        owneraddress: string,
        payeraddress: string,
        market: string,
        side: string,
        type: string,
        amount: number,
        price: number,
        openordersaddress: string,
        clientorderid: number,
        orderid: string,
        computelimit: number,
        computeprice: number,
    }
}

export class PostCancelOrderRequestV2 extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): PostCancelOrderRequestV2;
    getSide(): string;
    setSide(value: string): PostCancelOrderRequestV2;
    getMarketaddress(): string;
    setMarketaddress(value: string): PostCancelOrderRequestV2;
    getOwneraddress(): string;
    setOwneraddress(value: string): PostCancelOrderRequestV2;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostCancelOrderRequestV2;
    getClientorderid(): number;
    setClientorderid(value: number): PostCancelOrderRequestV2;
    getComputelimit(): number;
    setComputelimit(value: number): PostCancelOrderRequestV2;
    getComputeprice(): number;
    setComputeprice(value: number): PostCancelOrderRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelOrderRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelOrderRequestV2): PostCancelOrderRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelOrderRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelOrderRequestV2;
    static deserializeBinaryFromReader(message: PostCancelOrderRequestV2, reader: jspb.BinaryReader): PostCancelOrderRequestV2;
}

export namespace PostCancelOrderRequestV2 {
    export type AsObject = {
        orderid: string,
        side: string,
        marketaddress: string,
        owneraddress: string,
        openordersaddress: string,
        clientorderid: number,
        computelimit: number,
        computeprice: number,
    }
}

export class PostCancelOrderResponseV2 extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionMessage>;
    setTransactionsList(value: Array<TransactionMessage>): PostCancelOrderResponseV2;
    addTransactions(value?: TransactionMessage, index?: number): TransactionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCancelOrderResponseV2.AsObject;
    static toObject(includeInstance: boolean, msg: PostCancelOrderResponseV2): PostCancelOrderResponseV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCancelOrderResponseV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCancelOrderResponseV2;
    static deserializeBinaryFromReader(message: PostCancelOrderResponseV2, reader: jspb.BinaryReader): PostCancelOrderResponseV2;
}

export namespace PostCancelOrderResponseV2 {
    export type AsObject = {
        transactionsList: Array<TransactionMessage.AsObject>,
    }
}

export class PostSettleRequestV2 extends jspb.Message { 
    getOwneraddress(): string;
    setOwneraddress(value: string): PostSettleRequestV2;
    getMarket(): string;
    setMarket(value: string): PostSettleRequestV2;
    getBasetokenwallet(): string;
    setBasetokenwallet(value: string): PostSettleRequestV2;
    getQuotetokenwallet(): string;
    setQuotetokenwallet(value: string): PostSettleRequestV2;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): PostSettleRequestV2;
    getComputelimit(): number;
    setComputelimit(value: number): PostSettleRequestV2;
    getComputeprice(): number;
    setComputeprice(value: number): PostSettleRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSettleRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: PostSettleRequestV2): PostSettleRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSettleRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSettleRequestV2;
    static deserializeBinaryFromReader(message: PostSettleRequestV2, reader: jspb.BinaryReader): PostSettleRequestV2;
}

export namespace PostSettleRequestV2 {
    export type AsObject = {
        owneraddress: string,
        market: string,
        basetokenwallet: string,
        quotetokenwallet: string,
        openordersaddress: string,
        computelimit: number,
        computeprice: number,
    }
}

export class GetOpenOrdersRequestV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetOpenOrdersRequestV2;
    getLimit(): number;
    setLimit(value: number): GetOpenOrdersRequestV2;
    getAddress(): string;
    setAddress(value: string): GetOpenOrdersRequestV2;
    getOpenordersaddress(): string;
    setOpenordersaddress(value: string): GetOpenOrdersRequestV2;
    getOrderid(): string;
    setOrderid(value: string): GetOpenOrdersRequestV2;
    getClientorderid(): number;
    setClientorderid(value: number): GetOpenOrdersRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenOrdersRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenOrdersRequestV2): GetOpenOrdersRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenOrdersRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenOrdersRequestV2;
    static deserializeBinaryFromReader(message: GetOpenOrdersRequestV2, reader: jspb.BinaryReader): GetOpenOrdersRequestV2;
}

export namespace GetOpenOrdersRequestV2 {
    export type AsObject = {
        market: string,
        limit: number,
        address: string,
        openordersaddress: string,
        orderid: string,
        clientorderid: number,
    }
}

export class GetUnsettledRequestV2 extends jspb.Message { 
    getMarket(): string;
    setMarket(value: string): GetUnsettledRequestV2;
    getOwneraddress(): string;
    setOwneraddress(value: string): GetUnsettledRequestV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnsettledRequestV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnsettledRequestV2): GetUnsettledRequestV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnsettledRequestV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnsettledRequestV2;
    static deserializeBinaryFromReader(message: GetUnsettledRequestV2, reader: jspb.BinaryReader): GetUnsettledRequestV2;
}

export namespace GetUnsettledRequestV2 {
    export type AsObject = {
        market: string,
        owneraddress: string,
    }
}

export class GetOpenOrdersResponseV2 extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<OrderV2>;
    setOrdersList(value: Array<OrderV2>): GetOpenOrdersResponseV2;
    addOrders(value?: OrderV2, index?: number): OrderV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenOrdersResponseV2.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenOrdersResponseV2): GetOpenOrdersResponseV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenOrdersResponseV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenOrdersResponseV2;
    static deserializeBinaryFromReader(message: GetOpenOrdersResponseV2, reader: jspb.BinaryReader): GetOpenOrdersResponseV2;
}

export namespace GetOpenOrdersResponseV2 {
    export type AsObject = {
        ordersList: Array<OrderV2.AsObject>,
    }
}

export class OrderV2 extends jspb.Message { 
    getOrderid(): string;
    setOrderid(value: string): OrderV2;
    getMarket(): string;
    setMarket(value: string): OrderV2;
    getSide(): string;
    setSide(value: string): OrderV2;
    getType(): string;
    setType(value: string): OrderV2;
    getPrice(): number;
    setPrice(value: number): OrderV2;
    getRemainingsize(): number;
    setRemainingsize(value: number): OrderV2;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): OrderV2;
    getClientorderid(): string;
    setClientorderid(value: string): OrderV2;
    getOpenorderaccount(): string;
    setOpenorderaccount(value: string): OrderV2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderV2.AsObject;
    static toObject(includeInstance: boolean, msg: OrderV2): OrderV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderV2;
    static deserializeBinaryFromReader(message: OrderV2, reader: jspb.BinaryReader): OrderV2;
}

export namespace OrderV2 {
    export type AsObject = {
        orderid: string,
        market: string,
        side: string,
        type: string,
        price: number,
        remainingsize: number,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clientorderid: string,
        openorderaccount: string,
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

export enum SubmitStrategy {
    P_UKNOWN = 0,
    P_SUBMIT_ALL = 1,
    P_ABORT_ON_FIRST_ERROR = 2,
    P_WAIT_FOR_CONFIRMATION = 3,
}

export enum Step {
    STEP0 = 0,
    STEP1 = 1,
    STEP2 = 2,
    STEP3 = 3,
}

export enum Project {
    P_UNKNOWN = 0,
    P_ALL = 1,
    P_JUPITER = 2,
    P_RAYDIUM = 3,
    P_SERUM = 4,
    P_OPENBOOK = 5,
    P_DRIFT = 6,
}
