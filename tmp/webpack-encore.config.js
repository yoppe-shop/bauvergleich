var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/js/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/js')
    
    .addEntry('app', './assets/js/app.js')

    .enableVueLoader()
    .enableSassLoader()

    .enableSourceMaps(!Encore.isProduction())

    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

        // https://github.com/sass/node-sass#options
        // options.includePaths = [...]
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    // .addEntry('js/app', './assets/js/app.js')
    // .addStyleEntry('css/app', './assets/css/app.scss')

    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
