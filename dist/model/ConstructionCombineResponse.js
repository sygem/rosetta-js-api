"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionCombineResponse model module.
 * @module model/ConstructionCombineResponse
 * @version 1.4.10
 */
var ConstructionCombineResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionCombineResponse</code>.
   * ConstructionCombineResponse is returned by &#x60;/construction/combine&#x60;. The network payload will be sent directly to the &#x60;construction/submit&#x60; endpoint.
   * @alias module:model/ConstructionCombineResponse
   * @param signedTransaction {String} 
   */
  function ConstructionCombineResponse(signedTransaction) {
    _classCallCheck(this, ConstructionCombineResponse);

    ConstructionCombineResponse.initialize(this, signedTransaction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionCombineResponse, null, [{
    key: "initialize",
    value: function initialize(obj, signedTransaction) {
      obj['signed_transaction'] = signedTransaction;
    }
    /**
     * Constructs a <code>ConstructionCombineResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionCombineResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionCombineResponse} The populated <code>ConstructionCombineResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionCombineResponse();

        if (data.hasOwnProperty('signed_transaction')) {
          obj['signed_transaction'] = _ApiClient["default"].convertToType(data['signed_transaction'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConstructionCombineResponse;
}();
/**
 * @member {String} signed_transaction
 */


ConstructionCombineResponse.prototype['signed_transaction'] = undefined;
var _default = ConstructionCombineResponse;
exports["default"] = _default;