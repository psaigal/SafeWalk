
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

var inputAddress = function(){

  $("#input-address").on('click', function(e){
    e.preventDefault();

    var address; // get value from textbox on submit

    getCoords(address);
  });
};



var getCoords = function(address){

  var user_lat;
  var user_lng;

  function gmap_success(data){
    gmap_data = data;
    user_lat = gmap_data.results[0].geometry.location.lat;
    user_lng = gmap_data.results[0].geometry.location.lng;
    form_lat.value = user_lat;
    form_lng.value = user_lng;
  }

  var gmap_data;

  var address = encodeURIComponent(address);

  var gmak = "AIzaSyBdHyoQX5-zgXNTNdlImtj62mmB9CzAwwY";

  var gmurl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + gmak;


  $.ajax({
    dataType: "json",
    url: gmurl,
    success: gmap_success,
    error: function(){
      console.warn("ERROR: " + error_msg);
    }
  });
};

var alreadyHome = function(){

  $("#already_home").on('click', function(){
    var position_id, target, options;

    function success(pos) {
      var crd = pos.coords;

      form_lat.value=crd.latitude;
      form_lng.value=crd.longitude;
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    options = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0
    };
  });
};


$( document ).ready(function() {
  textShift();
  tabShift();
  signUpPopUp();
  inputAddress();
  alreadyHome();
});
