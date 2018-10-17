// [A] Fetch API
fetch('http://jsonplaceholder.typicode.com/users')
.then(function(response){ //'response' can be any name you give
    // console.log(response);   //usually console.log first to make usre it works
    return response.json();
})
.then(function(data){  //'data' can be any name you give
    for (var i=0; i<data.length;i++){
        console.log(data[i].name);
    }
    // console.log(data);
})

// [B] Sending data using Fetch API
// 1.Creat the content that you want to send
var user={
    username:"lyuan",
    id:530
}
// 2.Fetch the url
fetch('http://jsonplaceholder.typicode.com/users',{ //don't close url by ), usign ) by the end of fetch 
    // set method
    method:'POST',
    // set your headers
    header:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(user)
})
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(user);
})

// or put everything into a function from Step 2.Fetch the url
function sendData(url){
        fetch(url,{  //don't close url by ), usign ) by the end of fetch 
        method:'POST',
        header:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(user);
    })
}
sendData('http://jsonplaceholder.typicode.com/users');

// [C] Handling errors with Fetch API
fetch ('http://jsonplaceholder.typicode.com/404')
.then(function(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response.json();
})
.then(function(data){
    console.log(data); 
})
.catch(function(error){
    console.log('The error:',error);
})