Arc Logging.io
===================
Node.js Client
-------------

Custom client for Arc Technology Group application logging.

#### <i class="icon-file"></i> Installation
```
npm install --save github:brianbolli/logging-io-node-client
```

#### <i class="icon-file"></i> Environmental Variables

When developing locally and using the logging client, the below environmental
variables must be set.

ARC_LOGGING_WEB_INSTANCE - Instance of website submitting logs, i.e. production, development, localhost

ARC_LOGGING_WEB_CLIENT - Owner of application submitting logs, i.e hilco, lifestorage, arc

ARC_LOGGING_WEB_URL - Host name for logging.io server, i.e. my-logging.my-website.com

ARC_LOGGING_WEB_PROTOCOL - Protocol to use when submitting logs, i.e. http or https

ARC_LOGGING_WEB_PORT - Port to use when submitting logs, i.e. 80


#### <i class="icon-folder-open"></i> Usage
```
var arc = require('logging-io-node-client');

arc.info("Arc Logging Client", "This is a info test 3, how did I do?", false, {foo: "bar"});

arc.warning("Arc Logging Client", "This is a warning test 3, how did I do?", false, {foo: "bar"});

arc.error("Arc Logging Client", "This is a error test 3, how did I do?", false, {foo: "bar"});
```
#### <i class="icon-folder-open"></i> Documentation
<!-- Start index.js -->

## logging-io-node-client

Custom Logging.io client for Arc Technology Group

## sendLogEvent(type, source, message, user_id, data)

Private method to send log event

### Params:

* **string** *type* - Type of log event to submit (error, warning, info)
* **string** *source* - Source of log request, i.e. Hilco AD API - User Service
* **string** *message* - Actual log message to submit
* **string** *user_id* - For if a user is logged in when error occured
* **mixed.\<array|object>** *data* - Any relevant data you would like to submit and view with logs

### Return:

* 

## info(source, message, user_id, data)

Method to submit an info log entry

### Params:

* **string** *source* - Source of log request, i.e. Hilco AD API - User Service
* **string** *message* - Actual log message to submit
* **integer** *user_id* - For if a user is logged in when error occured
* **mixed.\<array|object>** *data* - Any relevant data you would like to submit and view with logs

## warning(source, message, user_id, data)

Method to submit a warning log entry

### Params:

* **string** *source* - Source of log request, i.e. Hilco AD API - User Service
* **string** *message* - Actual log message to submit
* **integer** *user_id* - For if a user is logged in when error occured
* **mixed.\<array|object>** *data* - Any relevant data you would like to submit and view with logs

## error(source, message, user_id, data)

Method to submit an error log entry

### Params:

* **string** *source* - Source of log request, i.e. Hilco AD API - User Service
* **string** *message* - Actual log message to submit
* **integer** *user_id* - For if a user is logged in when error occured
* **mixed.\<array|object>** *data* - Any relevant data you would like to submit and view with logs

## setLanguage(language)

Utility method to manually change source programming
language from default 'node' value.

### Params:

* **string** *language* - Override value for language

## setInstance(instance)

Method to manually change server instance
from default environmental variable.

### Params:

* **string** *instance* - Override value for instance