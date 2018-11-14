<?php get_header(); ?>
<body>
<?php 
  if (have_posts()):
    while (have_posts()) :
      the_post();
      the_content();
    endwhile;
  endif;
?>
</body>
<?php get_footer(); ?>