"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountIdentifier = _interopRequireDefault(require("./AccountIdentifier"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountCoinsRequest model module.
 * @module model/AccountCoinsRequest
 * @version 1.4.10
 */
var AccountCoinsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountCoinsRequest</code>.
   * AccountCoinsRequest is utilized to make a request on the /account/coins endpoint.
   * @alias module:model/AccountCoinsRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param accountIdentifier {module:model/AccountIdentifier} 
   * @param includeMempool {Boolean} Include state from the mempool when looking up an account's unspent coins. Note, using this functionality breaks any guarantee of idempotency.
   */
  function AccountCoinsRequest(networkIdentifier, accountIdentifier, includeMempool) {
    _classCallCheck(this, AccountCoinsRequest);

    AccountCoinsRequest.initialize(this, networkIdentifier, accountIdentifier, includeMempool);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountCoinsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, accountIdentifier, includeMempool) {
      obj['network_identifier'] = networkIdentifier;
      obj['account_identifier'] = accountIdentifier;
      obj['include_mempool'] = includeMempool;
    }
    /**
     * Constructs a <code>AccountCoinsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCoinsRequest} obj Optional instance to populate.
     * @return {module:model/AccountCoinsRequest} The populated <code>AccountCoinsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountCoinsRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('account_identifier')) {
          obj['account_identifier'] = _AccountIdentifier["default"].constructFromObject(data['account_identifier']);
        }

        if (data.hasOwnProperty('include_mempool')) {
          obj['include_mempool'] = _ApiClient["default"].convertToType(data['include_mempool'], 'Boolean');
        }

        if (data.hasOwnProperty('currencies')) {
          obj['currencies'] = _ApiClient["default"].convertToType(data['currencies'], [_Currency["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AccountCoinsRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


AccountCoinsRequest.prototype['network_identifier'] = undefined;
/**
 * @member {module:model/AccountIdentifier} account_identifier
 */

AccountCoinsRequest.prototype['account_identifier'] = undefined;
/**
 * Include state from the mempool when looking up an account's unspent coins. Note, using this functionality breaks any guarantee of idempotency.
 * @member {Boolean} include_mempool
 */

AccountCoinsRequest.prototype['include_mempool'] = undefined;
/**
 * In some cases, the caller may not want to retrieve coins for all currencies for an AccountIdentifier. If the currencies field is populated, only coins for the specified currencies will be returned. If not populated, all unspent coins will be returned.
 * @member {Array.<module:model/Currency>} currencies
 */

AccountCoinsRequest.prototype['currencies'] = undefined;
var _default = AccountCoinsRequest;
exports["default"] = _default;