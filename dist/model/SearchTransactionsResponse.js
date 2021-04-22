"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockTransaction = _interopRequireDefault(require("./BlockTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchTransactionsResponse model module.
 * @module model/SearchTransactionsResponse
 * @version 1.4.10
 */
var SearchTransactionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchTransactionsResponse</code>.
   * SearchTransactionsResponse contains an ordered collection of BlockTransactions that match the query in SearchTransactionsRequest. These BlockTransactions are sorted from most recent block to oldest block.
   * @alias module:model/SearchTransactionsResponse
   * @param transactions {Array.<module:model/BlockTransaction>} transactions is an array of BlockTransactions sorted by most recent BlockIdentifier (meaning that transactions in recent blocks appear first). If there are many transactions for a particular search, transactions may not contain all matching transactions. It is up to the caller to paginate these transactions using the max_block field.
   * @param totalCount {Number} total_count is the number of results for a given search. Callers typically use this value to concurrently fetch results by offset or to display a virtual page number associated with results.
   */
  function SearchTransactionsResponse(transactions, totalCount) {
    _classCallCheck(this, SearchTransactionsResponse);

    SearchTransactionsResponse.initialize(this, transactions, totalCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchTransactionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj, transactions, totalCount) {
      obj['transactions'] = transactions;
      obj['total_count'] = totalCount;
    }
    /**
     * Constructs a <code>SearchTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/SearchTransactionsResponse} The populated <code>SearchTransactionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchTransactionsResponse();

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_BlockTransaction["default"]]);
        }

        if (data.hasOwnProperty('total_count')) {
          obj['total_count'] = _ApiClient["default"].convertToType(data['total_count'], 'Number');
        }

        if (data.hasOwnProperty('next_offset')) {
          obj['next_offset'] = _ApiClient["default"].convertToType(data['next_offset'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SearchTransactionsResponse;
}();
/**
 * transactions is an array of BlockTransactions sorted by most recent BlockIdentifier (meaning that transactions in recent blocks appear first). If there are many transactions for a particular search, transactions may not contain all matching transactions. It is up to the caller to paginate these transactions using the max_block field.
 * @member {Array.<module:model/BlockTransaction>} transactions
 */


SearchTransactionsResponse.prototype['transactions'] = undefined;
/**
 * total_count is the number of results for a given search. Callers typically use this value to concurrently fetch results by offset or to display a virtual page number associated with results.
 * @member {Number} total_count
 */

SearchTransactionsResponse.prototype['total_count'] = undefined;
/**
 * next_offset is the next offset to use when paginating through transaction results. If this field is not populated, there are no more transactions to query.
 * @member {Number} next_offset
 */

SearchTransactionsResponse.prototype['next_offset'] = undefined;
var _default = SearchTransactionsResponse;
exports["default"] = _default;