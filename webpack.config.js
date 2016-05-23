var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = [{
  externals: {
  },
  context: __dirname + "/src",
  entry: "./js/index.jsx",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: [
          'react-html-attrs',
          'transform-class-properties',
          'transform-decorators-legacy'
        ],
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader'
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }],
    watch: true
  },
  output: {
    path: "./src",
    filename: "./index.min.js"
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['src']
      },
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  }
}];
