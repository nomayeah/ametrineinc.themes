<?php
/**
 * Template Name: ２階層目ベース
 */
get_header(); ?>

<div class="js-pageOpen">
  <img src="<?php bloginfo('template_directory'); ?>/images/second/loading.gif">
</div>

<main>
  <?php $page_id = 74; $content = get_page($page_id); echo $content -> post_content; ?>

  <?php if (have_posts()): while (have_posts()): the_post(); ?>
    <?php the_content(); ?>
  <?php endwhile; endif; ?>
</main>

<?php $page_id = 48; $content = get_page($page_id); echo $content -> post_content; ?>

<?php while (have_posts()) : the_post(); ?>
  <?php
    // ポスト情報の取得
    $ID = $post->ID; // 投稿ID
    $title = $post->post_title; // タイトル
    $content = $post->post_content; // 投稿内容
    $slug = $post->post_name; // スラッグ
    $parent = $post->post_parent; // 親投稿の有無
    $uri = get_page_uri($ID);
  ?>
  <?php echo( $post->ID ); ?> <?php echo( $ID ); ?>
<?php endwhile; ?>bbb

<?php get_footer(); ?>