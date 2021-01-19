const webpack = require('webpack');
const path = require('path');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        },
        module: {
            rules: [
                // all your loaders will be here.
                // loaders enabled you to use all kinds of
                // file types across your project.
                {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
          },
}
module.exports = config;