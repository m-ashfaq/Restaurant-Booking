import "regenerator-runtime/runtime";
import newBooking from "./NewBooking";
console.log("Check if this works");

$("#booking-form").prepend(newBooking());


$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });
});


//for navbar
$(window).scroll(function(){
    let position = $(window).scrollTop();
    if(position >= 80){
        $('.navbar').addClass('bg-navbar');
    } else {
        $('.navbar').removeClass('bg-navbar');
    }
});