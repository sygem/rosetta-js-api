"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurveType = _interopRequireDefault(require("./CurveType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PublicKey model module.
 * @module model/PublicKey
 * @version 1.4.10
 */
var PublicKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublicKey</code>.
   * PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.
   * @alias module:model/PublicKey
   * @param hexBytes {String} Hex-encoded public key bytes in the format specified by the CurveType.
   * @param curveType {module:model/CurveType} 
   */
  function PublicKey(hexBytes, curveType) {
    _classCallCheck(this, PublicKey);

    PublicKey.initialize(this, hexBytes, curveType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicKey, null, [{
    key: "initialize",
    value: function initialize(obj, hexBytes, curveType) {
      obj['hex_bytes'] = hexBytes;
      obj['curve_type'] = curveType;
    }
    /**
     * Constructs a <code>PublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicKey} obj Optional instance to populate.
     * @return {module:model/PublicKey} The populated <code>PublicKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicKey();

        if (data.hasOwnProperty('hex_bytes')) {
          obj['hex_bytes'] = _ApiClient["default"].convertToType(data['hex_bytes'], 'String');
        }

        if (data.hasOwnProperty('curve_type')) {
          obj['curve_type'] = _CurveType["default"].constructFromObject(data['curve_type']);
        }
      }

      return obj;
    }
  }]);

  return PublicKey;
}();
/**
 * Hex-encoded public key bytes in the format specified by the CurveType.
 * @member {String} hex_bytes
 */


PublicKey.prototype['hex_bytes'] = undefined;
/**
 * @member {module:model/CurveType} curve_type
 */

PublicKey.prototype['curve_type'] = undefined;
var _default = PublicKey;
exports["default"] = _default;