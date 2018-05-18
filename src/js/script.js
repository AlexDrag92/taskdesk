


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


//DatePicker langs
var lang = "ru";

( function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define( [ "../widgets/datepicker" ], factory );
  } else {
    factory( jQuery.datepicker );
  }
}( function( datepicker ) {

  datepicker.regional.ro = {
    closeText: "Închide",
    prevText: "&#xAB; Luna precedentă",
    nextText: "Luna următoare &#xBB;",
    currentText: "Azi",
    monthNames: [ "Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie",
    "Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie" ],
    monthNamesShort: [ "Ian", "Feb", "Mar", "Apr", "Mai", "Iun",
    "Iul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    dayNames: [ "Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă" ],
    dayNamesShort: [ "Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm" ],
    dayNamesMin: [ "Du","Lu","Ma","Mi","Jo","Vi","Sâ" ],
    weekHeader: "Săpt",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };

  datepicker.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
    "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };

  if( lang === "ru"){
    datepicker.setDefaults( datepicker.regional.ru);
  }else if( lang === "ro"){
    datepicker.setDefaults( datepicker.regional.ro);
  }

} ) );


//datePickers
$('.bud__start-area-date').datepicker({
  constrainInput: false,
  dateFormat: 'dd.mm.y'
})

$('.bud__finish-area-date').datepicker({
  constrainInput: false,
  dateFormat: 'dd.mm.y'
})

//Toggle inputs
$('.bid__period-select').on('click', function(){
  if($(this).val() == 'period'){
    console.log('p');
    $('.bud__start-area-date, .bud__start-area-time, .bud__finish-area-date, .bud__finish-area-time').each(function(){
      $(this).removeAttr('disabled');
    });
  }else if($(this).val() == 'start'){
    console.log('s');
    $('.bud__start-area-date, .bud__start-area-time').each(function(){
      $(this).removeAttr('disabled');
    });
    $('.bud__finish-area-date, .bud__finish-area-time').each(function(){
      $(this).attr('disabled', true);
    });
  }else if($(this).val() == 'finish'){
    console.log('f');
   $('.bud__start-area-date, .bud__start-area-time').each(function(){
    $(this).attr('disabled', true);
  });
   $('.bud__finish-area-date, .bud__finish-area-time').each(function(){
    $(this).removeAttr('disabled');
  });
 }
});