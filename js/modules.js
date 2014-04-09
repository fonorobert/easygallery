//GALLERY

// Swipebox
$( '.swipebox' ).swipebox({
    hideBarsOnMobile : false
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


//DONATION COUNTER MODULE

//Calculate and set progressbar status

$(document).ready(function(){
	var progress = Math.round(parseInt($(".donation-amount").html()) / parseInt($(".donation-goal").html()) * 100);
	$(".progress-bar").attr("style", "width: "+progress+"%");
	$(".progress-bar").empty();
	$(".progress-bar").append(progress+"%");
})



//DONATION MODULES

// Display billing info if checkbox is checked

$('.szla-check').change(function() {
    if( $(this).is(':checked')) {
        $(".szla").show();
    } else {
        $(".szla").hide();
    }
}); 



//DONATION-RADIO MODULE

//Disable/enable #other pay_amount field

$('.radiobtn').click(function(){
	$('#other').attr('disabled', true);
})

$('#show-other').click(function(){
	$('#other').attr('disabled', false);
})


//DONATION_DROPDOWN MODULE

//Display total amount of donation and set value of pay_amount

$("form select").change(function(){ 
    var total = 0;
    total = total + (parseInt($('select.one').find("option:selected").attr("value"))*1000);
    total = total + (parseInt($('select.two').find("option:selected").attr("value"))*2000);
    total = total + (parseInt($('select.three').find("option:selected").attr("value"))*5000);
    $("form .sum").empty();
    $("form .sum").append("ÖSSZ.: "+total+" Ft");
    $("form .pay_amount").val(total);
})
