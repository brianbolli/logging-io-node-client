"use strict";

module.exports = function (grunt) {

	var config = grunt.config.get();
console.log('pkg -> ', config.pkg);
    grunt.config("yuidoc", {
        build: {
            name: "<%= pkg.name %>",
            description: "<%= pkg.description %>",
            version: "<%= pkg.version %>",
            url: "<%= arc.yuidoc.url %>",
            options: {
                paths: "<%= arc.yuidoc.paths %>",
                outdir: "<%= arc.yuidoc.outdir %>",
                markdown: {
                    "<%= arc.yuidoc.readme %>" : {
                        linkify: true
                    }
                }
            }
        }
    });
    
};
