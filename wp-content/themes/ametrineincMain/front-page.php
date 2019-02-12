<?php get_header(); ?>

<header class="js-scrollLogo__parts1">
  <div class="js-sectionLogo__partsTop"></div>
  <h1 class="top-logo">
    <span class="js-sectionLogo__partsLeft"></span>
    <span class="top-logo__main"><img src="<?php bloginfo('template_directory'); ?>/images/top/topLogo.png" alt="Ametrine.incのサイトロゴ"></span>
    <span class="js-sectionLogo__partsRight"></span>
    </h1>
  <div class="js-sectionLogo__partsBottom"></div>
</header>

<main class="js-scrollLogo__parts2">
  <div class="js-scrollLogo__parts3">
    <?php $page_id = 74; $content = get_page($page_id); echo $content -> post_content; ?>

    <div class="loop-css">
      <img src="<?php bloginfo('template_directory'); ?>/images/scroll/scroll.png"><img src="<?php bloginfo('template_directory'); ?>/images/scroll/scroll.png">
      <div class="loop-message" style="transition: all 0s"><span>”繋ぐ”コンサルティング</span><strong>AMETRINE</strong></div>
    </div>

    <?php $page_id = 36; $content = get_page($page_id); echo $content->post_content; ?>

    <section class="top-sec__standard co">
      <div class="top-sec__block">
        <?php $page_id = 22; $content = get_page($page_id); echo $content->post_content; ?>
      </div>
    </section>
  </div>
</main>

<?php get_footer(); ?>
