//EASYGALLERY

// Initiate swipebox
$( '.swipebox' ).swipebox({
    hideBarsOnMobile: false
});

//Set thumbnail images

var thumbCount = $('.thumb').length;

$(document).ready(function(){
    for (;thumbCount>0;thumbCount--) {
        console.log(thumbCount);
        var bgSrc = $('#thumbid' + thumbCount).data('src');
        console.log(bgSrc); 
        $('#thumbid' + thumbCount).css('background-image', 'url(' + bgSrc + ')');
    }
})

//Set thumbnail to equal width and height
function thumbSize (){
    var width = $('.thumb').width();
    $('.thumb').css('height', width * 0.625 + 'px');
}
$(document).ready(function(){
    thumbSize();
})
$(window).resize(function(){
    thumbSize();
});