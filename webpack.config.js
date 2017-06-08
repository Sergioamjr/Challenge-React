// Webpack Config

const
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        // path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333,
        historyApiFallback: true,
    },
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},
    plugins: [
        new ExtractTextPlugin("app.css"),
    ],
    module: {
        loaders: [
            {   test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/
            },
            {   test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/
            },
            {   test: /\.css$/, 
                loader: [ 'style-loader', 'css-loader'], 
                exclude: /node_modules/
            }
        ]
    }
}