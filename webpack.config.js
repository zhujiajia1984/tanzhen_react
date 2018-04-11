const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
                        // options: {
                        //     modifyVars: {
                        //         '@primary-color': '#1DA57A',
                        //     }
                        // }
                    }
                ]
            })
        }, ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'tanzhen',
            template: './src/html/index.html',
        })
    ]
}