// jQuery(function($){
//     // $("#date").mask("99/99/9999");
//     $("#phone").mask("(999) 999-9999");
//     // $("#tin").mask("99-9999999");
//     // $("#ssn").mask("999-99-9999");
//  });
// $(document).ready(function(){
//     $("#phone").mask("+(999) 99-999-99-99");
// })







var element1 = document.getElementById('phone1');
var maskOptions1 = {
  mask: '+{998} (99) 000-00-00'
};
var mask1 = IMask(element1, maskOptions1);




var element = document.getElementById('phone2');
var maskOptions = {
  mask: '+{998} (99) 000-00-00'
};
var mask = IMask(element, maskOptions);