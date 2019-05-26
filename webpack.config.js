const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
const path = require('path');

module.exports = {    
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    mode: 'development'
};
*/

const path = require('path');

module.exports = {
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
    // module: {
    //     rules: [
    //         { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    //     ]
    // },
    mode: 'development'
};
