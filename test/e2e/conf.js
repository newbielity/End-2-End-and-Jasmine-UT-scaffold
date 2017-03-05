'use strict';
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/dummy-spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
};