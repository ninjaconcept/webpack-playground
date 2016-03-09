const NpmInstallPlugin = require('npm-install-webpack-plugin');

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
              loader: "style!css"
            },
            // SASS
            {
              test: /\.scss$/,
              loader: 'style!css!sass'
            }
        ]
    }
};
