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
import SearchTransactionsRequest from '../model/SearchTransactionsRequest';
import SearchTransactionsResponse from '../model/SearchTransactionsResponse';

/**
* Search service.
* @module api/SearchApi
* @version 1.4.10
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * [INDEXER] Search for Transactions
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * @param {module:model/SearchTransactionsRequest} searchTransactionsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchTransactionsResponse} and HTTP response
     */
    searchTransactionsWithHttpInfo(searchTransactionsRequest) {
      let postBody = searchTransactionsRequest;
      // verify the required parameter 'searchTransactionsRequest' is set
      if (searchTransactionsRequest === undefined || searchTransactionsRequest === null) {
        throw new Error("Missing the required parameter 'searchTransactionsRequest' when calling searchTransactions");
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
      let returnType = SearchTransactionsResponse;
      return this.apiClient.callApi(
        '/search/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [INDEXER] Search for Transactions
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * @param {module:model/SearchTransactionsRequest} searchTransactionsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchTransactionsResponse}
     */
    searchTransactions(searchTransactionsRequest) {
      return this.searchTransactionsWithHttpInfo(searchTransactionsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
