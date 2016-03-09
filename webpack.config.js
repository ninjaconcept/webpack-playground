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
    entry: "./entry.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
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
