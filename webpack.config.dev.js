import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    mode: 'development',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true // set to false to see a list of every file being bundled.
        }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            inject: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // Handle images inside CSS files
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
        ]
    }
}
