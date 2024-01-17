// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mev$protos_shredstream_pb = require('../mev-protos/shredstream_pb.js');
var mev$protos_shared_pb = require('../mev-protos/shared_pb.js');

function serialize_shredstream_Heartbeat(arg) {
  if (!(arg instanceof mev$protos_shredstream_pb.Heartbeat)) {
    throw new Error('Expected argument of type shredstream.Heartbeat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shredstream_Heartbeat(buffer_arg) {
  return mev$protos_shredstream_pb.Heartbeat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shredstream_HeartbeatResponse(arg) {
  if (!(arg instanceof mev$protos_shredstream_pb.HeartbeatResponse)) {
    throw new Error('Expected argument of type shredstream.HeartbeatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shredstream_HeartbeatResponse(buffer_arg) {
  return mev$protos_shredstream_pb.HeartbeatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ShredstreamService = exports.ShredstreamService = {
  // RPC endpoint to send heartbeats to keep shreds flowing
sendHeartbeat: {
    path: '/shredstream.Shredstream/SendHeartbeat',
    requestStream: false,
    responseStream: false,
    requestType: mev$protos_shredstream_pb.Heartbeat,
    responseType: mev$protos_shredstream_pb.HeartbeatResponse,
    requestSerialize: serialize_shredstream_Heartbeat,
    requestDeserialize: deserialize_shredstream_Heartbeat,
    responseSerialize: serialize_shredstream_HeartbeatResponse,
    responseDeserialize: deserialize_shredstream_HeartbeatResponse,
  },
};

exports.ShredstreamClient = grpc.makeGenericClientConstructor(ShredstreamService);
