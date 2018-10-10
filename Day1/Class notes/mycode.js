{/* <script> */}

alert('Hello World!');
console.log('Secret message');
document.write('This is JavaScript.');

var _numStudents;
_numStudents=23;
console.log(_numStudents);

// Arithmetic Activity
var numberOfpuppies=10;
var cutenessPerpuppy=9.9;
var cutenessOfpuppies = numberOfpuppies * cutenessPerpuppy;
console.log("cuteness of Puppies: ", cutenessOfpuppies);

var numberOffemalfriends=100;
var numberOfmalefriends=-numberOffemalfriends;
console.log(numberOfmalefriends);

// Primitive Data
var greeting="hello world"
console.log("greeting:", greeting);
var notDefinedYet;
console.log(notDefinedYet);
var foo=null;
console.log(foo);

// Strings Operators
var firstname="lin";
var fullname=firstname +" yuan";
console.log("fullname:",fullname);

var fullname="lin ";
fullname += "yuan";
console.log("fullname:", fullname);

var puppyname='Maymay ';
puppyname += 'yuan';
console.log("Puppyname:", puppyname);

var name= prompt("What's your name?");
console.log("Hello " + name);

// Function Activity *anything except number should be quote with ""
function addOne(num){
    var newNumber = num+1
    console.log('You now have',+newNumber);
}
var numberofKittens = 5
var numberofPuppies =4

addOne (numberofKittens);
addOne (numberofPuppies);

// Arguments Activity
function FullName(name){
    var fullname = name + 'Yuan';
    console.log("My name is",fullname);
}
var name ='Lin';

// Return Activity
function FullName(name){
    return name+" Yuan";
}
console.log(FullName("Lin"));

var nameofMichael = FullName("Michael");
console.log(FullName("Michael"));

var nameofpet = FullName("May");
console.log(FullName("May"));

// IF Activity
var temperature = -10;
if(temperature<10){
    console.log('Putting on a jacket to keep you warm!')
}

// IF ELSE Activity
var age=6;
if(age>=16){
    console.log('Yeah! You can drive!');
} else{
    console.log('Sorry, you have',(16-age),'years until you can drive!')
}

// ELSE IF Activity
var temprature=-25;
if(temprature<=10){
    console.log('Wear a coat!');
} else if(temprature<=0){
    console.log('Wear a coat and a hat!')
} else if(temprature<=-20){
    console.log('Stay inside!')
} else{
    console.log('Wear whatever you want!')
}

var age=12;
if(age>=45){
    console.log('Drink whatever you want!')
}else if(age>=25){
    console.log('Getting 3 drinks for free!')
}else if(age>=18){
    console.log('You need an ID to get in!')
}else{
    console.log('Keep out!')
}

// Logical Operators Activity && || !a
var temperature = -10;
var hasAcoat = true;
if(temperature<10 && hasAcoat == true){
    console.log('Putting on a jacket to keep you warm!')
}

var temprature=10;
var hasAcoat = false;
var hasAhat = true;
if(temprature<=10 && hasAcoat){
    console.log('Wear a coat!');
} else if(temprature<=0 && hasAcoat && hasAhat){
    console.log('Wear a coat and a hat!')
} else if(temprature<=-20){
    console.log('Stay inside!')
} else{
    console.log('Wear whatever you want!')
}

// </script> 
