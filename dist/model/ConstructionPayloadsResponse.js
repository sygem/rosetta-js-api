"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SigningPayload = _interopRequireDefault(require("./SigningPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionPayloadsResponse model module.
 * @module model/ConstructionPayloadsResponse
 * @version 1.4.10
 */
var ConstructionPayloadsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionPayloadsResponse</code>.
   * ConstructionTransactionResponse is returned by &#x60;/construction/payloads&#x60;. It contains an unsigned transaction blob (that is usually needed to construct the a network transaction from a collection of signatures) and an array of payloads that must be signed by the caller.
   * @alias module:model/ConstructionPayloadsResponse
   * @param unsignedTransaction {String} 
   * @param payloads {Array.<module:model/SigningPayload>} 
   */
  function ConstructionPayloadsResponse(unsignedTransaction, payloads) {
    _classCallCheck(this, ConstructionPayloadsResponse);

    ConstructionPayloadsResponse.initialize(this, unsignedTransaction, payloads);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionPayloadsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, unsignedTransaction, payloads) {
      obj['unsigned_transaction'] = unsignedTransaction;
      obj['payloads'] = payloads;
    }
    /**
     * Constructs a <code>ConstructionPayloadsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPayloadsResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionPayloadsResponse} The populated <code>ConstructionPayloadsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionPayloadsResponse();

        if (data.hasOwnProperty('unsigned_transaction')) {
          obj['unsigned_transaction'] = _ApiClient["default"].convertToType(data['unsigned_transaction'], 'String');
        }

        if (data.hasOwnProperty('payloads')) {
          obj['payloads'] = _ApiClient["default"].convertToType(data['payloads'], [_SigningPayload["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConstructionPayloadsResponse;
}();
/**
 * @member {String} unsigned_transaction
 */


ConstructionPayloadsResponse.prototype['unsigned_transaction'] = undefined;
/**
 * @member {Array.<module:model/SigningPayload>} payloads
 */

ConstructionPayloadsResponse.prototype['payloads'] = undefined;
var _default = ConstructionPayloadsResponse;
exports["default"] = _default;