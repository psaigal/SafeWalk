var arrived = function(){
  $.ajax({url: "/user/arrived",
      method: "post",
      error: function(jqXHR, textStatus, errorThrown){
        console.log("got back a fail");
        $("div#error").html("Return Message was not sent");
        $("div#error").css("display:block");
      }, success: function(data, textStatus, jqXHR){
        console.log("we did it!");
      }
    });
};

var position_id, target, options;
var count = 0;

function success(pos) {
  var crd = pos.coords;

  count = count + 1;

  $("span#cur_lat").text(crd.latitude);
  $("span#cur_long").text(crd.longitude);

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    //arrived();
    //navigator.geolocation.clearWatch(position_id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : parseFloat($("div#home_lat").text()),
  longitude: parseFloat($("div#home_long").text())
};

options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
};

//position_id = navigator.geolocation.getCurrentPosition(success, error, options);
//setInterval(position_id, 1000);