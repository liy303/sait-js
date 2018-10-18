// // these two var below are NOT global variable, can not be overwritten, and only works inside the function
// // invoke the function
// function greetPerson(){
//     var name = 'lin';
//     if(name){
//         // do some code
//     }
// }
// greetPerson();

// // immediately invoked function
// (function(){
//     console.log('hello');
//     var name='lin';
//     if(name){
//         // do some code
//     }
// })();

// // unlike var, let has scope for example as below:
// // using var
// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);
// // using let
// for (let i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);

// // Activity 'let'
// var condition = true;
// if(condition){
//     let a='zeta';
//     console.log(a);
// }
// // the result below will be undfined
// // console.log(a);

// // Activity 'const'
// const arr=[1,2,3];
// arr.push(4);
// console.log(arr);

// const obj={id:0,name:'Alpha'};
// obj.id=2;
// console.log(obj);

// // Activity 'const' and 'let'
// const funcs = [];
// for (let i = 0; i < 3; i++) {  
//     funcs.push(function() {
//         console.log(i);
//       });
// }
// for (let j = 0; j < funcs.length; j++) { 
//     funcs[j]();
// }

// // Activity 'Refactor Code'
// const sum = (num1, num2)=>num1+num2
// console.log(sum(3,4));

// const fibonacci = n =>{
//     if (n<3) {
//         return 1;
//     } else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }
// console.log(fibonacci(9));

// // Activity 'Default Parameters
// function multiply(a=1, b){
//     return a*b;
// }
// console.log(multiply(4));

// // For of Loop
// let zoo = ['panda,girraffe,elephant,lion,tiger,monkey'];
// for (let value of zoo){
//     console.log(value);
// }

// // Spread/Rest Operator
// // let createArray = (...array)=>{
// //     console.log(array);
// // }
// // createArray(10,20,30,40,50);
// // let createListFromArray = (...list) =>{
// //     console.log(list);
// // }
// // createListFromArray([10,20,30,40,50]);

// // let zoo = ["panda,tiger,lion,elephant"]
// // Activity 'Rest'
// function product (x,y,z){
//     var numbers = [x,y,z];
//     return numbers.reduce ((currentProduct, number) => currentProduct*number,1);
// }
// console.log(product(3,4,5));

// // Activity 'Template Literals'
// const user = {
//     name:'lin yuan',
//     age:'28',
//     status:'Rouge VIP'
// };

// let notice = 'Hello ${user.name} we would like to offer you the ${user.status} on your ${user.age} birthday! Happy Birthday!';
// let Notice = 'Hello '+ user.name+' we would like to offer you the '+user.status+' on your '+user.age+' birthday! Happy Birthday!';
// console.log(notice);
// console.log(Notice);

// // if else 
// if(zone=='east'){
//     shipping_charge=15.00;
// } else{
//     shipping_charge=10.00;
// }
// // Ternary operator
// shipping_charge = (zone=='east')?15.00:10.00;

// Distructuring an Array
// const points = [20,30,40];
// // const[x,y,z]=points;
// // console.log(x,y,z);
// const[x, ,z]=points;
// console.log(x, z);
// // Activity 'Destruckture an Object'
// const myEmployee ={
//     active:true,
//     department:'Engineering'
// };
// function isActiveEngineer (employee) {
//     const{active,department}=employee;
//     return department ==='Engineering' && active;
// }
// Activity 'forEach'
// const trips = [
//     {mph:10, hours:3},
//     {mph:30, hours:2},
//     {mph:25, hours:4}
// ];
// trips.forEach((totaldistance =>{
//     console.log(totaldistance.mph * totaldistance.hours);
// }))
// // Activity 'Every' and 'Some'
// const availableLaptops = [
//     {name:'MacBook', RAM: 8},
//     {name:'Asus', RAM: 32},
//     {name:'Lenovo', RAM:16},
//     {name:'HP', RAM:4}
// ];
// const allhave = availableLaptops.every(laptop => laptop.RAM>=16);
// console.log(allhave);
// const somehave = availableLaptops.some(laptop => laptop.RAM>=16);
// console.log(somehave);
// // Activity 'Filter'
// const groceries = [
//     {name:'bananas', aisle:'produce',price:2},
//     {name:'flour', aisle:'baking', price:5},
//     {name:'avocados',aisle:'produce',price:4},
//     {name:'lettuce',aisle:'produce',price:5},
//     {name:'olive oil',aisle:'baking',price:10},
//     {name:'shampoo',aisle:'beauty',price:12}
// ];
// const produceLessThan5 = groceries.filter(grocery => grocery.aisle='produce' && grocery.price<5);
// console.log(produceLessThan5);
// Activity 'Map'
const trips = [
    {miles:5, hours:1},
    {miles:6, hours:0.5},
    {miles:4, hours:2},
];
const speeds = trips.map(nums => nums.miles/nums.hours);
console.log(speeds);
// Activity 'Find'
const posts = [ 
     { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },  
     { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },  
     { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sitamet...'}
];
const currentID = 29;
const currentPosts = posts.find(post =>currentID === post.id);
console.log(currentPosts);
console.log(currentPosts.title);
console.log(currentPosts.body);
// Activity 'Reduce'
const transactions =[5,10,15];
const sum = transactions.reduce(function (currentSum, number){
    return currentSum + number;
},0);
console.log(sum);