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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import MempoolResponse from '../model/MempoolResponse';
import MempoolTransactionRequest from '../model/MempoolTransactionRequest';
import MempoolTransactionResponse from '../model/MempoolTransactionResponse';
import NetworkRequest from '../model/NetworkRequest';

/**
* Mempool service.
* @module api/MempoolApi
* @version 1.4.10
*/
export default class MempoolApi {

    /**
    * Constructs a new MempoolApi. 
    * @alias module:api/MempoolApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the mempool operation.
     * @callback module:api/MempoolApi~mempoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MempoolResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Mempool Transactions
     * Get all Transaction Identifiers in the mempool
     * @param {module:model/NetworkRequest} networkRequest 
     * @param {module:api/MempoolApi~mempoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MempoolResponse}
     */
    mempool(networkRequest, callback) {
      let postBody = networkRequest;
      // verify the required parameter 'networkRequest' is set
      if (networkRequest === undefined || networkRequest === null) {
        throw new Error("Missing the required parameter 'networkRequest' when calling mempool");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MempoolResponse;
      return this.apiClient.callApi(
        '/mempool', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mempoolTransaction operation.
     * @callback module:api/MempoolApi~mempoolTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MempoolTransactionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Mempool Transaction
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * @param {module:model/MempoolTransactionRequest} mempoolTransactionRequest 
     * @param {module:api/MempoolApi~mempoolTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MempoolTransactionResponse}
     */
    mempoolTransaction(mempoolTransactionRequest, callback) {
      let postBody = mempoolTransactionRequest;
      // verify the required parameter 'mempoolTransactionRequest' is set
      if (mempoolTransactionRequest === undefined || mempoolTransactionRequest === null) {
        throw new Error("Missing the required parameter 'mempoolTransactionRequest' when calling mempoolTransaction");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MempoolTransactionResponse;
      return this.apiClient.callApi(
        '/mempool/transaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
