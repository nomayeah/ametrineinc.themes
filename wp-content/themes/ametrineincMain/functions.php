<?php
add_filter('show_admin_bar', '__return_false');

// admin_menu にフック
add_action('admin_menu', 'personal_information_menu');
function personal_information_menu() {
  // add_menu_page でカスタムメニューを追加
  add_menu_page('個人情報保護方針', '個人情報保護方針', 0, 'site_settings', 'personal_information_create', '', 3);
}
function personal_information_create() {
  // カスタムメニューページを読み込む
  require TEMPLATEPATH.'/admin/site_settings.php';
}
