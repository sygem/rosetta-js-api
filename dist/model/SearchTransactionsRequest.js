"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountIdentifier = _interopRequireDefault(require("./AccountIdentifier"));

var _CoinIdentifier = _interopRequireDefault(require("./CoinIdentifier"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

var _Operator = _interopRequireDefault(require("./Operator"));

var _TransactionIdentifier = _interopRequireDefault(require("./TransactionIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchTransactionsRequest model module.
 * @module model/SearchTransactionsRequest
 * @version 1.4.10
 */
var SearchTransactionsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchTransactionsRequest</code>.
   * SearchTransactionsRequest is used to search for transactions matching a set of provided conditions in canonical blocks.
   * @alias module:model/SearchTransactionsRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   */
  function SearchTransactionsRequest(networkIdentifier) {
    _classCallCheck(this, SearchTransactionsRequest);

    SearchTransactionsRequest.initialize(this, networkIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchTransactionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier) {
      obj['network_identifier'] = networkIdentifier;
    }
    /**
     * Constructs a <code>SearchTransactionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchTransactionsRequest} obj Optional instance to populate.
     * @return {module:model/SearchTransactionsRequest} The populated <code>SearchTransactionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchTransactionsRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('operator')) {
          obj['operator'] = _Operator["default"].constructFromObject(data['operator']);
        }

        if (data.hasOwnProperty('max_block')) {
          obj['max_block'] = _ApiClient["default"].convertToType(data['max_block'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('transaction_identifier')) {
          obj['transaction_identifier'] = _TransactionIdentifier["default"].constructFromObject(data['transaction_identifier']);
        }

        if (data.hasOwnProperty('account_identifier')) {
          obj['account_identifier'] = _AccountIdentifier["default"].constructFromObject(data['account_identifier']);
        }

        if (data.hasOwnProperty('coin_identifier')) {
          obj['coin_identifier'] = _CoinIdentifier["default"].constructFromObject(data['coin_identifier']);
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _Currency["default"].constructFromObject(data['currency']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SearchTransactionsRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


SearchTransactionsRequest.prototype['network_identifier'] = undefined;
/**
 * @member {module:model/Operator} operator
 */

SearchTransactionsRequest.prototype['operator'] = undefined;
/**
 * max_block is the largest block index to consider when searching for transactions. If this field is not populated, the current block is considered the max_block. If you do not specify a max_block, it is possible a newly synced block will interfere with paginated transaction queries (as the offset could become invalid with newly added rows).
 * @member {Number} max_block
 */

SearchTransactionsRequest.prototype['max_block'] = undefined;
/**
 * offset is the offset into the query result to start returning transactions. If any search conditions are changed, the query offset will change and you must restart your search iteration.
 * @member {Number} offset
 */

SearchTransactionsRequest.prototype['offset'] = undefined;
/**
 * limit is the maximum number of transactions to return in one call. The implementation may return <= limit transactions.
 * @member {Number} limit
 */

SearchTransactionsRequest.prototype['limit'] = undefined;
/**
 * @member {module:model/TransactionIdentifier} transaction_identifier
 */

SearchTransactionsRequest.prototype['transaction_identifier'] = undefined;
/**
 * @member {module:model/AccountIdentifier} account_identifier
 */

SearchTransactionsRequest.prototype['account_identifier'] = undefined;
/**
 * @member {module:model/CoinIdentifier} coin_identifier
 */

SearchTransactionsRequest.prototype['coin_identifier'] = undefined;
/**
 * @member {module:model/Currency} currency
 */

SearchTransactionsRequest.prototype['currency'] = undefined;
/**
 * status is the network-specific operation type.
 * @member {String} status
 */

SearchTransactionsRequest.prototype['status'] = undefined;
/**
 * type is the network-specific operation type.
 * @member {String} type
 */

SearchTransactionsRequest.prototype['type'] = undefined;
/**
 * address is AccountIdentifier.Address. This is used to get all transactions related to an AccountIdentifier.Address, regardless of SubAccountIdentifier.
 * @member {String} address
 */

SearchTransactionsRequest.prototype['address'] = undefined;
/**
 * success is a synthetic condition populated by parsing network-specific operation statuses (using the mapping provided in `/network/options`).
 * @member {Boolean} success
 */

SearchTransactionsRequest.prototype['success'] = undefined;
var _default = SearchTransactionsRequest;
exports["default"] = _default;