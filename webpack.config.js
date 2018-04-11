const path = require('path');

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
        }, ]
    }
}