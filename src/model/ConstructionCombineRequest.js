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
import NetworkIdentifier from './NetworkIdentifier';
import Signature from './Signature';

/**
 * The ConstructionCombineRequest model module.
 * @module model/ConstructionCombineRequest
 * @version 1.4.10
 */
class ConstructionCombineRequest {
    /**
     * Constructs a new <code>ConstructionCombineRequest</code>.
     * ConstructionCombineRequest is the input to the &#x60;/construction/combine&#x60; endpoint. It contains the unsigned transaction blob returned by &#x60;/construction/payloads&#x60; and all required signatures to create a network transaction.
     * @alias module:model/ConstructionCombineRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param unsignedTransaction {String} 
     * @param signatures {Array.<module:model/Signature>} 
     */
    constructor(networkIdentifier, unsignedTransaction, signatures) { 
        
        ConstructionCombineRequest.initialize(this, networkIdentifier, unsignedTransaction, signatures);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, unsignedTransaction, signatures) { 
        obj['network_identifier'] = networkIdentifier;
        obj['unsigned_transaction'] = unsignedTransaction;
        obj['signatures'] = signatures;
    }

    /**
     * Constructs a <code>ConstructionCombineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionCombineRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionCombineRequest} The populated <code>ConstructionCombineRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionCombineRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('unsigned_transaction')) {
                obj['unsigned_transaction'] = ApiClient.convertToType(data['unsigned_transaction'], 'String');
            }
            if (data.hasOwnProperty('signatures')) {
                obj['signatures'] = ApiClient.convertToType(data['signatures'], [Signature]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
ConstructionCombineRequest.prototype['network_identifier'] = undefined;

/**
 * @member {String} unsigned_transaction
 */
ConstructionCombineRequest.prototype['unsigned_transaction'] = undefined;

/**
 * @member {Array.<module:model/Signature>} signatures
 */
ConstructionCombineRequest.prototype['signatures'] = undefined;






export default ConstructionCombineRequest;
