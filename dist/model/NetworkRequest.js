"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkRequest model module.
 * @module model/NetworkRequest
 * @version 1.4.10
 */
var NetworkRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkRequest</code>.
   * A NetworkRequest is utilized to retrieve some data specific exclusively to a NetworkIdentifier.
   * @alias module:model/NetworkRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   */
  function NetworkRequest(networkIdentifier) {
    _classCallCheck(this, NetworkRequest);

    NetworkRequest.initialize(this, networkIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier) {
      obj['network_identifier'] = networkIdentifier;
    }
    /**
     * Constructs a <code>NetworkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkRequest} obj Optional instance to populate.
     * @return {module:model/NetworkRequest} The populated <code>NetworkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return NetworkRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


NetworkRequest.prototype['network_identifier'] = undefined;
/**
 * @member {Object} metadata
 */

NetworkRequest.prototype['metadata'] = undefined;
var _default = NetworkRequest;
exports["default"] = _default;