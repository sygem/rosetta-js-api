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
 * The CallRequest model module.
 * @module model/CallRequest
 * @version 1.4.10
 */
var CallRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CallRequest</code>.
   * CallRequest is the input to the &#x60;/call&#x60; endpoint.
   * @alias module:model/CallRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param method {String} Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
   * @param parameters {Object} Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
   */
  function CallRequest(networkIdentifier, method, parameters) {
    _classCallCheck(this, CallRequest);

    CallRequest.initialize(this, networkIdentifier, method, parameters);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CallRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, method, parameters) {
      obj['network_identifier'] = networkIdentifier;
      obj['method'] = method;
      obj['parameters'] = parameters;
    }
    /**
     * Constructs a <code>CallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallRequest} obj Optional instance to populate.
     * @return {module:model/CallRequest} The populated <code>CallRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CallRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('parameters')) {
          obj['parameters'] = _ApiClient["default"].convertToType(data['parameters'], Object);
        }
      }

      return obj;
    }
  }]);

  return CallRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


CallRequest.prototype['network_identifier'] = undefined;
/**
 * Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
 * @member {String} method
 */

CallRequest.prototype['method'] = undefined;
/**
 * Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
 * @member {Object} parameters
 */

CallRequest.prototype['parameters'] = undefined;
var _default = CallRequest;
exports["default"] = _default;