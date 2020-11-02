//高さを揃える
function equalHeight(elements) {
  const target = Array.from(document.querySelectorAll(elements));
  const heightList = [];
    target.forEach(element => {
      const height = element.clientHeight;
      heightList.push(height);
    });
  const maxHeight = Math.max.apply(null,heightList);
    target.forEach(element => {
      element.style.height = maxHeight + 'px';
    });
  };
  equalHeight('.equal-height');

  //画面幅に応じてクラスをとる。
  $(window).on('load resize', function(){
      var w = $(window).width();
      var x = 1065;
      if (w < x) {
        //画面サイズが1065px未満のときの処理(高さ合わせと表示方法の切り替え)
        $("div.sectionContainer").removeClass("equal-height");
        $("div.sectionContainer").css('height','100%');
        $("header").removeClass("equal-height");
        $("header").css('height','200px');
        $(".changeWin").removeAttr("target");
      }else{
        $("div.sectionContainer").addClass("equal-height");
        $("div.sectionContainer").css('height','0');
        $("header").addClass("equal-height");
        $("header").css('height','100%');
      };
    });

  //ページトップに戻る。
  $(function(){
    $('a[href="#pagetop"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#pagetop" || href == "" ? 'html' : href);
      var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
  });
