'use strict';

const build = require('@microsoft/sp-build-web');
const webpackConfig = require('./webpack.extend.js');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

// Apply custom Webpack configuration
build.configureWebpack.mergeConfig({
  additionalConfiguration: webpackConfig
});

build.initialize(require('gulp'));
