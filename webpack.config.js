<<<<<<< HEAD
const webpack = require("webpack");

module.exports={
    entry: "./src/index.js",
    output:{
        path: __dirname + "/dist",
        publicPath: "/",
        filename:"bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|es6|jsx)$/,
                exclude: /node_modules/, //bu dosyanın içinde böyle bir dosya bulmasına gerek yok
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
=======
const webpack = require("webpack");

module.exports={
    entry: "./src/index.js",
    output:{
        path: __dirname + "/dist",
        publicPath: "/",
        filename:"bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|es6|jsx)$/,
                exclude: /node_modules/, //bu dosyanın içinde böyle bir dosya bulmasına gerek yok
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
>>>>>>> 6b867ff6f4c6d3ed7039976dbdf1f248c1594b3f
}