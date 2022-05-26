const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const shouldAnalyze = process.argv.includes("--analyze")
//npm run build -- --analyze

const nodeEnv = process.env.NODE_ENV || 'development'

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = []
if(shouldAnalyze){
    plugins.push(new BundleAnalyzerPlugin())
}

const config = {
    mode: nodeEnv,
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    /* publicPath: '/dist', */
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/',
    },
    devServer: {
    static: '.',
    },
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
            },
            {
                test: /\.png |.svg|.png$/i,
                type: 'asset/images'
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: "body",
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new CopyPlugin({
            patterns: [
            {
            from: path.resolve(__dirname, "src", "assets/images/"),
            to: "assets/image/"
            }
            ]
        }),
    ]
    /* optimization:{
        splitChunks:{
            chunks: "all",
        }
    } */
}

module.exports = config