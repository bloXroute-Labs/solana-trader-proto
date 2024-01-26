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
    getTransaction: IApiService_IGetTransaction;
    postSubmitV2: IApiService_IPostSubmitV2;
    postSubmitBatchV2: IApiService_IPostSubmitBatchV2;
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
    getKline: IApiService_IGetKline;
    getTrades: IApiService_IGetTrades;
    getServerTime: IApiService_IGetServerTime;
    getRecentBlockHash: IApiService_IGetRecentBlockHash;
    getAccountBalance: IApiService_IGetAccountBalance;
    getTokenAccounts: IApiService_IGetTokenAccounts;
    getOrders: IApiService_IGetOrders;
    getOrderByID: IApiService_IGetOrderByID;
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
    getNewRaydiumPoolsStream: IApiService_IGetNewRaydiumPoolsStream;
    getSwapsStream: IApiService_IGetSwapsStream;
    getPerpOrderbooksStream: IApiService_IGetPerpOrderbooksStream;
    getPerpTradesStream: IApiService_IGetPerpTradesStream;
}

interface IApiService_IGetTransaction extends grpc.MethodDefinition<api_pb.GetTransactionRequest, api_pb.GetTransactionResponse> {
    path: "/api.Api/GetTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTransactionResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTransactionResponse>;
}
interface IApiService_IPostSubmitV2 extends grpc.MethodDefinition<api_pb.PostSubmitRequest, api_pb.PostSubmitResponse> {
    path: "/api.Api/PostSubmitV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSubmitRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSubmitRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSubmitResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSubmitResponse>;
}
interface IApiService_IPostSubmitBatchV2 extends grpc.MethodDefinition<api_pb.PostSubmitBatchRequest, api_pb.PostSubmitBatchResponse> {
    path: "/api.Api/PostSubmitBatchV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostSubmitBatchRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostSubmitBatchRequest>;
    responseSerialize: grpc.serialize<api_pb.PostSubmitBatchResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostSubmitBatchResponse>;
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
interface IApiService_IGetOpenOrdersV2 extends grpc.MethodDefinition<api_pb.GetOpenOrdersRequestV2, api_pb.GetOpenOrdersResponseV2> {
    path: "/api.Api/GetOpenOrdersV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOpenOrdersRequestV2>;
    requestDeserialize: grpc.deserialize<api_pb.GetOpenOrdersRequestV2>;
    responseSerialize: grpc.serialize<api_pb.GetOpenOrdersResponseV2>;
    responseDeserialize: grpc.deserialize<api_pb.GetOpenOrdersResponseV2>;
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
interface IApiService_IGetKline extends grpc.MethodDefinition<api_pb.GetKlineRequest, api_pb.GetKlineResponse> {
    path: "/api.Api/GetKline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetKlineRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetKlineRequest>;
    responseSerialize: grpc.serialize<api_pb.GetKlineResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetKlineResponse>;
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
interface IApiService_IGetOrders extends grpc.MethodDefinition<api_pb.GetOrdersRequest, api_pb.GetOrdersResponse> {
    path: "/api.Api/GetOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetOrdersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetOrdersRequest>;
    responseSerialize: grpc.serialize<api_pb.GetOrdersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetOrdersResponse>;
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
interface IApiService_IGetNewRaydiumPoolsStream extends grpc.MethodDefinition<api_pb.GetNewRaydiumPoolsRequest, api_pb.GetNewRaydiumPoolsResponse> {
    path: "/api.Api/GetNewRaydiumPoolsStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetNewRaydiumPoolsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetNewRaydiumPoolsRequest>;
    responseSerialize: grpc.serialize<api_pb.GetNewRaydiumPoolsResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetNewRaydiumPoolsResponse>;
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
    getTransaction: grpc.handleUnaryCall<api_pb.GetTransactionRequest, api_pb.GetTransactionResponse>;
    postSubmitV2: grpc.handleUnaryCall<api_pb.PostSubmitRequest, api_pb.PostSubmitResponse>;
    postSubmitBatchV2: grpc.handleUnaryCall<api_pb.PostSubmitBatchRequest, api_pb.PostSubmitBatchResponse>;
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
    getOpenOrdersV2: grpc.handleUnaryCall<api_pb.GetOpenOrdersRequestV2, api_pb.GetOpenOrdersResponseV2>;
    getUnsettledV2: grpc.handleUnaryCall<api_pb.GetUnsettledRequestV2, api_pb.GetUnsettledResponse>;
    getKline: grpc.handleUnaryCall<api_pb.GetKlineRequest, api_pb.GetKlineResponse>;
    getTrades: grpc.handleUnaryCall<api_pb.GetTradesRequest, api_pb.GetTradesResponse>;
    getServerTime: grpc.handleUnaryCall<api_pb.GetServerTimeRequest, api_pb.GetServerTimeResponse>;
    getRecentBlockHash: grpc.handleUnaryCall<api_pb.GetRecentBlockHashRequest, api_pb.GetRecentBlockHashResponse>;
    getAccountBalance: grpc.handleUnaryCall<api_pb.GetAccountBalanceRequest, api_pb.GetAccountBalanceResponse>;
    getTokenAccounts: grpc.handleUnaryCall<api_pb.GetTokenAccountsRequest, api_pb.GetTokenAccountsResponse>;
    getOrders: grpc.handleUnaryCall<api_pb.GetOrdersRequest, api_pb.GetOrdersResponse>;
    getOrderByID: grpc.handleUnaryCall<api_pb.GetOrderByIDRequest, api_pb.GetOrderByIDResponse>;
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
    getNewRaydiumPoolsStream: grpc.handleServerStreamingCall<api_pb.GetNewRaydiumPoolsRequest, api_pb.GetNewRaydiumPoolsResponse>;
    getSwapsStream: grpc.handleServerStreamingCall<api_pb.GetSwapsStreamRequest, api_pb.GetSwapsStreamResponse>;
    getPerpOrderbooksStream: grpc.handleServerStreamingCall<api_pb.GetPerpOrderbooksRequest, api_pb.GetPerpOrderbooksStreamResponse>;
    getPerpTradesStream: grpc.handleServerStreamingCall<api_pb.GetPerpTradesStreamRequest, api_pb.GetPerpTradesStreamResponse>;
}

export interface IApiClient {
    getTransaction(request: api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransaction(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransaction(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    postSubmitV2(request: api_pb.PostSubmitRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    postSubmitV2(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    postSubmitV2(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    postSubmitBatchV2(request: api_pb.PostSubmitBatchRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    postSubmitBatchV2(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    postSubmitBatchV2(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
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
    getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponseV2) => void): grpc.ClientUnaryCall;
    getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponseV2) => void): grpc.ClientUnaryCall;
    getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponseV2) => void): grpc.ClientUnaryCall;
    getUnsettledV2(request: api_pb.GetUnsettledRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    getKline(request: api_pb.GetKlineRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    getTrades(request: api_pb.GetTradesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
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
    getOrders(request: api_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrderByID(request: api_pb.GetOrderByIDRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
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
    getNewRaydiumPoolsStream(request: api_pb.GetNewRaydiumPoolsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewRaydiumPoolsResponse>;
    getNewRaydiumPoolsStream(request: api_pb.GetNewRaydiumPoolsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewRaydiumPoolsResponse>;
    getSwapsStream(request: api_pb.GetSwapsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    getSwapsStream(request: api_pb.GetSwapsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
    getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
}

export class ApiClient extends grpc.Client implements IApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTransaction(request: api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransaction(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransaction(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public postSubmitV2(request: api_pb.PostSubmitRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    public postSubmitV2(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    public postSubmitV2(request: api_pb.PostSubmitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitResponse) => void): grpc.ClientUnaryCall;
    public postSubmitBatchV2(request: api_pb.PostSubmitBatchRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    public postSubmitBatchV2(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
    public postSubmitBatchV2(request: api_pb.PostSubmitBatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostSubmitBatchResponse) => void): grpc.ClientUnaryCall;
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
    public getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponseV2) => void): grpc.ClientUnaryCall;
    public getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponseV2) => void): grpc.ClientUnaryCall;
    public getOpenOrdersV2(request: api_pb.GetOpenOrdersRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOpenOrdersResponseV2) => void): grpc.ClientUnaryCall;
    public getUnsettledV2(request: api_pb.GetUnsettledRequestV2, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getUnsettledV2(request: api_pb.GetUnsettledRequestV2, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUnsettledResponse) => void): grpc.ClientUnaryCall;
    public getKline(request: api_pb.GetKlineRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    public getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    public getKline(request: api_pb.GetKlineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetKlineResponse) => void): grpc.ClientUnaryCall;
    public getTrades(request: api_pb.GetTradesRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    public getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
    public getTrades(request: api_pb.GetTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTradesResponse) => void): grpc.ClientUnaryCall;
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
    public getOrders(request: api_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrderByID(request: api_pb.GetOrderByIDRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    public getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
    public getOrderByID(request: api_pb.GetOrderByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetOrderByIDResponse) => void): grpc.ClientUnaryCall;
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
    public getNewRaydiumPoolsStream(request: api_pb.GetNewRaydiumPoolsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewRaydiumPoolsResponse>;
    public getNewRaydiumPoolsStream(request: api_pb.GetNewRaydiumPoolsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewRaydiumPoolsResponse>;
    public getSwapsStream(request: api_pb.GetSwapsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    public getSwapsStream(request: api_pb.GetSwapsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetSwapsStreamResponse>;
    public getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    public getPerpOrderbooksStream(request: api_pb.GetPerpOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpOrderbooksStreamResponse>;
    public getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
    public getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
}
