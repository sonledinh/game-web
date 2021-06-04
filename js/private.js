
var numberSpinner = (function() {
  $('.number-spinner>.ns-btn>a').click(function() {
    var btn = $(this),
      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
      newVal = 0;

    if (btn.attr('data-dir') === 'up') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
    console.log(newVal);
  });
  $('.number-spinner>input').keypress(function(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });
})();

    
$('.clc-tab').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.clc-tab').removeClass('active');
    $('.content-tab').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
})


$('.slide-banner').slick({
    autoplay: false,
    autoplaySpeed: 4000,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    prevArrow: '',
    nextArrow: '',
}); 




new WOW().init(); 


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 