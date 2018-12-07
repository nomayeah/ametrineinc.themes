<?php
add_filter('show_admin_bar', '__return_false');

// js読み込み
function footerScripts() {
  wp_enqueue_script( 
    'jquery.3.0.0', 
    get_template_directory_uri() . '/dist/jquery3.0.0.js',
    array(),
    date('YmdGis', filemtime( get_template_directory_uri() . '/dist/jquery3.0.0.js' )),
    false,
    true
  );
  wp_enqueue_script( 
    'bundle',
    get_template_directory_uri() . '/dist/bundle.js',
    array( 'jquery.3.0.0' ),
    false,
    true
  );
}
add_action( 'wp_enqueue_scripts', 'footerScripts' );

// css読み込み
function styleCss() {
  wp_enqueue_style(
    'main-customStyle',
    get_template_directory_uri() . '/dist/style.css'
  );
}
add_action( 'wp_enqueue_scripts', 'styleCss' );
