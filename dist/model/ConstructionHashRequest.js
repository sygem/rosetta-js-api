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
 * The ConstructionHashRequest model module.
 * @module model/ConstructionHashRequest
 * @version 1.4.10
 */
var ConstructionHashRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionHashRequest</code>.
   * ConstructionHashRequest is the input to the &#x60;/construction/hash&#x60; endpoint.
   * @alias module:model/ConstructionHashRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param signedTransaction {String} 
   */
  function ConstructionHashRequest(networkIdentifier, signedTransaction) {
    _classCallCheck(this, ConstructionHashRequest);

    ConstructionHashRequest.initialize(this, networkIdentifier, signedTransaction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionHashRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, signedTransaction) {
      obj['network_identifier'] = networkIdentifier;
      obj['signed_transaction'] = signedTransaction;
    }
    /**
     * Constructs a <code>ConstructionHashRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionHashRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionHashRequest} The populated <code>ConstructionHashRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionHashRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('signed_transaction')) {
          obj['signed_transaction'] = _ApiClient["default"].convertToType(data['signed_transaction'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConstructionHashRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


ConstructionHashRequest.prototype['network_identifier'] = undefined;
/**
 * @member {String} signed_transaction
 */

ConstructionHashRequest.prototype['signed_transaction'] = undefined;
var _default = ConstructionHashRequest;
exports["default"] = _default;