var assert = require("chai").assert;
var expect = require("chai").expect;
var myNewApi = require("../lib/my_new_api.js");

describe("myNewApi", function () { 

	it("exports handleRequest", function () { 
		assert.typeOf(myNewApi.handleRequest, "function"); 
	});

	
	it("Should said world if you say hello", function (done) {
		myNewApi.handleRequest({"Say":"hello"}, function(data1, data) {	
			expect(data.Said).to.be.equal("World");
			done();
		});
	});

	it("Should send back temp if you send city", function (done) {
		myNewApi.handleRequest({"temp":"columbus"}, function(data1, data) {
			expect(data.colTemp).to.be.equal("65F");
			done();
		});
	});
	
});
