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
    }
}