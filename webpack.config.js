const webpack = require("webpack")
const Hwp = require("html-webpack-plugin")
const path = require("path")
const Ext = require("extract-text-webpack-plugin")

module.exports = {
    entry : __dirname + "/src/main.js",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "app.js",
        publicPath : "/"
    },
    devtool : "source-map",
    devServer : {
        contentBase : path.join(__dirname,"dist"),
        port : 3000,
        inline : true,
        publicPath : "/",
        compress : true,
        historyApiFallback : true,
        disableHostCheck : true
    },
    module : {
        rules : [
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
            {test:/\.css$/,loader:Ext.extract("css-loader")},
            {test:/\.less$/,loader:Ext.extract("css-loader!less-loader")}
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            React : "react"
        }),
        new Hwp({
            template : "index.html",
            filename : "index.html",
            inject : true
        }),
        new Ext("app.css")
    ]
}