$(function () {
  'use strict'

  // Banner slider js start
  $('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // Menu fixing js start
  var navOff = $('.main_menu').offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 500) {
      $('.main_menu').addClass('menu_fix');
    } else {
      $('.main_menu').removeClass('menu_fix')
    }
  });

  // About venobox js start
  new VenoBox({
    selector: '.my-video-links',
  });

  // Gallery venobox js start
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });

  // Testimonial slider js start
  $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Cliant slider js start
  $('.cliant_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right next_ar"></i>',
    prevArrow: '<i class="fas fa-chevron-left prev_ar"></i>',
    centerMode: true,
    centerPadding: 0,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true
        }
      }
    ]
  });

  // Counter js start
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });

})