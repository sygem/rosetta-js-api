"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BalanceExemption = _interopRequireDefault(require("./BalanceExemption"));

var _Error = _interopRequireDefault(require("./Error"));

var _OperationStatus = _interopRequireDefault(require("./OperationStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Allow model module.
 * @module model/Allow
 * @version 1.4.10
 */
var Allow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Allow</code>.
   * Allow specifies supported Operation status, Operation types, and all possible error statuses. This Allow object is used by clients to validate the correctness of a Rosetta Server implementation. It is expected that these clients will error if they receive some response that contains any of the above information that is not specified here.
   * @alias module:model/Allow
   * @param operationStatuses {Array.<module:model/OperationStatus>} All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
   * @param operationTypes {Array.<String>} All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
   * @param errors {Array.<module:model/Error>} All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
   * @param historicalBalanceLookup {Boolean} Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true.
   * @param callMethods {Array.<String>} All methods that are supported by the /call endpoint. Communicating which parameters should be provided to /call is the responsibility of the implementer (this is en lieu of defining an entire type system and requiring the implementer to define that in Allow).
   * @param balanceExemptions {Array.<module:model/BalanceExemption>} BalanceExemptions is an array of BalanceExemption indicating which account balances could change without a corresponding Operation. BalanceExemptions should be used sparingly as they may introduce significant complexity for integrators that attempt to reconcile all account balance changes. If your implementation relies on any BalanceExemptions, you MUST implement historical balance lookup (the ability to query an account balance at any BlockIdentifier).
   * @param mempoolCoins {Boolean} Any Rosetta implementation that can update an AccountIdentifier's unspent coins based on the contents of the mempool should populate this field as true. If false, requests to `/account/coins` that set `include_mempool` as true will be automatically rejected.
   */
  function Allow(operationStatuses, operationTypes, errors, historicalBalanceLookup, callMethods, balanceExemptions, mempoolCoins) {
    _classCallCheck(this, Allow);

    Allow.initialize(this, operationStatuses, operationTypes, errors, historicalBalanceLookup, callMethods, balanceExemptions, mempoolCoins);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Allow, null, [{
    key: "initialize",
    value: function initialize(obj, operationStatuses, operationTypes, errors, historicalBalanceLookup, callMethods, balanceExemptions, mempoolCoins) {
      obj['operation_statuses'] = operationStatuses;
      obj['operation_types'] = operationTypes;
      obj['errors'] = errors;
      obj['historical_balance_lookup'] = historicalBalanceLookup;
      obj['call_methods'] = callMethods;
      obj['balance_exemptions'] = balanceExemptions;
      obj['mempool_coins'] = mempoolCoins;
    }
    /**
     * Constructs a <code>Allow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Allow} obj Optional instance to populate.
     * @return {module:model/Allow} The populated <code>Allow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Allow();

        if (data.hasOwnProperty('operation_statuses')) {
          obj['operation_statuses'] = _ApiClient["default"].convertToType(data['operation_statuses'], [_OperationStatus["default"]]);
        }

        if (data.hasOwnProperty('operation_types')) {
          obj['operation_types'] = _ApiClient["default"].convertToType(data['operation_types'], ['String']);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_Error["default"]]);
        }

        if (data.hasOwnProperty('historical_balance_lookup')) {
          obj['historical_balance_lookup'] = _ApiClient["default"].convertToType(data['historical_balance_lookup'], 'Boolean');
        }

        if (data.hasOwnProperty('timestamp_start_index')) {
          obj['timestamp_start_index'] = _ApiClient["default"].convertToType(data['timestamp_start_index'], 'Number');
        }

        if (data.hasOwnProperty('call_methods')) {
          obj['call_methods'] = _ApiClient["default"].convertToType(data['call_methods'], ['String']);
        }

        if (data.hasOwnProperty('balance_exemptions')) {
          obj['balance_exemptions'] = _ApiClient["default"].convertToType(data['balance_exemptions'], [_BalanceExemption["default"]]);
        }

        if (data.hasOwnProperty('mempool_coins')) {
          obj['mempool_coins'] = _ApiClient["default"].convertToType(data['mempool_coins'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Allow;
}();
/**
 * All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<module:model/OperationStatus>} operation_statuses
 */


Allow.prototype['operation_statuses'] = undefined;
/**
 * All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<String>} operation_types
 */

Allow.prototype['operation_types'] = undefined;
/**
 * All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<module:model/Error>} errors
 */

Allow.prototype['errors'] = undefined;
/**
 * Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true.
 * @member {Boolean} historical_balance_lookup
 */

Allow.prototype['historical_balance_lookup'] = undefined;
/**
 * If populated, `timestamp_start_index` indicates the first block index where block timestamps are considered valid (i.e. all blocks less than `timestamp_start_index` could have invalid timestamps). This is useful when the genesis block (or blocks) of a network have timestamp 0. If not populated, block timestamps are assumed to be valid for all available blocks.
 * @member {Number} timestamp_start_index
 */

Allow.prototype['timestamp_start_index'] = undefined;
/**
 * All methods that are supported by the /call endpoint. Communicating which parameters should be provided to /call is the responsibility of the implementer (this is en lieu of defining an entire type system and requiring the implementer to define that in Allow).
 * @member {Array.<String>} call_methods
 */

Allow.prototype['call_methods'] = undefined;
/**
 * BalanceExemptions is an array of BalanceExemption indicating which account balances could change without a corresponding Operation. BalanceExemptions should be used sparingly as they may introduce significant complexity for integrators that attempt to reconcile all account balance changes. If your implementation relies on any BalanceExemptions, you MUST implement historical balance lookup (the ability to query an account balance at any BlockIdentifier).
 * @member {Array.<module:model/BalanceExemption>} balance_exemptions
 */

Allow.prototype['balance_exemptions'] = undefined;
/**
 * Any Rosetta implementation that can update an AccountIdentifier's unspent coins based on the contents of the mempool should populate this field as true. If false, requests to `/account/coins` that set `include_mempool` as true will be automatically rejected.
 * @member {Boolean} mempool_coins
 */

Allow.prototype['mempool_coins'] = undefined;
var _default = Allow;
exports["default"] = _default;