<?php get_header(); ?>

<header class="js-scrollLogo__parts1">
  <div class="js-sectionLogo__partsTop"></div>
  <h1 class="top-logo">
    <span class="js-sectionLogo__partsLeft"></span>
    <span class="js-sectionLogo__partsMain"><img src="<?php bloginfo('template_directory'); ?>/images/top/topLogo.png" alt="Ametrine.incのサイトロゴ"></span>
    <span class="js-sectionLogo__partsRight"></span>
    </h1>
  <div class="js-sectionLogo__partsBottom"></div>
</header>

<main class="js-scrollLogo__parts2">
  <?php $page_id = 74; $content = get_page($page_id); echo $content -> post_content; ?>

  <div class="loop-css">
    <img src="<?php bloginfo('template_directory'); ?>/images/scroll/scroll.png"><img src="<?php bloginfo('template_directory'); ?>/images/scroll/scroll.png">
    <div class="loop-message"><span>AMETRINEは</span><span>”繋ぎ”をつくる</span></div>
  </div>

  <h2 class="top-sec__title"><?php $page_id = 36; $content = get_page($page_id); echo $content->post_title; ?></h2> 
  <?php $page_id = 36; $content = get_page($page_id); echo $content->post_content; ?>

  <section class="top-sec__standard co">
    <h2><?php $page_id = 22; $content = get_page($page_id); echo $content->post_title; ?></h2>
    <div class="top-sec__block">
      <?php $page_id = 22; $content = get_page($page_id); echo $content->post_content; ?>
    </div>
  </section>

</main>

<?php get_footer(); ?>
