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
import Block from './Block';
import TransactionIdentifier from './TransactionIdentifier';

/**
 * The BlockResponse model module.
 * @module model/BlockResponse
 * @version 1.4.10
 */
class BlockResponse {
    /**
     * Constructs a new <code>BlockResponse</code>.
     * A BlockResponse includes a fully-populated block or a partially-populated block with a list of other transactions to fetch (other_transactions). As a result of the consensus algorithm of some blockchains, blocks can be omitted (i.e. certain block indices can be skipped). If a query for one of these omitted indices is made, the response should not include a &#x60;Block&#x60; object. It is VERY important to note that blocks MUST still form a canonical, connected chain of blocks where each block has a unique index. In other words, the &#x60;PartialBlockIdentifier&#x60; of a block after an omitted block should reference the last non-omitted block.
     * @alias module:model/BlockResponse
     */
    constructor() { 
        
        BlockResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockResponse} obj Optional instance to populate.
     * @return {module:model/BlockResponse} The populated <code>BlockResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockResponse();

            if (data.hasOwnProperty('block')) {
                obj['block'] = Block.constructFromObject(data['block']);
            }
            if (data.hasOwnProperty('other_transactions')) {
                obj['other_transactions'] = ApiClient.convertToType(data['other_transactions'], [TransactionIdentifier]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Block} block
 */
BlockResponse.prototype['block'] = undefined;

/**
 * Some blockchains may require additional transactions to be fetched that weren't returned in the block response (ex: block only returns transaction hashes). For blockchains with a lot of transactions in each block, this can be very useful as consumers can concurrently fetch all transactions returned.
 * @member {Array.<module:model/TransactionIdentifier>} other_transactions
 */
BlockResponse.prototype['other_transactions'] = undefined;






export default BlockResponse;

