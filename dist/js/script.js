function countdown(e){var n,t,s,r;e=(e=new Date(e)).getTime(),isNaN(e)||setInterval((function(){var a=new Date,i=(a=new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds()),parseInt((e-a.getTime())/1e3));if(!(i>=0))return;n=parseInt(i/86400),i%=86400,t=parseInt(i/3600),i%=3600,s=parseInt(i/60),i%=60,r=parseInt(i),document.getElementById("days").innerHTML=parseInt(n,10),document.getElementById("hours").innerHTML=("0"+t).slice(-2),document.getElementById("minutes").innerHTML=("0"+s).slice(-2),document.getElementById("seconds").innerHTML=("0"+r).slice(-2)}),1e3)}countdown("09/22/2019 02:00:00 AM");