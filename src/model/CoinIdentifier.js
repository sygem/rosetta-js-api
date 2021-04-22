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

/**
 * The CoinIdentifier model module.
 * @module model/CoinIdentifier
 * @version 1.4.10
 */
class CoinIdentifier {
    /**
     * Constructs a new <code>CoinIdentifier</code>.
     * CoinIdentifier uniquely identifies a Coin.
     * @alias module:model/CoinIdentifier
     * @param identifier {String} Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
     */
    constructor(identifier) { 
        
        CoinIdentifier.initialize(this, identifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier) { 
        obj['identifier'] = identifier;
    }

    /**
     * Constructs a <code>CoinIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinIdentifier} obj Optional instance to populate.
     * @return {module:model/CoinIdentifier} The populated <code>CoinIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoinIdentifier();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index.
 * @member {String} identifier
 */
CoinIdentifier.prototype['identifier'] = undefined;






export default CoinIdentifier;

