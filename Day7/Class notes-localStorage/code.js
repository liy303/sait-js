// localStorage.setItem("")
            // .getItem("")
            // .removeItem("")
            // .clear()
            // (or directly) .xxx='yy'

localStorage.setItem("username","lin");

localStorage.firstName = "lin";

// localStorage.user name <- wrong, can not have space between only write as below:
localStorage.setItem("user name","lin");

// get data
var name=localStorage.getItem('username');
// or can write directly as:
var name=localStorage.username;
console.log(name);

// remove data
localStorage.removeItem('username');
// or can write directly as below, works same as remove data
localStorage.username = null;

// remove all keys, values and storage in localstorage.
localStorage.clear();