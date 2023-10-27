// kullanıcıdan adını girmesini istiyoruz.
let inputName = prompt("Please enter your name");
let myName = document.querySelector("#myName");

myName.innerHTML = `${myName.innerHTML} ${inputName}`;

function showTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  var days = [
    "Pazar",
    "Pazartesi",
    "Sali",
    "Carsamba",
    "Persembe",
    "Cuma",
    "Cumartesi",
  ];
  dayName = days[d.getDay()];

  document.querySelector("#myClock").innerHTML = `${h}:${m}:${s} ${dayName}`;
}

setInterval(showTime, 1000);
