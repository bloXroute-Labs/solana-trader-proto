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
    postDriftSpotOrder: IApiService_IPostDriftSpotOrder;
    postPerpOrder: IApiService_IPostPerpOrder;
    getPerpPositions: IApiService_IGetPerpPositions;
    getOpenPerpOrders: IApiService_IGetOpenPerpOrders;
    postCancelPerpOrders: IApiService_IPostCancelPerpOrders;
    postCancelPerpOrder: IApiService_IPostCancelPerpOrder;
    postClosePerpPositions: IApiService_IPostClosePerpPositions;
    getPerpOrderbook: IApiService_IGetPerpOrderbook;
    getDriftSpotOrderbook: IApiService_IGetDriftSpotOrderbook;
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
    getDriftSpotOrderbooksStream: IApiService_IGetDriftSpotOrderbooksStream;
    getNewPerpOrdersStream: IApiService_IGetNewPerpOrdersStream;
    getPerpTradesStream: IApiService_IGetPerpTradesStream;
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
interface IApiService_IPostDriftSpotOrder extends grpc.MethodDefinition<api_pb.PostDriftSpotOrderRequest, api_pb.PostDriftSpotOrderResponse> {
    path: "/api.Api/PostDriftSpotOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PostDriftSpotOrderRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PostDriftSpotOrderRequest>;
    responseSerialize: grpc.serialize<api_pb.PostDriftSpotOrderResponse>;
    responseDeserialize: grpc.deserialize<api_pb.PostDriftSpotOrderResponse>;
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
interface IApiService_IGetDriftSpotOrderbook extends grpc.MethodDefinition<api_pb.GetDriftSpotOrderbookRequest, api_pb.GetDriftSpotOrderbookResponse> {
    path: "/api.Api/GetDriftSpotOrderbook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetDriftSpotOrderbookRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftSpotOrderbookRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftSpotOrderbookResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftSpotOrderbookResponse>;
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
interface IApiService_IGetDriftSpotOrderbooksStream extends grpc.MethodDefinition<api_pb.GetDriftSpotOrderbooksRequest, api_pb.GetDriftSpotOrderbooksStreamResponse> {
    path: "/api.Api/GetDriftSpotOrderbooksStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetDriftSpotOrderbooksRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetDriftSpotOrderbooksRequest>;
    responseSerialize: grpc.serialize<api_pb.GetDriftSpotOrderbooksStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetDriftSpotOrderbooksStreamResponse>;
}
interface IApiService_IGetNewPerpOrdersStream extends grpc.MethodDefinition<api_pb.GetNewPerpOrdersStreamRequest, api_pb.GetNewPerpOrdersStreamResponse> {
    path: "/api.Api/GetNewPerpOrdersStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.GetNewPerpOrdersStreamRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetNewPerpOrdersStreamRequest>;
    responseSerialize: grpc.serialize<api_pb.GetNewPerpOrdersStreamResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetNewPerpOrdersStreamResponse>;
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
    postDriftSpotOrder: grpc.handleUnaryCall<api_pb.PostDriftSpotOrderRequest, api_pb.PostDriftSpotOrderResponse>;
    postPerpOrder: grpc.handleUnaryCall<api_pb.PostPerpOrderRequest, api_pb.PostPerpOrderResponse>;
    getPerpPositions: grpc.handleUnaryCall<api_pb.GetPerpPositionsRequest, api_pb.GetPerpPositionsResponse>;
    getOpenPerpOrders: grpc.handleUnaryCall<api_pb.GetOpenPerpOrdersRequest, api_pb.GetOpenPerpOrdersResponse>;
    postCancelPerpOrders: grpc.handleUnaryCall<api_pb.PostCancelPerpOrdersRequest, api_pb.PostCancelPerpOrdersResponse>;
    postCancelPerpOrder: grpc.handleUnaryCall<api_pb.PostCancelPerpOrderRequest, api_pb.PostCancelPerpOrderResponse>;
    postClosePerpPositions: grpc.handleUnaryCall<api_pb.PostClosePerpPositionsRequest, api_pb.PostClosePerpPositionsResponse>;
    getPerpOrderbook: grpc.handleUnaryCall<api_pb.GetPerpOrderbookRequest, api_pb.GetPerpOrderbookResponse>;
    getDriftSpotOrderbook: grpc.handleUnaryCall<api_pb.GetDriftSpotOrderbookRequest, api_pb.GetDriftSpotOrderbookResponse>;
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
    getDriftSpotOrderbooksStream: grpc.handleServerStreamingCall<api_pb.GetDriftSpotOrderbooksRequest, api_pb.GetDriftSpotOrderbooksStreamResponse>;
    getNewPerpOrdersStream: grpc.handleServerStreamingCall<api_pb.GetNewPerpOrdersStreamRequest, api_pb.GetNewPerpOrdersStreamResponse>;
    getPerpTradesStream: grpc.handleServerStreamingCall<api_pb.GetPerpTradesStreamRequest, api_pb.GetPerpTradesStreamResponse>;
}

export interface IApiClient {
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
    postDriftSpotOrder(request: api_pb.PostDriftSpotOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSpotOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftSpotOrder(request: api_pb.PostDriftSpotOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSpotOrderResponse) => void): grpc.ClientUnaryCall;
    postDriftSpotOrder(request: api_pb.PostDriftSpotOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSpotOrderResponse) => void): grpc.ClientUnaryCall;
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
    getDriftSpotOrderbook(request: api_pb.GetDriftSpotOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftSpotOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftSpotOrderbook(request: api_pb.GetDriftSpotOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftSpotOrderbookResponse) => void): grpc.ClientUnaryCall;
    getDriftSpotOrderbook(request: api_pb.GetDriftSpotOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftSpotOrderbookResponse) => void): grpc.ClientUnaryCall;
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
    getDriftSpotOrderbooksStream(request: api_pb.GetDriftSpotOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftSpotOrderbooksStreamResponse>;
    getDriftSpotOrderbooksStream(request: api_pb.GetDriftSpotOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftSpotOrderbooksStreamResponse>;
    getNewPerpOrdersStream(request: api_pb.GetNewPerpOrdersStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewPerpOrdersStreamResponse>;
    getNewPerpOrdersStream(request: api_pb.GetNewPerpOrdersStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewPerpOrdersStreamResponse>;
    getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
    getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
}

export class ApiClient extends grpc.Client implements IApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
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
    public postDriftSpotOrder(request: api_pb.PostDriftSpotOrderRequest, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSpotOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftSpotOrder(request: api_pb.PostDriftSpotOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSpotOrderResponse) => void): grpc.ClientUnaryCall;
    public postDriftSpotOrder(request: api_pb.PostDriftSpotOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.PostDriftSpotOrderResponse) => void): grpc.ClientUnaryCall;
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
    public getDriftSpotOrderbook(request: api_pb.GetDriftSpotOrderbookRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftSpotOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftSpotOrderbook(request: api_pb.GetDriftSpotOrderbookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftSpotOrderbookResponse) => void): grpc.ClientUnaryCall;
    public getDriftSpotOrderbook(request: api_pb.GetDriftSpotOrderbookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetDriftSpotOrderbookResponse) => void): grpc.ClientUnaryCall;
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
    public getDriftSpotOrderbooksStream(request: api_pb.GetDriftSpotOrderbooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftSpotOrderbooksStreamResponse>;
    public getDriftSpotOrderbooksStream(request: api_pb.GetDriftSpotOrderbooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetDriftSpotOrderbooksStreamResponse>;
    public getNewPerpOrdersStream(request: api_pb.GetNewPerpOrdersStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewPerpOrdersStreamResponse>;
    public getNewPerpOrdersStream(request: api_pb.GetNewPerpOrdersStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetNewPerpOrdersStreamResponse>;
    public getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
    public getPerpTradesStream(request: api_pb.GetPerpTradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.GetPerpTradesStreamResponse>;
}
