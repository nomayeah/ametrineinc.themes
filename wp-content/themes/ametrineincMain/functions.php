<?php
add_filter('show_admin_bar', '__return_false');


function footerScripts() {
  wp_enqueue_script( 
    'jquery3.0', 
    get_template_directory_uri() . '/js/jquery3.0.0.js',
    array(),
    false,
    true
  );
  wp_enqueue_script( 
    'bundle', 
    get_template_directory_uri() . '/js/bundle.js',
    array( 'jquery3.0' ),
    false,
    true
  );
}
add_action( 'wp_enqueue_scripts', 'footerScripts' );