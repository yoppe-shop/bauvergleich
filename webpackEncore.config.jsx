var Encore = require('@symfony/webpack-encore');
const webpack = require('webpack');
const path = require('path');
const srcPath = './assets/lib/';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const alias = {
    'jquery': path.resolve(__dirname, srcPath +
        'jquery-3.2.1/jquery.min.js'),
    'jquery-custom': path.resolve(__dirname, srcPath +
        'jquery-ui.custom-1.12.1/jquery-ui.min.js'),
    'spin': path.resolve(__dirname, srcPath +
        'spin-2.3.2/spin.js'),
};

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
// the public path used by the web server to access the
previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    .configureBabel(function (babelConfig) {
        // add additional presets
        babelConfig.presets.push('env');
        babelConfig.presets.push('stage-0');
        babelConfig.presets.push('react');

        // no plugins are added by default, but you can add some

        babelConfig.plugins.push('babel-plugin-transform-es2015-template-literals');
    })
    // uncomment to define the assets of the project
    .addEntry('js/app/journey/mobile/start',
        './assets/jsx/journey/mobile/start.jsx')
    .addEntry('js/app/journey/mobile/questionnaire',
        './assets/jsx/journey/mobile/questionnaire.jsx')
    .addEntry('js/app/journey/mobile/contact',
        './assets/jsx/journey/mobile/contact.jsx')
    .addEntry('js/app/journey/mobile/final',
        './assets/jsx/journey/mobile/final.jsx')
    .addEntry('js/app/customer-area/mobile/second-view',
        './assets/jsx/customer-area/mobile/second-view/second-view.jsx')
    .addEntry('js/app/customer-area/mobile/third-view/profile',
        './assets/jsx/customer-area/mobile/third-view/profile.jsx')
    .addEntry('js/app/customer-area/mobile/third-view/messenger',
        './assets/jsx/customer-area/mobile/third-view/messenger.jsx')
    .addEntry('js/app/customer-area/desktop/second-view',
        './assets/jsx/customer-area/desktop/secondView.jsx')
    .addEntry('js/app/customer-area/desktop/third-view',
        './assets/jsx/customer-area/desktop/thirdView.jsx')
    .addEntry('js/app/journey/desktop/start',
        './assets/jsx/journey/desktop/start.jsx')
    .addEntry('js/app/journey/desktop/final',
        './assets/jsx/journey/desktop/final.jsx')
    .addEntry('js/app/journey/desktop/questionnaire',
        './assets/jsx/journey/desktop/questionnaire.jsx')
    .addEntry('js/app/journey/desktop/contact',
        './assets/jsx/journey/desktop/contact.jsx')
    .addEntry('js/app/landingpage/desktop/profile',
        './assets/jsx/landingpage/desktop/profile.jsx')
    .addEntry('js/app/landingpage/mobile/profile',
        './assets/jsx/landingpage/mobile/profile.jsx')
    .addEntry('js/app/landingpage/top',
        './assets/jsx/landingpage/top.jsx')
    .addEntry('js/app/landingpage/profile',
        './assets/jsx/landingpage/profile.jsx')
    .addEntry('js/app/landingpage/company',
        './assets/jsx/landingpage/company.jsx')
    .addEntry('js/app/landingpage/new-category',
        './assets/jsx/landingpage/new-category.jsx')
    .addEntry('js/app/landingpage/static',
        './assets/jsx/landingpage/static.jsx')
    .addEntry('js/app/landingpage/mobile/coverage',
        './assets/jsx/landingpage-new/mobile/coverage.jsx')
    .addEntry('js/app/landingpage/desktop/coverage',
        './assets/jsx/landingpage-new/desktop/coverage.jsx')
    .addEntry('js/app/exception',
        './assets/jsx/exception/index.jsx')
    .addStyleEntry('css/desktop/journey',
        './assets/scss/journey/desktop/check24.scss')
    .addStyleEntry('css/mobile/journey',
        './assets/scss/journey/mobile/check24.scss')
    .addStyleEntry('css/desktop/customer-area',
        './assets/scss/customerArea/desktop/check24.scss')
    .addStyleEntry('css/mobile/customer-area',
        './assets/scss/customerArea/mobile/check24.scss')
    .addStyleEntry('css/top/mobile',
        './assets/scss/landingpage/top-mobile.scss')
    .addStyleEntry('css/top/desktop',
        './assets/scss/landingpage/top-desktop.scss')
    .addStyleEntry('css/desktop/landingpage',
        './assets/scss/landingpageNew/desktop/check24.scss')
    .addStyleEntry('css/mobile/landingpage',
        './assets/scss/landingpageNew/mobile/check24.scss')
    .addExternals({
        Check24: 'Check24', // Check24 wireframe namespace
        C24M: 'C24M', // Check24 wireframe namespace
        cit: 'cit'         // Comparon IT namespace
    })
    //JQUERY
    .addRule({
        test: alias.jquery,
        use: "imports-loader?this=>window"
    })
    .addRule({
        test: alias.jquery,
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
    })
    //SPIN
    .addRule({
        test: alias.jquery,
        use: "imports-loader?root=>window"
    })
    .addAliases(alias)
    .addPlugin(new CopyWebpackPlugin(
        [
            // copies to {output}/static
            {from: './assets/images', to: 'images'}
        ]
    ))
    .addPlugin(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'js/shared', // Specify the common bundle's name.
            chunks: [
                "js/app/journey/mobile/start",
                "js/app/journey/mobile/questionnaire",
                "js/app/journey/mobile/contact",
                "js/app/journey/mobile/final",
                "js/app/journey/desktop/start",
                "js/app/journey/desktop/final",
                "js/app/journey/desktop/questionnaire",
                "js/app/journey/desktop/contact",
                "js/app/customer-area/mobile/second-view",
                "js/app/customer-area/mobile/third-view/profile",
                "js/app/customer-area/mobile/messenger",
                "js/app/customer-area/desktop/second-view",
                "js/app/customer-area/desktop/third-view",
                "js/app/landingpage/top",
                "js/app/landingpage/profile",
                "js/app/landingpage/company",
                "js/app/landingpage/new-category",
                "js/app/landingpage/static",
                "js/app/exception",
                "js/manifest"
            ]
        })
    )

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

// uncomment for legacy applications that require $/jQuery as a
global variable
    .autoProvidejQuery()
    .enableReactPreset()
;

if (Encore.isProduction()) {
    Encore.addPlugin(new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false}
    }))
}

module.exports = Encore.getWebpackConfig();


﻿