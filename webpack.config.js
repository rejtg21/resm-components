var webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            }
        ]
    },
    // resolve: {
    //     alias: {
    //         'resm-components': path.resolve(__dirname, 'src/resm-components')
    //     }
    // },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/,
            // minimize: true
        })
    ]
};

const demoFiles = {
    entry: {
        'yield-button': ['./demo/yield-button/app.js']
    },
    output: {
        filename: '[name]/[name].js',
        path: __dirname + '/demo/',
        // publicPath: '/',
    },
    ...config
};

const packageFiles = {
    entry: {
        'resm-components': ['./src/resm-components.js'],
        'resm-components.min': ['./src/resm-components.js'],
    },
    // devtool: "source-map",
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/',
        // publicPath: '/',
    },
    ...config
};

module.exports =  [
    demoFiles, packageFiles
];
