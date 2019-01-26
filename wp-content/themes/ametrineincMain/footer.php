    <footer>

      <div class="copy">AMETRINE All rights reserved.</div>
    </footer>
    <?php wp_footer(); ?>

    <script>
    $(window).load(function(){
      $(function() {
        $.scrollify({
          section : "section.test",
          sectionName : "section-name",
          interstitialSection : "",
          easing: "easeOutExpo",
          scrollSpeed: 1100,
          offset : 0,
          scrollbars: true,
          standardScrollElements: "",
          setHeights: true,
          overflowScroll: true,
          updateHash: true,
          touchScroll:true,
          before:function() {},
          after:function() {},
          afterResize:function() {},
          afterRender:function() {}
        });
              
      });
    });
    </script>
  </body>
</html>