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

<?php get_footer(); ?>