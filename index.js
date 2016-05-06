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

var logging = {
	instance: process.env['ARC_LOGGING_WEB_INSTANCE'] || false,
	client: process.env['ARC_LOGGING_WEB_CLIENT'] || false,
	url: process.env['ARC_LOGGING_WEB_URL'] || false,
	protocol: process.env['ARC_LOGGING_WEB_PROTOCOL'] || false,
	port: process.env['ARC_LOGGING_WEB_PORT'] || false,
	language: "Node"
};

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
		"language": logging.language
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
			//console.log(buffer);
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

/**
 * setLanguage
 * 
 * Method to manually change source programming
 * language from default 'node' value.
 * 
 * @param    {string} language
 * 
 * @returns  {void}
 */
exports.setLanguage = function(language) {
	logging.language = language;
};

/**
 * setInstance
 * 
 * Method to manually change server instance
 * from default environmental variable.
 * 
 * @param    {string} language
 * 
 * @returns  {void}
 */
exports.setInstance = function(instance) {
	logging.instance = instance;
};