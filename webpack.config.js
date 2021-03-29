const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/scripts/main.js',
    output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};