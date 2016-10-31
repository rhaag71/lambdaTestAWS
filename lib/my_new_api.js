exports.handleRequest = function (requestData, callback) {	
	var responseData = {};

	if (requestData.Say === "hello") {
		responseData.Said = "World";
	}

	if (requestData.temp === "columbus") {
		responseData.colTemp = "65F";
	}

	callback(null, responseData);
}