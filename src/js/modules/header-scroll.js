$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $('.header').addClass('scroll');
  }
  else {
    $('.header').removeClass('scroll');
  }
});
