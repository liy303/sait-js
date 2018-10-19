console.log('work!')

// clock
function updateTime(){
    document.getElementById('output')
    .innerHTML=new Date();
}
setInterval(updateTime,1000);

// index page navigation (tried to use getELementsByTagname but didn't work, will try later.)
var link = document.getElementById('li1'); 
    li1.style.color='white';
    link.addEventListener("mouseover",function(event){
        event.preventDefault();
        link=event.currentTarget;
        link.style.color='green';
    })
    link.addEventListener("mouseout",function(event){
        link.style.color="white";
    })
var link = document.getElementById('li2'); 
    li2.style.color='white';
    link.addEventListener("mouseover",function(event){
        event.preventDefault();
        link=event.currentTarget;
        link.style.color='green';
    })
    link.addEventListener("mouseout",function(event){
        link.style.color="white";
    })
var link = document.getElementById('li3'); 
    li3.style.color='white';
    link.addEventListener("mouseover",function(event){
        event.preventDefault();
        link=event.currentTarget;
        link.style.color='green';
    })
    link.addEventListener("mouseout",function(event){
        link.style.color="white";
    })


// Style
