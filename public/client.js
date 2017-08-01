console.log('script sourced');

$(document).ready(function(){
    console.log('jquery sourced');

    $('body').append('<h1>This is Express!</h1>');
    $('h1').css('color', 'blue');

})