"use strict";

module.exports = function (grunt) {

	grunt.config.merge({
		arc: {
			livereload: {
				port: 35729
			},
			jshint: {
				files: "./index.js"
			},
			yuidoc: {
				url: 'https://www.arctg.com',
				paths: ['./'],
				outdir: './docs',
				readme: 'README.md'
			}
		}
	});
};

