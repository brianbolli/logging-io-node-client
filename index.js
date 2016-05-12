/**
 * Custom Logging.io client for Arc Technology Group
 * 
 * @class logging-io-node-client
 * @type module
 * 
 * @since  3.0.0
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

/**
 * Private method to send log event
 * 
 * @method  sendLogEvent
 * @private
 * 
 * @param {string} type - Type of log event to submit (error, warning, info)
 * @param {string} source - Source of log request, i.e. Hilco AD API - User Service
 * @param {string} message - Actual log message to submit
 * @param {string} user_id - For if a user is logged in when error occured
 * @param {mixed<array|object>} data - Any relevant data you would like to submit and view with logs
 * 
 * @returns {void}
 */
var sendLogEvent = function (type, source, message, user_id, data)
{
	if (!logging.client || !logging.instance || !logging.url || !logging.protocol)
	{
		console.error('Missing required environmental variable');
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
 * Method to submit an info log entry
 * 
 * @method info
 * 
 * @param {string} source - Source of log request, i.e. Hilco AD API - User Service
 * @param {string} message - Actual log message to submit
 * @param {integer} user_id - For if a user is logged in when error occured
 * @param {mixed<array|object>} data - Any relevant data you would like to submit and view with logs
 * 
 */
exports.info = function (source, message, user_id, data) {
	sendLogEvent('info', source, message, user_id, data);
};

/**
 * Method to submit a warning log entry
 * 
 * @method warning
 * 
 * @param {string} source - Source of log request, i.e. Hilco AD API - User Service
 * @param {string} message - Actual log message to submit
 * @param {integer} user_id - For if a user is logged in when error occured
 * @param {mixed<array|object>} data - Any relevant data you would like to submit and view with logs
 * 
 */
exports.warning = function (source, message, user_id, data) {
	sendLogEvent('warning', source, message, user_id, data);
};

/**
 * Method to submit an error log entry
 * 
 * @method error
 * 
 * @param {string} source - Source of log request, i.e. Hilco AD API - User Service
 * @param {string} message - Actual log message to submit
 * @param {integer} user_id - For if a user is logged in when error occured
 * @param {mixed<array|object>} data - Any relevant data you would like to submit and view with logs
 *
 */
exports.error = function (source, message, user_id, data) {
	sendLogEvent('error', source, message, user_id, data);
};

/**
 * Utility method to manually change source programming
 * language from default 'node' value.
 * 
 * @method setLanguage
 * 
 * @param  {string} language - Override value for language
 * 
 */
exports.setLanguage = function(language) {
	logging.language = language;
};

/**
 * Method to manually change server instance
 * from default environmental variable.
 * 
 * @method setInstance
 * 
 * @param  {string} instance - Override value for instance
 * 
 */
exports.setInstance = function(instance) {
	logging.instance = instance;
};