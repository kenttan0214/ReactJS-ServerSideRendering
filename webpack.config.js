var path = require('path');

module.exports = function () {

    var webpackConfig = {
        context: path.resolve('app'),
        entry: {
            app: './app'
        },
        output: {
            path: path.resolve('build'),
            filename: '[hash][id].js',
            chunkFilename: '[name][chunkhash][id].js'
        },
        devtool: '#eval',
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'react', 'stage-2']
                }
            }]
        },
        plugins: [],
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', 'jsx'],
            alias: {
            }
        },
        resolveLoader: {
        }
    };
    return webpackConfig;
};
