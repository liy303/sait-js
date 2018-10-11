if (Modernizr.geolocation) {
    src=('https://placekitten.com/');
    console.log('Success!');
  } else {
    var imgPuppy=document.getElementById('imgpuppy');
    // img.src='http://www.placepuppy.net';
    alert('not working!');
    console.log('Not working!');
  }

// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var altitude = position.coords.altitude;
//     var speed = position.coords.speed;
//     console.log('Success!');
//     // var imgPuppy=document.getElementById('imgpuppy');
//    }
//    navigator.geolocation.getCurrentPosition(success);
var wrapper = document.getElementById('wrapper');
  if(history.length===1){
      wrapper.style.backgroundColor='lightblue';
  } else{
      wrapper.style.backgroundColor='orange';
  }

var webpagename = document.getElementById('WebpageName');
webpagename.style.textAlign='center';




