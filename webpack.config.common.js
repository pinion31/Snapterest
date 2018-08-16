var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: [/node_modules/, require.resolve('./index.html')],
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]'
                    },
                },
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            {
                test: /\.svg$/,
                loader: 'file-loader' // 👈 Add loader
            }
        ],
        exprContextCritical: false

    }
};