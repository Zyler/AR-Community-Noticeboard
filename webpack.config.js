var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './client/js/app.js',
  output: {
    path: path.resolve("./client/js/", 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ]
      }  
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

// rules: [
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader' },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true
//             }
//           }
//         ]
//       }
//     ]