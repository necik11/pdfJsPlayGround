const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main.js',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
};
