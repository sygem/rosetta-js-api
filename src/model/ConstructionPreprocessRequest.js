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
import Amount from './Amount';
import NetworkIdentifier from './NetworkIdentifier';
import Operation from './Operation';

/**
 * The ConstructionPreprocessRequest model module.
 * @module model/ConstructionPreprocessRequest
 * @version 1.4.10
 */
class ConstructionPreprocessRequest {
    /**
     * Constructs a new <code>ConstructionPreprocessRequest</code>.
     * ConstructionPreprocessRequest is passed to the &#x60;/construction/preprocess&#x60; endpoint so that a Rosetta implementation can determine which metadata it needs to request for construction. Metadata provided in this object should NEVER be a product of live data (i.e. the caller must follow some network-specific data fetching strategy outside of the Construction API to populate required Metadata). If live data is required for construction, it MUST be fetched in the call to &#x60;/construction/metadata&#x60;. The caller can provide a max fee they are willing to pay for a transaction. This is an array in the case fees must be paid in multiple currencies. The caller can also provide a suggested fee multiplier to indicate that the suggested fee should be scaled. This may be used to set higher fees for urgent transactions or to pay lower fees when there is less urgency. It is assumed that providing a very low multiplier (like 0.0001) will never lead to a transaction being created with a fee less than the minimum network fee (if applicable). In the case that the caller provides both a max fee and a suggested fee multiplier, the max fee will set an upper bound on the suggested fee (regardless of the multiplier provided).
     * @alias module:model/ConstructionPreprocessRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param operations {Array.<module:model/Operation>} 
     */
    constructor(networkIdentifier, operations) { 
        
        ConstructionPreprocessRequest.initialize(this, networkIdentifier, operations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, operations) { 
        obj['network_identifier'] = networkIdentifier;
        obj['operations'] = operations;
    }

    /**
     * Constructs a <code>ConstructionPreprocessRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionPreprocessRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionPreprocessRequest} The populated <code>ConstructionPreprocessRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionPreprocessRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [Operation]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('max_fee')) {
                obj['max_fee'] = ApiClient.convertToType(data['max_fee'], [Amount]);
            }
            if (data.hasOwnProperty('suggested_fee_multiplier')) {
                obj['suggested_fee_multiplier'] = ApiClient.convertToType(data['suggested_fee_multiplier'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
ConstructionPreprocessRequest.prototype['network_identifier'] = undefined;

/**
 * @member {Array.<module:model/Operation>} operations
 */
ConstructionPreprocessRequest.prototype['operations'] = undefined;

/**
 * @member {Object} metadata
 */
ConstructionPreprocessRequest.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Amount>} max_fee
 */
ConstructionPreprocessRequest.prototype['max_fee'] = undefined;

/**
 * @member {Number} suggested_fee_multiplier
 */
ConstructionPreprocessRequest.prototype['suggested_fee_multiplier'] = undefined;






export default ConstructionPreprocessRequest;

