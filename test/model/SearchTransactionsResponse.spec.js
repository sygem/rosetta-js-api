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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Rosetta);
  }
}(this, function(expect, Rosetta) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Rosetta.SearchTransactionsResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SearchTransactionsResponse', function() {
    it('should create an instance of SearchTransactionsResponse', function() {
      // uncomment below and update the code to test SearchTransactionsResponse
      //var instane = new Rosetta.SearchTransactionsResponse();
      //expect(instance).to.be.a(Rosetta.SearchTransactionsResponse);
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instance = new Rosetta.SearchTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "total_count")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instance = new Rosetta.SearchTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextOffset (base name: "next_offset")', function() {
      // uncomment below and update the code to test the property nextOffset
      //var instance = new Rosetta.SearchTransactionsResponse();
      //expect(instance).to.be();
    });

  });

}));