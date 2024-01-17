// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mev$protos_searcher_pb = require('../mev-protos/searcher_pb.js');
var mev$protos_bundle_pb = require('../mev-protos/bundle_pb.js');
var mev$protos_packet_pb = require('../mev-protos/packet_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_bundle_BundleResult(arg) {
  if (!(arg instanceof mev$protos_bundle_pb.BundleResult)) {
    throw new Error('Expected argument of type bundle.BundleResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bundle_BundleResult(buffer_arg) {
  return mev$protos_bundle_pb.BundleResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_ConnectedLeadersRegionedRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.ConnectedLeadersRegionedRequest)) {
    throw new Error('Expected argument of type searcher.ConnectedLeadersRegionedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_ConnectedLeadersRegionedRequest(buffer_arg) {
  return mev$protos_searcher_pb.ConnectedLeadersRegionedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_ConnectedLeadersRegionedResponse(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.ConnectedLeadersRegionedResponse)) {
    throw new Error('Expected argument of type searcher.ConnectedLeadersRegionedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_ConnectedLeadersRegionedResponse(buffer_arg) {
  return mev$protos_searcher_pb.ConnectedLeadersRegionedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_ConnectedLeadersRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.ConnectedLeadersRequest)) {
    throw new Error('Expected argument of type searcher.ConnectedLeadersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_ConnectedLeadersRequest(buffer_arg) {
  return mev$protos_searcher_pb.ConnectedLeadersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_ConnectedLeadersResponse(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.ConnectedLeadersResponse)) {
    throw new Error('Expected argument of type searcher.ConnectedLeadersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_ConnectedLeadersResponse(buffer_arg) {
  return mev$protos_searcher_pb.ConnectedLeadersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_GetRegionsRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.GetRegionsRequest)) {
    throw new Error('Expected argument of type searcher.GetRegionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_GetRegionsRequest(buffer_arg) {
  return mev$protos_searcher_pb.GetRegionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_GetRegionsResponse(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.GetRegionsResponse)) {
    throw new Error('Expected argument of type searcher.GetRegionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_GetRegionsResponse(buffer_arg) {
  return mev$protos_searcher_pb.GetRegionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_GetTipAccountsRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.GetTipAccountsRequest)) {
    throw new Error('Expected argument of type searcher.GetTipAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_GetTipAccountsRequest(buffer_arg) {
  return mev$protos_searcher_pb.GetTipAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_GetTipAccountsResponse(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.GetTipAccountsResponse)) {
    throw new Error('Expected argument of type searcher.GetTipAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_GetTipAccountsResponse(buffer_arg) {
  return mev$protos_searcher_pb.GetTipAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_MempoolSubscription(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.MempoolSubscription)) {
    throw new Error('Expected argument of type searcher.MempoolSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_MempoolSubscription(buffer_arg) {
  return mev$protos_searcher_pb.MempoolSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_NextScheduledLeaderRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.NextScheduledLeaderRequest)) {
    throw new Error('Expected argument of type searcher.NextScheduledLeaderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_NextScheduledLeaderRequest(buffer_arg) {
  return mev$protos_searcher_pb.NextScheduledLeaderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_NextScheduledLeaderResponse(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.NextScheduledLeaderResponse)) {
    throw new Error('Expected argument of type searcher.NextScheduledLeaderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_NextScheduledLeaderResponse(buffer_arg) {
  return mev$protos_searcher_pb.NextScheduledLeaderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_PendingTxNotification(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.PendingTxNotification)) {
    throw new Error('Expected argument of type searcher.PendingTxNotification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_PendingTxNotification(buffer_arg) {
  return mev$protos_searcher_pb.PendingTxNotification.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_SendBundleRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.SendBundleRequest)) {
    throw new Error('Expected argument of type searcher.SendBundleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_SendBundleRequest(buffer_arg) {
  return mev$protos_searcher_pb.SendBundleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_SendBundleResponse(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.SendBundleResponse)) {
    throw new Error('Expected argument of type searcher.SendBundleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_SendBundleResponse(buffer_arg) {
  return mev$protos_searcher_pb.SendBundleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_SubscribeBundleResultsRequest(arg) {
  if (!(arg instanceof mev$protos_searcher_pb.SubscribeBundleResultsRequest)) {
    throw new Error('Expected argument of type searcher.SubscribeBundleResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_SubscribeBundleResultsRequest(buffer_arg) {
  return mev$protos_searcher_pb.SubscribeBundleResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SearcherServiceService = exports.SearcherServiceService = {
  // Searchers can invoke this endpoint to subscribe to their respective bundle results.
// A success result would indicate the bundle won its state auction and was submitted to the validator.
subscribeBundleResults: {
    path: '/searcher.SearcherService/SubscribeBundleResults',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_searcher_pb.SubscribeBundleResultsRequest,
    responseType: mev$protos_bundle_pb.BundleResult,
    requestSerialize: serialize_searcher_SubscribeBundleResultsRequest,
    requestDeserialize: deserialize_searcher_SubscribeBundleResultsRequest,
    responseSerialize: serialize_bundle_BundleResult,
    responseDeserialize: deserialize_bundle_BundleResult,
  },
  // Subscribe to mempool transactions based on a few filters
subscribeMempool: {
    path: '/searcher.SearcherService/SubscribeMempool',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_searcher_pb.MempoolSubscription,
    responseType: mev$protos_searcher_pb.PendingTxNotification,
    requestSerialize: serialize_searcher_MempoolSubscription,
    requestDeserialize: deserialize_searcher_MempoolSubscription,
    responseSerialize: serialize_searcher_PendingTxNotification,
    responseDeserialize: deserialize_searcher_PendingTxNotification,
  },
  sendBundle: {
    path: '/searcher.SearcherService/SendBundle',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_searcher_pb.SendBundleRequest,
    responseType: mev$protos_searcher_pb.SendBundleResponse,
    requestSerialize: serialize_searcher_SendBundleRequest,
    requestDeserialize: deserialize_searcher_SendBundleRequest,
    responseSerialize: serialize_searcher_SendBundleResponse,
    responseDeserialize: deserialize_searcher_SendBundleResponse,
  },
  // Returns the next scheduled leader connected to the block engine.
getNextScheduledLeader: {
    path: '/searcher.SearcherService/GetNextScheduledLeader',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_searcher_pb.NextScheduledLeaderRequest,
    responseType: mev$protos_searcher_pb.NextScheduledLeaderResponse,
    requestSerialize: serialize_searcher_NextScheduledLeaderRequest,
    requestDeserialize: deserialize_searcher_NextScheduledLeaderRequest,
    responseSerialize: serialize_searcher_NextScheduledLeaderResponse,
    responseDeserialize: deserialize_searcher_NextScheduledLeaderResponse,
  },
  // Returns leader slots for connected jito validators during the current epoch. Only returns data for this region.
getConnectedLeaders: {
    path: '/searcher.SearcherService/GetConnectedLeaders',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_searcher_pb.ConnectedLeadersRequest,
    responseType: mev$protos_searcher_pb.ConnectedLeadersResponse,
    requestSerialize: serialize_searcher_ConnectedLeadersRequest,
    requestDeserialize: deserialize_searcher_ConnectedLeadersRequest,
    responseSerialize: serialize_searcher_ConnectedLeadersResponse,
    responseDeserialize: deserialize_searcher_ConnectedLeadersResponse,
  },
  // Returns leader slots for connected jito validators during the current epoch.
getConnectedLeadersRegioned: {
    path: '/searcher.SearcherService/GetConnectedLeadersRegioned',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_searcher_pb.ConnectedLeadersRegionedRequest,
    responseType: mev$protos_searcher_pb.ConnectedLeadersRegionedResponse,
    requestSerialize: serialize_searcher_ConnectedLeadersRegionedRequest,
    requestDeserialize: deserialize_searcher_ConnectedLeadersRegionedRequest,
    responseSerialize: serialize_searcher_ConnectedLeadersRegionedResponse,
    responseDeserialize: deserialize_searcher_ConnectedLeadersRegionedResponse,
  },
  // Returns the tip accounts searchers shall transfer funds to for the leader to claim.
getTipAccounts: {
    path: '/searcher.SearcherService/GetTipAccounts',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_searcher_pb.GetTipAccountsRequest,
    responseType: mev$protos_searcher_pb.GetTipAccountsResponse,
    requestSerialize: serialize_searcher_GetTipAccountsRequest,
    requestDeserialize: deserialize_searcher_GetTipAccountsRequest,
    responseSerialize: serialize_searcher_GetTipAccountsResponse,
    responseDeserialize: deserialize_searcher_GetTipAccountsResponse,
  },
  // Returns region the client is directly connected to, along with all available regions
getRegions: {
    path: '/searcher.SearcherService/GetRegions',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_searcher_pb.GetRegionsRequest,
    responseType: mev$protos_searcher_pb.GetRegionsResponse,
    requestSerialize: serialize_searcher_GetRegionsRequest,
    requestDeserialize: deserialize_searcher_GetRegionsRequest,
    responseSerialize: serialize_searcher_GetRegionsResponse,
    responseDeserialize: deserialize_searcher_GetRegionsResponse,
  },
};

exports.SearcherServiceClient = grpc.makeGenericClientConstructor(SearcherServiceService);
