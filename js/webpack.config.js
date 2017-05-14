module.exports = {
    entry: './src/description-roller.js',
	output: {
		path: './bin',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets:['react']
			}
		}]
	}
}
