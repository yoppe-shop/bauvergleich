module.exports = function(env) {
    env = env || {};

    const path = require('path');
    const CopyWebpackPlugin = require('copy-webpack-plugin');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const cssExtractor = new ExtractTextPlugin({
        allChunks: true,
        filename: '[name].css'
    });

    const IS_PRODUCTION = env.production !== 0;
    const SOURCE_DIR = path.resolve(__dirname, 'src/assets/webpack');

    const exports = {};

    exports.entry = {
        'css/landingpage/desktop/check24': SOURCE_DIR + '/less/landingpage/desktop/check24.less',
        'css/landingpage/desktop/testsieger': SOURCE_DIR + '/less/landingpage/desktop/testsieger.less'
    };

    exports.output = {
        filename: '[name].css',
        path: path.resolve(__dirname, 'web/webpack'),
        publicPath: 'webpack'
    };

    exports.module = {
    rules: [
    {
    test: /\.(ttf|eot|woff|woff2|svg)$/,
    exclude: [
    /\/images\// // exclude svg images
    ],
    use: [{
    loader: 'url-loader',
    options: {
    limit: 3072, // convert images < 3kb to base64 strings
    name: '/fonts/[path][name].[ext]',
    context: SOURCE_DIR + '/fonts'
    }
    }]
    },
    {
    test: /\.(svg|png|jpg|gif)$/,
    exclude: [
    /\/fonts\// // exclude svg fonts
    ],
    use: [{
    loader: 'url-loader',
    options: {
    limit: 3072, // convert images < 3kb to base64 strings
    name: '/images/[path][name].[ext]',
    context: SOURCE_DIR + '/images'
    }
    }]
    },
    {
    test: /\.less$/,
    use: cssExtractor.extract({
    use: [
    {
    loader: 'css-loader',
    options: {
    url: true,
    minimize: IS_PRODUCTION,
    sourceMap: false,
    root: SOURCE_DIR
    }
    },
    {
    loader: 'less-loader',
    options: {
    sourceMap: false,
    relativeUrls: true
    }
    }
    ]
    })
    }
    ]
    };

    exports.plugins = [
    new CopyWebpackPlugin([
    {
    from: SOURCE_DIR + '/images',
    to: exports.output.path + '/images'
    }
    ], {
    ignore: ['*/original/**']
    }),
    new CopyWebpackPlugin([
    {
    from: SOURCE_DIR + '/images',
    to: exports.output.path + '/images'
    }
    ], {
    ignore: ['*/original/**']
    }),
    cssExtractor
    ];

    return exports;
};