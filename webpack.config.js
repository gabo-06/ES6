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
    // Llamado de cada script para convertilos en bundles únicos
    entry: {
        index: './src/index.js'// ,
        // about: './src/about.js',
        // contact: './src/contact.js'
    },    
    output: {
        // Output dinámico de cada bundle
        path: path.join(__dirname, '/'),
        // filename: "public/[name]/[name].bundle.js"
        filename: "[name].bundle.js"        
    },
    plugins: [
        // Inyección del template de index
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: './index.bundle.js'
        })        
        // Inyección del template de about
        // new HtmlWebpackPlugin({
        //     template: './about.html',
        //     inject: true,
        //     chunks: ['about'],
        //     filename: 'public/about/about.bundle.js'
        // }),                
        // // Inyección del template de contact
        // new HtmlWebpackPlugin({
        //     template: './contact.html',
        //     inject: true,
        //     chunks: ['contact'],
        //     filename: 'public/contact/contact.bundle.js'
        // })
    ],
    // module: {
    //     rules: [
    //         { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    //     ]
    // },
    mode: 'development'
};
