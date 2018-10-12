// var date = new Date();
// function IntervalFunction(){
//     alert("3 second is up!");
// }
// var timerID = setInterval(IntervalFunction,3000);


function updateTime(){
    document.getElementById('output')
    .innerHTML=new Date();
}
setInterval(updateTime,1000);

// **Events Activity**

function doSomething(event){
    alert("Got you!");
    // document.write("Got you!");
};
var button1=document.getElementById('Btn1');
button1.addEventListener("click", function(event){
    btn1=event.currentTarget;
    btn1.style.backgroundColor='blue';
    btn1.innerHTML='Clicked!'
})

var button2=document.getElementById('Btn2');
button2.addEventListener("mouseover", function(event){
    alert("Got you before you can click!");
})

var link1=document.getElementById('mylink1');
link1.addEventListener('click', function(event){
    // event.preventDefault();
    alert("You are transferred to a different page, are you sure?!")
})

var link2=document.getElementById('mylink2');
link2.addEventListener('click',function(event){
    alert('Error!')
})

// ??? Still not working ???
//  var walkForwards = true;
//     function PuppyWalk() {
//         var puppyWalk = document.getElementById('puppy');
//             puppyWalk.style.position='absolute';
//             puppyWalk.style.left="0px";
//         var currentLeft = parseInt(puppyWalk.style.left);

//     if (walkForwards) {
//     puppyWalk.style.left = (currentLeft + 10) + 'px';
//     console.log(puppyWalk.style.left)}
//     else {
//     puppyWalk.style.left = (currentLeft - 10) + 'px';
//     }
//     }
//  setInterval(PuppyWalk, 50);

