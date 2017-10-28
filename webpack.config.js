var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './_src/Main.js'),
	output: {
		path: path.resolve(__dirname, './_dist'),
		filename: 'tupro2.bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, '_dist'),
		port: 9000,
		inline: false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['latest', 'stage-0']
				}
			}
		]
	}
}