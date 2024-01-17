// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mev$protos_block_engine_pb = require('../mev-protos/block_engine_pb.js');
var mev$protos_packet_pb = require('../mev-protos/packet_pb.js');
var mev$protos_shared_pb = require('../mev-protos/shared_pb.js');
var mev$protos_bundle_pb = require('../mev-protos/bundle_pb.js');

function serialize_block_engine_AccountsOfInterestRequest(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.AccountsOfInterestRequest)) {
    throw new Error('Expected argument of type block_engine.AccountsOfInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_AccountsOfInterestRequest(buffer_arg) {
  return mev$protos_block_engine_pb.AccountsOfInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_AccountsOfInterestUpdate(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.AccountsOfInterestUpdate)) {
    throw new Error('Expected argument of type block_engine.AccountsOfInterestUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_AccountsOfInterestUpdate(buffer_arg) {
  return mev$protos_block_engine_pb.AccountsOfInterestUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_BlockBuilderFeeInfoRequest(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.BlockBuilderFeeInfoRequest)) {
    throw new Error('Expected argument of type block_engine.BlockBuilderFeeInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_BlockBuilderFeeInfoRequest(buffer_arg) {
  return mev$protos_block_engine_pb.BlockBuilderFeeInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_BlockBuilderFeeInfoResponse(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.BlockBuilderFeeInfoResponse)) {
    throw new Error('Expected argument of type block_engine.BlockBuilderFeeInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_BlockBuilderFeeInfoResponse(buffer_arg) {
  return mev$protos_block_engine_pb.BlockBuilderFeeInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_PacketBatchUpdate(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.PacketBatchUpdate)) {
    throw new Error('Expected argument of type block_engine.PacketBatchUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_PacketBatchUpdate(buffer_arg) {
  return mev$protos_block_engine_pb.PacketBatchUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_ProgramsOfInterestRequest(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.ProgramsOfInterestRequest)) {
    throw new Error('Expected argument of type block_engine.ProgramsOfInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_ProgramsOfInterestRequest(buffer_arg) {
  return mev$protos_block_engine_pb.ProgramsOfInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_ProgramsOfInterestUpdate(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.ProgramsOfInterestUpdate)) {
    throw new Error('Expected argument of type block_engine.ProgramsOfInterestUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_ProgramsOfInterestUpdate(buffer_arg) {
  return mev$protos_block_engine_pb.ProgramsOfInterestUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_StartExpiringPacketStreamResponse(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.StartExpiringPacketStreamResponse)) {
    throw new Error('Expected argument of type block_engine.StartExpiringPacketStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_StartExpiringPacketStreamResponse(buffer_arg) {
  return mev$protos_block_engine_pb.StartExpiringPacketStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_SubscribeBundlesRequest(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.SubscribeBundlesRequest)) {
    throw new Error('Expected argument of type block_engine.SubscribeBundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_SubscribeBundlesRequest(buffer_arg) {
  return mev$protos_block_engine_pb.SubscribeBundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_SubscribeBundlesResponse(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.SubscribeBundlesResponse)) {
    throw new Error('Expected argument of type block_engine.SubscribeBundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_SubscribeBundlesResponse(buffer_arg) {
  return mev$protos_block_engine_pb.SubscribeBundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_SubscribePacketsRequest(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.SubscribePacketsRequest)) {
    throw new Error('Expected argument of type block_engine.SubscribePacketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_SubscribePacketsRequest(buffer_arg) {
  return mev$protos_block_engine_pb.SubscribePacketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_SubscribePacketsResponse(arg) {
  if (!(arg instanceof mev$protos_block_engine_pb.SubscribePacketsResponse)) {
    throw new Error('Expected argument of type block_engine.SubscribePacketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_SubscribePacketsResponse(buffer_arg) {
  return mev$protos_block_engine_pb.SubscribePacketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// / Validators can connect to Block Engines to receive packets and bundles.
var BlockEngineValidatorService = exports.BlockEngineValidatorService = {
  // / Validators can subscribe to the block engine to receive a stream of packets
subscribePackets: {
    path: '/block_engine.BlockEngineValidator/SubscribePackets',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_block_engine_pb.SubscribePacketsRequest,
    responseType: mev$protos_block_engine_pb.SubscribePacketsResponse,
    requestSerialize: serialize_block_engine_SubscribePacketsRequest,
    requestDeserialize: deserialize_block_engine_SubscribePacketsRequest,
    responseSerialize: serialize_block_engine_SubscribePacketsResponse,
    responseDeserialize: deserialize_block_engine_SubscribePacketsResponse,
  },
  // / Validators can subscribe to the block engine to receive a stream of simulated and profitable bundles
subscribeBundles: {
    path: '/block_engine.BlockEngineValidator/SubscribeBundles',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_block_engine_pb.SubscribeBundlesRequest,
    responseType: mev$protos_block_engine_pb.SubscribeBundlesResponse,
    requestSerialize: serialize_block_engine_SubscribeBundlesRequest,
    requestDeserialize: deserialize_block_engine_SubscribeBundlesRequest,
    responseSerialize: serialize_block_engine_SubscribeBundlesResponse,
    responseDeserialize: deserialize_block_engine_SubscribeBundlesResponse,
  },
  // Block builders can optionally collect fees. This returns fee information if a block builder wants to
// collect one.
getBlockBuilderFeeInfo: {
    path: '/block_engine.BlockEngineValidator/GetBlockBuilderFeeInfo',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_block_engine_pb.BlockBuilderFeeInfoRequest,
    responseType: mev$protos_block_engine_pb.BlockBuilderFeeInfoResponse,
    requestSerialize: serialize_block_engine_BlockBuilderFeeInfoRequest,
    requestDeserialize: deserialize_block_engine_BlockBuilderFeeInfoRequest,
    responseSerialize: serialize_block_engine_BlockBuilderFeeInfoResponse,
    responseDeserialize: deserialize_block_engine_BlockBuilderFeeInfoResponse,
  },
};

exports.BlockEngineValidatorClient = grpc.makeGenericClientConstructor(BlockEngineValidatorService);
// / Relayers can forward packets to Block Engines.
// / Block Engines provide an AccountsOfInterest field to only send transactions that are of interest.
var BlockEngineRelayerService = exports.BlockEngineRelayerService = {
  // / The block engine feeds accounts of interest (AOI) updates to the relayer periodically.
// / For all transactions the relayer receives, it forwards transactions to the block engine which write-lock
// / any of the accounts in the AOI.
subscribeAccountsOfInterest: {
    path: '/block_engine.BlockEngineRelayer/SubscribeAccountsOfInterest',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_block_engine_pb.AccountsOfInterestRequest,
    responseType: mev$protos_block_engine_pb.AccountsOfInterestUpdate,
    requestSerialize: serialize_block_engine_AccountsOfInterestRequest,
    requestDeserialize: deserialize_block_engine_AccountsOfInterestRequest,
    responseSerialize: serialize_block_engine_AccountsOfInterestUpdate,
    responseDeserialize: deserialize_block_engine_AccountsOfInterestUpdate,
  },
  subscribeProgramsOfInterest: {
    path: '/block_engine.BlockEngineRelayer/SubscribeProgramsOfInterest',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_block_engine_pb.ProgramsOfInterestRequest,
    responseType: mev$protos_block_engine_pb.ProgramsOfInterestUpdate,
    requestSerialize: serialize_block_engine_ProgramsOfInterestRequest,
    requestDeserialize: deserialize_block_engine_ProgramsOfInterestRequest,
    responseSerialize: serialize_block_engine_ProgramsOfInterestUpdate,
    responseDeserialize: deserialize_block_engine_ProgramsOfInterestUpdate,
  },
  // Validators can subscribe to packets from the relayer and receive a multiplexed signal that contains a mixture
// of packets and heartbeats.
// NOTE: This is a bi-directional stream due to a bug with how Envoy handles half closed client-side streams.
// The issue is being tracked here: https://github.com/envoyproxy/envoy/issues/22748. In the meantime, the
// server will stream heartbeats to clients at some reasonable cadence.
startExpiringPacketStream: {
    path: '/block_engine.BlockEngineRelayer/StartExpiringPacketStream',
    requestStream: true,
    responseStream: true,
    requestType: mev$protos_block_engine_pb.PacketBatchUpdate,
    responseType: mev$protos_block_engine_pb.StartExpiringPacketStreamResponse,
    requestSerialize: serialize_block_engine_PacketBatchUpdate,
    requestDeserialize: deserialize_block_engine_PacketBatchUpdate,
    responseSerialize: serialize_block_engine_StartExpiringPacketStreamResponse,
    responseDeserialize: deserialize_block_engine_StartExpiringPacketStreamResponse,
  },
};

exports.BlockEngineRelayerClient = grpc.makeGenericClientConstructor(BlockEngineRelayerService);
