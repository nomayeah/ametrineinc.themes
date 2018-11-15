<?php
add_filter('show_admin_bar', '__return_false');

// admin_menu にフック
add_action('admin_menu', 'register_custom_menu_page');
function register_custom_menu_page() {
  // add_menu_page でカスタムメニューを追加
  add_menu_page('サイト設定', 'サイト設定', 0, 'site_settings', 'create_custom_menu_page', '', 3);
}
function create_custom_menu_page() {
  // カスタムメニューページを読み込む
  require TEMPLATEPATH.'/admin/site_settings.php';
}