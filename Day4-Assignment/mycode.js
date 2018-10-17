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
    if (i==quotes.length) i=0;},5000);


document.getElementById('quotegoeshere').style.color='white';
document.getElementById('quotegoeshere').style.fontSize='35px';
document.getElementById('quotegoeshere').style.textAlign='center';
document.getElementById('quotegoeshere').style.fontFamily='h1-font';

// var pBtn = document.getElementById('pbtn');
// pBtn.addEventListener("click", function(event){
//     event.preventDefault();
//     alert('previous quote!');
// )}
