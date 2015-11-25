module.exports = {
	entry: {
    'angular2': [
      // Angular 2 Deps
      '@reactivex/rxjs',
      'zone.js',
      'reflect-metadata',
      // to ensure these modules are grouped together in one file
      'angular2/angular2',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
		'app': [
			'./src/bootstrap'
		]
	},
	output: {
		path: './dist/js',
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	}
};