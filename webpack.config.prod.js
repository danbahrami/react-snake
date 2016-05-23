var path = require("path")
var webpack = require("webpack")

module.exports = {
    devtool : "eval",
    entry   : "./src/js/index",
    output  : {
        path       : path.join(__dirname, "dist"),
        filename   : "bundle.js",
        publicPath : "/static/"
    },
    module  : {
        loaders : [{
            test    : /\.jsx?$/,
            loaders : ["babel"],
            include : path.join(__dirname, "src")
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings : false
            },
            comments: false,
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        })
    ]
}