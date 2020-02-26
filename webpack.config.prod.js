import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    mode: 'production',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devtool: 'source-map',
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    // Webpack 4 removed the commonsChunkPlugin. Use optimization.splitChunks instead.
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery"
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets/img', to: 'assets/img' }
        ]),
        // Global loader configuration
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            noInfo: true // set to false to see a list of every file being bundled.
        }),

        // Generate an external css file with a hash in the filename
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[name].[md5:contenthash:hex:20].css',
        }),
        // new MiniCssExtractPlugin('[name].[md5:contenthash:hex:20].css'),

        // Hash the files using MD5 so that their names change when the content changes.
        new WebpackMd5Hash(),

        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            // Properties you define here are available in index.html
            // using htmlWebpackPlugin.options.varName
            // HEAP ANALYTICS
            heapToken: '3427944236',
            // HOTJAR TRACKING
            hotjarToken: '1704365',
            // GOOGLE ANALYTICS UA-ID
            // Virtually(Creative) Default: UA-66351416-1
            gaToken: 'UA-11177404-5',
            // Rollbar API Key
            rollbarKey: '34fc7ceed31a46ff8df30cd39f52d961'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            }
        ]
    }
};
