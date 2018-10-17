// var test = document.getElementById('test');
// console.log(test);

function countColours() { 
    console.log("inside colour count"); 
    console.log($('form #number')); 
    return 0; 
}

$('#submitBtn').on('click', function(event){
    event.preventDefault();
    // var numberofcolors = $('form #number');
    let colourCount = countColours(); 
    // console.log(numberofcolors);
    console.log(colourCount); 
})
