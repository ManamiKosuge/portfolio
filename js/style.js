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
        //画面サイズが1065px未満のときの処理
        $("div.sectionContainer").removeClass("equal-height");
        $("div.sectionContainer").css('height','0');
        $("header").removeClass("equal-height");
        $("header").css('height','150px');
      }
    });
