var answer=math.factorial(64);
console.log(answer)

var jQuery1 = $('p').addClass('special');
console.log(jQuery1);

$('p').html("How's your jQuery exercise?" );
$('p').css({'color':'pink'})

$('h1').html("Do you like jQuery?");
$('h1').css({'font-size':"50px"})

$("#jQueryheader2").css({'font-size':"40px"})
$("#jQueryheader2").css({'color':'lightblue'})

var links = $('a');
links.each(function(){
    var link=$(this);
    link.text(link.text()+"!");
});
console.log(links);

function clickHandler(){
    console.log('clicked!');
}
$('button').on('click',clickHandler);