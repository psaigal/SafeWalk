
var textShift = function() {
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {
    var $this = $(this),
        label = $this.prev('label');

      if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
          label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
          label.addClass('highlight');
        }
      }

  });
};

var tabShift = function() {
  $('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

  });
};

var signUpPopUp = function(){

  $("#tf-sign").hide();

  $("#menu-toggle").on('click', function(e){
    e.preventDefault();

    $(".form").toggle();

    $('html, body').animate({
         scrollTop: $(".form").offset().top
     }, 500);
    $("header").css("opacity", "0.3");
  });
};

$( document ).ready(function() {
  textShift();
  tabShift();
  signUpPopUp();
});
