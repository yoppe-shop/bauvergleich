module.exports = function(env) {
    env = env || {};

    const path = require('path');
    const webpack = require('webpack');

    const IS_PRODUCTION = env.production !== 0;
    const SOURCE_DIR = path.resolve(__dirname, 'src/assets/webpack');

    const exports = {};
    exports.resolve = {
        alias: {
            // project specific
            commonweb: SOURCE_DIR + '/js/commonweb',

            // plugins
            history: SOURCE_DIR + '/js/vendor/historyjs-1.8.0b2/jquery.history.js',
            jquery: SOURCE_DIR + '/js/vendor/jquery-1.12.1/jquery.js',
            knockout: SOURCE_DIR + '/js/vendor/knockoutjs-3.4.0/knockout.js',
            moment: SOURCE_DIR + '/js/vendor/moment-2.12.0/moment.js',
            parsley: SOURCE_DIR + '/js/vendor/parsley-2.3.7/parsley.js',
            qtip: SOURCE_DIR + '/js/vendor/qtip-2.2.1/jquery.qtip.js'
        }
    };

    exports.entry = {
        'js/landingpage/desktop/check24': SOURCE_DIR + '/js/landingpage/desktop/check24.js',
        'js/landingpage/desktop/testsieger': SOURCE_DIR + '/js/landingpage/desktop/testsieger.js'
    };

    exports.output = {
        filename: '[name].js',
        path: path.resolve(__dirname, 'web/webpack'),
        publicPath: 'webpack'
    };

    exports.externals = {
        Check24: 'Check24', // Check24 wireframe namespace
        C24M: 'C24M', // Check24 mobile wireframe namespace
        cit: 'cit' // Comparon IT namespace
    };

    exports.module = {
        rules: [
        {
            test: /\.(jsx|es6)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            ],
            exclude: /(node_modules|bower_components)/
        },
        {
            test: exports.resolve.alias.jquery,
            use: "imports-loader?this=>window"
        },
        {
            test: exports.resolve.alias.jquery,
            use: [
                {
                    loader: 'expose-loader',
                    options: '$'
                },
                {
                loader: 'expose-loader',
                options: 'jQuery'
                }
            ]
        },
        {
            test: exports.resolve.alias.parsley,
            use: "imports-loader?this=>window"
        },
        {
            test: exports.resolve.alias.parsley,
            use: [
                {
                    loader: 'expose-loader',
                    options: 'parsley'
                }
            ]
        },
        {
            test: exports.resolve.alias.knockout,
            use: [
                {
                    loader: 'expose-loader',
                    options: 'ko'
                }
            ]
        },
        {
            test: exports.resolve.alias.moment,
            use: "imports-loader?this=>window"
        }
        ]
    };

    exports.plugins = [
        new webpack.optimize.CommonsChunkPlugin({
        name: 'js/shared'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/) // used to prevent moment.js to bundle all locales
    ];

    if (IS_PRODUCTION) {
        exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false}
    }));
    }

    return exports;
};
