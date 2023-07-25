// package: api
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_pb from "./api_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as google_api_visibility_pb from "./google/api/visibility_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "./protoc-gen-openapiv2/options/annotations_pb";
import * as common_pb from "./common_pb";

interface IApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRaydiumPools: IApiService_IGetRaydiumPools;
    getRaydiumQuotes: IApiService_IGetRaydiumQuotes;
    getRaydiumPrices: IApiService_IGetRaydiumPrices;
    postRaydiumSwap: IApiService_IPostRaydiumSwap;
    postRaydiumRouteSwap: IApiService_IPostRaydiumRouteSwap;
    getJupiterQuotes: IApiService_IGetJupiterQuotes;
    getJupiterPrices: IApiService_IGetJupiterPrices;
    postJupiterSwap: IApiService_IPostJupiterSwap;
    postJupiterRouteSwap: IApiService_IPostJupiterRouteSwap;
    postCloseDriftPerpPositions: IApiService_IPostCloseDriftPerpPositions;
    getDriftPerpOrderbook: IApiService_IGetDriftPerpOrderbook;
    postCreateDriftUser: IApiService_IPostCreateDriftUser;
    getDriftUser: IApiService_IGetDriftUser;
    postDriftManageCollateral: IApiService_IPostDriftManageCollateral;
    postDriftPerpOrder: IApiService_IPostDriftPerpOrder;
    postDriftSettlePNL: IApiService_IPostDriftSettlePNL;
    postDriftSettlePNLs: IApiService_IPostDriftSettlePNLs;
    getDriftAssets: IApiService_IGetDriftAssets;
    getDriftPerpContracts: IApiService_IGetDriftPerpContracts;
    postLiquidateDriftPerp: IApiService_IPostLiquidateDriftPerp;
    getDriftOpenPerpOrder: IApiService_IGetDriftOpenPerpOrder;
    getDriftOpenMarginOrder: IApiService_IGetDriftOpenMarginOrder;
    getDriftPerpPositions: IApiService_IGetDriftPerpPositions;
    getDriftOpenPerpOrders: IApiService_IGetDriftOpenPerpOrders;
    postDriftCancelPerpOrder: IApiService_IPostDriftCancelPerpOrder;
    postModifyDriftOrder: IApiService_IPostModifyDriftOrder;
    postCancelDriftMarginOrder: IApiService_IPostCancelDriftMarginOrder;
    getDriftOpenMarginOrders: IApiService_IGetDriftOpenMarginOrders;
    getDriftMarkets: IApiService_IGetDriftMarkets;
    postDriftMarginOrder: IApiService_IPostDriftMarginOrder;
    postDriftEnableMarginTrading: IApiService_IPostDriftEnableMarginTrading;
    getDriftMarginOrderbook: IApiService_IGetDriftMarginOrderbook;
    getDriftMarketDepth: IApiService_IGetDriftMarketDepth;
    getDriftMarginOrderbooksStream: IApiService_IGetDriftMarginOrderbooksStream;
    getDriftMarketDepthsStream: IApiService_IGetDriftMarketDepthsStream;
    getMarketsV2: IApiService_IGetMarketsV2;
    getTickersV2: IApiService_IGetTickersV2;
    getOrderbookV2: IApiService_IGetOrderbookV2;
    getMarketDepthV2: IApiService_IGetMarketDepthV2;
    postOrderV2: IApiService_IPostOrderV2;
    postCancelOrderV2: IApiService_IPostCancelOrderV2;
    postReplaceOrderV2: IApiService_IPostReplaceOrderV2;
    postSettleV2: IApiService_IPostSettleV2;
    getOpenOrdersV2: IApiService_IGetOpenOrdersV2;
    getUnsettledV2: IApiService_IGetUnsettledV2;
    getPrice: IApiService_IGetPrice;
    getMarkets: IApiService_IGetMarkets;
    getPools: IApiService_IGetPools;
    getTickers: IApiService_IGetTickers;
    getKline: IApiService_IGetKline;
    getOrderbook: IApiService_IGetOrderbook;
    getMarketDepth: IApiService_IGetMarketDepth;
    getTrades: IApiService_IGetTrades;
    getQuotes: IApiService_IGetQuotes;
    getServerTime: IApiService_IGetServerTime;
    getRecentBlockHash: IApiService_IGetRecentBlockHash;
    getAccountBalance: IApiService_IGetAccountBalance;
    getTokenAccounts: IApiService_IGetTokenAccounts;
    postOrder: IApiService_IPostOrder;
    postSubmit: IApiService_IPostSubmit;
    postSubmitBatch: IApiService_IPostSubmitBatch;
    postCancelOrder: IApiService_IPostCancelOrder;
    postCancelByClientOrderID: IApiService_IPostCancelByClientOrderID;
    postCancelAll: IApiService_IPostCancelAll;
    postReplaceByClientOrderID: IApiService_IPostReplaceByClientOrderID;
    postReplaceOrder: IApiService_IPostReplaceOrder;
    postSettle: IApiService_IPostSettle;
    postTradeSwap: IApiService_IPostTradeSwap;
    getOrders: IApiService_IGetOrders;
    getOpenOrders: IApiService_IGetOpenOrders;
    getOrderByID: IApiService_IGetOrderByID;
    getUnsettled: IApiService_IGetUnsettled;
    postRouteTradeSwap: IApiService_IPostRouteTradeSwap;
    postPerpOrder: IApiService_IPostPerpOrder;
    getPerpPositions: IApiService_IGetPerpPositions;
    getOpenPerpOrders: IApiService_IGetOpenPerpOrders;
    postCancelPerpOrders: IApiService_IPostCancelPerpOrders;
    postCancelPerpOrder: IApiService_IPostCancelPerpOrder;
    postClosePerpPositions: IApiService_IPostClosePerpPositions;
    getPerpOrderbook: IApiService_IGetPerpOrderbook;
    postCreateUser: IApiService_IPostCreateUser;
    getUser: IApiService_IGetUser;
    postManageCollateral: IApiService_IPostManageCollateral;
    postSettlePNL: IApiService_IPostSettlePNL;
    postSettlePNLs: IApiService_IPostSettlePNLs;
    getAssets: IApiService_IGetAssets;
    getPerpContracts: IApiService_IGetPerpContracts;
    postLiquidatePerp: IApiService_IPostLiquidatePerp;
    getOpenPerpOrder: IApiService_IGetOpenPerpOrder;
    getOrderbooksStream: IApiService_IGetOrderbooksStream;
    getMarketDepthsStream: IApiService_IGetMarketDepthsStream;
    getTickersStream: IApiService_IGetTickersStream;
    getTradesStream: IApiService_IGetTradesStream;
    getOrderStatusStream: IApiService_IGetOrderStatusStream;
    getRecentBlockHashStream: IApiService_IGetRecentBlockHashStream;
    getBlockStream: IApiService_IGetBlockStream;
    getQuotesStream: IApiService_IGetQuotesStream;
    getPoolReservesStream: IApiService_IGetPoolReservesStream;
    getPricesStream: IApiService_IGetPricesStream;
    getSwapsStream: IApiService_IGetSwapsStream;
    getPerpOrderbooksStream: IApiService_IGetPerpOrderbooksStream;
    getPerpTradesStream: IApiService_IGetPerpTradesStream;
}

interface IApiService_IGetRaydiumPools extends grpc.MethodDefinition<api_pb.GetRaydiumPoolsRequest, api_pb.GetRaydiumPoolsResponse> {
    path: "/api.Api/GetRaydiumPools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetRaydiumPoolsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetRaydiumPoolsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetRaydiumPoolsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetRaydiumPoolsResponse>;
}
interface IApiService_IGetRaydiumQuotes extends grpc.MethodDefinition<api_pb.GetRaydiumQuotesRequest, api_pb.GetRaydiumQuotesResponse> {
    path: "/api.Api/GetRaydiumQuotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetRaydiumQuotesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetRaydiumQuotesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetRaydiumQuotesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetRaydiumQuotesResponse>;
}
interface IApiService_IGetRaydiumPrices extends grpc.MethodDefinition<api_pb.GetRaydiumPricesRequest, api_pb.GetRaydiumPricesResponse> {
    path: "/api.Api/GetRaydiumPrices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetRaydiumPricesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetRaydiumPricesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetRaydiumPricesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetRaydiumPricesResponse>;
}
interface IApiService_IPostRaydiumSwap extends grpc.MethodDefinition<api_pb.PostRaydiumSwapRequest, api_pb.PostRaydiumSwapResponse> {
    path: "/api.Api/PostRaydiumSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostRaydiumSwapRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostRaydiumSwapRequest>;
    responseSerialize: grpc.serialize<api_pb.PostRaydiumSwapResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostRaydiumSwapResponse>;
}
interface IApiService_IPostRaydiumRouteSwap extends grpc.MethodDefinition<api_pb.PostRaydiumRouteSwapRequest, api_pb.PostRaydiumRouteSwapResponse> {
    path: "/api.Api/PostRaydiumRouteSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostRaydiumRouteSwapRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostRaydiumRouteSwapRequest>;
    responseSerialize: grpc.serialize<api_pb.PostRaydiumRouteSwapResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostRaydiumRouteSwapResponse>;
}
interface IApiService_IGetJupiterQuotes extends grpc.MethodDefinition<api_pb.GetJupiterQuotesRequest, api_pb.GetJupiterQuotesResponse> {
    path: "/api.Api/GetJupiterQuotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetJupiterQuotesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetJupiterQuotesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetJupiterQuotesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetJupiterQuotesResponse>;
}
interface IApiService_IGetJupiterPrices extends grpc.MethodDefinition<api_pb.GetJupiterPricesRequest, api_pb.GetJupiterPricesResponse> {
    path: "/api.Api/GetJupiterPrices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetJupiterPricesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetJupiterPricesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetJupiterPricesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetJupiterPricesResponse>;
}
interface IApiService_IPostJupiterSwap extends grpc.MethodDefinition<api_pb.PostJupiterSwapRequest, api_pb.PostJupiterSwapResponse> {
    path: "/api.Api/PostJupiterSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostJupiterSwapRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostJupiterSwapRequest>;
    responseSerialize: grpc.serialize<api_pb.PostJupiterSwapResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostJupiterSwapResponse>;
}
interface IApiService_IPostJupiterRouteSwap extends grpc.MethodDefinition<api_pb.PostJupiterRouteSwapRequest, api_pb.PostJupiterRouteSwapResponse> {
    path: "/api.Api/PostJupiterRouteSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostJupiterRouteSwapRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostJupiterRouteSwapRequest>;
    responseSerialize: grpc.serialize<api_pb.PostJupiterRouteSwapResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostJupiterRouteSwapResponse>;
}
interface IApiService_IPostCloseDriftPerpPositions extends grpc.MethodDefinition<api_pb.PostCloseDriftPerpPositionsRequest, api_pb.PostCloseDriftPerpPositionsResponse> {
    path: "/api.Api/PostCloseDriftPerpPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCloseDriftPerpPositionsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCloseDriftPerpPositionsRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCloseDriftPerpPositionsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCloseDriftPerpPositionsResponse>;
}
interface IApiService_IGetDriftPerpOrderbook extends grpc.MethodDefinition<api_pb.GetDriftPerpOrderbookRequest, api_pb.GetDriftPerpOrderbookResponse> {
    path: "/api.Api/GetDriftPerpOrderbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftPerpOrderbookRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftPerpOrderbookRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftPerpOrderbookResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftPerpOrderbookResponse>;
}
interface IApiService_IPostCreateDriftUser extends grpc.MethodDefinition<api_pb.PostCreateDriftUserRequest, api_pb.PostCreateDriftUserResponse> {
    path: "/api.Api/PostCreateDriftUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCreateDriftUserRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCreateDriftUserRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCreateDriftUserResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCreateDriftUserResponse>;
}
interface IApiService_IGetDriftUser extends grpc.MethodDefinition<api_pb.GetDriftUserRequest, api_pb.GetDriftUserResponse> {
    path: "/api.Api/GetDriftUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftUserRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftUserRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftUserResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftUserResponse>;
}
interface IApiService_IPostDriftManageCollateral extends grpc.MethodDefinition<api_pb.PostDriftManageCollateralRequest, api_pb.PostDriftManageCollateralResponse> {
    path: "/api.Api/PostDriftManageCollateral";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftManageCollateralRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftManageCollateralRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftManageCollateralResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftManageCollateralResponse>;
}
interface IApiService_IPostDriftPerpOrder extends grpc.MethodDefinition<api_pb.PostDriftPerpOrderRequest, api_pb.PostDriftPerpOrderResponse> {
    path: "/api.Api/PostDriftPerpOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftPerpOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftPerpOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftPerpOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftPerpOrderResponse>;
}
interface IApiService_IPostDriftSettlePNL extends grpc.MethodDefinition<api_pb.PostDriftSettlePNLRequest, api_pb.PostDriftSettlePNLResponse> {
    path: "/api.Api/PostDriftSettlePNL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftSettlePNLRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftSettlePNLRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftSettlePNLResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftSettlePNLResponse>;
}
interface IApiService_IPostDriftSettlePNLs extends grpc.MethodDefinition<api_pb.PostDriftSettlePNLsRequest, api_pb.PostDriftSettlePNLsResponse> {
    path: "/api.Api/PostDriftSettlePNLs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftSettlePNLsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftSettlePNLsRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftSettlePNLsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftSettlePNLsResponse>;
}
interface IApiService_IGetDriftAssets extends grpc.MethodDefinition<api_pb.GetDriftAssetsRequest, api_pb.GetDriftAssetsResponse> {
    path: "/api.Api/GetDriftAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftAssetsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftAssetsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftAssetsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftAssetsResponse>;
}
interface IApiService_IGetDriftPerpContracts extends grpc.MethodDefinition<api_pb.GetDriftPerpContractsRequest, api_pb.GetDriftPerpContractsResponse> {
    path: "/api.Api/GetDriftPerpContracts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftPerpContractsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftPerpContractsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftPerpContractsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftPerpContractsResponse>;
}
interface IApiService_IPostLiquidateDriftPerp extends grpc.MethodDefinition<api_pb.PostLiquidateDriftPerpRequest, api_pb.PostLiquidateDriftPerpResponse> {
    path: "/api.Api/PostLiquidateDriftPerp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostLiquidateDriftPerpRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostLiquidateDriftPerpRequest>;
    responseSerialize: grpc.serialize<api_pb.PostLiquidateDriftPerpResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostLiquidateDriftPerpResponse>;
}
interface IApiService_IGetDriftOpenPerpOrder extends grpc.MethodDefinition<api_pb.GetDriftOpenPerpOrderRequest, api_pb.GetDriftOpenPerpOrderResponse> {
    path: "/api.Api/GetDriftOpenPerpOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftOpenPerpOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftOpenPerpOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftOpenPerpOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftOpenPerpOrderResponse>;
}
interface IApiService_IGetDriftOpenMarginOrder extends grpc.MethodDefinition<api_pb.GetDriftOpenMarginOrderRequest, api_pb.GetDriftOpenMarginOrderResponse> {
    path: "/api.Api/GetDriftOpenMarginOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftOpenMarginOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftOpenMarginOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftOpenMarginOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftOpenMarginOrderResponse>;
}
interface IApiService_IGetDriftPerpPositions extends grpc.MethodDefinition<api_pb.GetDriftPerpPositionsRequest, api_pb.GetDriftPerpPositionsResponse> {
    path: "/api.Api/GetDriftPerpPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftPerpPositionsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftPerpPositionsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftPerpPositionsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftPerpPositionsResponse>;
}
interface IApiService_IGetDriftOpenPerpOrders extends grpc.MethodDefinition<api_pb.GetDriftOpenPerpOrdersRequest, api_pb.GetDriftOpenPerpOrdersResponse> {
    path: "/api.Api/GetDriftOpenPerpOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftOpenPerpOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftOpenPerpOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftOpenPerpOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftOpenPerpOrdersResponse>;
}
interface IApiService_IPostDriftCancelPerpOrder extends grpc.MethodDefinition<api_pb.PostDriftCancelPerpOrderRequest, api_pb.PostDriftCancelPerpOrderResponse> {
    path: "/api.Api/PostDriftCancelPerpOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftCancelPerpOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftCancelPerpOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftCancelPerpOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftCancelPerpOrderResponse>;
}
interface IApiService_IPostModifyDriftOrder extends grpc.MethodDefinition<api_pb.PostModifyDriftOrderRequest, api_pb.PostModifyDriftOrderResponse> {
    path: "/api.Api/PostModifyDriftOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostModifyDriftOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostModifyDriftOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostModifyDriftOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostModifyDriftOrderResponse>;
}
interface IApiService_IPostCancelDriftMarginOrder extends grpc.MethodDefinition<api_pb.PostCancelDriftMarginOrderRequest, api_pb.PostCancelDriftMarginOrderResponse> {
    path: "/api.Api/PostCancelDriftMarginOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelDriftMarginOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelDriftMarginOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCancelDriftMarginOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelDriftMarginOrderResponse>;
}
interface IApiService_IGetDriftOpenMarginOrders extends grpc.MethodDefinition<api_pb.GetDriftOpenMarginOrdersRequest, api_pb.GetDriftOpenMarginOrdersResponse> {
    path: "/api.Api/GetDriftOpenMarginOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftOpenMarginOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftOpenMarginOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftOpenMarginOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftOpenMarginOrdersResponse>;
}
interface IApiService_IGetDriftMarkets extends grpc.MethodDefinition<api_pb.GetDriftMarketsRequest, api_pb.GetDriftMarketsResponse> {
    path: "/api.Api/GetDriftMarkets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftMarketsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftMarketsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftMarketsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftMarketsResponse>;
}
interface IApiService_IPostDriftMarginOrder extends grpc.MethodDefinition<api_pb.PostDriftMarginOrderRequest, api_pb.PostDriftMarginOrderResponse> {
    path: "/api.Api/PostDriftMarginOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftMarginOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftMarginOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftMarginOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftMarginOrderResponse>;
}
interface IApiService_IPostDriftEnableMarginTrading extends grpc.MethodDefinition<api_pb.PostDriftEnableMarginTradingRequest, api_pb.PostDriftEnableMarginTradingResponse> {
    path: "/api.Api/PostDriftEnableMarginTrading";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftEnableMarginTradingRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftEnableMarginTradingRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftEnableMarginTradingResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftEnableMarginTradingResponse>;
}
interface IApiService_IGetDriftMarginOrderbook extends grpc.MethodDefinition<api_pb.GetDriftMarginOrderbookRequest, api_pb.GetDriftMarginOrderbookResponse> {
    path: "/api.Api/GetDriftMarginOrderbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftMarginOrderbookRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftMarginOrderbookRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftMarginOrderbookResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftMarginOrderbookResponse>;
}
interface IApiService_IGetDriftMarketDepth extends grpc.MethodDefinition<api_pb.GetDriftMarketDepthRequest, api_pb.GetDriftMarketDepthResponse> {
    path: "/api.Api/GetDriftMarketDepth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftMarketDepthRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftMarketDepthRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftMarketDepthResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftMarketDepthResponse>;
}
interface IApiService_IGetDriftMarginOrderbooksStream extends grpc.MethodDefinition<api_pb.GetDriftMarginOrderbooksRequest, api_pb.GetDriftMarginOrderbooksStreamResponse> {
    path: "/api.Api/GetDriftMarginOrderbooksStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetDriftMarginOrderbooksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftMarginOrderbooksRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftMarginOrderbooksStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftMarginOrderbooksStreamResponse>;
}
interface IApiService_IGetDriftMarketDepthsStream extends grpc.MethodDefinition<api_pb.GetDriftMarketDepthsStreamRequest, api_pb.GetDriftMarketDepthStreamResponse> {
    path: "/api.Api/GetDriftMarketDepthsStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetDriftMarketDepthsStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftMarketDepthsStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftMarketDepthStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftMarketDepthStreamResponse>;
}
interface IApiService_IGetMarketsV2 extends grpc.MethodDefinition<api_pb.GetMarketsRequestV2, api_pb.GetMarketsResponseV2> {
    path: "/api.Api/GetMarketsV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetMarketsRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetMarketsRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetMarketsResponseV2>;
    responseDeserialize: grpc.deserialize<api_pb.GetMarketsResponseV2>;
}
interface IApiService_IGetTickersV2 extends grpc.MethodDefinition<api_pb.GetTickersRequestV2, api_pb.GetTickersResponseV2> {
    path: "/api.Api/GetTickersV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTickersRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetTickersRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetTickersResponseV2>;
    responseDeserialize: grpc.deserialize<api_pb.GetTickersResponseV2>;
}
interface IApiService_IGetOrderbookV2 extends grpc.MethodDefinition<api_pb.GetOrderbookRequestV2, api_pb.GetOrderbookResponseV2> {
    path: "/api.Api/GetOrderbookV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOrderbookRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrderbookRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetOrderbookResponseV2>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrderbookResponseV2>;
}
interface IApiService_IGetMarketDepthV2 extends grpc.MethodDefinition<api_pb.GetMarketDepthRequestV2, api_pb.GetMarketDepthResponseV2> {
    path: "/api.Api/GetMarketDepthV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetMarketDepthRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetMarketDepthRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetMarketDepthResponseV2>;
    responseDeserialize: grpc.deserialize<api_pb.GetMarketDepthResponseV2>;
}
interface IApiService_IPostOrderV2 extends grpc.MethodDefinition<api_pb.PostOrderRequestV2, api_pb.PostOrderResponse> {
    path: "/api.Api/PostOrderV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostOrderRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.PostOrderRequestV2>;
    responseSerialize: grpc.serialize<api_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostOrderResponse>;
}
interface IApiService_IPostCancelOrderV2 extends grpc.MethodDefinition<api_pb.PostCancelOrderRequestV2, api_pb.PostCancelOrderResponseV2> {
    path: "/api.Api/PostCancelOrderV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelOrderRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelOrderRequestV2>;
    responseSerialize: grpc.serialize<api_pb.PostCancelOrderResponseV2>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelOrderResponseV2>;
}
interface IApiService_IPostReplaceOrderV2 extends grpc.MethodDefinition<api_pb.PostReplaceOrderRequestV2, api_pb.PostOrderResponse> {
    path: "/api.Api/PostReplaceOrderV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostReplaceOrderRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.PostReplaceOrderRequestV2>;
    responseSerialize: grpc.serialize<api_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostOrderResponse>;
}
interface IApiService_IPostSettleV2 extends grpc.MethodDefinition<api_pb.PostSettleRequestV2, api_pb.PostSettleResponse> {
    path: "/api.Api/PostSettleV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSettleRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.PostSettleRequestV2>;
    responseSerialize: grpc.serialize<api_pb.PostSettleResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSettleResponse>;
}
interface IApiService_IGetOpenOrdersV2 extends grpc.MethodDefinition<api_pb.GetOpenOrdersRequestV2, api_pb.GetOpenOrdersResponse> {
    path: "/api.Api/GetOpenOrdersV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOpenOrdersRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetOpenOrdersRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetOpenOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOpenOrdersResponse>;
}
interface IApiService_IGetUnsettledV2 extends grpc.MethodDefinition<api_pb.GetUnsettledRequestV2, api_pb.GetUnsettledResponse> {
    path: "/api.Api/GetUnsettledV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetUnsettledRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetUnsettledRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetUnsettledResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetUnsettledResponse>;
}
interface IApiService_IGetPrice extends grpc.MethodDefinition<api_pb.GetPriceRequest, api_pb.GetPriceResponse> {
    path: "/api.Api/GetPrice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetPriceRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPriceRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPriceResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPriceResponse>;
}
interface IApiService_IGetMarkets extends grpc.MethodDefinition<api_pb.GetMarketsRequest, api_pb.GetMarketsResponse> {
    path: "/api.Api/GetMarkets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetMarketsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetMarketsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetMarketsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetMarketsResponse>;
}
interface IApiService_IGetPools extends grpc.MethodDefinition<api_pb.GetPoolsRequest, api_pb.GetPoolsResponse> {
    path: "/api.Api/GetPools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetPoolsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPoolsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPoolsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPoolsResponse>;
}
interface IApiService_IGetTickers extends grpc.MethodDefinition<api_pb.GetTickersRequest, api_pb.GetTickersResponse> {
    path: "/api.Api/GetTickers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTickersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTickersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTickersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTickersResponse>;
}
interface IApiService_IGetKline extends grpc.MethodDefinition<api_pb.GetKlineRequest, api_pb.GetKlineResponse> {
    path: "/api.Api/GetKline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetKlineRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetKlineRequest>;
    responseSerialize: grpc.serialize<api_pb.GetKlineResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetKlineResponse>;
}
interface IApiService_IGetOrderbook extends grpc.MethodDefinition<api_pb.GetOrderbookRequest, api_pb.GetOrderbookResponse> {
    path: "/api.Api/GetOrderbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOrderbookRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrderbookRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOrderbookResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrderbookResponse>;
}
interface IApiService_IGetMarketDepth extends grpc.MethodDefinition<api_pb.GetMarketDepthRequest, api_pb.GetMarketDepthResponse> {
    path: "/api.Api/GetMarketDepth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetMarketDepthRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetMarketDepthRequest>;
    responseSerialize: grpc.serialize<api_pb.GetMarketDepthResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetMarketDepthResponse>;
}
interface IApiService_IGetTrades extends grpc.MethodDefinition<api_pb.GetTradesRequest, api_pb.GetTradesResponse> {
    path: "/api.Api/GetTrades";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTradesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTradesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTradesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTradesResponse>;
}
interface IApiService_IGetQuotes extends grpc.MethodDefinition<api_pb.GetQuotesRequest, api_pb.GetQuotesResponse> {
    path: "/api.Api/GetQuotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetQuotesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetQuotesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetQuotesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetQuotesResponse>;
}
interface IApiService_IGetServerTime extends grpc.MethodDefinition<api_pb.GetServerTimeRequest, api_pb.GetServerTimeResponse> {
    path: "/api.Api/GetServerTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetServerTimeRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetServerTimeRequest>;
    responseSerialize: grpc.serialize<api_pb.GetServerTimeResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetServerTimeResponse>;
}
interface IApiService_IGetRecentBlockHash extends grpc.MethodDefinition<api_pb.GetRecentBlockHashRequest, api_pb.GetRecentBlockHashResponse> {
    path: "/api.Api/GetRecentBlockHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetRecentBlockHashRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetRecentBlockHashRequest>;
    responseSerialize: grpc.serialize<api_pb.GetRecentBlockHashResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetRecentBlockHashResponse>;
}
interface IApiService_IGetAccountBalance extends grpc.MethodDefinition<api_pb.GetAccountBalanceRequest, api_pb.GetAccountBalanceResponse> {
    path: "/api.Api/GetAccountBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetAccountBalanceRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetAccountBalanceRequest>;
    responseSerialize: grpc.serialize<api_pb.GetAccountBalanceResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetAccountBalanceResponse>;
}
interface IApiService_IGetTokenAccounts extends grpc.MethodDefinition<api_pb.GetTokenAccountsRequest, api_pb.GetTokenAccountsResponse> {
    path: "/api.Api/GetTokenAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTokenAccountsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTokenAccountsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTokenAccountsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTokenAccountsResponse>;
}
interface IApiService_IPostOrder extends grpc.MethodDefinition<api_pb.PostOrderRequest, api_pb.PostOrderResponse> {
    path: "/api.Api/PostOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostOrderResponse>;
}
interface IApiService_IPostSubmit extends grpc.MethodDefinition<api_pb.PostSubmitRequest, api_pb.PostSubmitResponse> {
    path: "/api.Api/PostSubmit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSubmitRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSubmitRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSubmitResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSubmitResponse>;
}
interface IApiService_IPostSubmitBatch extends grpc.MethodDefinition<api_pb.PostSubmitBatchRequest, api_pb.PostSubmitBatchResponse> {
    path: "/api.Api/PostSubmitBatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSubmitBatchRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSubmitBatchRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSubmitBatchResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSubmitBatchResponse>;
}
interface IApiService_IPostCancelOrder extends grpc.MethodDefinition<api_pb.PostCancelOrderRequest, api_pb.PostCancelOrderResponse> {
    path: "/api.Api/PostCancelOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCancelOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelOrderResponse>;
}
interface IApiService_IPostCancelByClientOrderID extends grpc.MethodDefinition<api_pb.PostCancelByClientOrderIDRequest, api_pb.PostCancelOrderResponse> {
    path: "/api.Api/PostCancelByClientOrderID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelByClientOrderIDRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelByClientOrderIDRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCancelOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelOrderResponse>;
}
interface IApiService_IPostCancelAll extends grpc.MethodDefinition<api_pb.PostCancelAllRequest, api_pb.PostCancelAllResponse> {
    path: "/api.Api/PostCancelAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelAllRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelAllRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCancelAllResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelAllResponse>;
}
interface IApiService_IPostReplaceByClientOrderID extends grpc.MethodDefinition<api_pb.PostOrderRequest, api_pb.PostOrderResponse> {
    path: "/api.Api/PostReplaceByClientOrderID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostOrderResponse>;
}
interface IApiService_IPostReplaceOrder extends grpc.MethodDefinition<api_pb.PostReplaceOrderRequest, api_pb.PostOrderResponse> {
    path: "/api.Api/PostReplaceOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostReplaceOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostReplaceOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostOrderResponse>;
}
interface IApiService_IPostSettle extends grpc.MethodDefinition<api_pb.PostSettleRequest, api_pb.PostSettleResponse> {
    path: "/api.Api/PostSettle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSettleRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSettleRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSettleResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSettleResponse>;
}
interface IApiService_IPostTradeSwap extends grpc.MethodDefinition<api_pb.TradeSwapRequest, api_pb.TradeSwapResponse> {
    path: "/api.Api/PostTradeSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.TradeSwapRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TradeSwapRequest>;
    responseSerialize: grpc.serialize<api_pb.TradeSwapResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TradeSwapResponse>;
}
interface IApiService_IGetOrders extends grpc.MethodDefinition<api_pb.GetOrdersRequest, api_pb.GetOrdersResponse> {
    path: "/api.Api/GetOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrdersResponse>;
}
interface IApiService_IGetOpenOrders extends grpc.MethodDefinition<api_pb.GetOpenOrdersRequest, api_pb.GetOpenOrdersResponse> {
    path: "/api.Api/GetOpenOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOpenOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOpenOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOpenOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOpenOrdersResponse>;
}
interface IApiService_IGetOrderByID extends grpc.MethodDefinition<api_pb.GetOrderByIDRequest, api_pb.GetOrderByIDResponse> {
    path: "/api.Api/GetOrderByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOrderByIDRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrderByIDRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOrderByIDResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrderByIDResponse>;
}
interface IApiService_IGetUnsettled extends grpc.MethodDefinition<api_pb.GetUnsettledRequest, api_pb.GetUnsettledResponse> {
    path: "/api.Api/GetUnsettled";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetUnsettledRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetUnsettledRequest>;
    responseSerialize: grpc.serialize<api_pb.GetUnsettledResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetUnsettledResponse>;
}
interface IApiService_IPostRouteTradeSwap extends grpc.MethodDefinition<api_pb.RouteTradeSwapRequest, api_pb.TradeSwapResponse> {
    path: "/api.Api/PostRouteTradeSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.RouteTradeSwapRequest>;
    requestDeserialize: grpc.deserialize<api_pb.RouteTradeSwapRequest>;
    responseSerialize: grpc.serialize<api_pb.TradeSwapResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TradeSwapResponse>;
}
interface IApiService_IPostPerpOrder extends grpc.MethodDefinition<api_pb.PostPerpOrderRequest, api_pb.PostPerpOrderResponse> {
    path: "/api.Api/PostPerpOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostPerpOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostPerpOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostPerpOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostPerpOrderResponse>;
}
interface IApiService_IGetPerpPositions extends grpc.MethodDefinition<api_pb.GetPerpPositionsRequest, api_pb.GetPerpPositionsResponse> {
    path: "/api.Api/GetPerpPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetPerpPositionsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPerpPositionsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPerpPositionsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPerpPositionsResponse>;
}
interface IApiService_IGetOpenPerpOrders extends grpc.MethodDefinition<api_pb.GetOpenPerpOrdersRequest, api_pb.GetOpenPerpOrdersResponse> {
    path: "/api.Api/GetOpenPerpOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOpenPerpOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOpenPerpOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOpenPerpOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOpenPerpOrdersResponse>;
}
interface IApiService_IPostCancelPerpOrders extends grpc.MethodDefinition<api_pb.PostCancelPerpOrdersRequest, api_pb.PostCancelPerpOrdersResponse> {
    path: "/api.Api/PostCancelPerpOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelPerpOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelPerpOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCancelPerpOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelPerpOrdersResponse>;
}
interface IApiService_IPostCancelPerpOrder extends grpc.MethodDefinition<api_pb.PostCancelPerpOrderRequest, api_pb.PostCancelPerpOrderResponse> {
    path: "/api.Api/PostCancelPerpOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCancelPerpOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCancelPerpOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCancelPerpOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCancelPerpOrderResponse>;
}
interface IApiService_IPostClosePerpPositions extends grpc.MethodDefinition<api_pb.PostClosePerpPositionsRequest, api_pb.PostClosePerpPositionsResponse> {
    path: "/api.Api/PostClosePerpPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostClosePerpPositionsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostClosePerpPositionsRequest>;
    responseSerialize: grpc.serialize<api_pb.PostClosePerpPositionsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostClosePerpPositionsResponse>;
}
interface IApiService_IGetPerpOrderbook extends grpc.MethodDefinition<api_pb.GetPerpOrderbookRequest, api_pb.GetPerpOrderbookResponse> {
    path: "/api.Api/GetPerpOrderbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetPerpOrderbookRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPerpOrderbookRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPerpOrderbookResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPerpOrderbookResponse>;
}
interface IApiService_IPostCreateUser extends grpc.MethodDefinition<api_pb.PostCreateUserRequest, api_pb.PostCreateUserResponse> {
    path: "/api.Api/PostCreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostCreateUserRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostCreateUserRequest>;
    responseSerialize: grpc.serialize<api_pb.PostCreateUserResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostCreateUserResponse>;
}
interface IApiService_IGetUser extends grpc.MethodDefinition<api_pb.GetUserRequest, api_pb.GetUserResponse> {
    path: "/api.Api/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<api_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetUserResponse>;
}
interface IApiService_IPostManageCollateral extends grpc.MethodDefinition<api_pb.PostManageCollateralRequest, api_pb.PostManageCollateralResponse> {
    path: "/api.Api/PostManageCollateral";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostManageCollateralRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostManageCollateralRequest>;
    responseSerialize: grpc.serialize<api_pb.PostManageCollateralResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostManageCollateralResponse>;
}
interface IApiService_IPostSettlePNL extends grpc.MethodDefinition<api_pb.PostSettlePNLRequest, api_pb.PostSettlePNLResponse> {
    path: "/api.Api/PostSettlePNL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSettlePNLRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSettlePNLRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSettlePNLResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSettlePNLResponse>;
}
interface IApiService_IPostSettlePNLs extends grpc.MethodDefinition<api_pb.PostSettlePNLsRequest, api_pb.PostSettlePNLsResponse> {
    path: "/api.Api/PostSettlePNLs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSettlePNLsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSettlePNLsRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSettlePNLsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSettlePNLsResponse>;
}
interface IApiService_IGetAssets extends grpc.MethodDefinition<api_pb.GetAssetsRequest, api_pb.GetAssetsResponse> {
    path: "/api.Api/GetAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetAssetsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetAssetsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetAssetsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetAssetsResponse>;
}
interface IApiService_IGetPerpContracts extends grpc.MethodDefinition<api_pb.GetPerpContractsRequest, api_pb.GetPerpContractsResponse> {
    path: "/api.Api/GetPerpContracts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetPerpContractsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPerpContractsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPerpContractsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPerpContractsResponse>;
}
interface IApiService_IPostLiquidatePerp extends grpc.MethodDefinition<api_pb.PostLiquidatePerpRequest, api_pb.PostLiquidatePerpResponse> {
    path: "/api.Api/PostLiquidatePerp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostLiquidatePerpRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostLiquidatePerpRequest>;
    responseSerialize: grpc.serialize<api_pb.PostLiquidatePerpResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostLiquidatePerpResponse>;
}
interface IApiService_IGetOpenPerpOrder extends grpc.MethodDefinition<api_pb.GetOpenPerpOrderRequest, api_pb.GetOpenPerpOrderResponse> {
    path: "/api.Api/GetOpenPerpOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOpenPerpOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOpenPerpOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOpenPerpOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOpenPerpOrderResponse>;
}
interface IApiService_IGetOrderbooksStream extends grpc.MethodDefinition<api_pb.GetOrderbooksRequest, api_pb.GetOrderbooksStreamResponse> {
    path: "/api.Api/GetOrderbooksStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetOrderbooksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrderbooksRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOrderbooksStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrderbooksStreamResponse>;
}
interface IApiService_IGetMarketDepthsStream extends grpc.MethodDefinition<api_pb.GetMarketDepthsRequest, api_pb.GetMarketDepthsStreamResponse> {
    path: "/api.Api/GetMarketDepthsStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetMarketDepthsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetMarketDepthsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetMarketDepthsStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetMarketDepthsStreamResponse>;
}
interface IApiService_IGetTickersStream extends grpc.MethodDefinition<api_pb.GetTickersRequest, api_pb.GetTickersStreamResponse> {
    path: "/api.Api/GetTickersStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetTickersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTickersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTickersStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTickersStreamResponse>;
}
interface IApiService_IGetTradesStream extends grpc.MethodDefinition<api_pb.GetTradesRequest, api_pb.GetTradesStreamResponse> {
    path: "/api.Api/GetTradesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetTradesRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTradesRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTradesStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTradesStreamResponse>;
}
interface IApiService_IGetOrderStatusStream extends grpc.MethodDefinition<api_pb.GetOrderStatusStreamRequest, api_pb.GetOrderStatusStreamResponse> {
    path: "/api.Api/GetOrderStatusStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetOrderStatusStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrderStatusStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOrderStatusStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrderStatusStreamResponse>;
}
interface IApiService_IGetRecentBlockHashStream extends grpc.MethodDefinition<api_pb.GetRecentBlockHashRequest, api_pb.GetRecentBlockHashResponse> {
    path: "/api.Api/GetRecentBlockHashStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetRecentBlockHashRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetRecentBlockHashRequest>;
    responseSerialize: grpc.serialize<api_pb.GetRecentBlockHashResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetRecentBlockHashResponse>;
}
interface IApiService_IGetBlockStream extends grpc.MethodDefinition<api_pb.GetBlockStreamRequest, api_pb.GetBlockStreamResponse> {
    path: "/api.Api/GetBlockStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetBlockStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetBlockStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetBlockStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetBlockStreamResponse>;
}
interface IApiService_IGetQuotesStream extends grpc.MethodDefinition<api_pb.GetQuotesStreamRequest, api_pb.GetQuotesStreamResponse> {
    path: "/api.Api/GetQuotesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetQuotesStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetQuotesStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetQuotesStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetQuotesStreamResponse>;
}
interface IApiService_IGetPoolReservesStream extends grpc.MethodDefinition<api_pb.GetPoolReservesStreamRequest, api_pb.GetPoolReservesStreamResponse> {
    path: "/api.Api/GetPoolReservesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetPoolReservesStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPoolReservesStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPoolReservesStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPoolReservesStreamResponse>;
}
interface IApiService_IGetPricesStream extends grpc.MethodDefinition<api_pb.GetPricesStreamRequest, api_pb.GetPricesStreamResponse> {
    path: "/api.Api/GetPricesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetPricesStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPricesStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPricesStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPricesStreamResponse>;
}
interface IApiService_IGetSwapsStream extends grpc.MethodDefinition<api_pb.GetSwapsStreamRequest, api_pb.GetSwapsStreamResponse> {
    path: "/api.Api/GetSwapsStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetSwapsStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetSwapsStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetSwapsStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetSwapsStreamResponse>;
}
interface IApiService_IGetPerpOrderbooksStream extends grpc.MethodDefinition<api_pb.GetPerpOrderbooksRequest, api_pb.GetPerpOrderbooksStreamResponse> {
    path: "/api.Api/GetPerpOrderbooksStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetPerpOrderbooksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPerpOrderbooksRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPerpOrderbooksStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPerpOrderbooksStreamResponse>;
}
interface IApiService_IGetPerpTradesStream extends grpc.MethodDefinition<api_pb.GetPerpTradesStreamRequest, api_pb.GetPerpTradesStreamResponse> {
    path: "/api.Api/GetPerpTradesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetPerpTradesStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetPerpTradesStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetPerpTradesStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetPerpTradesStreamResponse>;
}

export const ApiService: IApiService;

export interface IApiServer extends grpc.UntypedServiceImplementation {
    getRaydiumPools: grpc.handleUnaryCall<api_pb.GetRaydiumPoolsRequest, api_pb.GetRaydiumPoolsResponse>;
    getRaydiumQuotes: grpc.handleUnaryCall<api_pb.GetRaydiumQuotesRequest, api_pb.GetRaydiumQuotesResponse>;
    getRaydiumPrices: grpc.handleUnaryCall<api_pb.GetRaydiumPricesRequest, api_pb.GetRaydiumPricesResponse>;
    postRaydiumSwap: grpc.handleUnaryCall<api_pb.PostRaydiumSwapRequest, api_pb.PostRaydiumSwapResponse>;
    postRaydiumRouteSwap: grpc.handleUnaryCall<api_pb.PostRaydiumRouteSwapRequest, api_pb.PostRaydiumRouteSwapResponse>;
    getJupiterQuotes: grpc.handleUnaryCall<api_pb.GetJupiterQuotesRequest, api_pb.GetJupiterQuotesResponse>;
    getJupiterPrices: grpc.handleUnaryCall<api_pb.GetJupiterPricesRequest, api_pb.GetJupiterPricesResponse>;
    postJupiterSwap: grpc.handleUnaryCall<api_pb.PostJupiterSwapRequest, api_pb.PostJupiterSwapResponse>;
    postJupiterRouteSwap: grpc.handleUnaryCall<api_pb.PostJupiterRouteSwapRequest, api_pb.PostJupiterRouteSwapResponse>;
    postCloseDriftPerpPositions: grpc.handleUnaryCall<api_pb.PostCloseDriftPerpPositionsRequest, api_pb.PostCloseDriftPerpPositionsResponse>;
    getDriftPerpOrderbook: grpc.handleUnaryCall<api_pb.GetDriftPerpOrderbookRequest, api_pb.GetDriftPerpOrderbookResponse>;
    postCreateDriftUser: grpc.handleUnaryCall<api_pb.PostCreateDriftUserRequest, api_pb.PostCreateDriftUserResponse>;
    getDriftUser: grpc.handleUnaryCall<api_pb.GetDriftUserRequest, api_pb.GetDriftUserResponse>;
    postDriftManageCollateral: grpc.handleUnaryCall<api_pb.PostDriftManageCollateralRequest, api_pb.PostDriftManageCollateralResponse>;
    postDriftPerpOrder: grpc.handleUnaryCall<api_pb.PostDriftPerpOrderRequest, api_pb.PostDriftPerpOrderResponse>;
    postDriftSettlePNL: grpc.handleUnaryCall<api_pb.PostDriftSettlePNLRequest, api_pb.PostDriftSettlePNLResponse>;
    postDriftSettlePNLs: grpc.handleUnaryCall<api_pb.PostDriftSettlePNLsRequest, api_pb.PostDriftSettlePNLsResponse>;
    getDriftAssets: grpc.handleUnaryCall<api_pb.GetDriftAssetsRequest, api_pb.GetDriftAssetsResponse>;
    getDriftPerpContracts: grpc.handleUnaryCall<api_pb.GetDriftPerpContractsRequest, api_pb.GetDriftPerpContractsResponse>;
    postLiquidateDriftPerp: grpc.handleUnaryCall<api_pb.PostLiquidateDriftPerpRequest, api_pb.PostLiquidateDriftPerpResponse>;
    getDriftOpenPerpOrder: grpc.handleUnaryCall<api_pb.GetDriftOpenPerpOrderRequest, api_pb.GetDriftOpenPerpOrderResponse>;
    getDriftOpenMarginOrder: grpc.handleUnaryCall<api_pb.GetDriftOpenMarginOrderRequest, api_pb.GetDriftOpenMarginOrderResponse>;
    getDriftPerpPositions: grpc.handleUnaryCall<api_pb.GetDriftPerpPositionsRequest, api_pb.GetDriftPerpPositionsResponse>;
    getDriftOpenPerpOrders: grpc.handleUnaryCall<api_pb.GetDriftOpenPerpOrdersRequest, api_pb.GetDriftOpenPerpOrdersResponse>;
    postDriftCancelPerpOrder: grpc.handleUnaryCall<api_pb.PostDriftCancelPerpOrderRequest, api_pb.PostDriftCancelPerpOrderResponse>;
    postModifyDriftOrder: grpc.handleUnaryCall<api_pb.PostModifyDriftOrderRequest, api_pb.PostModifyDriftOrderResponse>;
    postCancelDriftMarginOrder: grpc.handleUnaryCall<api_pb.PostCancelDriftMarginOrderRequest, api_pb.PostCancelDriftMarginOrderResponse>;
    getDriftOpenMarginOrders: grpc.handleUnaryCall<api_pb.GetDriftOpenMarginOrdersRequest, api_pb.GetDriftOpenMarginOrdersResponse>;
    getDriftMarkets: grpc.handleUnaryCall<api_pb.GetDriftMarketsRequest, api_pb.GetDriftMarketsResponse>;
    postDriftMarginOrder: grpc.handleUnaryCall<api_pb.PostDriftMarginOrderRequest, api_pb.PostDriftMarginOrderResponse>;
    postDriftEnableMarginTrading: grpc.handleUnaryCall<api_pb.PostDriftEnableMarginTradingRequest, api_pb.PostDriftEnableMarginTradingResponse>;
    getDriftMarginOrderbook: grpc.handleUnaryCall<api_pb.GetDriftMarginOrderbookRequest, api_pb.GetDriftMarginOrderbookResponse>;
    getDriftMarketDepth: grpc.handleUnaryCall<api_pb.GetDriftMarketDepthRequest, api_pb.GetDriftMarketDepthResponse>;
    getDriftMarginOrderbooksStream: grpc.handleServerStreamingCall<api_pb.GetDriftMarginOrderbooksRequest, api_pb.GetDriftMarginOrderbooksStreamResponse>;
    getDriftMarketDepthsStream: grpc.handleServerStreamingCall<api_pb.GetDriftMarketDepthsStreamRequest, api_pb.GetDriftMarketDepthStreamResponse>;
    getMarketsV2: grpc.handleUnaryCall<api_pb.GetMarketsRequestV2, api_pb.GetMarketsResponseV2>;
    getTickersV2: grpc.handleUnaryCall<api_pb.GetTickersRequestV2, api_pb.GetTickersResponseV2>;
    getOrderbookV2: grpc.handleUnaryCall<api_pb.GetOrderbookRequestV2, api_pb.GetOrderbookResponseV2>;
    getMarketDepthV2: grpc.handleUnaryCall<api_pb.GetMarketDepthRequestV2, api_pb.GetMarketDepthResponseV2>;
    postOrderV2: grpc.handleUnaryCall<api_pb.PostOrderRequestV2, api_pb.PostOrderResponse>;
    postCancelOrderV2: grpc.handleUnaryCall<api_pb.PostCancelOrderRequestV2, api_pb.PostCancelOrderResponseV2>;
    postReplaceOrderV2: grpc.handleUnaryCall<api_pb.PostReplaceOrderRequestV2, api_pb.PostOrderResponse>;
    postSettleV2: grpc.handleUnaryCall<api_pb.PostSettleRequestV2, api_pb.PostSettleResponse>;
    getOpenOrdersV2: grpc.handleUnaryCall<api_pb.GetOpenOrdersRequestV2, api_pb.GetOpenOrdersResponse>;
    getUnsettledV2: grpc.handleUnaryCall<api_pb.GetUnsettledRequestV2, api_pb.GetUnsettledResponse>;
    getPrice: grpc.handleUnaryCall<api_pb.GetPriceRequest, api_pb.GetPriceResponse>;
    getMarkets: grpc.handleUnaryCall<api_pb.GetMarketsRequest, api_pb.GetMarketsResponse>;
    getPools: grpc.handleUnaryCall<api_pb.GetPoolsRequest, api_pb.GetPoolsResponse>;
    getTickers: grpc.handleUnaryCall<api_pb.GetTickersRequest, api_pb.GetTickersResponse>;
    getKline: grpc.handleUnaryCall<api_pb.GetKlineRequest, api_pb.GetKlineResponse>;
    getOrderbook: grpc.handleUnaryCall<api_pb.GetOrderbookRequest, api_pb.GetOrderbookResponse>;
    getMarketDepth: grpc.handleUnaryCall<api_pb.GetMarketDepthRequest, api_pb.GetMarketDepthResponse>;
    getTrades: grpc.handleUnaryCall<api_pb.GetTradesRequest, api_pb.GetTradesResponse>;
    getQuotes: grpc.handleUnaryCall<api_pb.GetQuotesRequest, api_pb.GetQuotesResponse>;
    getServerTime: grpc.handleUnaryCall<api_pb.GetServerTimeRequest, api_pb.GetServerTimeResponse>;
    getRecentBlockHash: grpc.handleUnaryCall<api_pb.GetRecentBlockHashRequest, api_pb.GetRecentBlockHashResponse>;
    getAccountBalance: grpc.handleUnaryCall<api_pb.GetAccountBalanceRequest, api_pb.GetAccountBalanceResponse>;
    getTokenAccounts: grpc.handleUnaryCall<api_pb.GetTokenAccountsRequest, api_pb.GetTokenAccountsResponse>;
    postOrder: grpc.handleUnaryCall<api_pb.PostOrderRequest, api_pb.PostOrderResponse>;
    postSubmit: grpc.handleUnaryCall<api_pb.PostSubmitRequest, api_pb.PostSubmitResponse>;
    postSubmitBatch: grpc.handleUnaryCall<api_pb.PostSubmitBatchRequest, api_pb.PostSubmitBatchResponse>;
    postCancelOrder: grpc.handleUnaryCall<api_pb.PostCancelOrderRequest, api_pb.PostCancelOrderResponse>;
    postCancelByClientOrderID: grpc.handleUnaryCall<api_pb.PostCancelByClientOrderIDRequest, api_pb.PostCancelOrderResponse>;
    postCancelAll: grpc.handleUnaryCall<api_pb.PostCancelAllRequest, api_pb.PostCancelAllResponse>;
    postReplaceByClientOrderID: grpc.handleUnaryCall<api_pb.PostOrderRequest, api_pb.PostOrderResponse>;
    postReplaceOrder: grpc.handleUnaryCall<api_pb.PostReplaceOrderRequest, api_pb.PostOrderResponse>;
    postSettle: grpc.handleUnaryCall<api_pb.PostSettleRequest, api_pb.PostSettleResponse>;
    postTradeSwap: grpc.handleUnaryCall<api_pb.TradeSwapRequest, api_pb.TradeSwapResponse>;
    getOrders: grpc.handleUnaryCall<api_pb.GetOrdersRequest, api_pb.GetOrdersResponse>;
    getOpenOrders: grpc.handleUnaryCall<api_pb.GetOpenOrdersRequest, api_pb.GetOpenOrdersResponse>;
    getOrderByID: grpc.handleUnaryCall<api_pb.GetOrderByIDRequest, api_pb.GetOrderByIDResponse>;
    getUnsettled: grpc.handleUnaryCall<api_pb.GetUnsettledRequest, api_pb.GetUnsettledResponse>;
    postRouteTradeSwap: grpc.handleUnaryCall<api_pb.RouteTradeSwapRequest, api_pb.TradeSwapResponse>;
    postPerpOrder: grpc.handleUnaryCall<api_pb.PostPerpOrderRequest, api_pb.PostPerpOrderResponse>;
    getPerpPositions: grpc.handleUnaryCall<api_pb.GetPerpPositionsRequest, api_pb.GetPerpPositionsResponse>;
    getOpenPerpOrders: grpc.handleUnaryCall<api_pb.GetOpenPerpOrdersRequest, api_pb.GetOpenPerpOrdersResponse>;
    postCancelPerpOrders: grpc.handleUnaryCall<api_pb.PostCancelPerpOrdersRequest, api_pb.PostCancelPerpOrdersResponse>;
    postCancelPerpOrder: grpc.handleUnaryCall<api_pb.PostCancelPerpOrderRequest, api_pb.PostCancelPerpOrderResponse>;
    postClosePerpPositions: grpc.handleUnaryCall<api_pb.PostClosePerpPositionsRequest, api_pb.PostClosePerpPositionsResponse>;
    getPerpOrderbook: grpc.handleUnaryCall<api_pb.GetPerpOrderbookRequest, api_pb.GetPerpOrderbookResponse>;
    postCreateUser: grpc.handleUnaryCall<api_pb.PostCreateUserRequest, api_pb.PostCreateUserResponse>;
    getUser: grpc.handleUnaryCall<api_pb.GetUserRequest, api_pb.GetUserResponse>;
    postManageCollateral: grpc.handleUnaryCall<api_pb.PostManageCollateralRequest, api_pb.PostManageCollateralResponse>;
    postSettlePNL: grpc.handleUnaryCall<api_pb.PostSettlePNLRequest, api_pb.PostSettlePNLResponse>;
    postSettlePNLs: grpc.handleUnaryCall<api_pb.PostSettlePNLsRequest, api_pb.PostSettlePNLsResponse>;
    getAssets: grpc.handleUnaryCall<api_pb.GetAssetsRequest, api_pb.GetAssetsResponse>;
    getPerpContracts: grpc.handleUnaryCall<api_pb.GetPerpContractsRequest, api_pb.GetPerpContractsResponse>;
    postLiquidatePerp: grpc.handleUnaryCall<api_pb.PostLiquidatePerpRequest, api_pb.PostLiquidatePerpResponse>;
    getOpenPerpOrder: grpc.handleUnaryCall<api_pb.GetOpenPerpOrderRequest, api_pb.GetOpenPerpOrderResponse>;
    getOrderbooksStream: grpc.handleServerStreamingCall<api_pb.GetOrderbooksRequest, api_pb.GetOrderbooksStreamResponse>;
    getMarketDepthsStream: grpc.handleServerStreamingCall<api_pb.GetMarketDepthsRequest, api_pb.GetMarketDepthsStreamResponse>;
    getTickersStream: grpc.handleServerStreamingCall<api_pb.GetTickersRequest, api_pb.GetTickersStreamResponse>;
    getTradesStream: grpc.handleServerStreamingCall<api_pb.GetTradesRequest, api_pb.GetTradesStreamResponse>;
    getOrderStatusStream: grpc.handleServerStreamingCall<api_pb.GetOrderStatusStreamRequest, api_pb.GetOrderStatusStreamResponse>;
    getRecentBlockHashStream: grpc.handleServerStreamingCall<api_pb.GetRecentBlockHashRequest, api_pb.GetRecentBlockHashResponse>;
    getBlockStream: grpc.handleServerStreamingCall<api_pb.GetBlockStreamRequest, api_pb.GetBlockStreamResponse>;
    getQuotesStream: grpc.handleServerStreamingCall<api_pb.GetQuotesStreamRequest, api_pb.GetQuotesStreamResponse>;
    getPoolReservesStream: grpc.handleServerStreamingCall<api_pb.GetPoolReservesStreamRequest, api_pb.GetPoolReservesStreamResponse>;
    getPricesStream: grpc.handleServerStreamingCall<api_pb.GetPricesStreamRequest, api_pb.GetPricesStreamResponse>;
    getSwapsStream: grpc.handleServerStreamingCall<api_pb.GetSwapsStreamRequest, api_pb.GetSwapsStreamResponse>;
    getPerpOrderbooksStream: grpc.handleServerStreamingCall<api_pb.GetPerpOrderbooksRequest, api_pb.GetPerpOrderbooksStreamResponse>;
    getPerpTradesStream: grpc.handleServerStreamingCall<api_pb.GetPerpTradesStreamRequest, api_pb.GetPerpTradesStreamResponse>;
}

export interface IApiClient {
    getRaydiumPools(request: api_pb.GetRaydiumPoolsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPoolsResponse) => void): grpc.ClientUnaryCall;
    getRaydiumPools(request: api_pb.GetRaydiumPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPoolsResponse) => void): grpc.ClientUnaryCall;
    getRaydiumPools(request: api_pb.GetRaydiumPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPoolsResponse) => void): grpc.ClientUnaryCall;
    getRaydiumQuotes(request: api_pb.GetRaydiumQuotesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumQuotesResponse) => void): grpc.ClientUnaryCall;
    getRaydiumQuotes(request: api_pb.GetRaydiumQuotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumQuotesResponse) => void): grpc.ClientUnaryCall;
    getRaydiumQuotes(request: api_pb.GetRaydiumQuotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumQuotesResponse) => void): grpc.ClientUnaryCall;
    getRaydiumPrices(request: api_pb.GetRaydiumPricesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPricesResponse) => void): grpc.ClientUnaryCall;
    getRaydiumPrices(request: api_pb.GetRaydiumPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPricesResponse) => void): grpc.ClientUnaryCall;
    getRaydiumPrices(request: api_pb.GetRaydiumPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPricesResponse) => void): grpc.ClientUnaryCall;
    postRaydiumSwap(request: api_pb.PostRaydiumSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumSwapResponse) => void): grpc.ClientUnaryCall;
    postRaydiumSwap(request: api_pb.PostRaydiumSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumSwapResponse) => void): grpc.ClientUnaryCall;
    postRaydiumSwap(request: api_pb.PostRaydiumSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumSwapResponse) => void): grpc.ClientUnaryCall;
    postRaydiumRouteSwap(request: api_pb.PostRaydiumRouteSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumRouteSwapResponse) => void): grpc.ClientUnaryCall;
    postRaydiumRouteSwap(request: api_pb.PostRaydiumRouteSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumRouteSwapResponse) => void): grpc.ClientUnaryCall;
    postRaydiumRouteSwap(request: api_pb.PostRaydiumRouteSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumRouteSwapResponse) => void): grpc.ClientUnaryCall;
    getJupiterQuotes(request: api_pb.GetJupiterQuotesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterQuotesResponse) => void): grpc.ClientUnaryCall;
    getJupiterQuotes(request: api_pb.GetJupiterQuotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterQuotesResponse) => void): grpc.ClientUnaryCall;
    getJupiterQuotes(request: api_pb.GetJupiterQuotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterQuotesResponse) => void): grpc.ClientUnaryCall;
    getJupiterPrices(request: api_pb.GetJupiterPricesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterPricesResponse) => void): grpc.ClientUnaryCall;
    getJupiterPrices(request: api_pb.GetJupiterPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterPricesResponse) => void): grpc.ClientUnaryCall;
    getJupiterPrices(request: api_pb.GetJupiterPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterPricesResponse) => void): grpc.ClientUnaryCall;
    postJupiterSwap(request: api_pb.PostJupiterSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterSwapResponse) => void): grpc.ClientUnaryCall;
    postJupiterSwap(request: api_pb.PostJupiterSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterSwapResponse) => void): grpc.ClientUnaryCall;
    postJupiterSwap(request: api_pb.PostJupiterSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterSwapResponse) => void): grpc.ClientUnaryCall;
    postJupiterRouteSwap(request: api_pb.PostJupiterRouteSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterRouteSwapResponse) => void): grpc.ClientUnaryCall;
    postJupiterRouteSwap(request: api_pb.PostJupiterRouteSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterRouteSwapResponse) => void): grpc.ClientUnaryCall;
    postJupiterRouteSwap(request: api_pb.PostJupiterRouteSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterRouteSwapResponse) => void): grpc.ClientUnaryCall;
    postCloseDriftPerpPositions(request: api_pb.PostCloseDriftPerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCloseDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    postCloseDriftPerpPositions(request: api_pb.PostCloseDriftPerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCloseDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    postCloseDriftPerpPositions(request: api_pb.PostCloseDriftPerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCloseDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpOrderbook(request: api_pb.GetDriftPerpOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpOrderbook(request: api_pb.GetDriftPerpOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpOrderbook(request: api_pb.GetDriftPerpOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    postCreateDriftUser(request: api_pb.PostCreateDriftUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateDriftUserResponse) => void): grpc.ClientUnaryCall;
    postCreateDriftUser(request: api_pb.PostCreateDriftUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateDriftUserResponse) => void): grpc.ClientUnaryCall;
    postCreateDriftUser(request: api_pb.PostCreateDriftUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateDriftUserResponse) => void): grpc.ClientUnaryCall;
    getDriftUser(request: api_pb.GetDriftUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftUserResponse) => void): grpc.ClientUnaryCall;
    getDriftUser(request: api_pb.GetDriftUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftUserResponse) => void): grpc.ClientUnaryCall;
    getDriftUser(request: api_pb.GetDriftUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftUserResponse) => void): grpc.ClientUnaryCall;
    postDriftManageCollateral(request: api_pb.PostDriftManageCollateralRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftManageCollateralResponse) => void): grpc.ClientUnaryCall;
    postDriftManageCollateral(request: api_pb.PostDriftManageCollateralRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftManageCollateralResponse) => void): grpc.ClientUnaryCall;
    postDriftManageCollateral(request: api_pb.PostDriftManageCollateralRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftManageCollateralResponse) => void): grpc.ClientUnaryCall;
    postDriftPerpOrder(request: api_pb.PostDriftPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftPerpOrder(request: api_pb.PostDriftPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftPerpOrder(request: api_pb.PostDriftPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftSettlePNL(request: api_pb.PostDriftSettlePNLRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLResponse) => void): grpc.ClientUnaryCall;
    postDriftSettlePNL(request: api_pb.PostDriftSettlePNLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLResponse) => void): grpc.ClientUnaryCall;
    postDriftSettlePNL(request: api_pb.PostDriftSettlePNLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLResponse) => void): grpc.ClientUnaryCall;
    postDriftSettlePNLs(request: api_pb.PostDriftSettlePNLsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    postDriftSettlePNLs(request: api_pb.PostDriftSettlePNLsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    postDriftSettlePNLs(request: api_pb.PostDriftSettlePNLsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    getDriftAssets(request: api_pb.GetDriftAssetsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftAssetsResponse) => void): grpc.ClientUnaryCall;
    getDriftAssets(request: api_pb.GetDriftAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftAssetsResponse) => void): grpc.ClientUnaryCall;
    getDriftAssets(request: api_pb.GetDriftAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftAssetsResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpContracts(request: api_pb.GetDriftPerpContractsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpContractsResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpContracts(request: api_pb.GetDriftPerpContractsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpContractsResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpContracts(request: api_pb.GetDriftPerpContractsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpContractsResponse) => void): grpc.ClientUnaryCall;
    postLiquidateDriftPerp(request: api_pb.PostLiquidateDriftPerpRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidateDriftPerpResponse) => void): grpc.ClientUnaryCall;
    postLiquidateDriftPerp(request: api_pb.PostLiquidateDriftPerpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidateDriftPerpResponse) => void): grpc.ClientUnaryCall;
    postLiquidateDriftPerp(request: api_pb.PostLiquidateDriftPerpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidateDriftPerpResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenPerpOrder(request: api_pb.GetDriftOpenPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenPerpOrder(request: api_pb.GetDriftOpenPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenPerpOrder(request: api_pb.GetDriftOpenPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenMarginOrder(request: api_pb.GetDriftOpenMarginOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenMarginOrder(request: api_pb.GetDriftOpenMarginOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenMarginOrder(request: api_pb.GetDriftOpenMarginOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpPositions(request: api_pb.GetDriftPerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpPositions(request: api_pb.GetDriftPerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getDriftPerpPositions(request: api_pb.GetDriftPerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenPerpOrders(request: api_pb.GetDriftOpenPerpOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenPerpOrders(request: api_pb.GetDriftOpenPerpOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenPerpOrders(request: api_pb.GetDriftOpenPerpOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    postDriftCancelPerpOrder(request: api_pb.PostDriftCancelPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftCancelPerpOrder(request: api_pb.PostDriftCancelPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftCancelPerpOrder(request: api_pb.PostDriftCancelPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postModifyDriftOrder(request: api_pb.PostModifyDriftOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostModifyDriftOrderResponse) => void): grpc.ClientUnaryCall;
    postModifyDriftOrder(request: api_pb.PostModifyDriftOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostModifyDriftOrderResponse) => void): grpc.ClientUnaryCall;
    postModifyDriftOrder(request: api_pb.PostModifyDriftOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostModifyDriftOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelDriftMarginOrder(request: api_pb.PostCancelDriftMarginOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelDriftMarginOrder(request: api_pb.PostCancelDriftMarginOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelDriftMarginOrder(request: api_pb.PostCancelDriftMarginOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenMarginOrders(request: api_pb.GetDriftOpenMarginOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrdersResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenMarginOrders(request: api_pb.GetDriftOpenMarginOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrdersResponse) => void): grpc.ClientUnaryCall;
    getDriftOpenMarginOrders(request: api_pb.GetDriftOpenMarginOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrdersResponse) => void): grpc.ClientUnaryCall;
    getDriftMarkets(request: api_pb.GetDriftMarketsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketsResponse) => void): grpc.ClientUnaryCall;
    getDriftMarkets(request: api_pb.GetDriftMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketsResponse) => void): grpc.ClientUnaryCall;
    getDriftMarkets(request: api_pb.GetDriftMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketsResponse) => void): grpc.ClientUnaryCall;
    postDriftMarginOrder(request: api_pb.PostDriftMarginOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftMarginOrder(request: api_pb.PostDriftMarginOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftMarginOrder(request: api_pb.PostDriftMarginOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftEnableMarginTrading(request: api_pb.PostDriftEnableMarginTradingRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftEnableMarginTradingResponse) => void): grpc.ClientUnaryCall;
    postDriftEnableMarginTrading(request: api_pb.PostDriftEnableMarginTradingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftEnableMarginTradingResponse) => void): grpc.ClientUnaryCall;
    postDriftEnableMarginTrading(request: api_pb.PostDriftEnableMarginTradingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftEnableMarginTradingResponse) => void): grpc.ClientUnaryCall;
    getDriftMarginOrderbook(request: api_pb.GetDriftMarginOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarginOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftMarginOrderbook(request: api_pb.GetDriftMarginOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarginOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftMarginOrderbook(request: api_pb.GetDriftMarginOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarginOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftMarketDepth(request: api_pb.GetDriftMarketDepthRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketDepthResponse) => void): grpc.ClientUnaryCall;
    getDriftMarketDepth(request: api_pb.GetDriftMarketDepthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketDepthResponse) => void): grpc.ClientUnaryCall;
    getDriftMarketDepth(request: api_pb.GetDriftMarketDepthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketDepthResponse) => void): grpc.ClientUnaryCall;
    getDriftMarginOrderbooksStream(request: api_pb.GetDriftMarginOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarginOrderbooksStreamResponse>;
    getDriftMarginOrderbooksStream(request: api_pb.GetDriftMarginOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarginOrderbooksStreamResponse>;
    getDriftMarketDepthsStream(request: api_pb.GetDriftMarketDepthsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarketDepthStreamResponse>;
    getDriftMarketDepthsStream(request: api_pb.GetDriftMarketDepthsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarketDepthStreamResponse>;
    getMarketsV2(request: api_pb.GetMarketsRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponseV2) => void): grpc.ClientUnaryCall;
    getMarketsV2(request: api_pb.GetMarketsRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponseV2) => void): grpc.ClientUnaryCall;
    getMarketsV2(request: api_pb.GetMarketsRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponseV2) => void): grpc.ClientUnaryCall;
    getTickersV2(request: api_pb.GetTickersRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponseV2) => void): grpc.ClientUnaryCall;
    getTickersV2(request: api_pb.GetTickersRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponseV2) => void): grpc.ClientUnaryCall;
    getTickersV2(request: api_pb.GetTickersRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponseV2) => void): grpc.ClientUnaryCall;
    getOrderbookV2(request: api_pb.GetOrderbookRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponseV2) => void): grpc.ClientUnaryCall;
    getOrderbookV2(request: api_pb.GetOrderbookRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponseV2) => void): grpc.ClientUnaryCall;
    getOrderbookV2(request: api_pb.GetOrderbookRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponseV2) => void): grpc.ClientUnaryCall;
    getMarketDepthV2(request: api_pb.GetMarketDepthRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponseV2) => void): grpc.ClientUnaryCall;
    getMarketDepthV2(request: api_pb.GetMarketDepthRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponseV2) => void): grpc.ClientUnaryCall;
    getMarketDepthV2(request: api_pb.GetMarketDepthRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponseV2) => void): grpc.ClientUnaryCall;
    postOrderV2(request: api_pb.PostOrderRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postOrderV2(request: api_pb.PostOrderRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postOrderV2(request: api_pb.PostOrderRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelOrderV2(request: api_pb.PostCancelOrderRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponseV2) => void): grpc.ClientUnaryCall;
    postCancelOrderV2(request: api_pb.PostCancelOrderRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponseV2) => void): grpc.ClientUnaryCall;
    postCancelOrderV2(request: api_pb.PostCancelOrderRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponseV2) => void): grpc.ClientUnaryCall;
    postReplaceOrderV2(request: api_pb.PostReplaceOrderRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceOrderV2(request: api_pb.PostReplaceOrderRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceOrderV2(request: api_pb.PostReplaceOrderRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postSettleV2(request: api_pb.PostSettleRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    postSettleV2(request: api_pb.PostSettleRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    postSettleV2(request: api_pb.PostSettleRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    getUnsettledV2(request: api_pb.GetUnsettledRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getPrice(request: api_pb.GetPriceRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPriceResponse) => void): grpc.ClientUnaryCall;
    getPrice(request: api_pb.GetPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPriceResponse) => void): grpc.ClientUnaryCall;
    getPrice(request: api_pb.GetPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPriceResponse) => void): grpc.ClientUnaryCall;
    getMarkets(request: api_pb.GetMarketsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponse) => void): grpc.ClientUnaryCall;
    getMarkets(request: api_pb.GetMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponse) => void): grpc.ClientUnaryCall;
    getMarkets(request: api_pb.GetMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponse) => void): grpc.ClientUnaryCall;
    getPools(request: api_pb.GetPoolsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPoolsResponse) => void): grpc.ClientUnaryCall;
    getPools(request: api_pb.GetPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPoolsResponse) => void): grpc.ClientUnaryCall;
    getPools(request: api_pb.GetPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPoolsResponse) => void): grpc.ClientUnaryCall;
    getTickers(request: api_pb.GetTickersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponse) => void): grpc.ClientUnaryCall;
    getTickers(request: api_pb.GetTickersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponse) => void): grpc.ClientUnaryCall;
    getTickers(request: api_pb.GetTickersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponse) => void): grpc.ClientUnaryCall;
    getKline(request: api_pb.GetKlineRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    getOrderbook(request: api_pb.GetOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponse) => void): grpc.ClientUnaryCall;
    getOrderbook(request: api_pb.GetOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponse) => void): grpc.ClientUnaryCall;
    getOrderbook(request: api_pb.GetOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponse) => void): grpc.ClientUnaryCall;
    getMarketDepth(request: api_pb.GetMarketDepthRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponse) => void): grpc.ClientUnaryCall;
    getMarketDepth(request: api_pb.GetMarketDepthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponse) => void): grpc.ClientUnaryCall;
    getMarketDepth(request: api_pb.GetMarketDepthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponse) => void): grpc.ClientUnaryCall;
    getTrades(request: api_pb.GetTradesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    getQuotes(request: api_pb.GetQuotesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetQuotesResponse) => void): grpc.ClientUnaryCall;
    getQuotes(request: api_pb.GetQuotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetQuotesResponse) => void): grpc.ClientUnaryCall;
    getQuotes(request: api_pb.GetQuotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetQuotesResponse) => void): grpc.ClientUnaryCall;
    getServerTime(request: api_pb.GetServerTimeRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetServerTimeResponse) => void): grpc.ClientUnaryCall;
    getServerTime(request: api_pb.GetServerTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetServerTimeResponse) => void): grpc.ClientUnaryCall;
    getServerTime(request: api_pb.GetServerTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetServerTimeResponse) => void): grpc.ClientUnaryCall;
    getRecentBlockHash(request: api_pb.GetRecentBlockHashRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRecentBlockHashResponse) => void): grpc.ClientUnaryCall;
    getRecentBlockHash(request: api_pb.GetRecentBlockHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRecentBlockHashResponse) => void): grpc.ClientUnaryCall;
    getRecentBlockHash(request: api_pb.GetRecentBlockHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRecentBlockHashResponse) => void): grpc.ClientUnaryCall;
    getAccountBalance(request: api_pb.GetAccountBalanceRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetAccountBalanceResponse) => void): grpc.ClientUnaryCall;
    getAccountBalance(request: api_pb.GetAccountBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetAccountBalanceResponse) => void): grpc.ClientUnaryCall;
    getAccountBalance(request: api_pb.GetAccountBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetAccountBalanceResponse) => void): grpc.ClientUnaryCall;
    getTokenAccounts(request: api_pb.GetTokenAccountsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTokenAccountsResponse) => void): grpc.ClientUnaryCall;
    getTokenAccounts(request: api_pb.GetTokenAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTokenAccountsResponse) => void): grpc.ClientUnaryCall;
    getTokenAccounts(request: api_pb.GetTokenAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTokenAccountsResponse) => void): grpc.ClientUnaryCall;
    postOrder(request: api_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postOrder(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postOrder(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postSubmit(request: api_pb.PostSubmitRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    postSubmit(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    postSubmit(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    postSubmitBatch(request: api_pb.PostSubmitBatchRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    postSubmitBatch(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    postSubmitBatch(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    postCancelOrder(request: api_pb.PostCancelOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelOrder(request: api_pb.PostCancelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelOrder(request: api_pb.PostCancelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelByClientOrderID(request: api_pb.PostCancelByClientOrderIDRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelByClientOrderID(request: api_pb.PostCancelByClientOrderIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelByClientOrderID(request: api_pb.PostCancelByClientOrderIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelAll(request: api_pb.PostCancelAllRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelAllResponse) => void): grpc.ClientUnaryCall;
    postCancelAll(request: api_pb.PostCancelAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelAllResponse) => void): grpc.ClientUnaryCall;
    postCancelAll(request: api_pb.PostCancelAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelAllResponse) => void): grpc.ClientUnaryCall;
    postReplaceByClientOrderID(request: api_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceByClientOrderID(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceByClientOrderID(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceOrder(request: api_pb.PostReplaceOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceOrder(request: api_pb.PostReplaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postReplaceOrder(request: api_pb.PostReplaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postSettle(request: api_pb.PostSettleRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    postSettle(request: api_pb.PostSettleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    postSettle(request: api_pb.PostSettleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    postTradeSwap(request: api_pb.TradeSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    postTradeSwap(request: api_pb.TradeSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    postTradeSwap(request: api_pb.TradeSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenOrders(request: api_pb.GetOpenOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenOrders(request: api_pb.GetOpenOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenOrders(request: api_pb.GetOpenOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrderByID(request: api_pb.GetOrderByIDRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    getUnsettled(request: api_pb.GetUnsettledRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getUnsettled(request: api_pb.GetUnsettledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getUnsettled(request: api_pb.GetUnsettledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    postRouteTradeSwap(request: api_pb.RouteTradeSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    postRouteTradeSwap(request: api_pb.RouteTradeSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    postRouteTradeSwap(request: api_pb.RouteTradeSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    postPerpOrder(request: api_pb.PostPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postPerpOrder(request: api_pb.PostPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postPerpOrder(request: api_pb.PostPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getPerpPositions(request: api_pb.GetPerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getPerpPositions(request: api_pb.GetPerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getPerpPositions(request: api_pb.GetPerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getOpenPerpOrders(request: api_pb.GetOpenPerpOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenPerpOrders(request: api_pb.GetOpenPerpOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    getOpenPerpOrders(request: api_pb.GetOpenPerpOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    postCancelPerpOrders(request: api_pb.PostCancelPerpOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    postCancelPerpOrders(request: api_pb.PostCancelPerpOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    postCancelPerpOrders(request: api_pb.PostCancelPerpOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    postCancelPerpOrder(request: api_pb.PostCancelPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelPerpOrder(request: api_pb.PostCancelPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postCancelPerpOrder(request: api_pb.PostCancelPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    postClosePerpPositions(request: api_pb.PostClosePerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostClosePerpPositionsResponse) => void): grpc.ClientUnaryCall;
    postClosePerpPositions(request: api_pb.PostClosePerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostClosePerpPositionsResponse) => void): grpc.ClientUnaryCall;
    postClosePerpPositions(request: api_pb.PostClosePerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostClosePerpPositionsResponse) => void): grpc.ClientUnaryCall;
    getPerpOrderbook(request: api_pb.GetPerpOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    getPerpOrderbook(request: api_pb.GetPerpOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    getPerpOrderbook(request: api_pb.GetPerpOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    postCreateUser(request: api_pb.PostCreateUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateUserResponse) => void): grpc.ClientUnaryCall;
    postCreateUser(request: api_pb.PostCreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateUserResponse) => void): grpc.ClientUnaryCall;
    postCreateUser(request: api_pb.PostCreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: api_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: api_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: api_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    postManageCollateral(request: api_pb.PostManageCollateralRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostManageCollateralResponse) => void): grpc.ClientUnaryCall;
    postManageCollateral(request: api_pb.PostManageCollateralRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostManageCollateralResponse) => void): grpc.ClientUnaryCall;
    postManageCollateral(request: api_pb.PostManageCollateralRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostManageCollateralResponse) => void): grpc.ClientUnaryCall;
    postSettlePNL(request: api_pb.PostSettlePNLRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLResponse) => void): grpc.ClientUnaryCall;
    postSettlePNL(request: api_pb.PostSettlePNLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLResponse) => void): grpc.ClientUnaryCall;
    postSettlePNL(request: api_pb.PostSettlePNLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLResponse) => void): grpc.ClientUnaryCall;
    postSettlePNLs(request: api_pb.PostSettlePNLsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    postSettlePNLs(request: api_pb.PostSettlePNLsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    postSettlePNLs(request: api_pb.PostSettlePNLsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    getAssets(request: api_pb.GetAssetsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetAssetsResponse) => void): grpc.ClientUnaryCall;
    getAssets(request: api_pb.GetAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetAssetsResponse) => void): grpc.ClientUnaryCall;
    getAssets(request: api_pb.GetAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetAssetsResponse) => void): grpc.ClientUnaryCall;
    getPerpContracts(request: api_pb.GetPerpContractsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpContractsResponse) => void): grpc.ClientUnaryCall;
    getPerpContracts(request: api_pb.GetPerpContractsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpContractsResponse) => void): grpc.ClientUnaryCall;
    getPerpContracts(request: api_pb.GetPerpContractsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpContractsResponse) => void): grpc.ClientUnaryCall;
    postLiquidatePerp(request: api_pb.PostLiquidatePerpRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidatePerpResponse) => void): grpc.ClientUnaryCall;
    postLiquidatePerp(request: api_pb.PostLiquidatePerpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidatePerpResponse) => void): grpc.ClientUnaryCall;
    postLiquidatePerp(request: api_pb.PostLiquidatePerpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidatePerpResponse) => void): grpc.ClientUnaryCall;
    getOpenPerpOrder(request: api_pb.GetOpenPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getOpenPerpOrder(request: api_pb.GetOpenPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getOpenPerpOrder(request: api_pb.GetOpenPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    getOrderbooksStream(request: api_pb.GetOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderbooksStreamResponse>;
    getOrderbooksStream(request: api_pb.GetOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderbooksStreamResponse>;
    getMarketDepthsStream(request: api_pb.GetMarketDepthsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetMarketDepthsStreamResponse>;
    getMarketDepthsStream(request: api_pb.GetMarketDepthsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetMarketDepthsStreamResponse>;
    getTickersStream(request: api_pb.GetTickersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTickersStreamResponse>;
    getTickersStream(request: api_pb.GetTickersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTickersStreamResponse>;
    getTradesStream(request: api_pb.GetTradesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTradesStreamResponse>;
    getTradesStream(request: api_pb.GetTradesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTradesStreamResponse>;
    getOrderStatusStream(request: api_pb.GetOrderStatusStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderStatusStreamResponse>;
    getOrderStatusStream(request: api_pb.GetOrderStatusStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderStatusStreamResponse>;
    getRecentBlockHashStream(request: api_pb.GetRecentBlockHashRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetRecentBlockHashResponse>;
    getRecentBlockHashStream(request: api_pb.GetRecentBlockHashRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetRecentBlockHashResponse>;
    getBlockStream(request: api_pb.GetBlockStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetBlockStreamResponse>;
    getBlockStream(request: api_pb.GetBlockStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetBlockStreamResponse>;
    getQuotesStream(request: api_pb.GetQuotesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetQuotesStreamResponse>;
    getQuotesStream(request: api_pb.GetQuotesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetQuotesStreamResponse>;
    getPoolReservesStream(request: api_pb.GetPoolReservesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPoolReservesStreamResponse>;
    getPoolReservesStream(request: api_pb.GetPoolReservesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPoolReservesStreamResponse>;
    getPricesStream(request: api_pb.GetPricesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPricesStreamResponse>;
    getPricesStream(request: api_pb.GetPricesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPricesStreamResponse>;
    getSwapsStream(request: api_pb.GetSwapsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    getSwapsStream(request: api_pb.GetSwapsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
    getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
}

export class ApiClient extends grpc.Client implements IApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getRaydiumPools(request: api_pb.GetRaydiumPoolsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPoolsResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumPools(request: api_pb.GetRaydiumPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPoolsResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumPools(request: api_pb.GetRaydiumPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPoolsResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumQuotes(request: api_pb.GetRaydiumQuotesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumQuotesResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumQuotes(request: api_pb.GetRaydiumQuotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumQuotesResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumQuotes(request: api_pb.GetRaydiumQuotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumQuotesResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumPrices(request: api_pb.GetRaydiumPricesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPricesResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumPrices(request: api_pb.GetRaydiumPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPricesResponse) => void): grpc.ClientUnaryCall;
    public getRaydiumPrices(request: api_pb.GetRaydiumPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRaydiumPricesResponse) => void): grpc.ClientUnaryCall;
    public postRaydiumSwap(request: api_pb.PostRaydiumSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumSwapResponse) => void): grpc.ClientUnaryCall;
    public postRaydiumSwap(request: api_pb.PostRaydiumSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumSwapResponse) => void): grpc.ClientUnaryCall;
    public postRaydiumSwap(request: api_pb.PostRaydiumSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumSwapResponse) => void): grpc.ClientUnaryCall;
    public postRaydiumRouteSwap(request: api_pb.PostRaydiumRouteSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumRouteSwapResponse) => void): grpc.ClientUnaryCall;
    public postRaydiumRouteSwap(request: api_pb.PostRaydiumRouteSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumRouteSwapResponse) => void): grpc.ClientUnaryCall;
    public postRaydiumRouteSwap(request: api_pb.PostRaydiumRouteSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostRaydiumRouteSwapResponse) => void): grpc.ClientUnaryCall;
    public getJupiterQuotes(request: api_pb.GetJupiterQuotesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterQuotesResponse) => void): grpc.ClientUnaryCall;
    public getJupiterQuotes(request: api_pb.GetJupiterQuotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterQuotesResponse) => void): grpc.ClientUnaryCall;
    public getJupiterQuotes(request: api_pb.GetJupiterQuotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterQuotesResponse) => void): grpc.ClientUnaryCall;
    public getJupiterPrices(request: api_pb.GetJupiterPricesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterPricesResponse) => void): grpc.ClientUnaryCall;
    public getJupiterPrices(request: api_pb.GetJupiterPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterPricesResponse) => void): grpc.ClientUnaryCall;
    public getJupiterPrices(request: api_pb.GetJupiterPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetJupiterPricesResponse) => void): grpc.ClientUnaryCall;
    public postJupiterSwap(request: api_pb.PostJupiterSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterSwapResponse) => void): grpc.ClientUnaryCall;
    public postJupiterSwap(request: api_pb.PostJupiterSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterSwapResponse) => void): grpc.ClientUnaryCall;
    public postJupiterSwap(request: api_pb.PostJupiterSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterSwapResponse) => void): grpc.ClientUnaryCall;
    public postJupiterRouteSwap(request: api_pb.PostJupiterRouteSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterRouteSwapResponse) => void): grpc.ClientUnaryCall;
    public postJupiterRouteSwap(request: api_pb.PostJupiterRouteSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterRouteSwapResponse) => void): grpc.ClientUnaryCall;
    public postJupiterRouteSwap(request: api_pb.PostJupiterRouteSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostJupiterRouteSwapResponse) => void): grpc.ClientUnaryCall;
    public postCloseDriftPerpPositions(request: api_pb.PostCloseDriftPerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCloseDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public postCloseDriftPerpPositions(request: api_pb.PostCloseDriftPerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCloseDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public postCloseDriftPerpPositions(request: api_pb.PostCloseDriftPerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCloseDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpOrderbook(request: api_pb.GetDriftPerpOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpOrderbook(request: api_pb.GetDriftPerpOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpOrderbook(request: api_pb.GetDriftPerpOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    public postCreateDriftUser(request: api_pb.PostCreateDriftUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateDriftUserResponse) => void): grpc.ClientUnaryCall;
    public postCreateDriftUser(request: api_pb.PostCreateDriftUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateDriftUserResponse) => void): grpc.ClientUnaryCall;
    public postCreateDriftUser(request: api_pb.PostCreateDriftUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateDriftUserResponse) => void): grpc.ClientUnaryCall;
    public getDriftUser(request: api_pb.GetDriftUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftUserResponse) => void): grpc.ClientUnaryCall;
    public getDriftUser(request: api_pb.GetDriftUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftUserResponse) => void): grpc.ClientUnaryCall;
    public getDriftUser(request: api_pb.GetDriftUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftUserResponse) => void): grpc.ClientUnaryCall;
    public postDriftManageCollateral(request: api_pb.PostDriftManageCollateralRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftManageCollateralResponse) => void): grpc.ClientUnaryCall;
    public postDriftManageCollateral(request: api_pb.PostDriftManageCollateralRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftManageCollateralResponse) => void): grpc.ClientUnaryCall;
    public postDriftManageCollateral(request: api_pb.PostDriftManageCollateralRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftManageCollateralResponse) => void): grpc.ClientUnaryCall;
    public postDriftPerpOrder(request: api_pb.PostDriftPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftPerpOrder(request: api_pb.PostDriftPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftPerpOrder(request: api_pb.PostDriftPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftSettlePNL(request: api_pb.PostDriftSettlePNLRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLResponse) => void): grpc.ClientUnaryCall;
    public postDriftSettlePNL(request: api_pb.PostDriftSettlePNLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLResponse) => void): grpc.ClientUnaryCall;
    public postDriftSettlePNL(request: api_pb.PostDriftSettlePNLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLResponse) => void): grpc.ClientUnaryCall;
    public postDriftSettlePNLs(request: api_pb.PostDriftSettlePNLsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    public postDriftSettlePNLs(request: api_pb.PostDriftSettlePNLsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    public postDriftSettlePNLs(request: api_pb.PostDriftSettlePNLsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    public getDriftAssets(request: api_pb.GetDriftAssetsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftAssetsResponse) => void): grpc.ClientUnaryCall;
    public getDriftAssets(request: api_pb.GetDriftAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftAssetsResponse) => void): grpc.ClientUnaryCall;
    public getDriftAssets(request: api_pb.GetDriftAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftAssetsResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpContracts(request: api_pb.GetDriftPerpContractsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpContractsResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpContracts(request: api_pb.GetDriftPerpContractsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpContractsResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpContracts(request: api_pb.GetDriftPerpContractsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpContractsResponse) => void): grpc.ClientUnaryCall;
    public postLiquidateDriftPerp(request: api_pb.PostLiquidateDriftPerpRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidateDriftPerpResponse) => void): grpc.ClientUnaryCall;
    public postLiquidateDriftPerp(request: api_pb.PostLiquidateDriftPerpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidateDriftPerpResponse) => void): grpc.ClientUnaryCall;
    public postLiquidateDriftPerp(request: api_pb.PostLiquidateDriftPerpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidateDriftPerpResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenPerpOrder(request: api_pb.GetDriftOpenPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenPerpOrder(request: api_pb.GetDriftOpenPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenPerpOrder(request: api_pb.GetDriftOpenPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenMarginOrder(request: api_pb.GetDriftOpenMarginOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenMarginOrder(request: api_pb.GetDriftOpenMarginOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenMarginOrder(request: api_pb.GetDriftOpenMarginOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpPositions(request: api_pb.GetDriftPerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpPositions(request: api_pb.GetDriftPerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getDriftPerpPositions(request: api_pb.GetDriftPerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenPerpOrders(request: api_pb.GetDriftOpenPerpOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenPerpOrders(request: api_pb.GetDriftOpenPerpOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenPerpOrders(request: api_pb.GetDriftOpenPerpOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public postDriftCancelPerpOrder(request: api_pb.PostDriftCancelPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftCancelPerpOrder(request: api_pb.PostDriftCancelPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftCancelPerpOrder(request: api_pb.PostDriftCancelPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postModifyDriftOrder(request: api_pb.PostModifyDriftOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostModifyDriftOrderResponse) => void): grpc.ClientUnaryCall;
    public postModifyDriftOrder(request: api_pb.PostModifyDriftOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostModifyDriftOrderResponse) => void): grpc.ClientUnaryCall;
    public postModifyDriftOrder(request: api_pb.PostModifyDriftOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostModifyDriftOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelDriftMarginOrder(request: api_pb.PostCancelDriftMarginOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelDriftMarginOrder(request: api_pb.PostCancelDriftMarginOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelDriftMarginOrder(request: api_pb.PostCancelDriftMarginOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenMarginOrders(request: api_pb.GetDriftOpenMarginOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrdersResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenMarginOrders(request: api_pb.GetDriftOpenMarginOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrdersResponse) => void): grpc.ClientUnaryCall;
    public getDriftOpenMarginOrders(request: api_pb.GetDriftOpenMarginOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftOpenMarginOrdersResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarkets(request: api_pb.GetDriftMarketsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketsResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarkets(request: api_pb.GetDriftMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketsResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarkets(request: api_pb.GetDriftMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketsResponse) => void): grpc.ClientUnaryCall;
    public postDriftMarginOrder(request: api_pb.PostDriftMarginOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftMarginOrder(request: api_pb.PostDriftMarginOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftMarginOrder(request: api_pb.PostDriftMarginOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftMarginOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftEnableMarginTrading(request: api_pb.PostDriftEnableMarginTradingRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftEnableMarginTradingResponse) => void): grpc.ClientUnaryCall;
    public postDriftEnableMarginTrading(request: api_pb.PostDriftEnableMarginTradingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftEnableMarginTradingResponse) => void): grpc.ClientUnaryCall;
    public postDriftEnableMarginTrading(request: api_pb.PostDriftEnableMarginTradingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftEnableMarginTradingResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarginOrderbook(request: api_pb.GetDriftMarginOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarginOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarginOrderbook(request: api_pb.GetDriftMarginOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarginOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarginOrderbook(request: api_pb.GetDriftMarginOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarginOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarketDepth(request: api_pb.GetDriftMarketDepthRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketDepthResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarketDepth(request: api_pb.GetDriftMarketDepthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketDepthResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarketDepth(request: api_pb.GetDriftMarketDepthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftMarketDepthResponse) => void): grpc.ClientUnaryCall;
    public getDriftMarginOrderbooksStream(request: api_pb.GetDriftMarginOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarginOrderbooksStreamResponse>;
    public getDriftMarginOrderbooksStream(request: api_pb.GetDriftMarginOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarginOrderbooksStreamResponse>;
    public getDriftMarketDepthsStream(request: api_pb.GetDriftMarketDepthsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarketDepthStreamResponse>;
    public getDriftMarketDepthsStream(request: api_pb.GetDriftMarketDepthsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftMarketDepthStreamResponse>;
    public getMarketsV2(request: api_pb.GetMarketsRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponseV2) => void): grpc.ClientUnaryCall;
    public getMarketsV2(request: api_pb.GetMarketsRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponseV2) => void): grpc.ClientUnaryCall;
    public getMarketsV2(request: api_pb.GetMarketsRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponseV2) => void): grpc.ClientUnaryCall;
    public getTickersV2(request: api_pb.GetTickersRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponseV2) => void): grpc.ClientUnaryCall;
    public getTickersV2(request: api_pb.GetTickersRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponseV2) => void): grpc.ClientUnaryCall;
    public getTickersV2(request: api_pb.GetTickersRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponseV2) => void): grpc.ClientUnaryCall;
    public getOrderbookV2(request: api_pb.GetOrderbookRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponseV2) => void): grpc.ClientUnaryCall;
    public getOrderbookV2(request: api_pb.GetOrderbookRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponseV2) => void): grpc.ClientUnaryCall;
    public getOrderbookV2(request: api_pb.GetOrderbookRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponseV2) => void): grpc.ClientUnaryCall;
    public getMarketDepthV2(request: api_pb.GetMarketDepthRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponseV2) => void): grpc.ClientUnaryCall;
    public getMarketDepthV2(request: api_pb.GetMarketDepthRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponseV2) => void): grpc.ClientUnaryCall;
    public getMarketDepthV2(request: api_pb.GetMarketDepthRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponseV2) => void): grpc.ClientUnaryCall;
    public postOrderV2(request: api_pb.PostOrderRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postOrderV2(request: api_pb.PostOrderRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postOrderV2(request: api_pb.PostOrderRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelOrderV2(request: api_pb.PostCancelOrderRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponseV2) => void): grpc.ClientUnaryCall;
    public postCancelOrderV2(request: api_pb.PostCancelOrderRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponseV2) => void): grpc.ClientUnaryCall;
    public postCancelOrderV2(request: api_pb.PostCancelOrderRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponseV2) => void): grpc.ClientUnaryCall;
    public postReplaceOrderV2(request: api_pb.PostReplaceOrderRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceOrderV2(request: api_pb.PostReplaceOrderRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceOrderV2(request: api_pb.PostReplaceOrderRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postSettleV2(request: api_pb.PostSettleRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    public postSettleV2(request: api_pb.PostSettleRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    public postSettleV2(request: api_pb.PostSettleRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    public getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    public getUnsettledV2(request: api_pb.GetUnsettledRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getPrice(request: api_pb.GetPriceRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPriceResponse) => void): grpc.ClientUnaryCall;
    public getPrice(request: api_pb.GetPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPriceResponse) => void): grpc.ClientUnaryCall;
    public getPrice(request: api_pb.GetPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPriceResponse) => void): grpc.ClientUnaryCall;
    public getMarkets(request: api_pb.GetMarketsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponse) => void): grpc.ClientUnaryCall;
    public getMarkets(request: api_pb.GetMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponse) => void): grpc.ClientUnaryCall;
    public getMarkets(request: api_pb.GetMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketsResponse) => void): grpc.ClientUnaryCall;
    public getPools(request: api_pb.GetPoolsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPoolsResponse) => void): grpc.ClientUnaryCall;
    public getPools(request: api_pb.GetPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPoolsResponse) => void): grpc.ClientUnaryCall;
    public getPools(request: api_pb.GetPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPoolsResponse) => void): grpc.ClientUnaryCall;
    public getTickers(request: api_pb.GetTickersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponse) => void): grpc.ClientUnaryCall;
    public getTickers(request: api_pb.GetTickersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponse) => void): grpc.ClientUnaryCall;
    public getTickers(request: api_pb.GetTickersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTickersResponse) => void): grpc.ClientUnaryCall;
    public getKline(request: api_pb.GetKlineRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    public getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    public getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    public getOrderbook(request: api_pb.GetOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getOrderbook(request: api_pb.GetOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getOrderbook(request: api_pb.GetOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getMarketDepth(request: api_pb.GetMarketDepthRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponse) => void): grpc.ClientUnaryCall;
    public getMarketDepth(request: api_pb.GetMarketDepthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponse) => void): grpc.ClientUnaryCall;
    public getMarketDepth(request: api_pb.GetMarketDepthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetMarketDepthResponse) => void): grpc.ClientUnaryCall;
    public getTrades(request: api_pb.GetTradesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    public getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    public getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    public getQuotes(request: api_pb.GetQuotesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetQuotesResponse) => void): grpc.ClientUnaryCall;
    public getQuotes(request: api_pb.GetQuotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetQuotesResponse) => void): grpc.ClientUnaryCall;
    public getQuotes(request: api_pb.GetQuotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetQuotesResponse) => void): grpc.ClientUnaryCall;
    public getServerTime(request: api_pb.GetServerTimeRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetServerTimeResponse) => void): grpc.ClientUnaryCall;
    public getServerTime(request: api_pb.GetServerTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetServerTimeResponse) => void): grpc.ClientUnaryCall;
    public getServerTime(request: api_pb.GetServerTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetServerTimeResponse) => void): grpc.ClientUnaryCall;
    public getRecentBlockHash(request: api_pb.GetRecentBlockHashRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetRecentBlockHashResponse) => void): grpc.ClientUnaryCall;
    public getRecentBlockHash(request: api_pb.GetRecentBlockHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetRecentBlockHashResponse) => void): grpc.ClientUnaryCall;
    public getRecentBlockHash(request: api_pb.GetRecentBlockHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetRecentBlockHashResponse) => void): grpc.ClientUnaryCall;
    public getAccountBalance(request: api_pb.GetAccountBalanceRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetAccountBalanceResponse) => void): grpc.ClientUnaryCall;
    public getAccountBalance(request: api_pb.GetAccountBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetAccountBalanceResponse) => void): grpc.ClientUnaryCall;
    public getAccountBalance(request: api_pb.GetAccountBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetAccountBalanceResponse) => void): grpc.ClientUnaryCall;
    public getTokenAccounts(request: api_pb.GetTokenAccountsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTokenAccountsResponse) => void): grpc.ClientUnaryCall;
    public getTokenAccounts(request: api_pb.GetTokenAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTokenAccountsResponse) => void): grpc.ClientUnaryCall;
    public getTokenAccounts(request: api_pb.GetTokenAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTokenAccountsResponse) => void): grpc.ClientUnaryCall;
    public postOrder(request: api_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postOrder(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postOrder(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postSubmit(request: api_pb.PostSubmitRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    public postSubmit(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    public postSubmit(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    public postSubmitBatch(request: api_pb.PostSubmitBatchRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    public postSubmitBatch(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    public postSubmitBatch(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    public postCancelOrder(request: api_pb.PostCancelOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelOrder(request: api_pb.PostCancelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelOrder(request: api_pb.PostCancelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelByClientOrderID(request: api_pb.PostCancelByClientOrderIDRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelByClientOrderID(request: api_pb.PostCancelByClientOrderIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelByClientOrderID(request: api_pb.PostCancelByClientOrderIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelAll(request: api_pb.PostCancelAllRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelAllResponse) => void): grpc.ClientUnaryCall;
    public postCancelAll(request: api_pb.PostCancelAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelAllResponse) => void): grpc.ClientUnaryCall;
    public postCancelAll(request: api_pb.PostCancelAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelAllResponse) => void): grpc.ClientUnaryCall;
    public postReplaceByClientOrderID(request: api_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceByClientOrderID(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceByClientOrderID(request: api_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceOrder(request: api_pb.PostReplaceOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceOrder(request: api_pb.PostReplaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postReplaceOrder(request: api_pb.PostReplaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postSettle(request: api_pb.PostSettleRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    public postSettle(request: api_pb.PostSettleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    public postSettle(request: api_pb.PostSettleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettleResponse) => void): grpc.ClientUnaryCall;
    public postTradeSwap(request: api_pb.TradeSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    public postTradeSwap(request: api_pb.TradeSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    public postTradeSwap(request: api_pb.TradeSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenOrders(request: api_pb.GetOpenOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenOrders(request: api_pb.GetOpenOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenOrders(request: api_pb.GetOpenOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrderByID(request: api_pb.GetOrderByIDRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    public getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    public getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    public getUnsettled(request: api_pb.GetUnsettledRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getUnsettled(request: api_pb.GetUnsettledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getUnsettled(request: api_pb.GetUnsettledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public postRouteTradeSwap(request: api_pb.RouteTradeSwapRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    public postRouteTradeSwap(request: api_pb.RouteTradeSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    public postRouteTradeSwap(request: api_pb.RouteTradeSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TradeSwapResponse) => void): grpc.ClientUnaryCall;
    public postPerpOrder(request: api_pb.PostPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postPerpOrder(request: api_pb.PostPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postPerpOrder(request: api_pb.PostPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getPerpPositions(request: api_pb.GetPerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getPerpPositions(request: api_pb.GetPerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getPerpPositions(request: api_pb.GetPerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getOpenPerpOrders(request: api_pb.GetOpenPerpOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenPerpOrders(request: api_pb.GetOpenPerpOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOpenPerpOrders(request: api_pb.GetOpenPerpOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public postCancelPerpOrders(request: api_pb.PostCancelPerpOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public postCancelPerpOrders(request: api_pb.PostCancelPerpOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public postCancelPerpOrders(request: api_pb.PostCancelPerpOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrdersResponse) => void): grpc.ClientUnaryCall;
    public postCancelPerpOrder(request: api_pb.PostCancelPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelPerpOrder(request: api_pb.PostCancelPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postCancelPerpOrder(request: api_pb.PostCancelPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCancelPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public postClosePerpPositions(request: api_pb.PostClosePerpPositionsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostClosePerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public postClosePerpPositions(request: api_pb.PostClosePerpPositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostClosePerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public postClosePerpPositions(request: api_pb.PostClosePerpPositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostClosePerpPositionsResponse) => void): grpc.ClientUnaryCall;
    public getPerpOrderbook(request: api_pb.GetPerpOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getPerpOrderbook(request: api_pb.GetPerpOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getPerpOrderbook(request: api_pb.GetPerpOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpOrderbookResponse) => void): grpc.ClientUnaryCall;
    public postCreateUser(request: api_pb.PostCreateUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateUserResponse) => void): grpc.ClientUnaryCall;
    public postCreateUser(request: api_pb.PostCreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateUserResponse) => void): grpc.ClientUnaryCall;
    public postCreateUser(request: api_pb.PostCreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostCreateUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: api_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: api_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: api_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public postManageCollateral(request: api_pb.PostManageCollateralRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostManageCollateralResponse) => void): grpc.ClientUnaryCall;
    public postManageCollateral(request: api_pb.PostManageCollateralRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostManageCollateralResponse) => void): grpc.ClientUnaryCall;
    public postManageCollateral(request: api_pb.PostManageCollateralRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostManageCollateralResponse) => void): grpc.ClientUnaryCall;
    public postSettlePNL(request: api_pb.PostSettlePNLRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLResponse) => void): grpc.ClientUnaryCall;
    public postSettlePNL(request: api_pb.PostSettlePNLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLResponse) => void): grpc.ClientUnaryCall;
    public postSettlePNL(request: api_pb.PostSettlePNLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLResponse) => void): grpc.ClientUnaryCall;
    public postSettlePNLs(request: api_pb.PostSettlePNLsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    public postSettlePNLs(request: api_pb.PostSettlePNLsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    public postSettlePNLs(request: api_pb.PostSettlePNLsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSettlePNLsResponse) => void): grpc.ClientUnaryCall;
    public getAssets(request: api_pb.GetAssetsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetAssetsResponse) => void): grpc.ClientUnaryCall;
    public getAssets(request: api_pb.GetAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetAssetsResponse) => void): grpc.ClientUnaryCall;
    public getAssets(request: api_pb.GetAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetAssetsResponse) => void): grpc.ClientUnaryCall;
    public getPerpContracts(request: api_pb.GetPerpContractsRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpContractsResponse) => void): grpc.ClientUnaryCall;
    public getPerpContracts(request: api_pb.GetPerpContractsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpContractsResponse) => void): grpc.ClientUnaryCall;
    public getPerpContracts(request: api_pb.GetPerpContractsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetPerpContractsResponse) => void): grpc.ClientUnaryCall;
    public postLiquidatePerp(request: api_pb.PostLiquidatePerpRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidatePerpResponse) => void): grpc.ClientUnaryCall;
    public postLiquidatePerp(request: api_pb.PostLiquidatePerpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidatePerpResponse) => void): grpc.ClientUnaryCall;
    public postLiquidatePerp(request: api_pb.PostLiquidatePerpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostLiquidatePerpResponse) => void): grpc.ClientUnaryCall;
    public getOpenPerpOrder(request: api_pb.GetOpenPerpOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getOpenPerpOrder(request: api_pb.GetOpenPerpOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getOpenPerpOrder(request: api_pb.GetOpenPerpOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenPerpOrderResponse) => void): grpc.ClientUnaryCall;
    public getOrderbooksStream(request: api_pb.GetOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderbooksStreamResponse>;
    public getOrderbooksStream(request: api_pb.GetOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderbooksStreamResponse>;
    public getMarketDepthsStream(request: api_pb.GetMarketDepthsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetMarketDepthsStreamResponse>;
    public getMarketDepthsStream(request: api_pb.GetMarketDepthsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetMarketDepthsStreamResponse>;
    public getTickersStream(request: api_pb.GetTickersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTickersStreamResponse>;
    public getTickersStream(request: api_pb.GetTickersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTickersStreamResponse>;
    public getTradesStream(request: api_pb.GetTradesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTradesStreamResponse>;
    public getTradesStream(request: api_pb.GetTradesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetTradesStreamResponse>;
    public getOrderStatusStream(request: api_pb.GetOrderStatusStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderStatusStreamResponse>;
    public getOrderStatusStream(request: api_pb.GetOrderStatusStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetOrderStatusStreamResponse>;
    public getRecentBlockHashStream(request: api_pb.GetRecentBlockHashRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetRecentBlockHashResponse>;
    public getRecentBlockHashStream(request: api_pb.GetRecentBlockHashRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetRecentBlockHashResponse>;
    public getBlockStream(request: api_pb.GetBlockStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetBlockStreamResponse>;
    public getBlockStream(request: api_pb.GetBlockStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetBlockStreamResponse>;
    public getQuotesStream(request: api_pb.GetQuotesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetQuotesStreamResponse>;
    public getQuotesStream(request: api_pb.GetQuotesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetQuotesStreamResponse>;
    public getPoolReservesStream(request: api_pb.GetPoolReservesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPoolReservesStreamResponse>;
    public getPoolReservesStream(request: api_pb.GetPoolReservesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPoolReservesStreamResponse>;
    public getPricesStream(request: api_pb.GetPricesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPricesStreamResponse>;
    public getPricesStream(request: api_pb.GetPricesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPricesStreamResponse>;
    public getSwapsStream(request: api_pb.GetSwapsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    public getSwapsStream(request: api_pb.GetSwapsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    public getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    public getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    public getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
    public getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
}
