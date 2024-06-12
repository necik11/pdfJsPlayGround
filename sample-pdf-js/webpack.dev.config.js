const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'dev.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
};
