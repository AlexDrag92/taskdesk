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


//Workflow Slider
/*
$('.workflow__phase-title').on('click', function (event) {
  event.preventDefault();
});

$('.workflow__phase').on('click', function (event) {
  var curentTitle = $(this).find('.workflow__phase-title');


  if(!curentTitle.hasClass('workflow__phase-title--red-line')){
   $('.workflow__phase-title').removeClass('workflow__phase-title--red-line');
   curentTitle.addClass('workflow__phase-title--red-line');
   $('.workflow__image').attr('src', curentTitle.attr('href'));
 }

})*/


var phases = $('.workflow__phase');
var titles = $('.workflow__phase-title');
var slideImg = $('.workflow__image');
var indxSlide = 0;
 
/*
var startSlider = setInterval(function () {
  changeSlides();
}, 2000);
*/
 
var changeSlides = function () {
 
  if(indxSlide > phases.length-2){
    indxSlide = 0;
  }else{
    indxSlide++;
  };
 
  slideImg.attr('src', $('.workflow__phase:eq('+indxSlide+')').find('.workflow__phase-title').attr('href'));
  titles.removeClass('workflow__phase-title--red-line');
  $('.workflow__phase:eq('+indxSlide+')').find('.workflow__phase-title').addClass('workflow__phase-title--red-line');
};
 
var playSlides = setInterval(changeSlides, 2000)
 
titles.on('click', function (event) {
  event.preventDefault();
});
 
phases.on('click', function (event) {
 clearInterval(playSlides);
  playSlides = setInterval(changeSlides, 2000)
 
 var curentTitle = $(this).find(titles);
 indxSlide = phases.index(this);
 
 if(!curentTitle.hasClass('workflow__phase-title--red-line')){
   titles.removeClass('workflow__phase-title--red-line');
   curentTitle.addClass('workflow__phase-title--red-line');
   slideImg.attr('src', curentTitle.attr('href'));
 };
});


//Dropdown style
$('.dropdown').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).hide();
});


//PUP UP s
$('#enter-registration-button').on('click', function(event){
  event.preventDefault()
  $('#registration').slideDown('easeInOutQuint');
  overlay.show()
})

$('.modal-popup__close-button').on('click', function(){
  $(this).parent().fadeOut();
  overlay.hide()
});


$('#modal-popup__account-link').on('click', function(event){
  event.preventDefault();
  $(this).parent().slideUp();
  $('#account-popup').slideDown();
});


var overlay = $('.overlay');
overlay.css('height' , $(document).height()+'px');

overlay.on('click', function(){
  $(this).hide();
  $('.modal-popup').each(function(){
    $(this).hide()
  })

});


//Debug dropdown user
var menuButton = $('.header__toggle-menu-button');

menuButton.on('click', function(){
  if($(this).hasClass('collapsed')){
    setTimeout(function(){
      $('.header__collapse-section').css('overflow', 'visible');
    }, 1000);
  }else{
    $('.header__collapse-section').css('overflow', 'hidden');
  }
});