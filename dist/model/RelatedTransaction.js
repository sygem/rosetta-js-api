"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Direction = _interopRequireDefault(require("./Direction"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

var _TransactionIdentifier = _interopRequireDefault(require("./TransactionIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelatedTransaction model module.
 * @module model/RelatedTransaction
 * @version 1.4.10
 */
var RelatedTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelatedTransaction</code>.
   * The related_transaction allows implementations to link together multiple transactions. An unpopulated network identifier indicates that the related transaction is on the same network.
   * @alias module:model/RelatedTransaction
   * @param transactionIdentifier {module:model/TransactionIdentifier} 
   * @param direction {module:model/Direction} 
   */
  function RelatedTransaction(transactionIdentifier, direction) {
    _classCallCheck(this, RelatedTransaction);

    RelatedTransaction.initialize(this, transactionIdentifier, direction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelatedTransaction, null, [{
    key: "initialize",
    value: function initialize(obj, transactionIdentifier, direction) {
      obj['transaction_identifier'] = transactionIdentifier;
      obj['direction'] = direction;
    }
    /**
     * Constructs a <code>RelatedTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedTransaction} obj Optional instance to populate.
     * @return {module:model/RelatedTransaction} The populated <code>RelatedTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelatedTransaction();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('transaction_identifier')) {
          obj['transaction_identifier'] = _TransactionIdentifier["default"].constructFromObject(data['transaction_identifier']);
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _Direction["default"].constructFromObject(data['direction']);
        }
      }

      return obj;
    }
  }]);

  return RelatedTransaction;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


RelatedTransaction.prototype['network_identifier'] = undefined;
/**
 * @member {module:model/TransactionIdentifier} transaction_identifier
 */

RelatedTransaction.prototype['transaction_identifier'] = undefined;
/**
 * @member {module:model/Direction} direction
 */

RelatedTransaction.prototype['direction'] = undefined;
var _default = RelatedTransaction;
exports["default"] = _default;