// jQuery(function($){
//     // $("#date").mask("99/99/9999");
//     $("#phone").mask("(999) 999-9999");
//     // $("#tin").mask("99-9999999");
//     // $("#ssn").mask("999-99-9999");
//  });
$(document).ready(function(){
    $("#phone").mask("+(99) 99-999-99-99");
})



// var x = setInterval(function() {


//     var countDownDate = new Date("Dec 1, 2020 00:00:01").getTime();
//     // Get today's date and time
//     var now = new Date().getTime();
      
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
      
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//     // Output the result in an element with id="demo"
//     let kun = document.querySelector('.kun');
//     kun.innerHTML = days;
//     let soat = document.querySelector('.soat');
//     soat.innerHTML = hours;
//     let daqiqa = document.querySelector('.daqiqa');
//     daqiqa.innerHTML = minutes;
//     let soniya = document.querySelector('.soniya');
//     soniya.innerHTML = seconds;


//     // If the count down is over, write some text 
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("demo").innerHTML = "EXPIRED";
//     }
//   }, 1000);