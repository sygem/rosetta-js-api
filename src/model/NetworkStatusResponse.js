/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BlockIdentifier from './BlockIdentifier';
import Peer from './Peer';
import SyncStatus from './SyncStatus';

/**
 * The NetworkStatusResponse model module.
 * @module model/NetworkStatusResponse
 * @version 1.4.10
 */
class NetworkStatusResponse {
    /**
     * Constructs a new <code>NetworkStatusResponse</code>.
     * NetworkStatusResponse contains basic information about the node&#39;s view of a blockchain network. It is assumed that any BlockIdentifier.Index less than or equal to CurrentBlockIdentifier.Index can be queried. If a Rosetta implementation prunes historical state, it should populate the optional &#x60;oldest_block_identifier&#x60; field with the oldest block available to query. If this is not populated, it is assumed that the &#x60;genesis_block_identifier&#x60; is the oldest queryable block. If a Rosetta implementation performs some pre-sync before it is possible to query blocks, sync_status should be populated so that clients can still monitor healthiness. Without this field, it may appear that the implementation is stuck syncing and needs to be terminated.
     * @alias module:model/NetworkStatusResponse
     * @param currentBlockIdentifier {module:model/BlockIdentifier} 
     * @param currentBlockTimestamp {Number} The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
     * @param genesisBlockIdentifier {module:model/BlockIdentifier} 
     * @param peers {Array.<module:model/Peer>} 
     */
    constructor(currentBlockIdentifier, currentBlockTimestamp, genesisBlockIdentifier, peers) { 
        
        NetworkStatusResponse.initialize(this, currentBlockIdentifier, currentBlockTimestamp, genesisBlockIdentifier, peers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currentBlockIdentifier, currentBlockTimestamp, genesisBlockIdentifier, peers) { 
        obj['current_block_identifier'] = currentBlockIdentifier;
        obj['current_block_timestamp'] = currentBlockTimestamp;
        obj['genesis_block_identifier'] = genesisBlockIdentifier;
        obj['peers'] = peers;
    }

    /**
     * Constructs a <code>NetworkStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkStatusResponse} obj Optional instance to populate.
     * @return {module:model/NetworkStatusResponse} The populated <code>NetworkStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkStatusResponse();

            if (data.hasOwnProperty('current_block_identifier')) {
                obj['current_block_identifier'] = BlockIdentifier.constructFromObject(data['current_block_identifier']);
            }
            if (data.hasOwnProperty('current_block_timestamp')) {
                obj['current_block_timestamp'] = ApiClient.convertToType(data['current_block_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('genesis_block_identifier')) {
                obj['genesis_block_identifier'] = BlockIdentifier.constructFromObject(data['genesis_block_identifier']);
            }
            if (data.hasOwnProperty('oldest_block_identifier')) {
                obj['oldest_block_identifier'] = BlockIdentifier.constructFromObject(data['oldest_block_identifier']);
            }
            if (data.hasOwnProperty('sync_status')) {
                obj['sync_status'] = SyncStatus.constructFromObject(data['sync_status']);
            }
            if (data.hasOwnProperty('peers')) {
                obj['peers'] = ApiClient.convertToType(data['peers'], [Peer]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlockIdentifier} current_block_identifier
 */
NetworkStatusResponse.prototype['current_block_identifier'] = undefined;

/**
 * The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
 * @member {Number} current_block_timestamp
 */
NetworkStatusResponse.prototype['current_block_timestamp'] = undefined;

/**
 * @member {module:model/BlockIdentifier} genesis_block_identifier
 */
NetworkStatusResponse.prototype['genesis_block_identifier'] = undefined;

/**
 * @member {module:model/BlockIdentifier} oldest_block_identifier
 */
NetworkStatusResponse.prototype['oldest_block_identifier'] = undefined;

/**
 * @member {module:model/SyncStatus} sync_status
 */
NetworkStatusResponse.prototype['sync_status'] = undefined;

/**
 * @member {Array.<module:model/Peer>} peers
 */
NetworkStatusResponse.prototype['peers'] = undefined;






export default NetworkStatusResponse;
