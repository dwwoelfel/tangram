/*jshint node: true*/
'use strict';
module.exports = function (config) {

    config.set({
        basePath: '',
        // use karma's version of sinon, as the node version lacks the
        // http fakers
        frameworks: ['mocha', 'sinon'],
        files: [
            'node_modules/topojson/topojson.js',
            'node_modules/lodash/lodash.js',
            'demos/lib/leaflet-0.8-dev.js',
            'dist/tangram-worker.debug.js',
            'dist/testable.js'
        ],
        exclude: [  ],
        preprocessors: {  },
        reporters: ['mocha'],
        port: 9876,
        colors: false,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['Chrome_with_webgl_flag'],
        customLaunchers: {
          Chrome_with_webgl_flag: {
            base: "Chrome",
            flags: ["--enable-webgl"]
          }
        },
        proxies: {
            '/': 'http://localhost:9876/base/dist/'
        },
        singleRun: false
    });

};
