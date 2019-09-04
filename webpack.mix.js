const mix = require('laravel-mix');

mix.sass('assets/styles/main.scss', 'dist/');

mix.js('assets/scripts/main.js', 'dist/');

mix.options({
    processCssUrls: false,
    postCss: [
        require('tailwindcss')
    ]
})
