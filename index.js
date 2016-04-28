/**
 * @requires ARC_LOGGING_WEB_INSTANCE
 * @requires ARC_LOGGING_WEB_CLIENT
 * @requires ARC_LOGGING_WEB_URL
 * @requires ARC_LOGGING_WEB_PROTOCOL
 * @requires ARC_LOGGING_WEB_PORT
 * 
 * @type module
 */

"use strict";

var process = require('process');
var http = require('http');
var language = "Node";

var logging = {
	instance: process.env['ARC_LOGGING_WEB_INSTANCE'] || false,
	client: process.env['ARC_LOGGING_WEB_CLIENT'] || false,
	//url: process.env['ARC_LOGGING_WEB_URL'] || false,
	url: "arc-logging.azurewebsites.net",
	protocol: process.env['ARC_LOGGING_WEB_PROTOCOL'] || false,
	port: process.env['ARC_LOGGING_WEB_PORT'] || false
};

console.log('Logging Access Credentiasl -> ', logging);

var sendLogEvent = function (type, source, message, user_id, data)
{
	if (!logging.client || !logging.instance || !logging.url || !logging.protocol)
	{
		console.error('Missinng required environmental variable');
		return false;
	}
	
	var postData = JSON.stringify({
		"client": logging.client,
		"instance": logging.instance,
		"type": type,
		"source": source,
		"data": data || {},
		"user_id": user_id || 0,
		"msg": message,
		"language": language
	});
	
	var options = {
		host: logging.url,
		port: logging.port,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": postData.length
		}
	};
	
	var buffer = [];
	
	var req = http.request(options, function(res){
		res.setEncoding('utf8');
		
		res.on('data', function(chunk) {
			buffer.push(chunk);
		});
		
		res.on('end', function() {
			console.log(buffer);
		});
		
	});
	
	req.on("error", function(err){
		console.error(err);
	});
	
	req.write(postData);
	req.end();

};

/**
 * info
 * 
 * Method to submit an info log entry
 * 
 * @param {string} source
 * @param {string} message
 * @param {integer} user_id
 * @param {mixed<array|object>} data
 * 
 * @returns {void}
 */
exports.info = function (source, message, user_id, data) {
	sendLogEvent('info', source, message, user_id, data);
};

/**
 * warning
 * 
 * Method to submit a warning log entry
 * 
 * @param {string} source
 * @param {string} message
 * @param {integer} user_id
 * @param {mixed<array|object>} data
 * 
 * @returns {void}
 */
exports.warning = function (source, message, user_id, data) {
	sendLogEvent('warning', source, message, user_id, data);
};

/**
 * error
 * 
 * Method to submit an error log entry
 * 
 * @param {string} source
 * @param {string} message
 * @param {integer} user_id
 * @param {mixed<array|object>} data
 * 
 * @returns {void}
 */
exports.error = function (source, message, user_id, data) {
	sendLogEvent('error', source, message, user_id, data);
};

exports.setLanguage = function(_language) {
	language = _language;
};

exports.setInstance = function(_instance) {
	logging.instance = _instance;
};