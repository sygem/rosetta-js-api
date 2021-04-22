"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Amount = _interopRequireDefault(require("./Amount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionMetadataResponse model module.
 * @module model/ConstructionMetadataResponse
 * @version 1.4.10
 */
var ConstructionMetadataResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionMetadataResponse</code>.
   * The ConstructionMetadataResponse returns network-specific metadata used for transaction construction. Optionally, the implementer can return the suggested fee associated with the transaction being constructed. The caller may use this info to adjust the intent of the transaction or to create a transaction with a different account that can pay the suggested fee. Suggested fee is an array in case fee payment must occur in multiple currencies.
   * @alias module:model/ConstructionMetadataResponse
   * @param metadata {Object} 
   */
  function ConstructionMetadataResponse(metadata) {
    _classCallCheck(this, ConstructionMetadataResponse);

    ConstructionMetadataResponse.initialize(this, metadata);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionMetadataResponse, null, [{
    key: "initialize",
    value: function initialize(obj, metadata) {
      obj['metadata'] = metadata;
    }
    /**
     * Constructs a <code>ConstructionMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionMetadataResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionMetadataResponse} The populated <code>ConstructionMetadataResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionMetadataResponse();

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }

        if (data.hasOwnProperty('suggested_fee')) {
          obj['suggested_fee'] = _ApiClient["default"].convertToType(data['suggested_fee'], [_Amount["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConstructionMetadataResponse;
}();
/**
 * @member {Object} metadata
 */


ConstructionMetadataResponse.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Amount>} suggested_fee
 */

ConstructionMetadataResponse.prototype['suggested_fee'] = undefined;
var _default = ConstructionMetadataResponse;
exports["default"] = _default;