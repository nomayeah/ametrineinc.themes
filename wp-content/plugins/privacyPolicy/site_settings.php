<?php
/*
Plugin Name: 個人情報保護方針変更
Plugin URI: http://ametrine-inc.com/plugin
Description: 個人情報保護方針変更用プラグイン
Author: Noma
Version: 1.1
Author URI: http://ametrine-inc.com
*/

class showPrivacyPoricy {
  function __construct() {
    add_action('admin_menu', array($this, 'add_pages'));
  }

}
$showtext = new showPrivacyPoricy;