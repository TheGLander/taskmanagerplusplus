const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")
const ArchivePlugin = require("webpack-archive-plugin")
const { name } = require("./package.json")
let plugins = [
	new HTMLPlugin({
		template: "./src/index.html",
		filename: "index.html"
	})
]
if (process.env.NODE_ENV === "production")
	plugins.push(new ArchivePlugin({ format: "tar", output: `./dist/${name}` }))
module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: "file-loader"
			}
		]
	},
	mode: process.env.NODE_ENV,
	resolve: { extensions: [".jsx", ".js", ".json"] },
	plugins,
	watchOptions: {
		ignored: ["node_modules"]
	}
}
