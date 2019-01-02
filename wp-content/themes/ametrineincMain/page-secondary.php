<?php
/**
 * Template Name: ２階層目ベース
 */
get_header(); ?>

<div class="js-pageOpen">
  <img src="<?php bloginfo('template_directory'); ?>/images/second/loading.gif">
</div>

<div class="top-siteName">
  <strong>AMETRINE</strong>
</div>

<section class="sec-body">
<?php 
  if (have_posts()):
    while (have_posts()) :
      the_post();
      the_content();
    endwhile;
  endif;
?>
</section>

<?php
  $page_id = 48;
  $content = get_page($page_id);
  echo do_shortcode(
    $post->post_content
); ?>


<?php get_footer(); ?>