const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/index.js', 'public/js')
   .sass('resources/sass/app.sass', 'public/css')
   .sass('resources/sass/welcome.sass', 'public/css')
mix.browserSync({
   proxy: 'http://127.0.0.1:8000'
});
mix.disableNotifications();  