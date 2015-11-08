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

function success(pos) {
  var crd = pos.coords;

  console.log("Latitude = " + crd.latitude);
  console.log("Longitude = " + crd.longitude);

  // $("span#cur_lat").text(crd.latitude);
  // $("span#cur_long").text(crd.longitude);

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    arrived();
    navigator.geolocation.clearWatch(position_id);
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

position_id = navigator.geolocation.watchPosition(success, error, options);