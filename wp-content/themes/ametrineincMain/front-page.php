
<?php get_header(); ?>

<header class="js-scrollLogo__parts1">
  <div class="js-sectionLogo__partsTop"></div>
  <h1 class="top-logo">
    <span class="js-sectionLogo__partsLeft"></span>
    <img src="/test/wp-content/uploads/2018/12/top.png" alt="Ametrine.incのサイトロゴ">
    <span class="js-sectionLogo__partsRight"></span>
    </h1>
  <div class="js-sectionLogo__partsBottom"></div>
</header>

<main class="js-scrollLogo__parts2">
  <div class="loop-css">
    <img src="/test/wp-content/uploads/2018/11/bg_img.png"><img src="/test/wp-content/uploads/2018/11/bg_img.png">
    <div class="loop-message"><span>AMETRINEは</span><span>”繋ぎ”をつくる</span></div>
  </div>

  <h2><?php $page_id = 36; $content = get_page($page_id); echo $content->post_title; ?></h2>
    
  <?php $page_id = 36; $content = get_page($page_id); echo $content->post_content; ?>

  <section class="top-sec__standard co">
    <h2><?php $page_id = 22; $content = get_page($page_id); echo $content->post_title; ?></h2>
    <div class="top-sec__block">
      <?php $page_id = 22; $content = get_page($page_id); echo $content->post_content; ?>
    </div>
  </section>

  <section class="top-sec__standard">
    <?php
      $page_id = 14;
      $content = get_page($page_id);
      echo do_shortcode(
        $post->post_content
    ); ?>
  </section>
</main>

<?php get_footer(); ?>
