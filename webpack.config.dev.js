import webpack from 'webpack';
import path from 'path';

export default {
    entry: [
        'eventsource-polyfill', //IE Hot Reloading
        'webpack-hot-middleware/client?reload=true', // Page reloads if hot reloading module fails
        path.resolve(__dirname, 'src/index') // Entry Point is ./src/index.js
    ],
    target: 'web',
    output: {
        path: __dirname + 'dist', // Note: Physical files only output during prod build.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable hot reloading of React modules
        new webpack.NoEmitOnErrorsPlugin() // Hot reloading doesn't reload packages if there's an error
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
            {test: /(\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
