
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dev = process.env.NODE_ENV !== 'production'

ENTRY_PATH = path.resolve(__dirname, "src/index")
DIST_PATH = path.resolve(__dirname, "dist")

module.exports = {
    entry: ENTRY_PATH,
    devtool: dev ? 'eval-cheap-module-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Compiles Sass to CSS
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
};