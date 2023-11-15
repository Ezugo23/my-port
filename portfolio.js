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
  
      var carousel = $('.carousel');
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
      var carouselPosition = carousel.offset().top;
    
      if (scrollPosition > carouselPosition - windowHeight + 200) {
        // Add the active class to each carousel item
        $('.carousel .card').each(function (index) {
          setTimeout(function () {
            $(this).addClass('active');
          }.bind(this), 200 * index);
        });
      } else {
        // Remove the active class when the carousel is not in the viewport
        $('.carousel .card').removeClass('active');
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
  //Project row
  $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoPlayHoverPause: true,
        responsive: {
          0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
              items:3,
              nav: false
          },
        }
  });
});
//typing Animation
var typed = new Typed(".typing", {
  strings: ["Web Developer", "FrontEnd ", "FreeLancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var typed = new Typed(".typing-2", {
  strings: ["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Django", "Tailwind Css", "Git"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
//Read More
function myFunction(){
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
  }

