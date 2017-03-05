// Karma configuration
// Generated on Mon Sep 12 2016 19:21:06 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/unit/*-test.js'
    ],
    exclude: [
      'test/unit/coverage/**/*.js'
    ],
    preprocessors: {
      'test/unit/**/*-test.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'test/unit/coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015'],
            plugins: ['istanbul']
          }
        }]
      }
    }
  })
}