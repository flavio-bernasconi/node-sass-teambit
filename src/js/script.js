$ = require('jquery');

$(window).scroll(function() {
    var scroll = $(window).scrollTop();


    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("fix");
        $("nav").css("border-bottom" , "none")
    }
    else {
      $("header").removeClass("fix");
      $("nav").css("border-bottom" , "solid 1px rgb(144, 144, 144)")
    }
});






$(document).ready(
  function () {

    $(".nav_btn .rel").hover(
      function(){
        $(".sub-nav").addClass("active")
      });

      $(".nav_btn .rel").mouseleave(
        function(){
          $(".sub-nav").removeClass("active")
        })





  }
)
