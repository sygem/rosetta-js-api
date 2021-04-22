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
import NetworkIdentifier from './NetworkIdentifier';
import TransactionIdentifier from './TransactionIdentifier';

/**
 * The BlockTransactionRequest model module.
 * @module model/BlockTransactionRequest
 * @version 1.4.10
 */
class BlockTransactionRequest {
    /**
     * Constructs a new <code>BlockTransactionRequest</code>.
     * A BlockTransactionRequest is used to fetch a Transaction included in a block that is not returned in a BlockResponse.
     * @alias module:model/BlockTransactionRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param blockIdentifier {module:model/BlockIdentifier} 
     * @param transactionIdentifier {module:model/TransactionIdentifier} 
     */
    constructor(networkIdentifier, blockIdentifier, transactionIdentifier) { 
        
        BlockTransactionRequest.initialize(this, networkIdentifier, blockIdentifier, transactionIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, blockIdentifier, transactionIdentifier) { 
        obj['network_identifier'] = networkIdentifier;
        obj['block_identifier'] = blockIdentifier;
        obj['transaction_identifier'] = transactionIdentifier;
    }

    /**
     * Constructs a <code>BlockTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransactionRequest} obj Optional instance to populate.
     * @return {module:model/BlockTransactionRequest} The populated <code>BlockTransactionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockTransactionRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('block_identifier')) {
                obj['block_identifier'] = BlockIdentifier.constructFromObject(data['block_identifier']);
            }
            if (data.hasOwnProperty('transaction_identifier')) {
                obj['transaction_identifier'] = TransactionIdentifier.constructFromObject(data['transaction_identifier']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
BlockTransactionRequest.prototype['network_identifier'] = undefined;

/**
 * @member {module:model/BlockIdentifier} block_identifier
 */
BlockTransactionRequest.prototype['block_identifier'] = undefined;

/**
 * @member {module:model/TransactionIdentifier} transaction_identifier
 */
BlockTransactionRequest.prototype['transaction_identifier'] = undefined;






export default BlockTransactionRequest;

