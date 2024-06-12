const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');  // Add this line

module.exports = (config) => {
    config.plugins.push(new NodePolyfillPlugin());

    config.resolve = {
        ...config.resolve,
        fallback: {
            ...config.resolve.fallback,
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "fs": false,
            "path2d": path.resolve(__dirname, 'node_modules/path2d-polyfill/dist/path2d-polyfill.js'),
            "canvas": require.resolve("canvas")
        }
    };

    return config;
};
