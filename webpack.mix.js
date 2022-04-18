const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.scripts([
    'resources/admin/js/jquery.min.js',
    'resources/admin/js/bootstrap.bundle.js',
    'resources/admin/js/adminlte.min.js',
    'resources/admin/select2/js/select2.full.js',
    'resources/admin/js/demo.js'],
    'public/admin/js/admin.js');

mix.styles([
    'resources/admin/css/adminlte.min.css',
    'resources/admin/select2/css/select2.css',
    'resources/admin/select2-bootstrap4-theme/select2-bootstrap4.css',
    'resources/admin/css/all.min.css'],
    'public/admin/css/admin.css');

mix.copy('resources/admin/js/adminlte.min.js.map','public/admin/js/adminlte.min.js.map');
mix.copy('resources/admin/js/bootstrap.bundle.js.map','public/admin/js/bootstrap.bundle.js.map');
mix.copy('resources/admin/js/jquery.min.map','public/admin/js/jquery.min.map');
mix.copy('resources/admin/css/adminlte.min.css.map','public/admin/css/adminlte.min.css.map');