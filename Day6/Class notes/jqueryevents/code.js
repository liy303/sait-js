var btn = document.getElementById('submitbtn'),
count = 0;
btn.onclick = function(){
    count += 1;
    btn.innerHtml = 'Click me:' + count;
};