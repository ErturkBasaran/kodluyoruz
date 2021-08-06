function askName() {
    
     var name = prompt("Lütfen adınızı giriniz: ");
     name = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
     document.querySelector("#myName").innerText = name;
    
 }
 
 function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = date.getDay();
 
   switch(session){
       case 1:
       session = "Pazartesi"
       break;
       case 2:
       session = "Salı"
       break;
       case 3:
       session = "Çarşamba"
       break;
       case 4:
       session = "Perşembe"
       break;
       case 5:
       session = "Cuma"
       break;
       case 6:
       session = "Cumartesi"
       break;
       case 7:
       session = "Pazar"
       break;
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   var time = `${h}:${m}:${s} ${session}`;
   document.querySelector("#myClock").innerText = time;
   document.querySelector("#myClock").textContent = time;
 
   setTimeout(showTime, 1000);
 }
 
 askName();
 showTime();