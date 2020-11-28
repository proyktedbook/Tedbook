// jQuery(function($){
//     // $("#date").mask("99/99/9999");
//     $("#phone").mask("(999) 999-9999");
//     // $("#tin").mask("99-9999999");
//     // $("#ssn").mask("999-99-9999");
//  });
// $(document).ready(function(){
//     $("#phone").mask("+(999) 99-999-99-99");
// })








// function maskPhone(selector, masked = '+7 (___) ___-__-__') {
// 	const elems = document.querySelector('#phone1');

// 	function mask(event) {
// 		const keyCode = event.keyCode;
// 		const template = masked,
// 			def = template.replace(/\D/g, ""),
// 			val = this.value.replace(/\D/g, "");
// 		console.log(template);
// 		let i = 0,
// 			newValue = template.replace(/[_\d]/g, function (a) {
// 				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
// 			});
// 		i = newValue.indexOf("_");
// 		if (i !== -1) {
// 			newValue = newValue.slice(0, i);
// 		}
// 		let reg = template.substr(0, this.value.length).replace(/_+/g,
// 			function (a) {
// 				return "\\d{1," + a.length + "}";
// 			}).replace(/[+()]/g, "\\$&");
// 		reg = new RegExp("^" + reg + "$");
// 		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
// 			this.value = newValue;
// 		}
// 		if (event.type === "blur" && this.value.length < 5) {
// 			this.value = "";
// 		}

// 	}

// 	for (const elem of elems) {
// 		elem.addEventListener("input", mask);
// 		// elem.addEventListener("focus", mask);
// 		// elem.addEventListener("blur", mask);
// 	}
	
// }










// var maskedInputs = document.querySelectorAll("[data-mask]");

// for (var index = 0; index < maskedInputs.length; index++) {
//   maskedInputs[index].addEventListener('input', maskInput);
// }

// function maskInput() {
//   var input = this;
//   var mask = input.dataset.mask;
//   var value = input.value;
//   var literalPattern = /[0\*]/;
//   var numberPattern = /[0-9]/;
//   var newValue = "";
//   try {
//     var maskLength = mask.length;
//     var valueIndex = 0;
//     var maskIndex = 0;

//     for (; maskIndex < maskLength;) {
//       if (maskIndex >= value.length) break;

//       if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;

//       // Found a literal
//       while (mask[maskIndex].match(literalPattern) === null) {
//         if (value[valueIndex] === mask[maskIndex]) break;
//         newValue += mask[maskIndex++];
//       }
//       newValue += value[valueIndex++];
//       maskIndex++;
//     }

//     input.value = newValue;
//   } catch (e) {
//     console.log(e);
//   }
// }

$.mask.definitions['9'] = false;
$.mask.definitions['5'] = "[0-9]";
$("#phone_4").mask("+998 55 555-55-55");
$("#phone2").mask("+998 55 555-55-55");

// $("#phone").mask("+998 (999) 99-99-999");
// $("#phone1").mask("+999(99)999-99-99");

// $("#phone2").mask("+999 99 999-99-99");


// var element1 = document.getElementById('phone1');
// var maskOptions1 = {
//   mask: '+000 00 000-00-00'
// };
// var mask1 = IMask(element1, maskOptions1);




// var element = document.getElementById('phone2');
// var maskOptions = {
//   mask: '+000 00 000-00-00'
// };
// var mask = IMask(element, maskOptions);





// document.querySelector('.sending').onclick = function(){
//   let token = '1364313278:AAECPKWEBNsmqQgy4pDCMZPyv3d_OU95WSg';
 
//   const url = 'https://api.telegram.org/bot1364313278:AAECPKWEBNsmqQgy4pDCMZPyv3d_OU95WSg/sendmessage?chat_id=1296704087&text=salom';
//   let xhttp = new XMLHttpRequest();
//   xhttp.open('GET',url,true);
//   alert(xhttp.send());

//   // https://api.telegram.org/bot1364313278:AAECPKWEBNsmqQgy4pDCMZPyv3d_OU95WSg/sendmessage?chat_id=1296704087&text=salom
// }