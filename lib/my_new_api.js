exports.handleRequest = function (requestData, callback) {	
	var responseData = {};

	if (requestData.Say === "hello") {
		responseData.Said = "World";
	}

	callback(null, responseData);
}