const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, 'dist')
  }
};
