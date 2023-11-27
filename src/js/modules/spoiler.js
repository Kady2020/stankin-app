$(document).ready(function () {
  $('.sp-open-btn').click(function (event) {
    if ($('.menu__list').hasClass('one-open')) {
      $('.sp-open-btn').not($(this)).removeClass('sp-active');
      $('.menu__sub-list').not($(this).next()).slideUp(100);
    }
    $(this).toggleClass('sp-active').next().slideToggle(300);
  });
});
