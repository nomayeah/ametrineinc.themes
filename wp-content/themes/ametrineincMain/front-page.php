
<?php get_header(); ?>

<header class="js-scrollLogo__parts1">
  <div class="js-sectionLogo__partsTop"></div>
  <h1><img src="/test/wp-content/uploads/2018/12/logo.png" alt="Ametrine.incのサイトロゴ"></h1>
  <div class="js-sectionLogo__partsBottom"></div>
</header>

<main class="js-scrollLogo__parts2">
  <div class="loop-css">
    <img src="/test/wp-content/uploads/2018/11/bg_img.png"><img src="/test/wp-content/uploads/2018/11/bg_img.png">
    <div class="loop-message"><span>AMETRINEは</span><span>”繋ぎ”をつくる</span></div>
  </div>

  <section class="top-sec__standard">
    <h2>セクションタイトルだよ</h2>
    <div class="top-sec__block">
      <h3>さぶなタイトルです</h3>
      <div class="top-sec__blockImg"><img src="/test/wp-content/uploads/2018/12/test_topimg1.png" alt=""></div>
      <div class="top-sec__blockCaption">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
      <div class="top-sec__blockBtn"><a href="#"><img src="/test/wp-content/uploads/2018/12/test_btn1.png" alt=""></a></div>
    </div>

    <div class="top-sec__block">
      <h3>さぶなタイトルです</h3>
      <div class="top-sec__blockImg"><img src="/test/wp-content/uploads/2018/12/test_topimg1.png" alt=""></div>
      <div class="top-sec__blockCaption">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
      <div class="top-sec__blockBtn"><a href="#"><img src="/test/wp-content/uploads/2018/12/test_btn1.png" alt=""></a></div>
    </div>
  </section>

  <section class="top-sec__standard">
    <h2>セクションタイトル２こめ</h2>
    <div class="top-sec__block">
      <h3>さぶなタイトルみ</h3>
      <div class="top-sec__blockImg"><img src="/test/wp-content/uploads/2018/12/test_topimg1.png" alt=""></div>
      <div class="top-sec__blockCaption">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
      <div class="top-sec__blockBtn"><a href="#"><img src="/test/wp-content/uploads/2018/12/test_btn1.png" alt=""></a></div>
    </div>
  </section>

  <section class="top-sec__standard">
    <ul class="top-sec__list">
      <li>
        <a href="http://">
          <div class="top-sec__listImg"><img src="/test/wp-content/uploads/2018/12/test_topimg1.png" alt=""></div>
          <div class="top-sec__listCaption">テキストテキスト</div>
        </a>
      </li>
      <li>
        <a href="http://">
          <div class="top-sec__listImg"><img src="/test/wp-content/uploads/2018/12/test_topimg1.png" alt=""></div>
          <div class="top-sec__listCaption">テキストテキスト</div>
        </a>
      </li>
    </ul>
  </section>

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
