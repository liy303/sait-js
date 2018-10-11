var header = document.getElementById('header');
header.style.backgroundColor='lightblue';
header.style.textAlign='center';
header.innerHTML += 'Above is the awesome heading!';
console.log(header);

// ??? var listItems = document.getElementsByTagName('li');
// for(var i=0;i<listItems.length;i++){
//     var listItem=listItem[i];
// }
// console.log(listItems);

var listItems = document.getElementsByClassName('nav-item');
console.log(listItems);

var listItems = document.querySelector('li');
console.log(listItems);

var listItems = document.querySelectorAll('li');
console.log(listItems);


var firstItem = document.querySelector('li');
console.log(firstItem);

// **Check wether there is a classlist exist in the html, then you can add or remove classes
console.log(listItems[0].classList);

// **Adding classes
// if (el.classList)          
//     el.classList.add(className);
// else
//     el.className += ' '+className;

// **Removing classes


var specificParagraph = document.getElementsByTagName('p')[1];
console.log(specificParagraph);

// var pageBody=document.getElementsByTagName('body')[2];
// var newImg=document.createElement('img');
// newImg.src='.imgaes/may-1.jpg';
// newImg.appendChild(newImg);

// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('Maymay is at daycare today, and he made lots of furiends, and have tons of fun!')
// newParagraph.appendChild(paragraphText);
// pageBody.appendChild(newParagraph);

var imgMay = document.getElementById('MayMay');
// imgMay.innerHTML+= "src='.images/may-1.jpg'";

// ** return the src attribute on img
// var get = imgMay.getAttribute('src');
// console.log(get);

// ** set our src to a new src
// var set=imgMay.setAttribute('src','./images/may-5.JPG');


// ** Using JavaScript to change styles
var pStyle=document.getElementsByTagName('p')[1];
pStyle.style.color='red';
pStyle.style.backgroundColor='pink';
var p1Style=document.getElementsByTagName('p')[0];
p1Style.style.color='green';
p1Style.style.backgroundColor='yellow';

var footerStyle=document.getElementById('footer');
footerStyle.innerHTML+='Above is my awesome footer!';
footerStyle.style.backgroundColor='lightblue';
footerStyle.style.paddingTop='20px';
footerStyle.style.textAlign='center';