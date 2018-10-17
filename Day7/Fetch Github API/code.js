
fetch('https://api.github.com/users/liy303')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})

fetch('https://api.github.com/users/liy303/repos')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})