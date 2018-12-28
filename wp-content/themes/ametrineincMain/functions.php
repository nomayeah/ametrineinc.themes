<?php
add_filter('show_admin_bar', '__return_false');

// js読み込み
function footerScripts() {
  wp_enqueue_script( 
    'jquery.3.0.0', 
    get_template_directory_uri() . '/dist/jquery3.0.0.js',
    array(),
    date('YmdHis', filemtime( get_template_directory_uri() . '/dist/jquery3.0.0.js' )),
    false,
    true
  );
  wp_enqueue_script( 
    'bundle',
    get_template_directory_uri() . '/dist/bundle.js',
    array( 'jquery.3.0.0' ),
    date('YmdHis', filemtime( get_template_directory_uri() . '/dist/bundle.js' )),
    false,
    true
  );
}
add_action( 'wp_enqueue_scripts', 'footerScripts' );

// css読み込み
function styleCss() {
  wp_enqueue_style(
    'main-customStyle',
    get_template_directory_uri() . '/dist/style.css',
    array(),
    date('YmdHis', filemtime( get_template_directory_uri() . '/dist/style.css' ))
  );
}
add_action( 'wp_enqueue_scripts', 'styleCss' );


// コンタクトフォーム内内の画像を呼び出します。
function the_required_image(){
	return '<img src="http://ametrine.sakura.ne.jp/test/wp-content/uploads/2018/12/required.png" alt="必須" />';
}
wpcf7_add_shortcode("required_image","the_required_image");