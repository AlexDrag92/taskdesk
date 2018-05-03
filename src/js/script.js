//SHOW AND HIDE memu and lists
/*var showButton = $('.page-navigation__show-button');
var showButtonDrop = $('.menu-section__dropdown-button');

var sectionNonDrop = $('.menu-section').not('.menu-section--dropdown');
var dropList = $('.menu-section__list--dropdown');

if($(this).width() > 1199){
  dropList.hide();
}else{
  dropList.hide();
  sectionNonDrop.hide();
};

var showHideElement = function(el){
  if(el.is(':visible')){
    el.slideUp(500, 'easeInBack');
  }else{
    el.slideDown(1000, 'easeOutElastic');
  }
};

showButton.on('click', function () {
  showHideElement(sectionNonDrop);
  showHideElement(dropList);
});

showButtonDrop.on('click', function () {
  showHideElement(dropList);
});


var curPoint = $(window).width();
var prePoint;

$(window).on('resize', function () {
  prePoint = curPoint;
  curPoint =  $(window).width();

  if($(this).width() > 1199 && prePoint < curPoint){
    sectionNonDrop.show();
  }else if($(this).width() <= 1199 && prePoint > curPoint){
    if(dropList.is(':visible')){
      sectionNonDrop.show();
    }else{
      sectionNonDrop.hide();
    } 
  }
});
*/


//SCROLL
scrollElement = $('.jumbotron-page__arrow-down, .page-wrapper__scroll-button');
scrollElement.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  },
  1000,
  ($(this.hash).offset().top != 0 ? 'easeOutQuad' : 'linear'));
});


//
$('.workflow__phase-title').on('click', function (event) {
  event.preventDefault();
  

  if($(this).hasClass('workflow__phase-title--red-line') !== true){
    $('.workflow__phase-title').removeClass('workflow__phase-title--red-line');
    $(this).addClass('workflow__phase-title--red-line');
    $('.workflow__image').attr('src', $(this).attr('href'));

    console.log($('.workflow__image').attr('href'))
  }

});

$('.dropdown').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).hide();
});