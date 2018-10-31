// Aufruf:
// npm run build:prod — –env.appname „meineAnwendung“
// hier können wir jetzt beliebig viele Parameter übergeben z.B.
// npm run build:prod — –env.appname „meineAnwendung“ –env.test “../testFolder”

var Encore = require('@symfony/webpack-encore');
const webpack = require('webpack');
Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    //.configureFilenames({
    //    css: 'css/[name]-[contenthash].css',
    //    js: 'js/[name]-[chunkhash].js'
    //})
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/css/app.scss')

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    // .enableVueLoader()
    .configureBabel(function(babelConfig) {
        // add additional presets
        babelConfig.presets.push('es2017');

        // no plugins are added by default, but you can add some
        // babelConfig.plugins.push('styled-jsx/babel');
    })
    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
;

// if (Encore.isProduction()) {
//    Encore.addPlugin(new webpack.optimize.UglifyJsPlugin({
//        compress: {warnings: false}
//    }))
//}

module.exports = Encore.getWebpackConfig();
