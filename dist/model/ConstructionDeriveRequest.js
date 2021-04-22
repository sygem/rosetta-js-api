"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

var _PublicKey = _interopRequireDefault(require("./PublicKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionDeriveRequest model module.
 * @module model/ConstructionDeriveRequest
 * @version 1.4.10
 */
var ConstructionDeriveRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionDeriveRequest</code>.
   * ConstructionDeriveRequest is passed to the &#x60;/construction/derive&#x60; endpoint. Network is provided in the request because some blockchains have different address formats for different networks. Metadata is provided in the request because some blockchains allow for multiple address types (i.e. different address for validators vs normal accounts).
   * @alias module:model/ConstructionDeriveRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param publicKey {module:model/PublicKey} 
   */
  function ConstructionDeriveRequest(networkIdentifier, publicKey) {
    _classCallCheck(this, ConstructionDeriveRequest);

    ConstructionDeriveRequest.initialize(this, networkIdentifier, publicKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionDeriveRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, publicKey) {
      obj['network_identifier'] = networkIdentifier;
      obj['public_key'] = publicKey;
    }
    /**
     * Constructs a <code>ConstructionDeriveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionDeriveRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionDeriveRequest} The populated <code>ConstructionDeriveRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionDeriveRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _PublicKey["default"].constructFromObject(data['public_key']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return ConstructionDeriveRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


ConstructionDeriveRequest.prototype['network_identifier'] = undefined;
/**
 * @member {module:model/PublicKey} public_key
 */

ConstructionDeriveRequest.prototype['public_key'] = undefined;
/**
 * @member {Object} metadata
 */

ConstructionDeriveRequest.prototype['metadata'] = undefined;
var _default = ConstructionDeriveRequest;
exports["default"] = _default;