// var firstName = 'Lin';
// var age = 28;

// //type coercion
// console.log(firstName+' '+age);


// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// alert(firstName+' is a '+age+' year old '+job +'.  Is he married?' + isMarried);

// //virable mutation

// age = 'twenty eight';

// var lastName = prompt('what is his last name?');
// console.log(firstName+' '+lastName); 

// //basic operators
// var now,yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 26;

// //math operators
// yearJohn = now-ageJohn;
// yearMark = now-ageMark;
// console.log(yearJohn);

// //logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'mark is older than john');
// var x;
// console.log(typeof x);

// //operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark)/2;
// console.log(average);

// //multiple assignments
// var x, y;
// x =y = (3+5)*4-6; //26
// console.log(x, y);

// //more operators
// //x = x*2;
// x *= 2;
// console.log(x);
// x += 10;
// x ++ //x+=1
// x-- //x-=1

// //coding challenge 1

// var massMark, massJohn, heightMark, heightJohn;
// massMark = 70;
// massJohn = 62.5;
// heightMark = 1.85;
// heightJohn = 1.76;

// var bmiMark = massMark%(heightMark*heightMark);
// var bmiJohn = massJohn%(heightJohn*heightJohn);

// if (bmiMark>bmiJohn){
//     console.log('Mark\' BMI is higher than John\'s.');
// } else{
//     console.log('John\' BMI is higher than Mark\'s.');
// }
// // var markLarger = bmiMark > bmiJohn;
// // console.log(markLarger);
// // console.log(typeof markLarger);

// //if/else statements
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon : )');
// }

// var isMarried = true;
// if (isMarried){
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon!');
// }

//boolean logic

// var firstName = 'John';
// var age = 40;

// if(age<13){
//     console.log(firstName+' is a boy!');
// } else if(age>=13 && age<20){
//     console.log(firstName+' is a teenager!');
// } else if(age>=20 && age<30){
//     console.log(firstName+' is a young man!')
// }
// else{
//     console.log(firstName+' is a man!');
// }

// //the ternary operator and switch statements
// var firstName = 'John';
// var age = 16;
// age >= 18? console.log(firstName+' drinks beer.')
// :console.log(firstName+' drinks juice.');

// var drink = age >= 18? 'beer' : 'juice';
// console.log(drink);
// //same as 
// // if (age>= 18){
// //     var drink = 'beer';
// // } else {
// //     var drink = 'juice';
// // }
// // console.log(drink);

// //switch statment
// var job='teacher';
// switch(job){
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName+' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName+' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName+' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName+' does something else.');
// }

// var firstName = 'John';
// var age = 40;
// switch(true){
//     case age<13:
//         console.log(firstName+' is a boy!');
//     break;
//     case age>=13 && age <20:
//         console.log(firstName+' is a teenager!');
//     break;
//     case age>=20 && age<30:
//         console.log(firstName+' is a young man!');
//     break;
//     default:
//         console.log(firstName+' is a man!');
// }
// //truthy and falsy values and equality operators

// // falsy values: undefined, null, 0, '', NaN (not a number)
// // truthy values: NOT falsy values

// var height;
// height = 23;
// if (height || height===0){
//     console.log('Variable is defined');
// } else{
//     console.log('Variable has not been defined');
// }

// //equality operators
// if (height=='23'){
//     console.log('the == operator does type coercion!');
// }

// //coding challenge 2
// var avgJohn, avgMike, avgMary; 
// avgJohn = (120+120+103)/3;
// avgMike = (116+94+123)/3;
// avgMary = (97+134+105)/3;

// // if(avgJohn>avgMike && avgJohn>avgMary){

// // } else if(avgMike>avgJohn && avgMike>avgMary){

// // } else if(avgMary>avgJohn && avgMary>avgMike){

// // } else{
    
// // }

// if(avgJohn>avgMike){
//     console.log('The winner goes to John with'+avgJohn+' points');
// } else if(avgJohn === avgMike){
//     console.log('they are equal!');
// } else{
//     console.log('The winner is Mike!');
// }

//functions
// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1992);
// var ageMary = calculateAge(1994);
// console.log(ageJohn, ageMike, ageMary);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement>0){
//     console.log(firstName+' retires in '+ retirement+' years.');
//     } else {
//         console.log(firstName+' is already retired!');
//     }
// }

// yearsUntilRetirement(1990, 'John');

// //function statements and expressions
// //function declaration
// // function whatDoYouDo(job, firstName){}

// //function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName+' teaches kids how to code';
//             //don't need break here because return has ended the function
//         case 'driver':
//             return firstName+' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName+' designs beautiful websites.';
//         default:
//             return firstName+' does something else.';
//     }
// }

// console.log(whatDoYouDo('driver', 'John'));
// console.log(whatDoYouDo('artist','Mary'));

// //array from element #0
// //initialize new array
// var names =['John','Mark','Jane'];
// var years = new Array (1990, 1969, 1948);
// console.log(names[0]); 
// console.log(names);
// console.log(names.length);

// //mutate array data
// names[1]='Ben';
// names[names.length]='Mary';
// names[5]='Mary';
// console.log(names);

// //different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];
// //add an element to the end of array
// john.push('blue');
// //add an element to the start of array
// john.unshift('Mr.');
// console.log(john);
// //delete the end element of the array
// john.pop();
// //delete the start element of the array
// john.shift();
// console.log(john);
// //return the position of the elemment in array, or can test wether the element is in array
// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer':'John IS a designer';
// console.log(isDesigner);

//coding challenge 3 - tip calculator
// function tipCalculator (bill){
//     var percentage;
//     if (bill<50){
//         percentage = 0.2;
//     } else if (bill>=50 && bill<200){
//         percentage = 0.15;
//     } else {
//         percentage = 0.1;
//     }
//     return percentage * bill;
// }
// console.log(tipCalculator(10));

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// var finalValues = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(tips);
// console.log(finalValues);

//objects and properties
//object literal with curly braces
// var john = {
//     firstName:'John',
//     lastName:'Smith',
//     birthYear:1990,
//     family:['Jane','Mark','Bob','Emily'],
//     job:'teacher',
//     isMarried:false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried']=true;
// console.log(john);

// //new object syntax
// var jane = new Object ();
// jane.firstName = 'Jane';
// jane.birthYear = '1969';
// jane['lastName']='Smith';
// console.log(jane);

//objects and methods - attach functions to objects
// var john = {
//     firstName:'John',
//     lastName:'Smith',
//     birthYear:1992,
//     family:['Jane','Mark','Bob','Emily'],
//     job:'teacher',
//     isMarried:false,
//     calcAge: function(){
//         this.age = 2018 - this.birthYear;
//     }
// };
// john.calcAge();
// console.log(john);

//coding challenge 4 -succeed!!!
// var john= {
//     fullName: 'John Smith',
//     mass:80,
//     height: 1.76,
//     calcBMI: function(){
//        this.bmi = this.mass/(this.height*this.height);
//        return this.bmi;
//     }
// }
// var Mark={
//     fullName:'Mark Twin',
//     mass: 75,
//     height:1.83,
//     calcBMI:function(){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi;
//     }
// };
// john.calcBMI();
// Mark.calcBMI();
// console.log(john,Mark);

// if (john.bmi>Mark.bmi){
//     console.log(john.fullName+' has higher BMI of '+john.bmi)
// } else if (john.bmi=== Mark.bmi){
//     console.log(john.fullName+' and'+Mark.fullName+' has the same BMI of '+john.bmi);
// } else{
//     console.log(Mark.fullName+' has higher BMI of '+ Mark.bmi)
// };

//loops and iteration
// for (var i=5; i<=10; i+=2) {
//     console.log(i);
// }
// var john = ['John', 'Smith', 1990, 'teacher', false];
// //for loop
// for (var i=0; i<john.length; i++){
//     console.log(john[i]);
// }
// //while loop
// var i=0;
// while(i<john.length){
//     console.log(john[i]);
//     i++;
// }

// //continue statements
// var john = ['John', 'Smith', 1990, 'teacher', false];
// for (var i=0; i<john.length; i++){
//     if (typeof john[i] !== 'string') {
//         continue;
//     }
//     console.log(john[i]);
// }
// //break statements
// var john = ['John', 'Smith', 1990, 'teacher', false];
// for (var i=0; i<john.length; i++){
//     if (typeof john[i] !== 'string'){
//         break;
//     }
//     console.log(john[i]);
// }
// //looping backwards
// var john = ['John', 'Smith', 1990, 'teacher', false];
// for (var i=john.length-1; i>=0; i--){
//     console.log(john[i]);
// }

//coding challenge 5
var john = {
    fullName: 'John Smith',
    bills:[124,48,268,180,42],
    calcTips: function(){
        this.tips = [];
        this.finalValues=[];

        for(var i=0; i<this.bills.length; i++){
            //determin percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if(bill<50){
                percentage = 0.2;
            } else if(bill>=50 && bill<200){
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            //add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i]=bill+bill*percentage;
        }
    }
} 
john.calcTips();
console.log(john);

var mark = {
    fullName:'Mark Miller',
    bills:[77,375,110,45],
    calcTips: function(){
        this.tips = [];
        this.finalValue = [];

        for(var i=0;i<this.bills.length;i++){
        var percentage;
        var bill= this.bills[i];
        if (bill<100){
            percentage = 0.2;
        } else if(bill>=100 && bill<300){
            percentage = 0.1;
        } else{
            percentage = 0.25;
        }
        this.tips[i] = bill*percentage;
        this.finalValue[i] = bill+bill*percentage;
        }
   
    }
}

function calcAverage(tips){
    var sum = 0;
    for (var i=0; i<tips.length; i++){
        sum = sum +tips[i];
    }
    return sum/tips.length;
}    

mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average){
    console.log(john.fullName+'\'s family pays higher tips.');
}
else if(john.average = mark.average){
    console.log(john.fullName+' pays the same as '+mark.fullName)
} else{
    console.log(mark.fullName+'\'s family pays higher tips.')
}

