$(function() {


    $('.icon-back').on('click', function() {
      var arr = window.location.href.split('demo');
      window.location.href = arr[0]+"demo/index.html";
    });
});