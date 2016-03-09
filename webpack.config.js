const NpmInstallPlugin = require('npm-install-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');


module.exports = {
    plugins: [
      new NpmInstallPlugin({
        save: true,
        saveDev: true
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
