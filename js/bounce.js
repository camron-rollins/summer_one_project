$(document).ready(function(){
  $("li a").css("color","white");
  $(".col-sm-8 ul li a i").css("font-size", "3rem");
    $(".col-sm-8 ul li a i").css("padding", "0 3rem");
  $(".card").hover(function(){
    $(this).toggleClass("animated bounce");
    $(this).css("cursor","pointer")
  });
});
