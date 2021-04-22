"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountIdentifier = _interopRequireDefault(require("./AccountIdentifier"));

var _SignatureType = _interopRequireDefault(require("./SignatureType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SigningPayload model module.
 * @module model/SigningPayload
 * @version 1.4.10
 */
var SigningPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SigningPayload</code>.
   * SigningPayload is signed by the client with the keypair associated with an AccountIdentifier using the specified SignatureType. SignatureType can be optionally populated if there is a restriction on the signature scheme that can be used to sign the payload.
   * @alias module:model/SigningPayload
   * @param hexBytes {String} 
   */
  function SigningPayload(hexBytes) {
    _classCallCheck(this, SigningPayload);

    SigningPayload.initialize(this, hexBytes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SigningPayload, null, [{
    key: "initialize",
    value: function initialize(obj, hexBytes) {
      obj['hex_bytes'] = hexBytes;
    }
    /**
     * Constructs a <code>SigningPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigningPayload} obj Optional instance to populate.
     * @return {module:model/SigningPayload} The populated <code>SigningPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SigningPayload();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('account_identifier')) {
          obj['account_identifier'] = _AccountIdentifier["default"].constructFromObject(data['account_identifier']);
        }

        if (data.hasOwnProperty('hex_bytes')) {
          obj['hex_bytes'] = _ApiClient["default"].convertToType(data['hex_bytes'], 'String');
        }

        if (data.hasOwnProperty('signature_type')) {
          obj['signature_type'] = _SignatureType["default"].constructFromObject(data['signature_type']);
        }
      }

      return obj;
    }
  }]);

  return SigningPayload;
}();
/**
 * [DEPRECATED by `account_identifier` in `v1.4.4`] The network-specific address of the account that should sign the payload.
 * @member {String} address
 */


SigningPayload.prototype['address'] = undefined;
/**
 * @member {module:model/AccountIdentifier} account_identifier
 */

SigningPayload.prototype['account_identifier'] = undefined;
/**
 * @member {String} hex_bytes
 */

SigningPayload.prototype['hex_bytes'] = undefined;
/**
 * @member {module:model/SignatureType} signature_type
 */

SigningPayload.prototype['signature_type'] = undefined;
var _default = SigningPayload;
exports["default"] = _default;