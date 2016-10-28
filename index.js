var package = require("./package.json");
var myNewApi = require("./lib/my_new_api.js");
// curl -X POST -d '{"Say":"hello"}' https://irrn1p67g3.execute-api.us-east-2.amazonaws.com/production
console.log("loaded " + package.name + ", version " + package.version);

exports.handler = function (event, context) {
	myNewApi.handleRequest(event, context.done);
}