"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountIdentifier = _interopRequireDefault(require("./AccountIdentifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConstructionDeriveResponse model module.
 * @module model/ConstructionDeriveResponse
 * @version 1.4.10
 */
var ConstructionDeriveResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConstructionDeriveResponse</code>.
   * ConstructionDeriveResponse is returned by the &#x60;/construction/derive&#x60; endpoint.
   * @alias module:model/ConstructionDeriveResponse
   */
  function ConstructionDeriveResponse() {
    _classCallCheck(this, ConstructionDeriveResponse);

    ConstructionDeriveResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConstructionDeriveResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConstructionDeriveResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionDeriveResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionDeriveResponse} The populated <code>ConstructionDeriveResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConstructionDeriveResponse();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('account_identifier')) {
          obj['account_identifier'] = _AccountIdentifier["default"].constructFromObject(data['account_identifier']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return ConstructionDeriveResponse;
}();
/**
 * [DEPRECATED by `account_identifier` in `v1.4.4`] Address in network-specific format.
 * @member {String} address
 */


ConstructionDeriveResponse.prototype['address'] = undefined;
/**
 * @member {module:model/AccountIdentifier} account_identifier
 */

ConstructionDeriveResponse.prototype['account_identifier'] = undefined;
/**
 * @member {Object} metadata
 */

ConstructionDeriveResponse.prototype['metadata'] = undefined;
var _default = ConstructionDeriveResponse;
exports["default"] = _default;