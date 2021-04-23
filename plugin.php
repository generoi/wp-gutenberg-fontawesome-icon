<?php
/*
Plugin Name:        Gutenberg FontAwesome Icon
Plugin URI:         http://genero.fi
Description:        Provides an inline format for inserting FontAwesome icons
Version:            1.0.0
Author:             Genero
Author URI:         http://genero.fi/
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
*/
namespace GeneroWP\FontawesomeIconFormat;

if (!defined('ABSPATH')) {
    exit;
}

if (file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    require_once $composer;
}

class Plugin
{
    protected static $instance;

    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    public function __construct()
    {
        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init()
    {
        add_action('enqueue_block_editor_assets', [$this, 'blockEditorAssets']);
    }

    public function assetUrl(string $asset): string
    {
        $manifest = json_decode(file_get_contents(__DIR__ . '/mix-manifest.json'), true);
        return plugins_url($manifest[$asset], __FILE__);
    }

    public function blockEditorAssets()
    {
        if ($manifest = include __DIR__ . '/dist/editor.asset.php') {
            wp_enqueue_script(
                'wp-gutenberg-fontawesome-icon/editor.js',
                $this->assetUrl('/dist/editor.js'),
                $manifest['dependencies'],
                null
            );
        }
    }
}

Plugin::getInstance();
