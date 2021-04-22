"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

var _Operation = _interopRequireDefault(require("./Operation"));

var _PublicKey = _interopRequireDefault(require("./PublicKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionPayloadsRequest model module.
 * @module model/ConstructionPayloadsRequest
 * @version 1.4.10
 */
var ConstructionPayloadsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionPayloadsRequest</code>.
   * ConstructionPayloadsRequest is the request to &#x60;/construction/payloads&#x60;. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to &#x60;/construction/metadata&#x60;. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
   * @alias module:model/ConstructionPayloadsRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param operations {Array.<module:model/Operation>} 
   */
  function ConstructionPayloadsRequest(networkIdentifier, operations) {
    _classCallCheck(this, ConstructionPayloadsRequest);

    ConstructionPayloadsRequest.initialize(this, networkIdentifier, operations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionPayloadsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, operations) {
      obj['network_identifier'] = networkIdentifier;
      obj['operations'] = operations;
    }
    /**
     * Constructs a <code>ConstructionPayloadsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPayloadsRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionPayloadsRequest} The populated <code>ConstructionPayloadsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionPayloadsRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [_Operation["default"]]);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }

        if (data.hasOwnProperty('public_keys')) {
          obj['public_keys'] = _ApiClient["default"].convertToType(data['public_keys'], [_PublicKey["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConstructionPayloadsRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


ConstructionPayloadsRequest.prototype['network_identifier'] = undefined;
/**
 * @member {Array.<module:model/Operation>} operations
 */

ConstructionPayloadsRequest.prototype['operations'] = undefined;
/**
 * @member {Object} metadata
 */

ConstructionPayloadsRequest.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/PublicKey>} public_keys
 */

ConstructionPayloadsRequest.prototype['public_keys'] = undefined;
var _default = ConstructionPayloadsRequest;
exports["default"] = _default;