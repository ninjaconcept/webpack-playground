var path = require('path');
var webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    plugins: [
      new NpmInstallPlugin({
        save: true,
        saveDev: true
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        hash: false,
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true
        }
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          // CSS
          {
            test: /\.css$/,
            loader: "style!css!postcss-loader"
          },
          // SASS
          {
            test: /\.scss$/,
            loader: 'style!css!sass!postcss-loader'
          }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }

};
