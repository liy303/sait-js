console.log('lin!')

var yourname = localStorage.getItem('yourname');
if(!yourname){
    yourname = prompt('Can you tell us your name?');
    localStorage.setItem('yourname',yourname);
}

var firstvisit = localStorage.getItem('firstVisit');
if(firstvisit){
    localStorage.setItem('firstVisit',true);
    alter='Welcome!';
} else {
    alert="Welcome back!"
}