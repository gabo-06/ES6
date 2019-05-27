const path = require('path');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        index: './src/index.js',
        about: './src/about.js',
        contact: './src/contact.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    mode: 'development'
};
