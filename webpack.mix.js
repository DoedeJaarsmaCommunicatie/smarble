const mix = require('laravel-mix');

mix.sass('assets/styles/main.scss', 'dist/');

mix.options({
    processCssUrls: false,
    postCss: [
        require('tailwindcss')
    ]
})
