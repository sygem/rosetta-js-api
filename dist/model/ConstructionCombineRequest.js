"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

var _Signature = _interopRequireDefault(require("./Signature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionCombineRequest model module.
 * @module model/ConstructionCombineRequest
 * @version 1.4.10
 */
var ConstructionCombineRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionCombineRequest</code>.
   * ConstructionCombineRequest is the input to the &#x60;/construction/combine&#x60; endpoint. It contains the unsigned transaction blob returned by &#x60;/construction/payloads&#x60; and all required signatures to create a network transaction.
   * @alias module:model/ConstructionCombineRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param unsignedTransaction {String} 
   * @param signatures {Array.<module:model/Signature>} 
   */
  function ConstructionCombineRequest(networkIdentifier, unsignedTransaction, signatures) {
    _classCallCheck(this, ConstructionCombineRequest);

    ConstructionCombineRequest.initialize(this, networkIdentifier, unsignedTransaction, signatures);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionCombineRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, unsignedTransaction, signatures) {
      obj['network_identifier'] = networkIdentifier;
      obj['unsigned_transaction'] = unsignedTransaction;
      obj['signatures'] = signatures;
    }
    /**
     * Constructs a <code>ConstructionCombineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionCombineRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionCombineRequest} The populated <code>ConstructionCombineRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionCombineRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('unsigned_transaction')) {
          obj['unsigned_transaction'] = _ApiClient["default"].convertToType(data['unsigned_transaction'], 'String');
        }

        if (data.hasOwnProperty('signatures')) {
          obj['signatures'] = _ApiClient["default"].convertToType(data['signatures'], [_Signature["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConstructionCombineRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


ConstructionCombineRequest.prototype['network_identifier'] = undefined;
/**
 * @member {String} unsigned_transaction
 */

ConstructionCombineRequest.prototype['unsigned_transaction'] = undefined;
/**
 * @member {Array.<module:model/Signature>} signatures
 */

ConstructionCombineRequest.prototype['signatures'] = undefined;
var _default = ConstructionCombineRequest;
exports["default"] = _default;