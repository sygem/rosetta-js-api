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
 * The SyncStatus model module.
 * @module model/SyncStatus
 * @version 1.4.10
 */
var SyncStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SyncStatus</code>.
   * SyncStatus is used to provide additional context about an implementation&#39;s sync status. This object is often used by implementations to indicate healthiness when block data cannot be queried until some sync phase completes or cannot be determined by comparing the timestamp of the most recent block with the current time.
   * @alias module:model/SyncStatus
   */
  function SyncStatus() {
    _classCallCheck(this, SyncStatus);

    SyncStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SyncStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SyncStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncStatus} obj Optional instance to populate.
     * @return {module:model/SyncStatus} The populated <code>SyncStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SyncStatus();

        if (data.hasOwnProperty('current_index')) {
          obj['current_index'] = _ApiClient["default"].convertToType(data['current_index'], 'Number');
        }

        if (data.hasOwnProperty('target_index')) {
          obj['target_index'] = _ApiClient["default"].convertToType(data['target_index'], 'Number');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'String');
        }

        if (data.hasOwnProperty('synced')) {
          obj['synced'] = _ApiClient["default"].convertToType(data['synced'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SyncStatus;
}();
/**
 * CurrentIndex is the index of the last synced block in the current stage. This is a separate field from current_block_identifier in NetworkStatusResponse because blocks with indices up to and including the current_index may not yet be queryable by the caller. To reiterate, all indices up to and including current_block_identifier in NetworkStatusResponse must be queryable via the /block endpoint (excluding indices less than oldest_block_identifier).
 * @member {Number} current_index
 */


SyncStatus.prototype['current_index'] = undefined;
/**
 * TargetIndex is the index of the block that the implementation is attempting to sync to in the current stage.
 * @member {Number} target_index
 */

SyncStatus.prototype['target_index'] = undefined;
/**
 * Stage is the phase of the sync process.
 * @member {String} stage
 */

SyncStatus.prototype['stage'] = undefined;
/**
 * sycned is a boolean that indicates if an implementation has synced up to the most recent block. If this field is not populated, the caller should rely on a traditional tip timestamp comparison to determine if an implementation is synced. This field is particularly useful for quiescent blockchains (blocks only produced when there are pending transactions). In these blockchains, the most recent block could have a timestamp far behind the current time but the node could be healthy and at tip.
 * @member {Boolean} synced
 */

SyncStatus.prototype['synced'] = undefined;
var _default = SyncStatus;
exports["default"] = _default;