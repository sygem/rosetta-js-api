"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkIdentifier = _interopRequireDefault(require("./NetworkIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionParseRequest model module.
 * @module model/ConstructionParseRequest
 * @version 1.4.10
 */
var ConstructionParseRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionParseRequest</code>.
   * ConstructionParseRequest is the input to the &#x60;/construction/parse&#x60; endpoint. It allows the caller to parse either an unsigned or signed transaction.
   * @alias module:model/ConstructionParseRequest
   * @param networkIdentifier {module:model/NetworkIdentifier} 
   * @param signed {Boolean} Signed is a boolean indicating whether the transaction is signed.
   * @param transaction {String} This must be either the unsigned transaction blob returned by `/construction/payloads` or the signed transaction blob returned by `/construction/combine`.
   */
  function ConstructionParseRequest(networkIdentifier, signed, transaction) {
    _classCallCheck(this, ConstructionParseRequest);

    ConstructionParseRequest.initialize(this, networkIdentifier, signed, transaction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionParseRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkIdentifier, signed, transaction) {
      obj['network_identifier'] = networkIdentifier;
      obj['signed'] = signed;
      obj['transaction'] = transaction;
    }
    /**
     * Constructs a <code>ConstructionParseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionParseRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionParseRequest} The populated <code>ConstructionParseRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionParseRequest();

        if (data.hasOwnProperty('network_identifier')) {
          obj['network_identifier'] = _NetworkIdentifier["default"].constructFromObject(data['network_identifier']);
        }

        if (data.hasOwnProperty('signed')) {
          obj['signed'] = _ApiClient["default"].convertToType(data['signed'], 'Boolean');
        }

        if (data.hasOwnProperty('transaction')) {
          obj['transaction'] = _ApiClient["default"].convertToType(data['transaction'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConstructionParseRequest;
}();
/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */


ConstructionParseRequest.prototype['network_identifier'] = undefined;
/**
 * Signed is a boolean indicating whether the transaction is signed.
 * @member {Boolean} signed
 */

ConstructionParseRequest.prototype['signed'] = undefined;
/**
 * This must be either the unsigned transaction blob returned by `/construction/payloads` or the signed transaction blob returned by `/construction/combine`.
 * @member {String} transaction
 */

ConstructionParseRequest.prototype['transaction'] = undefined;
var _default = ConstructionParseRequest;
exports["default"] = _default;