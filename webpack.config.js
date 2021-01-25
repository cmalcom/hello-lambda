const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        'src/hey/bundle': path.resolve(__dirname, './src/hey/handler.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    performance: {
        hints: 'error',
        maxAssetSize: 1048576, // Max size of deployment bundle in Lambda@Edge Viewer Request
        maxEntrypointSize: 1048576 // Max size of deployment bundle in Lambda@Edge Viewer Request
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
                new TerserPlugin({
                    parallel: true,
                    extractComments: true
                }
            )
        ]
    }
};
