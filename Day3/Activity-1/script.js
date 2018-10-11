
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    console.log(latitude,longitude);
    document.write(latitude,longitude);
   }
   navigator.geolocation.getCurrentPosition(success);
// ???   if (navigator.geolocation) {
//    navigator.geolocation
//    } else {
//     console.log("Sorry your browser doesn't support!")
//    }

   

function geoError(errorObj) {
    alert("Uh oh, something went wrong");
   }
   navigator.geolocation.getCurrentPosition(success, geoError);

console.log(screen.height,screen.width,screen.colorDepth,screen.orientation);

// ??? document.bgColor='red'; ???
