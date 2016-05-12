"use strict";

module.exports = function (grunt) {

    grunt.config('markdox', {
        options: {
            // Task-specific options go here. 
        },
        main: {
            files: [
				{ src: './index.js', dest: 'test.md' }
			]
        }
	});
	
};