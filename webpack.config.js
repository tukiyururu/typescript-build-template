var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        scripts: './scripts.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
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
