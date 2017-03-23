const path = require('path');
const webpack = require('webpack');

module.exports = function () {
    process.traceDeprecation = true;
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
                use: {
                    loader: 'babel-loader',
                    options: { presets:[ 'es2015', 'react', 'stage-2'] }
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
