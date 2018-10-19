// var img_1 = document.createElement('img1');
// img_1.setAttribute('src',"./../images/travel-3.jpg")
// img_1.setAttribute('width','200');
// img_1.setAttribute('height','150');
// document.getElementById('vp1').appendChild(img_1);

// var vp_1 = document.getElementById('vp1');
//     vp_1.addEvenetListener('click',function(event){
//         event.preventDefault();
//         vp_1=event.currentTarget;
//         vp_1
//     })

// function showimg1(){
//     var img_1 = './../images/travel-1.jpg'
//     var imgfirst = document.getElementById('img1')
//     // imgfirst.setAttribute('url','./../images/travel-5.jpg')
//     imgfirst.src = img_1.replace('40*40','100*100');
//     img1.style.display = 'block';
// }
var contactbody = document.getELementbyId('vp1');
var newImg = document.createElement('img1');
newImg.src = './../images/travel-1.jpg';
newImg.style.border = '1px solid black';
contactbody.appendChild(newImg);
