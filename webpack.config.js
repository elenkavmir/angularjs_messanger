
var webpack = require('webpack')

module.exports = {
    devtool: "source-map",
    entry: './src/app/app.module.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000, // configuring port for localserver
        contentBase: './src' // configuring from where content needs to be served
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // which file needs to be read
                exclude: /node_modules/, // which folder needs not to be read
                loader: ['babel-loader'] // which transplier/compiler/plugin to compile files
            }
        ]
    }
};