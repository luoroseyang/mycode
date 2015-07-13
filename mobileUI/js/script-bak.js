$(function() {
    var $pages = $('#pages'),
      $page = $pages.find('.cui-page'),
      $back = $('.id-back'),
      cacheMapping = sessionStorage,
      aCacheHref = ["/"];
      aCacheTitle = [document.title];


    $pages.on('tap', '.line-list li', function(){
      loadPage($(this));
    })


    $pages.on('tap', '.id-back', function() {
      loadPage($(this));
      history.go(-1);
    });

    function loadPage($target, direction){
      var href = $target.data("href") || $target.href || "/";

      if(href in aCacheHref){
        var $pageTo = $pages.find('article[data-href='+href+']');
        if(direction == "back") {
          $target.parents('.cui-page').addClass('cui-page--right cui-page--out');
          $pageTo.addClass('cui-page--left');
          $pageTo.addClass('cui-page--active cui-page--in');
          return;
        }
        $target.parents('.cui-page').addClass('cui-page--left cui-page--out');
        $pageTo.addClass('cui-page--right');
        $pageTo.addClass('cui-page--active cui-page--in');
        return;
      }

      $.get(href, function(data){
        var name = data.match(/<title[^>]*>([\s\S.]*)<\/title>/i)[1];
        var pageHtml = data.match(/<article[^>]*>([\s\S.]*)<\/article>/i)[0];
        $target.parents('.cui-page').addClass('cui-page--left cui-page--out');
        var $pageHtml = $(pageHtml).appendTo($pages).addClass('cui-page--right');
        $pageHtml.addClass('cui-page--active cui-page--in');

        pageSlideOver(); 
        updateHistory(name);

        aCacheHref.push(href);
        aCacheTitle.push(name);
      })
    }
    // transition 动画结束去掉相应的class
    function pageSlideOver() {
      var $cuiPage = $('.cui-page');
      $cuiPage.live('transitionend', function() {
        if($cuiPage.hasClass('cui-page--out')){
          $cuiPage.removeClass('cui-page--out');
        }
        if($cuiPage.hasClass('cui-page--in')){
          $cuiPage.removeClass('cui-page--in cui-page--right cui-page--active');
        }
      });
    }
    function updateHistory(name) {
      history.pushState({"page": name}, "", "?page=" + name);
    }
  });
