<?php
/**
 * Template Name: ２階層目ベース
 */
get_header(); ?>
<body>
<div class="js-pageOpen"></div>
<div class="top-siteName">
  <strong>AMETRINE</strong>
</div>
<section>
  <?php the_content(); ?>
</section>
</body>
<?php
  $page_id = 48;
  $content = get_page($page_id);
  echo do_shortcode(
    $post->post_content
); ?>
<?php get_footer(); ?>