var path = require('path');

module.exports = function () {
    var webpackConfig = {
        entry: {
            app: './src/client/app.tsx'
        },
        output: {
            path: path.resolve('build'),
            filename: 'bundle.js'
        },
        devtool: '#eval',
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }, {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }]
        },
        plugins: [],
        resolve: {
            modules: ['node_modules', 'src/common/components/*/**'],
            extensions: ['.ts','.tsx','.js', '.jsx'],
            alias: {
            }
        },
        resolveLoader: {
        }
    };
    return webpackConfig;
};
