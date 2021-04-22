"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PublicKey = _interopRequireDefault(require("./PublicKey"));

var _SignatureType = _interopRequireDefault(require("./SignatureType"));

var _SigningPayload = _interopRequireDefault(require("./SigningPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Signature model module.
 * @module model/Signature
 * @version 1.4.10
 */
var Signature = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Signature</code>.
   * Signature contains the payload that was signed, the public keys of the keypairs used to produce the signature, the signature (encoded in hex), and the SignatureType. PublicKey is often times not known during construction of the signing payloads but may be needed to combine signatures properly.
   * @alias module:model/Signature
   * @param signingPayload {module:model/SigningPayload} 
   * @param publicKey {module:model/PublicKey} 
   * @param signatureType {module:model/SignatureType} 
   * @param hexBytes {String} 
   */
  function Signature(signingPayload, publicKey, signatureType, hexBytes) {
    _classCallCheck(this, Signature);

    Signature.initialize(this, signingPayload, publicKey, signatureType, hexBytes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Signature, null, [{
    key: "initialize",
    value: function initialize(obj, signingPayload, publicKey, signatureType, hexBytes) {
      obj['signing_payload'] = signingPayload;
      obj['public_key'] = publicKey;
      obj['signature_type'] = signatureType;
      obj['hex_bytes'] = hexBytes;
    }
    /**
     * Constructs a <code>Signature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Signature} obj Optional instance to populate.
     * @return {module:model/Signature} The populated <code>Signature</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Signature();

        if (data.hasOwnProperty('signing_payload')) {
          obj['signing_payload'] = _SigningPayload["default"].constructFromObject(data['signing_payload']);
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _PublicKey["default"].constructFromObject(data['public_key']);
        }

        if (data.hasOwnProperty('signature_type')) {
          obj['signature_type'] = _SignatureType["default"].constructFromObject(data['signature_type']);
        }

        if (data.hasOwnProperty('hex_bytes')) {
          obj['hex_bytes'] = _ApiClient["default"].convertToType(data['hex_bytes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Signature;
}();
/**
 * @member {module:model/SigningPayload} signing_payload
 */


Signature.prototype['signing_payload'] = undefined;
/**
 * @member {module:model/PublicKey} public_key
 */

Signature.prototype['public_key'] = undefined;
/**
 * @member {module:model/SignatureType} signature_type
 */

Signature.prototype['signature_type'] = undefined;
/**
 * @member {String} hex_bytes
 */

Signature.prototype['hex_bytes'] = undefined;
var _default = Signature;
exports["default"] = _default;