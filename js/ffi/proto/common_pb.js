// source: common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.common.Fee', null, global);
goog.exportSymbol('proto.common.Infinity', null, global);
goog.exportSymbol('proto.common.OrderType', null, global);
goog.exportSymbol('proto.common.PerpCollateralToken', null, global);
goog.exportSymbol('proto.common.PerpCollateralType', null, global);
goog.exportSymbol('proto.common.PerpContract', null, global);
goog.exportSymbol('proto.common.PerpOrderType', null, global);
goog.exportSymbol('proto.common.PerpPositionSide', null, global);
goog.exportSymbol('proto.common.PostOnlyParams', null, global);
goog.exportSymbol('proto.common.PriceImpactPercent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.PriceImpactPercent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.PriceImpactPercent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.PriceImpactPercent.displayName = 'proto.common.PriceImpactPercent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.Fee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.Fee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.Fee.displayName = 'proto.common.Fee';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.PriceImpactPercent.prototype.toObject = function(opt_includeInstance) {
  return proto.common.PriceImpactPercent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.PriceImpactPercent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.PriceImpactPercent.toObject = function(includeInstance, msg) {
  var f, obj = {
    percent: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    infinity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.PriceImpactPercent}
 */
proto.common.PriceImpactPercent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.PriceImpactPercent;
  return proto.common.PriceImpactPercent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.PriceImpactPercent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.PriceImpactPercent}
 */
proto.common.PriceImpactPercent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPercent(value);
      break;
    case 2:
      var value = /** @type {!proto.common.Infinity} */ (reader.readEnum());
      msg.setInfinity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.PriceImpactPercent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.PriceImpactPercent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.PriceImpactPercent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.PriceImpactPercent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getInfinity();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional double percent = 1;
 * @return {number}
 */
proto.common.PriceImpactPercent.prototype.getPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.PriceImpactPercent} returns this
 */
proto.common.PriceImpactPercent.prototype.setPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Infinity infinity = 2;
 * @return {!proto.common.Infinity}
 */
proto.common.PriceImpactPercent.prototype.getInfinity = function() {
  return /** @type {!proto.common.Infinity} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.common.Infinity} value
 * @return {!proto.common.PriceImpactPercent} returns this
 */
proto.common.PriceImpactPercent.prototype.setInfinity = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.Fee.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Fee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Fee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Fee.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    mint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    percent: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.Fee}
 */
proto.common.Fee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Fee;
  return proto.common.Fee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Fee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Fee}
 */
proto.common.Fee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.Fee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.Fee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.Fee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.Fee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPercent();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float amount = 1;
 * @return {number}
 */
proto.common.Fee.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.Fee} returns this
 */
proto.common.Fee.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string mint = 2;
 * @return {string}
 */
proto.common.Fee.prototype.getMint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.Fee} returns this
 */
proto.common.Fee.prototype.setMint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float percent = 3;
 * @return {number}
 */
proto.common.Fee.prototype.getPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.common.Fee} returns this
 */
proto.common.Fee.prototype.setPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.common.OrderType = {
  OT_MARKET: 0,
  OT_LIMIT: 1,
  OT_IOC: 2,
  OT_POST: 3
};

/**
 * @enum {number}
 */
proto.common.PerpOrderType = {
  POT_UNKNOWN: 0,
  POT_MARKET: 1,
  POT_LIMIT: 2,
  POT_TRIGGER_MARKET: 3,
  POT_TRIGGER_LIMIT: 4
};

/**
 * @enum {number}
 */
proto.common.PerpPositionSide = {
  PS_UNKNOWN: 0,
  PS_LONG: 1,
  PS_SHORT: 2
};

/**
 * @enum {number}
 */
proto.common.PostOnlyParams = {
  PO_NONE: 0,
  PO_MUST_POST_ONLY: 1,
  PO_TRY_POST_ONLY: 2
};

/**
 * @enum {number}
 */
proto.common.PerpContract = {
  ALL: 0,
  SOL_PERP: 1,
  ETH_PERP: 2,
  BTC_PERP: 3,
  APT_PERP: 4,
  BONK_PERP: 5,
  MATIC_PERP: 6,
  ARB_PERP: 7
};

/**
 * @enum {number}
 */
proto.common.PerpCollateralType = {
  PCT_DEPOSIT: 0,
  PCT_WITHDRAWAL: 1,
  PCT_TRANSFER: 2
};

/**
 * @enum {number}
 */
proto.common.PerpCollateralToken = {
  PCTK_USDC: 0,
  PCTK_SOL: 1
};

/**
 * @enum {number}
 */
proto.common.Infinity = {
  INF_NOT: 0,
  INF_POSITIVE: 1,
  INF_NEGATIVE: 2
};

goog.object.extend(exports, proto.common);
