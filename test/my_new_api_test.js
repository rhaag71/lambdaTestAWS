var assert = require("chai").assert;
var expect = require("chai").expect;
var myNewApi = require("../lib/my_new_api.js");

describe("myNewApi", function () { 
	it("exports handleRequest", function () { 
		assert.typeOf(myNewApi.handleRequest, "function"); 
	});

	
	it("Sends back what you send to it", function (done) {

		myNewApi.handleRequest({"Say":"hello"}, function(data1, data) {
console.log(typeof(data));		
console.log(data.Said);	
			expect(data.Said).to.be.equal("World");
			done();
		});
	});
});
