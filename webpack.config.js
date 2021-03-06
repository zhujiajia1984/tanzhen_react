const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: ['whatwg-fetch', './src/index.js'],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "assets/images"), ],
        port: 18205,
        historyApiFallback: true,
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                '@primary-color': '#2fb26a',
                            }
                        }
                    }
                ]
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images/'
                }
            }]
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Wise Radar | 客流雷达',
            template: './src/html/index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
    ]
}