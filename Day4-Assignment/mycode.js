console.log('Hello Quotes!')

//  var Q1=prompt("What's your favourite quote?");
//   console.log("Thanks for your contribution, I'll add your favorite quote into our machine!");
//   document.write("Thanks for your contribution, I'll add your favorite quote into our machine!");

var quotes = ["Don't cry because it's over, smile because it happened.― Dr. Seuss", "Be who you are and say what you feel,because those who mind don't matter, and those who matter don't mind. - Bernard M. Baruch", "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth. ― William W. Purkey", "A friend is someone who knows all about you and still loves you. ― Elbert Hubbard", "Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi"];
// for(var i=0;i<=quotes.length;i++){
//     console.log(quotes[i]);
// }
var i=0;
setInterval(function(){
    document.getElementById('quotegoeshere').innerHTML=quotes[i++];
    if (i==quotes.length) i=0;},3000);
document.getElementById('quotegoeshere').style.color='blue';
document.getElementById('quotegoeshere').style.fontSize='35px';
document.getElementById('quotegoeshere').style.textAlign='center';
document.getElementById('quotegoeshere').style.fontFamily='h1-font';
// function updateQuotes(){
//     if (var i=0; i<=quotes.length; i++) {
//     document.write(quotes[i]);
//     }
// }
// updateQuotes();
// setInterval(updateQuotes,3000)
// document.getElementById('wrapper').style.backgroundColor='pink';
// document.getElementById('wrapper').style.height='300px';
// document.getElementById('wrapper').style.marginTop='0px';

// document.getElementsByTagName(p).innerHtml=quotes[0];
// for (i=0; i<quotes.length; i++){
//     document.getElementsByTagName(p).innerHTML='quotes[i]';
    
//     }
// }
// //     document.getElementById('quote1').innerHTML=x;
//     console.log(quotes(i));
// }

// var btn2=document.getElementById('myBtn2');
// btn2.addEventListener('click',function nextQuote{}
//     btn2=event.currentTarget;
//     btn2.style.backgrounColor='pink';
// }
// var button1=document.getElementById('myBtn1');
// button1.addEventListener("click",function(event){

// for (var i=0; i<= quotes.length; i++){
//     // document.write(quotes[i]);
//     // console.log(quotes[i]);
// }

// function changeQuote(){
//     document.getElementById()
// }
// var button= getElementById('myBtn');

// function  {
//     location.href="#top";
// }
// function locationReplace(){
//     location.replace("#top");
// }

// var pageBody = document.getElementById(QuoteBox);
// var newImg = document.createElenment('img');
// newImg.src = './images/writing-1.jpg';
// newImg.style.border = '1px solid black';
// pageBody.appendChild(newImg);