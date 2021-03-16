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

use Puc_v4_Factory;
use GeneroWP\Common\Singleton;
use GeneroWP\Common\Assets;

if (!defined('ABSPATH')) {
    exit;
}

if (file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    require_once $composer;
}

class Plugin
{
    use Singleton;
    use Assets;

    public $version = '1.0.0';
    public $plugin_name = 'wp-gutenberg-fontawesome-icon';
    public $plugin_path;
    public $plugin_url;
    public $github_url = 'https://github.com/generoi/wp-gutenberg-fontawesome-icon';

    public function __construct()
    {
        $this->plugin_path = plugin_dir_path(__FILE__);
        $this->plugin_url = plugin_dir_url(__FILE__);

        Puc_v4_Factory::buildUpdateChecker($this->github_url, __FILE__, $this->plugin_name);

        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init()
    {
        add_action('enqueue_block_editor_assets', [$this, 'block_editor_assets']);
    }

    public function block_editor_assets()
    {
        if ($manifest = include __DIR__ . '/dist/manifest.asset.php') {
            $this->enqueueScript("{$this->plugin_name}/editor/js", 'dist/editor.js', $manifest['dependencies']);
        }
    }
}

Plugin::getInstance();
