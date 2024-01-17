// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mev$protos_relayer_pb = require('../mev-protos/relayer_pb.js');
var mev$protos_packet_pb = require('../mev-protos/packet_pb.js');
var mev$protos_shared_pb = require('../mev-protos/shared_pb.js');

function serialize_relayer_GetTpuConfigsRequest(arg) {
  if (!(arg instanceof mev$protos_relayer_pb.GetTpuConfigsRequest)) {
    throw new Error('Expected argument of type relayer.GetTpuConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_relayer_GetTpuConfigsRequest(buffer_arg) {
  return mev$protos_relayer_pb.GetTpuConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_relayer_GetTpuConfigsResponse(arg) {
  if (!(arg instanceof mev$protos_relayer_pb.GetTpuConfigsResponse)) {
    throw new Error('Expected argument of type relayer.GetTpuConfigsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_relayer_GetTpuConfigsResponse(buffer_arg) {
  return mev$protos_relayer_pb.GetTpuConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_relayer_SubscribePacketsRequest(arg) {
  if (!(arg instanceof mev$protos_relayer_pb.SubscribePacketsRequest)) {
    throw new Error('Expected argument of type relayer.SubscribePacketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_relayer_SubscribePacketsRequest(buffer_arg) {
  return mev$protos_relayer_pb.SubscribePacketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_relayer_SubscribePacketsResponse(arg) {
  if (!(arg instanceof mev$protos_relayer_pb.SubscribePacketsResponse)) {
    throw new Error('Expected argument of type relayer.SubscribePacketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_relayer_SubscribePacketsResponse(buffer_arg) {
  return mev$protos_relayer_pb.SubscribePacketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// / Relayers offer a TPU and TPU forward proxy for Solana validators.
// / Validators can connect and fetch the TPU configuration for the relayer and start to advertise the
// / relayer's information in gossip.
// / They can also subscribe to packets which arrived on the TPU ports at the relayer
var RelayerService = exports.RelayerService = {
  // The relayer has TPU and TPU forward sockets that validators can leverage.
// A validator can fetch this config and change its TPU and TPU forward port in gossip.
getTpuConfigs: {
    path: '/relayer.Relayer/GetTpuConfigs',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_relayer_pb.GetTpuConfigsRequest,
    responseType: mev$protos_relayer_pb.GetTpuConfigsResponse,
    requestSerialize: serialize_relayer_GetTpuConfigsRequest,
    requestDeserialize: deserialize_relayer_GetTpuConfigsRequest,
    responseSerialize: serialize_relayer_GetTpuConfigsResponse,
    responseDeserialize: deserialize_relayer_GetTpuConfigsResponse,
  },
  // Validators can subscribe to packets from the relayer and receive a multiplexed signal that contains a mixture
// of packets and heartbeats
subscribePackets: {
    path: '/relayer.Relayer/SubscribePackets',
    requestStream: false,
    responseStream: true,
    requestType: mev$protos_relayer_pb.SubscribePacketsRequest,
    responseType: mev$protos_relayer_pb.SubscribePacketsResponse,
    requestSerialize: serialize_relayer_SubscribePacketsRequest,
    requestDeserialize: deserialize_relayer_SubscribePacketsRequest,
    responseSerialize: serialize_relayer_SubscribePacketsResponse,
    responseDeserialize: deserialize_relayer_SubscribePacketsResponse,
  },
};

exports.RelayerClient = grpc.makeGenericClientConstructor(RelayerService);
