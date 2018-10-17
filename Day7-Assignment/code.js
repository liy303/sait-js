 
document.getElementById('search').addEventListener('click',function(event){
    event.preventDefault(); 
    // console.log('work!');
    var artist1 = document.getElementById('artist').value;
    var title1 = document.getElementById('title').value;
    // console.log(Artist);
    // console.log(Title);
    fetch("https://api.lyrics.ovh/v1/"+artist1+'/'+title1)
        .then(function(response){ 
            return response.json();
        })
        .then(function(data){
           console.log(data);
           document.getElementById('lyrics').innerHTML = data.lyrics;
        })
})
