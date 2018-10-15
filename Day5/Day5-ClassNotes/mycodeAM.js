// var form = document.myForm;
// console.log(document.myForm.married);

console.log(document.myForm.firstName.value);

console.log(document.myForm.married.type);

var focus1 = document.myForm.email.focus();
// ** or you can write in another format:
var focus1 = document.myForm['email'].focus();
console.log(focus1);

// var blur = document.myForm.submitBtn.blur();
// console.log(blur);

// ** checkbox part
var checkboxlist = document.myForm.feature;
for(var i=0; i<checkboxlist.length;i++){
    if(checkboxlist[i].checked){
        console.log(checkboxlist[i].value);
    }
}
// ** button part - built-in form validation won't work with addevent function.
// var submitButton = document.myForm.submit;
// submitButton.addEventListener('click',function(event){
//     myForm.checkValidity();
//     myForm.reportValidity();
//     event.preventDefault();
//     var greeting = document.myForm['lastName'].value;
//     console.log('Hello',greeting,'welcome to JS Day 5!');
//     document.write('Hello '+greeting+' welcome to JS Day5!')
// })
