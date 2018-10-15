var submitButton = document.getElementById('submit');
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');
var errorAgeRange = document.getElementById('errorAgeRange');

submitButton.addEventListener('click',function(event){
// **The following two lines can refresh page when you hit submit. It won't show two error messages once you alreday typed into one of them.
    errorName.style.display = 'none';
    errorAge.style.display = 'none';
    errorAgeRange.style.display='none';

    var name = document.Form1.txtName.value;
    var age = parseInt(document.Form1.txtAge.value);
    if(!name){
        event.preventDefault();
        errorName.style.display = 'block';
    }
    if(!age){
        event.preventDefault();
        errorAge.style.display='block';
    } else if(age < 18){
        event.preventDefault();
        errorAgeRange.style.display='block';
    }
});