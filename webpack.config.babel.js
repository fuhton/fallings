import path from 'path';
import webpack from 'webpack';
import pkg from './package.json';
const includePaths = [
	path.join(__dirname, 'src'),
];

const banner = `
${pkg.title} - v${pkg.version}
${pkg.description}
${pkg.homepage}

Made by ${pkg.author}
Under ${pkg.license} License`

module.exports = {
	cache: true,
	devtool: "source-map",
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				include: includePaths,
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				include: includePaths,
				loader: 'babel',
				query: {
					cacheDirectory: true,
				}
			}
		]
	},
	entry: {
		'fallings': './src/jquery.fallings.js',
		'fallings.min': './src/jquery.fallings.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'jquery_dist.[name].js',
		chunkFilename: 'jquery_dist.[id].js'
	},
	eslint: {
		configFile: './.eslintrc'
	},
	plugins: [
		new webpack.BannerPlugin(banner),
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true
		})
	]
};
