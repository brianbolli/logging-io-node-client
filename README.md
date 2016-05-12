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

ARC_LOGGING_WEB_INSTANCE
ARC_LOGGING_WEB_CLIENT
ARC_LOGGING_WEB_URL
ARC_LOGGING_WEB_PROTOCOL
ARC_LOGGING_WEB_PORT

#### <i class="icon-folder-open"></i> Usage
```
var arc = require('../index');

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

* **string** *type* 
* **string** *source* 
* **string** *message* 
* **string** *user_id* 
* **object** *data* 

### Return:

* 

## info(source, message, user_id, data)

Method to submit an info log entry

### Params:

* **string** *source* 
* **string** *message* 
* **integer** *user_id* 
* **mixed.\<array|object>** *data* 

### Return:

* 

## warning(source, message, user_id, data)

Method to submit a warning log entry

### Params:

* **string** *source* 
* **string** *message* 
* **integer** *user_id* 
* **mixed.\<array|object>** *data* 

### Return:

* 

## error(source, message, user_id, data)

Method to submit an error log entry

### Params:

* **string** *source* 
* **string** *message* 
* **integer** *user_id* 
* **mixed.\<array|object>** *data* 

### Return:

* 

## setLanguage(language)

Method to manually change source programming
language from default 'node' value.

### Params:

* **string** *language* 

### Return:

* 

## setInstance(language)

Method to manually change server instance
from default environmental variable.

### Params:

* **string** *language* 

### Return:

* 

<!-- End index.js -->


