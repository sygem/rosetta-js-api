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
    instance = new Rosetta.ConstructionPayloadsRequest();
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

  describe('ConstructionPayloadsRequest', function() {
    it('should create an instance of ConstructionPayloadsRequest', function() {
      // uncomment below and update the code to test ConstructionPayloadsRequest
      //var instane = new Rosetta.ConstructionPayloadsRequest();
      //expect(instance).to.be.a(Rosetta.ConstructionPayloadsRequest);
    });

    it('should have the property networkIdentifier (base name: "network_identifier")', function() {
      // uncomment below and update the code to test the property networkIdentifier
      //var instance = new Rosetta.ConstructionPayloadsRequest();
      //expect(instance).to.be();
    });

    it('should have the property operations (base name: "operations")', function() {
      // uncomment below and update the code to test the property operations
      //var instance = new Rosetta.ConstructionPayloadsRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new Rosetta.ConstructionPayloadsRequest();
      //expect(instance).to.be();
    });

    it('should have the property publicKeys (base name: "public_keys")', function() {
      // uncomment below and update the code to test the property publicKeys
      //var instance = new Rosetta.ConstructionPayloadsRequest();
      //expect(instance).to.be();
    });

  });

}));
