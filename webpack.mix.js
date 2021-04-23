const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.blocks('src/editor.js', 'dist');

mix.setPublicPath('.')
  .version();
