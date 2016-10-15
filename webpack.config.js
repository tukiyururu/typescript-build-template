var path = require('path');

module.exports = {
    entry: {
        scripts: './src/scripts.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: 'dist',
        port: 3000
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'babel!ts?silent=true'
        }]
    }
};
