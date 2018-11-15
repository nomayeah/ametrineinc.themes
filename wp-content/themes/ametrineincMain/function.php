function add_custom_posts_columns_name($columns) {
    $columns['feeling'] = '今日の気分';
    return $columns;
}
function add_custom_posts_columns($column, $post_id) {
    if($column == 'feeling') {
        echo get_post_meta($post_id, 'feeling', true);
    }
}
add_filter('manage_posts_columns', 'add_custom_posts_columns_name');
add_action('manage_posts_custom_column', 'add_custom_posts_columns', 10, 2);