$(document).ready(function () {
  // hide load page
  setTimeout(function(){
    document.querySelector('.page .pageload').classList.add("hide")
  },2000);
    // swiper carosel
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
          },

      });
    // scroll add class menu
    $(window).scroll(function(){
        if($(this).scrollTop()>=60){
            $('.waper_menu_2').addClass('fix');
        }else{
            $('.waper_menu_2').removeClass('fix');
        }
        var sevice_position = $('.highlight .block1').offset().top - 60
        var product_position = $('.wapper-content .popular-product-background').offset().top - 100
        var about_us_position = $('.wapper-content .wapper-about-us').offset().top - 100
        var testimonial_position = $('.wapper-content .wapper-testimoniall').offset().top - 100
        if($(this).scrollTop()>= sevice_position){
          $('.scroll-top').addClass('active');
        }else{
          $('.scroll-top').removeClass('active');
        }
           // SCROLL TO NODE
           if($(this).scrollTop() >= sevice_position && $(this).scrollTop() < product_position){
            addClassCrolling(1)
          }else if($(this).scrollTop() >= product_position  && $(this).scrollTop() < about_us_position){
            addClassCrolling(2)
          }else if($(this).scrollTop() >= about_us_position && $(this).scrollTop() < testimonial_position ) {
            addClassCrolling(3)
          }else if($(this).scrollTop() > testimonial_position){
            addClassCrolling(4)
          }
        })
        // BACK TO TOP
        $('.scroll-top').on('click',function(){
          $('html, body').animate({scrollTop : 0});
       
    });
// click to croll
    var array_position = [
      '.highlight .block1',
      '.wapper-content .popular-product-background',
      '.wapper-content .wapper-about-us',
      '.wapper-content .wapper-testimoniall'
    ]
    array_position.forEach(function(value,index){
      $('.header_wapper .menu .menu_left_item:nth-child(' + (index + 1) +') a ,.header_wapper .menu2 .menu_left_item:nth-child(' + (index + 1) +') a  ').on('click', function (event) {
        event.preventDefault()
        $('html, body').animate({scrollTop :$(value).offset().top - 60},1000);
      });
    })
});

function addClassCrolling(index){
    $('.header_wapper .menu2 .menu_left_item').removeClass('active');
    $('.header_wapper .menu2 .menu_left_item:nth-child(' + index + ')').addClass('active');
}

// show menu
function hung_show_menu(obj) {
  $('.menu2.nav .open-menu-responsive').toggleClass('active');
  $('.waper_menu_2 .menu2.nav .menu_left_list').toggleClass('active');
}

// show cart
function hung_show_cart_responsive(obj) {
  $('.menu2.nav .open-cart-responsive').toggleClass('active');
  $('.menu2.nav .social_media_icon').toggleClass('active');
}