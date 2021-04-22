"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Amount = _interopRequireDefault(require("./Amount"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

var _Operation = _interopRequireDefault(require("./Operation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionPreprocessRequest model module.
 * @module model/ConstructionPreprocessRequest
 * @version 1.4.10
 */
var ConstructionPreprocessRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionPreprocessRequest</code>.
   * ConstructionPreprocessRequest is passed to the &#x60;/construction/preprocess&#x60; endpoint so that a Rosetta implementation can determine which metadata it needs to request for construction. Metadata provided in this object should NEVER be a product of live data (i.e. the caller must follow some network-specific data fetching strategy outside of the Construction API to populate required Metadata). If live data is required for construction, it MUST be fetched in the call to &#x60;/construction/metadata&#x60;. The caller can provide a max fee they are willing to pay for a transaction. This is an array in the case fees must be paid in multiple currencies. The caller can also provide a suggested fee multiplier to indicate that the suggested fee should be scaled. This may be used to set higher fees for urgent transactions or to pay lower fees when there is less urgency. It is assumed that providing a very low multiplier (like 0.0001) will never lead to a transaction being created with a fee less than the minimum network fee (if applicable). In the case that the caller provides both a max fee and a suggested fee multiplier, the max fee will set an upper bound on the suggested fee (regardless of the multiplier provided).
   * @alias module:model/ConstructionPreprocessRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param operations {Array.<module:model/Operation>} 
   */
  function ConstructionPreprocessRequest(networkIdentifier, operations) {
    _classCallCheck(this, ConstructionPreprocessRequest);

    ConstructionPreprocessRequest.initialize(this, networkIdentifier, operations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionPreprocessRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, operations) {
      obj['network_identifier'] = networkIdentifier;
      obj['operations'] = operations;
    }
    /**
     * Constructs a <code>ConstructionPreprocessRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPreprocessRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionPreprocessRequest} The populated <code>ConstructionPreprocessRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionPreprocessRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [_Operation["default"]]);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }

        if (data.hasOwnProperty('max_fee')) {
          obj['max_fee'] = _ApiClient["default"].convertToType(data['max_fee'], [_Amount["default"]]);
        }

        if (data.hasOwnProperty('suggested_fee_multiplier')) {
          obj['suggested_fee_multiplier'] = _ApiClient["default"].convertToType(data['suggested_fee_multiplier'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ConstructionPreprocessRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


ConstructionPreprocessRequest.prototype['network_identifier'] = undefined;
/**
 * @member {Array.<module:model/Operation>} operations
 */

ConstructionPreprocessRequest.prototype['operations'] = undefined;
/**
 * @member {Object} metadata
 */

ConstructionPreprocessRequest.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Amount>} max_fee
 */

ConstructionPreprocessRequest.prototype['max_fee'] = undefined;
/**
 * @member {Number} suggested_fee_multiplier
 */

ConstructionPreprocessRequest.prototype['suggested_fee_multiplier'] = undefined;
var _default = ConstructionPreprocessRequest;
exports["default"] = _default;