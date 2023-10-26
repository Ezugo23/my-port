$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
      } else{
        $('.navbar').removeClass("sticky");
      }
      if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
      } else{
        $('.scroll-up-btn').removeClass("show");
      }
    });
    //slide
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
    });

    //togle menu/navbar
    $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn .openbtn').toggle();
      $('.menu-btn .closebtn').toggle();
  });
});
//typing Animation
var typed = new Typed(".typing", {
  strings: ["JavaScript Dev", "React Dev", "FreeLancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var typed = new Typed(".typing-2", {
  strings: ["HTML", "CSS", "JavaScript", "React Js", "Git", "GitHub"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});