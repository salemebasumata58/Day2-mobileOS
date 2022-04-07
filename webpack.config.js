const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"),  //folder name
        filename: "bundle.js"  //filename
    },
    mode: "development",
    module: {
        rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.js$/, use: ["babel-loader"] },
    ],
},
};