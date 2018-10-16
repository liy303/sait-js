// **More jQuery animation on http://api.jquery.com/category/effects/

// $('#error').toggle(1000);
$('#error').hide();
$('#error').fadeIn(5000);
// $('#error').slideDown(3000);
$('#error').fadeOut(3000);
$('#error').show(1000, function(){
    $(this).addClass('alert')
})

$('#square').animate({
    opacity:0.25,
    left:'+50'
}, 5000, function(){
    console.log('complete!')
});

var banner = $('#banner');
banner.css('color','red').html('welcome!').show();