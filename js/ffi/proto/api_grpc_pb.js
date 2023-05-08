// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');
var google_api_visibility_pb = require('./google/api/visibility_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js');
var common_pb = require('./common_pb.js');

function serialize_api_DriftEnableMarginTradingRequest(arg) {
  if (!(arg instanceof api_pb.DriftEnableMarginTradingRequest)) {
    throw new Error('Expected argument of type api.DriftEnableMarginTradingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DriftEnableMarginTradingRequest(buffer_arg) {
  return api_pb.DriftEnableMarginTradingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DriftEnableMarginTradingResponse(arg) {
  if (!(arg instanceof api_pb.DriftEnableMarginTradingResponse)) {
    throw new Error('Expected argument of type api.DriftEnableMarginTradingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DriftEnableMarginTradingResponse(buffer_arg) {
  return api_pb.DriftEnableMarginTradingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAccountBalanceRequest(arg) {
  if (!(arg instanceof api_pb.GetAccountBalanceRequest)) {
    throw new Error('Expected argument of type api.GetAccountBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAccountBalanceRequest(buffer_arg) {
  return api_pb.GetAccountBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAccountBalanceResponse(arg) {
  if (!(arg instanceof api_pb.GetAccountBalanceResponse)) {
    throw new Error('Expected argument of type api.GetAccountBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAccountBalanceResponse(buffer_arg) {
  return api_pb.GetAccountBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAssetsRequest(arg) {
  if (!(arg instanceof api_pb.GetAssetsRequest)) {
    throw new Error('Expected argument of type api.GetAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAssetsRequest(buffer_arg) {
  return api_pb.GetAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAssetsResponse(arg) {
  if (!(arg instanceof api_pb.GetAssetsResponse)) {
    throw new Error('Expected argument of type api.GetAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAssetsResponse(buffer_arg) {
  return api_pb.GetAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetBlockStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetBlockStreamRequest)) {
    throw new Error('Expected argument of type api.GetBlockStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetBlockStreamRequest(buffer_arg) {
  return api_pb.GetBlockStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetBlockStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetBlockStreamResponse)) {
    throw new Error('Expected argument of type api.GetBlockStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetBlockStreamResponse(buffer_arg) {
  return api_pb.GetBlockStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDriftMarginOrderbookRequest(arg) {
  if (!(arg instanceof api_pb.GetDriftMarginOrderbookRequest)) {
    throw new Error('Expected argument of type api.GetDriftMarginOrderbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDriftMarginOrderbookRequest(buffer_arg) {
  return api_pb.GetDriftMarginOrderbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDriftMarginOrderbookResponse(arg) {
  if (!(arg instanceof api_pb.GetDriftMarginOrderbookResponse)) {
    throw new Error('Expected argument of type api.GetDriftMarginOrderbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDriftMarginOrderbookResponse(buffer_arg) {
  return api_pb.GetDriftMarginOrderbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDriftMarginOrderbooksRequest(arg) {
  if (!(arg instanceof api_pb.GetDriftMarginOrderbooksRequest)) {
    throw new Error('Expected argument of type api.GetDriftMarginOrderbooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDriftMarginOrderbooksRequest(buffer_arg) {
  return api_pb.GetDriftMarginOrderbooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDriftMarginOrderbooksStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetDriftMarginOrderbooksStreamResponse)) {
    throw new Error('Expected argument of type api.GetDriftMarginOrderbooksStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDriftMarginOrderbooksStreamResponse(buffer_arg) {
  return api_pb.GetDriftMarginOrderbooksStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDriftMarketsRequest(arg) {
  if (!(arg instanceof api_pb.GetDriftMarketsRequest)) {
    throw new Error('Expected argument of type api.GetDriftMarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDriftMarketsRequest(buffer_arg) {
  return api_pb.GetDriftMarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDriftMarketsResponse(arg) {
  if (!(arg instanceof api_pb.GetDriftMarketsResponse)) {
    throw new Error('Expected argument of type api.GetDriftMarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDriftMarketsResponse(buffer_arg) {
  return api_pb.GetDriftMarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetKlineRequest(arg) {
  if (!(arg instanceof api_pb.GetKlineRequest)) {
    throw new Error('Expected argument of type api.GetKlineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetKlineRequest(buffer_arg) {
  return api_pb.GetKlineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetKlineResponse(arg) {
  if (!(arg instanceof api_pb.GetKlineResponse)) {
    throw new Error('Expected argument of type api.GetKlineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetKlineResponse(buffer_arg) {
  return api_pb.GetKlineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthRequest(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthRequest)) {
    throw new Error('Expected argument of type api.GetMarketDepthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthRequest(buffer_arg) {
  return api_pb.GetMarketDepthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthResponse(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthResponse)) {
    throw new Error('Expected argument of type api.GetMarketDepthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthResponse(buffer_arg) {
  return api_pb.GetMarketDepthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthsRequest(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthsRequest)) {
    throw new Error('Expected argument of type api.GetMarketDepthsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthsRequest(buffer_arg) {
  return api_pb.GetMarketDepthsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketDepthsStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetMarketDepthsStreamResponse)) {
    throw new Error('Expected argument of type api.GetMarketDepthsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketDepthsStreamResponse(buffer_arg) {
  return api_pb.GetMarketDepthsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketsRequest(arg) {
  if (!(arg instanceof api_pb.GetMarketsRequest)) {
    throw new Error('Expected argument of type api.GetMarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketsRequest(buffer_arg) {
  return api_pb.GetMarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMarketsResponse(arg) {
  if (!(arg instanceof api_pb.GetMarketsResponse)) {
    throw new Error('Expected argument of type api.GetMarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMarketsResponse(buffer_arg) {
  return api_pb.GetMarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNewPerpOrdersStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetNewPerpOrdersStreamRequest)) {
    throw new Error('Expected argument of type api.GetNewPerpOrdersStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNewPerpOrdersStreamRequest(buffer_arg) {
  return api_pb.GetNewPerpOrdersStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNewPerpOrdersStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetNewPerpOrdersStreamResponse)) {
    throw new Error('Expected argument of type api.GetNewPerpOrdersStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNewPerpOrdersStreamResponse(buffer_arg) {
  return api_pb.GetNewPerpOrdersStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenOrdersRequest(arg) {
  if (!(arg instanceof api_pb.GetOpenOrdersRequest)) {
    throw new Error('Expected argument of type api.GetOpenOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenOrdersRequest(buffer_arg) {
  return api_pb.GetOpenOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenOrdersResponse(arg) {
  if (!(arg instanceof api_pb.GetOpenOrdersResponse)) {
    throw new Error('Expected argument of type api.GetOpenOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenOrdersResponse(buffer_arg) {
  return api_pb.GetOpenOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenPerpOrderRequest(arg) {
  if (!(arg instanceof api_pb.GetOpenPerpOrderRequest)) {
    throw new Error('Expected argument of type api.GetOpenPerpOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenPerpOrderRequest(buffer_arg) {
  return api_pb.GetOpenPerpOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenPerpOrderResponse(arg) {
  if (!(arg instanceof api_pb.GetOpenPerpOrderResponse)) {
    throw new Error('Expected argument of type api.GetOpenPerpOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenPerpOrderResponse(buffer_arg) {
  return api_pb.GetOpenPerpOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenPerpOrdersRequest(arg) {
  if (!(arg instanceof api_pb.GetOpenPerpOrdersRequest)) {
    throw new Error('Expected argument of type api.GetOpenPerpOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenPerpOrdersRequest(buffer_arg) {
  return api_pb.GetOpenPerpOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOpenPerpOrdersResponse(arg) {
  if (!(arg instanceof api_pb.GetOpenPerpOrdersResponse)) {
    throw new Error('Expected argument of type api.GetOpenPerpOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOpenPerpOrdersResponse(buffer_arg) {
  return api_pb.GetOpenPerpOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderByIDRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderByIDRequest)) {
    throw new Error('Expected argument of type api.GetOrderByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderByIDRequest(buffer_arg) {
  return api_pb.GetOrderByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderByIDResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderByIDResponse)) {
    throw new Error('Expected argument of type api.GetOrderByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderByIDResponse(buffer_arg) {
  return api_pb.GetOrderByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderStatusStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderStatusStreamRequest)) {
    throw new Error('Expected argument of type api.GetOrderStatusStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderStatusStreamRequest(buffer_arg) {
  return api_pb.GetOrderStatusStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderStatusStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderStatusStreamResponse)) {
    throw new Error('Expected argument of type api.GetOrderStatusStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderStatusStreamResponse(buffer_arg) {
  return api_pb.GetOrderStatusStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbookRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderbookRequest)) {
    throw new Error('Expected argument of type api.GetOrderbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbookRequest(buffer_arg) {
  return api_pb.GetOrderbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbookResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderbookResponse)) {
    throw new Error('Expected argument of type api.GetOrderbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbookResponse(buffer_arg) {
  return api_pb.GetOrderbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbooksRequest(arg) {
  if (!(arg instanceof api_pb.GetOrderbooksRequest)) {
    throw new Error('Expected argument of type api.GetOrderbooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbooksRequest(buffer_arg) {
  return api_pb.GetOrderbooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrderbooksStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetOrderbooksStreamResponse)) {
    throw new Error('Expected argument of type api.GetOrderbooksStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrderbooksStreamResponse(buffer_arg) {
  return api_pb.GetOrderbooksStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrdersRequest(arg) {
  if (!(arg instanceof api_pb.GetOrdersRequest)) {
    throw new Error('Expected argument of type api.GetOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrdersRequest(buffer_arg) {
  return api_pb.GetOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrdersResponse(arg) {
  if (!(arg instanceof api_pb.GetOrdersResponse)) {
    throw new Error('Expected argument of type api.GetOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrdersResponse(buffer_arg) {
  return api_pb.GetOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpContractsRequest(arg) {
  if (!(arg instanceof api_pb.GetPerpContractsRequest)) {
    throw new Error('Expected argument of type api.GetPerpContractsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpContractsRequest(buffer_arg) {
  return api_pb.GetPerpContractsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpContractsResponse(arg) {
  if (!(arg instanceof api_pb.GetPerpContractsResponse)) {
    throw new Error('Expected argument of type api.GetPerpContractsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpContractsResponse(buffer_arg) {
  return api_pb.GetPerpContractsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpOrderbookRequest(arg) {
  if (!(arg instanceof api_pb.GetPerpOrderbookRequest)) {
    throw new Error('Expected argument of type api.GetPerpOrderbookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpOrderbookRequest(buffer_arg) {
  return api_pb.GetPerpOrderbookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpOrderbookResponse(arg) {
  if (!(arg instanceof api_pb.GetPerpOrderbookResponse)) {
    throw new Error('Expected argument of type api.GetPerpOrderbookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpOrderbookResponse(buffer_arg) {
  return api_pb.GetPerpOrderbookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpOrderbooksRequest(arg) {
  if (!(arg instanceof api_pb.GetPerpOrderbooksRequest)) {
    throw new Error('Expected argument of type api.GetPerpOrderbooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpOrderbooksRequest(buffer_arg) {
  return api_pb.GetPerpOrderbooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpOrderbooksStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetPerpOrderbooksStreamResponse)) {
    throw new Error('Expected argument of type api.GetPerpOrderbooksStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpOrderbooksStreamResponse(buffer_arg) {
  return api_pb.GetPerpOrderbooksStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpPositionsRequest(arg) {
  if (!(arg instanceof api_pb.GetPerpPositionsRequest)) {
    throw new Error('Expected argument of type api.GetPerpPositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpPositionsRequest(buffer_arg) {
  return api_pb.GetPerpPositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpPositionsResponse(arg) {
  if (!(arg instanceof api_pb.GetPerpPositionsResponse)) {
    throw new Error('Expected argument of type api.GetPerpPositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpPositionsResponse(buffer_arg) {
  return api_pb.GetPerpPositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpTradesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetPerpTradesStreamRequest)) {
    throw new Error('Expected argument of type api.GetPerpTradesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpTradesStreamRequest(buffer_arg) {
  return api_pb.GetPerpTradesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPerpTradesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetPerpTradesStreamResponse)) {
    throw new Error('Expected argument of type api.GetPerpTradesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPerpTradesStreamResponse(buffer_arg) {
  return api_pb.GetPerpTradesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolReservesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetPoolReservesStreamRequest)) {
    throw new Error('Expected argument of type api.GetPoolReservesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolReservesStreamRequest(buffer_arg) {
  return api_pb.GetPoolReservesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolReservesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetPoolReservesStreamResponse)) {
    throw new Error('Expected argument of type api.GetPoolReservesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolReservesStreamResponse(buffer_arg) {
  return api_pb.GetPoolReservesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolsRequest(arg) {
  if (!(arg instanceof api_pb.GetPoolsRequest)) {
    throw new Error('Expected argument of type api.GetPoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolsRequest(buffer_arg) {
  return api_pb.GetPoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPoolsResponse(arg) {
  if (!(arg instanceof api_pb.GetPoolsResponse)) {
    throw new Error('Expected argument of type api.GetPoolsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPoolsResponse(buffer_arg) {
  return api_pb.GetPoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPriceRequest(arg) {
  if (!(arg instanceof api_pb.GetPriceRequest)) {
    throw new Error('Expected argument of type api.GetPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPriceRequest(buffer_arg) {
  return api_pb.GetPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPriceResponse(arg) {
  if (!(arg instanceof api_pb.GetPriceResponse)) {
    throw new Error('Expected argument of type api.GetPriceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPriceResponse(buffer_arg) {
  return api_pb.GetPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPricesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetPricesStreamRequest)) {
    throw new Error('Expected argument of type api.GetPricesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPricesStreamRequest(buffer_arg) {
  return api_pb.GetPricesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPricesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetPricesStreamResponse)) {
    throw new Error('Expected argument of type api.GetPricesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPricesStreamResponse(buffer_arg) {
  return api_pb.GetPricesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesRequest(arg) {
  if (!(arg instanceof api_pb.GetQuotesRequest)) {
    throw new Error('Expected argument of type api.GetQuotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesRequest(buffer_arg) {
  return api_pb.GetQuotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesResponse(arg) {
  if (!(arg instanceof api_pb.GetQuotesResponse)) {
    throw new Error('Expected argument of type api.GetQuotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesResponse(buffer_arg) {
  return api_pb.GetQuotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetQuotesStreamRequest)) {
    throw new Error('Expected argument of type api.GetQuotesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesStreamRequest(buffer_arg) {
  return api_pb.GetQuotesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetQuotesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetQuotesStreamResponse)) {
    throw new Error('Expected argument of type api.GetQuotesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetQuotesStreamResponse(buffer_arg) {
  return api_pb.GetQuotesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetRecentBlockHashRequest(arg) {
  if (!(arg instanceof api_pb.GetRecentBlockHashRequest)) {
    throw new Error('Expected argument of type api.GetRecentBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetRecentBlockHashRequest(buffer_arg) {
  return api_pb.GetRecentBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetRecentBlockHashResponse(arg) {
  if (!(arg instanceof api_pb.GetRecentBlockHashResponse)) {
    throw new Error('Expected argument of type api.GetRecentBlockHashResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetRecentBlockHashResponse(buffer_arg) {
  return api_pb.GetRecentBlockHashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetServerTimeRequest(arg) {
  if (!(arg instanceof api_pb.GetServerTimeRequest)) {
    throw new Error('Expected argument of type api.GetServerTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetServerTimeRequest(buffer_arg) {
  return api_pb.GetServerTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetServerTimeResponse(arg) {
  if (!(arg instanceof api_pb.GetServerTimeResponse)) {
    throw new Error('Expected argument of type api.GetServerTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetServerTimeResponse(buffer_arg) {
  return api_pb.GetServerTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetSwapsStreamRequest(arg) {
  if (!(arg instanceof api_pb.GetSwapsStreamRequest)) {
    throw new Error('Expected argument of type api.GetSwapsStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetSwapsStreamRequest(buffer_arg) {
  return api_pb.GetSwapsStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetSwapsStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetSwapsStreamResponse)) {
    throw new Error('Expected argument of type api.GetSwapsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetSwapsStreamResponse(buffer_arg) {
  return api_pb.GetSwapsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTickersRequest(arg) {
  if (!(arg instanceof api_pb.GetTickersRequest)) {
    throw new Error('Expected argument of type api.GetTickersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTickersRequest(buffer_arg) {
  return api_pb.GetTickersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTickersResponse(arg) {
  if (!(arg instanceof api_pb.GetTickersResponse)) {
    throw new Error('Expected argument of type api.GetTickersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTickersResponse(buffer_arg) {
  return api_pb.GetTickersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTickersStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetTickersStreamResponse)) {
    throw new Error('Expected argument of type api.GetTickersStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTickersStreamResponse(buffer_arg) {
  return api_pb.GetTickersStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTokenAccountsRequest(arg) {
  if (!(arg instanceof api_pb.GetTokenAccountsRequest)) {
    throw new Error('Expected argument of type api.GetTokenAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTokenAccountsRequest(buffer_arg) {
  return api_pb.GetTokenAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTokenAccountsResponse(arg) {
  if (!(arg instanceof api_pb.GetTokenAccountsResponse)) {
    throw new Error('Expected argument of type api.GetTokenAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTokenAccountsResponse(buffer_arg) {
  return api_pb.GetTokenAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTradesRequest(arg) {
  if (!(arg instanceof api_pb.GetTradesRequest)) {
    throw new Error('Expected argument of type api.GetTradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTradesRequest(buffer_arg) {
  return api_pb.GetTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTradesResponse(arg) {
  if (!(arg instanceof api_pb.GetTradesResponse)) {
    throw new Error('Expected argument of type api.GetTradesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTradesResponse(buffer_arg) {
  return api_pb.GetTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetTradesStreamResponse(arg) {
  if (!(arg instanceof api_pb.GetTradesStreamResponse)) {
    throw new Error('Expected argument of type api.GetTradesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetTradesStreamResponse(buffer_arg) {
  return api_pb.GetTradesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUnsettledRequest(arg) {
  if (!(arg instanceof api_pb.GetUnsettledRequest)) {
    throw new Error('Expected argument of type api.GetUnsettledRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUnsettledRequest(buffer_arg) {
  return api_pb.GetUnsettledRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUnsettledResponse(arg) {
  if (!(arg instanceof api_pb.GetUnsettledResponse)) {
    throw new Error('Expected argument of type api.GetUnsettledResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUnsettledResponse(buffer_arg) {
  return api_pb.GetUnsettledResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUserRequest(arg) {
  if (!(arg instanceof api_pb.GetUserRequest)) {
    throw new Error('Expected argument of type api.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUserRequest(buffer_arg) {
  return api_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUserResponse(arg) {
  if (!(arg instanceof api_pb.GetUserResponse)) {
    throw new Error('Expected argument of type api.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUserResponse(buffer_arg) {
  return api_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelAllRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelAllRequest)) {
    throw new Error('Expected argument of type api.PostCancelAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelAllRequest(buffer_arg) {
  return api_pb.PostCancelAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelAllResponse(arg) {
  if (!(arg instanceof api_pb.PostCancelAllResponse)) {
    throw new Error('Expected argument of type api.PostCancelAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelAllResponse(buffer_arg) {
  return api_pb.PostCancelAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelByClientOrderIDRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelByClientOrderIDRequest)) {
    throw new Error('Expected argument of type api.PostCancelByClientOrderIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelByClientOrderIDRequest(buffer_arg) {
  return api_pb.PostCancelByClientOrderIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelOrderRequest)) {
    throw new Error('Expected argument of type api.PostCancelOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelOrderRequest(buffer_arg) {
  return api_pb.PostCancelOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostCancelOrderResponse)) {
    throw new Error('Expected argument of type api.PostCancelOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelOrderResponse(buffer_arg) {
  return api_pb.PostCancelOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelPerpOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelPerpOrderRequest)) {
    throw new Error('Expected argument of type api.PostCancelPerpOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelPerpOrderRequest(buffer_arg) {
  return api_pb.PostCancelPerpOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelPerpOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostCancelPerpOrderResponse)) {
    throw new Error('Expected argument of type api.PostCancelPerpOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelPerpOrderResponse(buffer_arg) {
  return api_pb.PostCancelPerpOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelPerpOrdersRequest(arg) {
  if (!(arg instanceof api_pb.PostCancelPerpOrdersRequest)) {
    throw new Error('Expected argument of type api.PostCancelPerpOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelPerpOrdersRequest(buffer_arg) {
  return api_pb.PostCancelPerpOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCancelPerpOrdersResponse(arg) {
  if (!(arg instanceof api_pb.PostCancelPerpOrdersResponse)) {
    throw new Error('Expected argument of type api.PostCancelPerpOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCancelPerpOrdersResponse(buffer_arg) {
  return api_pb.PostCancelPerpOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostClosePerpPositionsRequest(arg) {
  if (!(arg instanceof api_pb.PostClosePerpPositionsRequest)) {
    throw new Error('Expected argument of type api.PostClosePerpPositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostClosePerpPositionsRequest(buffer_arg) {
  return api_pb.PostClosePerpPositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostClosePerpPositionsResponse(arg) {
  if (!(arg instanceof api_pb.PostClosePerpPositionsResponse)) {
    throw new Error('Expected argument of type api.PostClosePerpPositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostClosePerpPositionsResponse(buffer_arg) {
  return api_pb.PostClosePerpPositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCreateUserRequest(arg) {
  if (!(arg instanceof api_pb.PostCreateUserRequest)) {
    throw new Error('Expected argument of type api.PostCreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCreateUserRequest(buffer_arg) {
  return api_pb.PostCreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostCreateUserResponse(arg) {
  if (!(arg instanceof api_pb.PostCreateUserResponse)) {
    throw new Error('Expected argument of type api.PostCreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostCreateUserResponse(buffer_arg) {
  return api_pb.PostCreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostDriftMarginOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostDriftMarginOrderRequest)) {
    throw new Error('Expected argument of type api.PostDriftMarginOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostDriftMarginOrderRequest(buffer_arg) {
  return api_pb.PostDriftMarginOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostDriftMarginOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostDriftMarginOrderResponse)) {
    throw new Error('Expected argument of type api.PostDriftMarginOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostDriftMarginOrderResponse(buffer_arg) {
  return api_pb.PostDriftMarginOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostLiquidatePerpRequest(arg) {
  if (!(arg instanceof api_pb.PostLiquidatePerpRequest)) {
    throw new Error('Expected argument of type api.PostLiquidatePerpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostLiquidatePerpRequest(buffer_arg) {
  return api_pb.PostLiquidatePerpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostLiquidatePerpResponse(arg) {
  if (!(arg instanceof api_pb.PostLiquidatePerpResponse)) {
    throw new Error('Expected argument of type api.PostLiquidatePerpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostLiquidatePerpResponse(buffer_arg) {
  return api_pb.PostLiquidatePerpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostManageCollateralRequest(arg) {
  if (!(arg instanceof api_pb.PostManageCollateralRequest)) {
    throw new Error('Expected argument of type api.PostManageCollateralRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostManageCollateralRequest(buffer_arg) {
  return api_pb.PostManageCollateralRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostManageCollateralResponse(arg) {
  if (!(arg instanceof api_pb.PostManageCollateralResponse)) {
    throw new Error('Expected argument of type api.PostManageCollateralResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostManageCollateralResponse(buffer_arg) {
  return api_pb.PostManageCollateralResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostOrderRequest)) {
    throw new Error('Expected argument of type api.PostOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostOrderRequest(buffer_arg) {
  return api_pb.PostOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostOrderResponse)) {
    throw new Error('Expected argument of type api.PostOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostOrderResponse(buffer_arg) {
  return api_pb.PostOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostPerpOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostPerpOrderRequest)) {
    throw new Error('Expected argument of type api.PostPerpOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostPerpOrderRequest(buffer_arg) {
  return api_pb.PostPerpOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostPerpOrderResponse(arg) {
  if (!(arg instanceof api_pb.PostPerpOrderResponse)) {
    throw new Error('Expected argument of type api.PostPerpOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostPerpOrderResponse(buffer_arg) {
  return api_pb.PostPerpOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostReplaceOrderRequest(arg) {
  if (!(arg instanceof api_pb.PostReplaceOrderRequest)) {
    throw new Error('Expected argument of type api.PostReplaceOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostReplaceOrderRequest(buffer_arg) {
  return api_pb.PostReplaceOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettlePNLRequest(arg) {
  if (!(arg instanceof api_pb.PostSettlePNLRequest)) {
    throw new Error('Expected argument of type api.PostSettlePNLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettlePNLRequest(buffer_arg) {
  return api_pb.PostSettlePNLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettlePNLResponse(arg) {
  if (!(arg instanceof api_pb.PostSettlePNLResponse)) {
    throw new Error('Expected argument of type api.PostSettlePNLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettlePNLResponse(buffer_arg) {
  return api_pb.PostSettlePNLResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettlePNLsRequest(arg) {
  if (!(arg instanceof api_pb.PostSettlePNLsRequest)) {
    throw new Error('Expected argument of type api.PostSettlePNLsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettlePNLsRequest(buffer_arg) {
  return api_pb.PostSettlePNLsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettlePNLsResponse(arg) {
  if (!(arg instanceof api_pb.PostSettlePNLsResponse)) {
    throw new Error('Expected argument of type api.PostSettlePNLsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettlePNLsResponse(buffer_arg) {
  return api_pb.PostSettlePNLsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettleRequest(arg) {
  if (!(arg instanceof api_pb.PostSettleRequest)) {
    throw new Error('Expected argument of type api.PostSettleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettleRequest(buffer_arg) {
  return api_pb.PostSettleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSettleResponse(arg) {
  if (!(arg instanceof api_pb.PostSettleResponse)) {
    throw new Error('Expected argument of type api.PostSettleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSettleResponse(buffer_arg) {
  return api_pb.PostSettleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitBatchRequest(arg) {
  if (!(arg instanceof api_pb.PostSubmitBatchRequest)) {
    throw new Error('Expected argument of type api.PostSubmitBatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitBatchRequest(buffer_arg) {
  return api_pb.PostSubmitBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitBatchResponse(arg) {
  if (!(arg instanceof api_pb.PostSubmitBatchResponse)) {
    throw new Error('Expected argument of type api.PostSubmitBatchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitBatchResponse(buffer_arg) {
  return api_pb.PostSubmitBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitRequest(arg) {
  if (!(arg instanceof api_pb.PostSubmitRequest)) {
    throw new Error('Expected argument of type api.PostSubmitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitRequest(buffer_arg) {
  return api_pb.PostSubmitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_PostSubmitResponse(arg) {
  if (!(arg instanceof api_pb.PostSubmitResponse)) {
    throw new Error('Expected argument of type api.PostSubmitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_PostSubmitResponse(buffer_arg) {
  return api_pb.PostSubmitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_RouteTradeSwapRequest(arg) {
  if (!(arg instanceof api_pb.RouteTradeSwapRequest)) {
    throw new Error('Expected argument of type api.RouteTradeSwapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_RouteTradeSwapRequest(buffer_arg) {
  return api_pb.RouteTradeSwapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_TradeSwapRequest(arg) {
  if (!(arg instanceof api_pb.TradeSwapRequest)) {
    throw new Error('Expected argument of type api.TradeSwapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_TradeSwapRequest(buffer_arg) {
  return api_pb.TradeSwapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_TradeSwapResponse(arg) {
  if (!(arg instanceof api_pb.TradeSwapResponse)) {
    throw new Error('Expected argument of type api.TradeSwapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_TradeSwapResponse(buffer_arg) {
  return api_pb.TradeSwapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiService = exports.ApiService = {
  // Drift V2
getDriftMarkets: {
    path: '/api.Api/GetDriftMarkets',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetDriftMarketsRequest,
    responseType: api_pb.GetDriftMarketsResponse,
    requestSerialize: serialize_api_GetDriftMarketsRequest,
    requestDeserialize: deserialize_api_GetDriftMarketsRequest,
    responseSerialize: serialize_api_GetDriftMarketsResponse,
    responseDeserialize: deserialize_api_GetDriftMarketsResponse,
  },
  postDriftMarginOrder: {
    path: '/api.Api/PostDriftMarginOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostDriftMarginOrderRequest,
    responseType: api_pb.PostDriftMarginOrderResponse,
    requestSerialize: serialize_api_PostDriftMarginOrderRequest,
    requestDeserialize: deserialize_api_PostDriftMarginOrderRequest,
    responseSerialize: serialize_api_PostDriftMarginOrderResponse,
    responseDeserialize: deserialize_api_PostDriftMarginOrderResponse,
  },
  driftEnableMarginTrading: {
    path: '/api.Api/DriftEnableMarginTrading',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.DriftEnableMarginTradingRequest,
    responseType: api_pb.DriftEnableMarginTradingResponse,
    requestSerialize: serialize_api_DriftEnableMarginTradingRequest,
    requestDeserialize: deserialize_api_DriftEnableMarginTradingRequest,
    responseSerialize: serialize_api_DriftEnableMarginTradingResponse,
    responseDeserialize: deserialize_api_DriftEnableMarginTradingResponse,
  },
  getDriftMarginOrderbook: {
    path: '/api.Api/GetDriftMarginOrderbook',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetDriftMarginOrderbookRequest,
    responseType: api_pb.GetDriftMarginOrderbookResponse,
    requestSerialize: serialize_api_GetDriftMarginOrderbookRequest,
    requestDeserialize: deserialize_api_GetDriftMarginOrderbookRequest,
    responseSerialize: serialize_api_GetDriftMarginOrderbookResponse,
    responseDeserialize: deserialize_api_GetDriftMarginOrderbookResponse,
  },
  getDriftMarginOrderbooksStream: {
    path: '/api.Api/GetDriftMarginOrderbooksStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetDriftMarginOrderbooksRequest,
    responseType: api_pb.GetDriftMarginOrderbooksStreamResponse,
    requestSerialize: serialize_api_GetDriftMarginOrderbooksRequest,
    requestDeserialize: deserialize_api_GetDriftMarginOrderbooksRequest,
    responseSerialize: serialize_api_GetDriftMarginOrderbooksStreamResponse,
    responseDeserialize: deserialize_api_GetDriftMarginOrderbooksStreamResponse,
  },
  getPrice: {
    path: '/api.Api/GetPrice',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPriceRequest,
    responseType: api_pb.GetPriceResponse,
    requestSerialize: serialize_api_GetPriceRequest,
    requestDeserialize: deserialize_api_GetPriceRequest,
    responseSerialize: serialize_api_GetPriceResponse,
    responseDeserialize: deserialize_api_GetPriceResponse,
  },
  getMarkets: {
    path: '/api.Api/GetMarkets',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetMarketsRequest,
    responseType: api_pb.GetMarketsResponse,
    requestSerialize: serialize_api_GetMarketsRequest,
    requestDeserialize: deserialize_api_GetMarketsRequest,
    responseSerialize: serialize_api_GetMarketsResponse,
    responseDeserialize: deserialize_api_GetMarketsResponse,
  },
  getPools: {
    path: '/api.Api/GetPools',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPoolsRequest,
    responseType: api_pb.GetPoolsResponse,
    requestSerialize: serialize_api_GetPoolsRequest,
    requestDeserialize: deserialize_api_GetPoolsRequest,
    responseSerialize: serialize_api_GetPoolsResponse,
    responseDeserialize: deserialize_api_GetPoolsResponse,
  },
  getTickers: {
    path: '/api.Api/GetTickers',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTickersRequest,
    responseType: api_pb.GetTickersResponse,
    requestSerialize: serialize_api_GetTickersRequest,
    requestDeserialize: deserialize_api_GetTickersRequest,
    responseSerialize: serialize_api_GetTickersResponse,
    responseDeserialize: deserialize_api_GetTickersResponse,
  },
  getKline: {
    path: '/api.Api/GetKline',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetKlineRequest,
    responseType: api_pb.GetKlineResponse,
    requestSerialize: serialize_api_GetKlineRequest,
    requestDeserialize: deserialize_api_GetKlineRequest,
    responseSerialize: serialize_api_GetKlineResponse,
    responseDeserialize: deserialize_api_GetKlineResponse,
  },
  getOrderbook: {
    path: '/api.Api/GetOrderbook',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOrderbookRequest,
    responseType: api_pb.GetOrderbookResponse,
    requestSerialize: serialize_api_GetOrderbookRequest,
    requestDeserialize: deserialize_api_GetOrderbookRequest,
    responseSerialize: serialize_api_GetOrderbookResponse,
    responseDeserialize: deserialize_api_GetOrderbookResponse,
  },
  getMarketDepth: {
    path: '/api.Api/GetMarketDepth',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetMarketDepthRequest,
    responseType: api_pb.GetMarketDepthResponse,
    requestSerialize: serialize_api_GetMarketDepthRequest,
    requestDeserialize: deserialize_api_GetMarketDepthRequest,
    responseSerialize: serialize_api_GetMarketDepthResponse,
    responseDeserialize: deserialize_api_GetMarketDepthResponse,
  },
  getTrades: {
    path: '/api.Api/GetTrades',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTradesRequest,
    responseType: api_pb.GetTradesResponse,
    requestSerialize: serialize_api_GetTradesRequest,
    requestDeserialize: deserialize_api_GetTradesRequest,
    responseSerialize: serialize_api_GetTradesResponse,
    responseDeserialize: deserialize_api_GetTradesResponse,
  },
  getQuotes: {
    path: '/api.Api/GetQuotes',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetQuotesRequest,
    responseType: api_pb.GetQuotesResponse,
    requestSerialize: serialize_api_GetQuotesRequest,
    requestDeserialize: deserialize_api_GetQuotesRequest,
    responseSerialize: serialize_api_GetQuotesResponse,
    responseDeserialize: deserialize_api_GetQuotesResponse,
  },
  // system API
getServerTime: {
    path: '/api.Api/GetServerTime',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetServerTimeRequest,
    responseType: api_pb.GetServerTimeResponse,
    requestSerialize: serialize_api_GetServerTimeRequest,
    requestDeserialize: deserialize_api_GetServerTimeRequest,
    responseSerialize: serialize_api_GetServerTimeResponse,
    responseDeserialize: deserialize_api_GetServerTimeResponse,
  },
  getRecentBlockHash: {
    path: '/api.Api/GetRecentBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetRecentBlockHashRequest,
    responseType: api_pb.GetRecentBlockHashResponse,
    requestSerialize: serialize_api_GetRecentBlockHashRequest,
    requestDeserialize: deserialize_api_GetRecentBlockHashRequest,
    responseSerialize: serialize_api_GetRecentBlockHashResponse,
    responseDeserialize: deserialize_api_GetRecentBlockHashResponse,
  },
  // account endpoints
getAccountBalance: {
    path: '/api.Api/GetAccountBalance',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetAccountBalanceRequest,
    responseType: api_pb.GetAccountBalanceResponse,
    requestSerialize: serialize_api_GetAccountBalanceRequest,
    requestDeserialize: deserialize_api_GetAccountBalanceRequest,
    responseSerialize: serialize_api_GetAccountBalanceResponse,
    responseDeserialize: deserialize_api_GetAccountBalanceResponse,
  },
  getTokenAccounts: {
    path: '/api.Api/GetTokenAccounts',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTokenAccountsRequest,
    responseType: api_pb.GetTokenAccountsResponse,
    requestSerialize: serialize_api_GetTokenAccountsRequest,
    requestDeserialize: deserialize_api_GetTokenAccountsRequest,
    responseSerialize: serialize_api_GetTokenAccountsResponse,
    responseDeserialize: deserialize_api_GetTokenAccountsResponse,
  },
  // trade endpoints
postOrder: {
    path: '/api.Api/PostOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostOrderRequest,
    responseType: api_pb.PostOrderResponse,
    requestSerialize: serialize_api_PostOrderRequest,
    requestDeserialize: deserialize_api_PostOrderRequest,
    responseSerialize: serialize_api_PostOrderResponse,
    responseDeserialize: deserialize_api_PostOrderResponse,
  },
  postSubmit: {
    path: '/api.Api/PostSubmit',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSubmitRequest,
    responseType: api_pb.PostSubmitResponse,
    requestSerialize: serialize_api_PostSubmitRequest,
    requestDeserialize: deserialize_api_PostSubmitRequest,
    responseSerialize: serialize_api_PostSubmitResponse,
    responseDeserialize: deserialize_api_PostSubmitResponse,
  },
  postSubmitBatch: {
    path: '/api.Api/PostSubmitBatch',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSubmitBatchRequest,
    responseType: api_pb.PostSubmitBatchResponse,
    requestSerialize: serialize_api_PostSubmitBatchRequest,
    requestDeserialize: deserialize_api_PostSubmitBatchRequest,
    responseSerialize: serialize_api_PostSubmitBatchResponse,
    responseDeserialize: deserialize_api_PostSubmitBatchResponse,
  },
  postCancelOrder: {
    path: '/api.Api/PostCancelOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelOrderRequest,
    responseType: api_pb.PostCancelOrderResponse,
    requestSerialize: serialize_api_PostCancelOrderRequest,
    requestDeserialize: deserialize_api_PostCancelOrderRequest,
    responseSerialize: serialize_api_PostCancelOrderResponse,
    responseDeserialize: deserialize_api_PostCancelOrderResponse,
  },
  postCancelByClientOrderID: {
    path: '/api.Api/PostCancelByClientOrderID',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelByClientOrderIDRequest,
    responseType: api_pb.PostCancelOrderResponse,
    requestSerialize: serialize_api_PostCancelByClientOrderIDRequest,
    requestDeserialize: deserialize_api_PostCancelByClientOrderIDRequest,
    responseSerialize: serialize_api_PostCancelOrderResponse,
    responseDeserialize: deserialize_api_PostCancelOrderResponse,
  },
  postCancelAll: {
    path: '/api.Api/PostCancelAll',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelAllRequest,
    responseType: api_pb.PostCancelAllResponse,
    requestSerialize: serialize_api_PostCancelAllRequest,
    requestDeserialize: deserialize_api_PostCancelAllRequest,
    responseSerialize: serialize_api_PostCancelAllResponse,
    responseDeserialize: deserialize_api_PostCancelAllResponse,
  },
  postReplaceByClientOrderID: {
    path: '/api.Api/PostReplaceByClientOrderID',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostOrderRequest,
    responseType: api_pb.PostOrderResponse,
    requestSerialize: serialize_api_PostOrderRequest,
    requestDeserialize: deserialize_api_PostOrderRequest,
    responseSerialize: serialize_api_PostOrderResponse,
    responseDeserialize: deserialize_api_PostOrderResponse,
  },
  postReplaceOrder: {
    path: '/api.Api/PostReplaceOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostReplaceOrderRequest,
    responseType: api_pb.PostOrderResponse,
    requestSerialize: serialize_api_PostReplaceOrderRequest,
    requestDeserialize: deserialize_api_PostReplaceOrderRequest,
    responseSerialize: serialize_api_PostOrderResponse,
    responseDeserialize: deserialize_api_PostOrderResponse,
  },
  postSettle: {
    path: '/api.Api/PostSettle',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSettleRequest,
    responseType: api_pb.PostSettleResponse,
    requestSerialize: serialize_api_PostSettleRequest,
    requestDeserialize: deserialize_api_PostSettleRequest,
    responseSerialize: serialize_api_PostSettleResponse,
    responseDeserialize: deserialize_api_PostSettleResponse,
  },
  postTradeSwap: {
    path: '/api.Api/PostTradeSwap',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TradeSwapRequest,
    responseType: api_pb.TradeSwapResponse,
    requestSerialize: serialize_api_TradeSwapRequest,
    requestDeserialize: deserialize_api_TradeSwapRequest,
    responseSerialize: serialize_api_TradeSwapResponse,
    responseDeserialize: deserialize_api_TradeSwapResponse,
  },
  getOrders: {
    path: '/api.Api/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOrdersRequest,
    responseType: api_pb.GetOrdersResponse,
    requestSerialize: serialize_api_GetOrdersRequest,
    requestDeserialize: deserialize_api_GetOrdersRequest,
    responseSerialize: serialize_api_GetOrdersResponse,
    responseDeserialize: deserialize_api_GetOrdersResponse,
  },
  getOpenOrders: {
    path: '/api.Api/GetOpenOrders',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOpenOrdersRequest,
    responseType: api_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_api_GetOpenOrdersRequest,
    requestDeserialize: deserialize_api_GetOpenOrdersRequest,
    responseSerialize: serialize_api_GetOpenOrdersResponse,
    responseDeserialize: deserialize_api_GetOpenOrdersResponse,
  },
  getOrderByID: {
    path: '/api.Api/GetOrderByID',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOrderByIDRequest,
    responseType: api_pb.GetOrderByIDResponse,
    requestSerialize: serialize_api_GetOrderByIDRequest,
    requestDeserialize: deserialize_api_GetOrderByIDRequest,
    responseSerialize: serialize_api_GetOrderByIDResponse,
    responseDeserialize: deserialize_api_GetOrderByIDResponse,
  },
  getUnsettled: {
    path: '/api.Api/GetUnsettled',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetUnsettledRequest,
    responseType: api_pb.GetUnsettledResponse,
    requestSerialize: serialize_api_GetUnsettledRequest,
    requestDeserialize: deserialize_api_GetUnsettledRequest,
    responseSerialize: serialize_api_GetUnsettledResponse,
    responseDeserialize: deserialize_api_GetUnsettledResponse,
  },
  postRouteTradeSwap: {
    path: '/api.Api/PostRouteTradeSwap',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.RouteTradeSwapRequest,
    responseType: api_pb.TradeSwapResponse,
    requestSerialize: serialize_api_RouteTradeSwapRequest,
    requestDeserialize: deserialize_api_RouteTradeSwapRequest,
    responseSerialize: serialize_api_TradeSwapResponse,
    responseDeserialize: deserialize_api_TradeSwapResponse,
  },
  // Drift V1 endpoints
//
// perp endpoints
postPerpOrder: {
    path: '/api.Api/PostPerpOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostPerpOrderRequest,
    responseType: api_pb.PostPerpOrderResponse,
    requestSerialize: serialize_api_PostPerpOrderRequest,
    requestDeserialize: deserialize_api_PostPerpOrderRequest,
    responseSerialize: serialize_api_PostPerpOrderResponse,
    responseDeserialize: deserialize_api_PostPerpOrderResponse,
  },
  getPerpPositions: {
    path: '/api.Api/GetPerpPositions',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPerpPositionsRequest,
    responseType: api_pb.GetPerpPositionsResponse,
    requestSerialize: serialize_api_GetPerpPositionsRequest,
    requestDeserialize: deserialize_api_GetPerpPositionsRequest,
    responseSerialize: serialize_api_GetPerpPositionsResponse,
    responseDeserialize: deserialize_api_GetPerpPositionsResponse,
  },
  getOpenPerpOrders: {
    path: '/api.Api/GetOpenPerpOrders',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOpenPerpOrdersRequest,
    responseType: api_pb.GetOpenPerpOrdersResponse,
    requestSerialize: serialize_api_GetOpenPerpOrdersRequest,
    requestDeserialize: deserialize_api_GetOpenPerpOrdersRequest,
    responseSerialize: serialize_api_GetOpenPerpOrdersResponse,
    responseDeserialize: deserialize_api_GetOpenPerpOrdersResponse,
  },
  postCancelPerpOrders: {
    path: '/api.Api/PostCancelPerpOrders',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelPerpOrdersRequest,
    responseType: api_pb.PostCancelPerpOrdersResponse,
    requestSerialize: serialize_api_PostCancelPerpOrdersRequest,
    requestDeserialize: deserialize_api_PostCancelPerpOrdersRequest,
    responseSerialize: serialize_api_PostCancelPerpOrdersResponse,
    responseDeserialize: deserialize_api_PostCancelPerpOrdersResponse,
  },
  postCancelPerpOrder: {
    path: '/api.Api/PostCancelPerpOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCancelPerpOrderRequest,
    responseType: api_pb.PostCancelPerpOrderResponse,
    requestSerialize: serialize_api_PostCancelPerpOrderRequest,
    requestDeserialize: deserialize_api_PostCancelPerpOrderRequest,
    responseSerialize: serialize_api_PostCancelPerpOrderResponse,
    responseDeserialize: deserialize_api_PostCancelPerpOrderResponse,
  },
  postClosePerpPositions: {
    path: '/api.Api/PostClosePerpPositions',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostClosePerpPositionsRequest,
    responseType: api_pb.PostClosePerpPositionsResponse,
    requestSerialize: serialize_api_PostClosePerpPositionsRequest,
    requestDeserialize: deserialize_api_PostClosePerpPositionsRequest,
    responseSerialize: serialize_api_PostClosePerpPositionsResponse,
    responseDeserialize: deserialize_api_PostClosePerpPositionsResponse,
  },
  getPerpOrderbook: {
    path: '/api.Api/GetPerpOrderbook',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPerpOrderbookRequest,
    responseType: api_pb.GetPerpOrderbookResponse,
    requestSerialize: serialize_api_GetPerpOrderbookRequest,
    requestDeserialize: deserialize_api_GetPerpOrderbookRequest,
    responseSerialize: serialize_api_GetPerpOrderbookResponse,
    responseDeserialize: deserialize_api_GetPerpOrderbookResponse,
  },
  postCreateUser: {
    path: '/api.Api/PostCreateUser',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostCreateUserRequest,
    responseType: api_pb.PostCreateUserResponse,
    requestSerialize: serialize_api_PostCreateUserRequest,
    requestDeserialize: deserialize_api_PostCreateUserRequest,
    responseSerialize: serialize_api_PostCreateUserResponse,
    responseDeserialize: deserialize_api_PostCreateUserResponse,
  },
  getUser: {
    path: '/api.Api/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetUserRequest,
    responseType: api_pb.GetUserResponse,
    requestSerialize: serialize_api_GetUserRequest,
    requestDeserialize: deserialize_api_GetUserRequest,
    responseSerialize: serialize_api_GetUserResponse,
    responseDeserialize: deserialize_api_GetUserResponse,
  },
  postManageCollateral: {
    path: '/api.Api/PostManageCollateral',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostManageCollateralRequest,
    responseType: api_pb.PostManageCollateralResponse,
    requestSerialize: serialize_api_PostManageCollateralRequest,
    requestDeserialize: deserialize_api_PostManageCollateralRequest,
    responseSerialize: serialize_api_PostManageCollateralResponse,
    responseDeserialize: deserialize_api_PostManageCollateralResponse,
  },
  postSettlePNL: {
    path: '/api.Api/PostSettlePNL',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSettlePNLRequest,
    responseType: api_pb.PostSettlePNLResponse,
    requestSerialize: serialize_api_PostSettlePNLRequest,
    requestDeserialize: deserialize_api_PostSettlePNLRequest,
    responseSerialize: serialize_api_PostSettlePNLResponse,
    responseDeserialize: deserialize_api_PostSettlePNLResponse,
  },
  postSettlePNLs: {
    path: '/api.Api/PostSettlePNLs',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostSettlePNLsRequest,
    responseType: api_pb.PostSettlePNLsResponse,
    requestSerialize: serialize_api_PostSettlePNLsRequest,
    requestDeserialize: deserialize_api_PostSettlePNLsRequest,
    responseSerialize: serialize_api_PostSettlePNLsResponse,
    responseDeserialize: deserialize_api_PostSettlePNLsResponse,
  },
  getAssets: {
    path: '/api.Api/GetAssets',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetAssetsRequest,
    responseType: api_pb.GetAssetsResponse,
    requestSerialize: serialize_api_GetAssetsRequest,
    requestDeserialize: deserialize_api_GetAssetsRequest,
    responseSerialize: serialize_api_GetAssetsResponse,
    responseDeserialize: deserialize_api_GetAssetsResponse,
  },
  getPerpContracts: {
    path: '/api.Api/GetPerpContracts',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetPerpContractsRequest,
    responseType: api_pb.GetPerpContractsResponse,
    requestSerialize: serialize_api_GetPerpContractsRequest,
    requestDeserialize: deserialize_api_GetPerpContractsRequest,
    responseSerialize: serialize_api_GetPerpContractsResponse,
    responseDeserialize: deserialize_api_GetPerpContractsResponse,
  },
  postLiquidatePerp: {
    path: '/api.Api/PostLiquidatePerp',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PostLiquidatePerpRequest,
    responseType: api_pb.PostLiquidatePerpResponse,
    requestSerialize: serialize_api_PostLiquidatePerpRequest,
    requestDeserialize: deserialize_api_PostLiquidatePerpRequest,
    responseSerialize: serialize_api_PostLiquidatePerpResponse,
    responseDeserialize: deserialize_api_PostLiquidatePerpResponse,
  },
  getOpenPerpOrder: {
    path: '/api.Api/GetOpenPerpOrder',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetOpenPerpOrderRequest,
    responseType: api_pb.GetOpenPerpOrderResponse,
    requestSerialize: serialize_api_GetOpenPerpOrderRequest,
    requestDeserialize: deserialize_api_GetOpenPerpOrderRequest,
    responseSerialize: serialize_api_GetOpenPerpOrderResponse,
    responseDeserialize: deserialize_api_GetOpenPerpOrderResponse,
  },
  // streaming endpoints
getOrderbooksStream: {
    path: '/api.Api/GetOrderbooksStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetOrderbooksRequest,
    responseType: api_pb.GetOrderbooksStreamResponse,
    requestSerialize: serialize_api_GetOrderbooksRequest,
    requestDeserialize: deserialize_api_GetOrderbooksRequest,
    responseSerialize: serialize_api_GetOrderbooksStreamResponse,
    responseDeserialize: deserialize_api_GetOrderbooksStreamResponse,
  },
  getMarketDepthsStream: {
    path: '/api.Api/GetMarketDepthsStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetMarketDepthsRequest,
    responseType: api_pb.GetMarketDepthsStreamResponse,
    requestSerialize: serialize_api_GetMarketDepthsRequest,
    requestDeserialize: deserialize_api_GetMarketDepthsRequest,
    responseSerialize: serialize_api_GetMarketDepthsStreamResponse,
    responseDeserialize: deserialize_api_GetMarketDepthsStreamResponse,
  },
  getTickersStream: {
    path: '/api.Api/GetTickersStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetTickersRequest,
    responseType: api_pb.GetTickersStreamResponse,
    requestSerialize: serialize_api_GetTickersRequest,
    requestDeserialize: deserialize_api_GetTickersRequest,
    responseSerialize: serialize_api_GetTickersStreamResponse,
    responseDeserialize: deserialize_api_GetTickersStreamResponse,
  },
  getTradesStream: {
    path: '/api.Api/GetTradesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetTradesRequest,
    responseType: api_pb.GetTradesStreamResponse,
    requestSerialize: serialize_api_GetTradesRequest,
    requestDeserialize: deserialize_api_GetTradesRequest,
    responseSerialize: serialize_api_GetTradesStreamResponse,
    responseDeserialize: deserialize_api_GetTradesStreamResponse,
  },
  getOrderStatusStream: {
    path: '/api.Api/GetOrderStatusStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetOrderStatusStreamRequest,
    responseType: api_pb.GetOrderStatusStreamResponse,
    requestSerialize: serialize_api_GetOrderStatusStreamRequest,
    requestDeserialize: deserialize_api_GetOrderStatusStreamRequest,
    responseSerialize: serialize_api_GetOrderStatusStreamResponse,
    responseDeserialize: deserialize_api_GetOrderStatusStreamResponse,
  },
  getRecentBlockHashStream: {
    path: '/api.Api/GetRecentBlockHashStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetRecentBlockHashRequest,
    responseType: api_pb.GetRecentBlockHashResponse,
    requestSerialize: serialize_api_GetRecentBlockHashRequest,
    requestDeserialize: deserialize_api_GetRecentBlockHashRequest,
    responseSerialize: serialize_api_GetRecentBlockHashResponse,
    responseDeserialize: deserialize_api_GetRecentBlockHashResponse,
  },
  getBlockStream: {
    path: '/api.Api/GetBlockStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetBlockStreamRequest,
    responseType: api_pb.GetBlockStreamResponse,
    requestSerialize: serialize_api_GetBlockStreamRequest,
    requestDeserialize: deserialize_api_GetBlockStreamRequest,
    responseSerialize: serialize_api_GetBlockStreamResponse,
    responseDeserialize: deserialize_api_GetBlockStreamResponse,
  },
  getQuotesStream: {
    path: '/api.Api/GetQuotesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetQuotesStreamRequest,
    responseType: api_pb.GetQuotesStreamResponse,
    requestSerialize: serialize_api_GetQuotesStreamRequest,
    requestDeserialize: deserialize_api_GetQuotesStreamRequest,
    responseSerialize: serialize_api_GetQuotesStreamResponse,
    responseDeserialize: deserialize_api_GetQuotesStreamResponse,
  },
  getPoolReservesStream: {
    path: '/api.Api/GetPoolReservesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetPoolReservesStreamRequest,
    responseType: api_pb.GetPoolReservesStreamResponse,
    requestSerialize: serialize_api_GetPoolReservesStreamRequest,
    requestDeserialize: deserialize_api_GetPoolReservesStreamRequest,
    responseSerialize: serialize_api_GetPoolReservesStreamResponse,
    responseDeserialize: deserialize_api_GetPoolReservesStreamResponse,
  },
  getPricesStream: {
    path: '/api.Api/GetPricesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetPricesStreamRequest,
    responseType: api_pb.GetPricesStreamResponse,
    requestSerialize: serialize_api_GetPricesStreamRequest,
    requestDeserialize: deserialize_api_GetPricesStreamRequest,
    responseSerialize: serialize_api_GetPricesStreamResponse,
    responseDeserialize: deserialize_api_GetPricesStreamResponse,
  },
  getSwapsStream: {
    path: '/api.Api/GetSwapsStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetSwapsStreamRequest,
    responseType: api_pb.GetSwapsStreamResponse,
    requestSerialize: serialize_api_GetSwapsStreamRequest,
    requestDeserialize: deserialize_api_GetSwapsStreamRequest,
    responseSerialize: serialize_api_GetSwapsStreamResponse,
    responseDeserialize: deserialize_api_GetSwapsStreamResponse,
  },
  // Perp streaming endpoints
getPerpOrderbooksStream: {
    path: '/api.Api/GetPerpOrderbooksStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetPerpOrderbooksRequest,
    responseType: api_pb.GetPerpOrderbooksStreamResponse,
    requestSerialize: serialize_api_GetPerpOrderbooksRequest,
    requestDeserialize: deserialize_api_GetPerpOrderbooksRequest,
    responseSerialize: serialize_api_GetPerpOrderbooksStreamResponse,
    responseDeserialize: deserialize_api_GetPerpOrderbooksStreamResponse,
  },
  getNewPerpOrdersStream: {
    path: '/api.Api/GetNewPerpOrdersStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetNewPerpOrdersStreamRequest,
    responseType: api_pb.GetNewPerpOrdersStreamResponse,
    requestSerialize: serialize_api_GetNewPerpOrdersStreamRequest,
    requestDeserialize: deserialize_api_GetNewPerpOrdersStreamRequest,
    responseSerialize: serialize_api_GetNewPerpOrdersStreamResponse,
    responseDeserialize: deserialize_api_GetNewPerpOrdersStreamResponse,
  },
  getPerpTradesStream: {
    path: '/api.Api/GetPerpTradesStream',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.GetPerpTradesStreamRequest,
    responseType: api_pb.GetPerpTradesStreamResponse,
    requestSerialize: serialize_api_GetPerpTradesStreamRequest,
    requestDeserialize: deserialize_api_GetPerpTradesStreamRequest,
    responseSerialize: serialize_api_GetPerpTradesStreamResponse,
    responseDeserialize: deserialize_api_GetPerpTradesStreamResponse,
  },
};

exports.ApiClient = grpc.makeGenericClientConstructor(ApiService);
