"use strict";

/*global module*/
var process = require("process");

module.exports = function (grunt) {

    require("time-grunt")(grunt);
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
		
        pkg: "<json:package.json>",
				
        name: "logging-io-node-client"
		
    });
	    
    grunt.loadTasks("./tasks");
    
    grunt.registerTask("build", ["jshint", "yuidoc"]);
   
    grunt.registerTask("default", ["build"]);

};
