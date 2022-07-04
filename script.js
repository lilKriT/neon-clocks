const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");

setInterval(() => {
  let day = new Date();
  let h = day.getHours() * 30;
  let m = day.getMinutes() * 6;
  let s = day.getSeconds() * 6;

  seconds.style.transform = `rotateZ(${s}deg)`;
  minutes.style.transform = `rotateZ(${m}deg)`;
  hours.style.transform = `rotateZ(${h + m / 12}deg)`;
});

// second part
const seconds2 = document.querySelector(".neonTwo .seconds");
const minutes2 = document.querySelector(".neonTwo .minutes");
const hours2 = document.querySelector(".neonTwo .hours");

let h2 = new Date().getHours();
let m2 = new Date().getMinutes();
let s2 = new Date().getSeconds();

hours2.innerHTML = h2;
minutes2.innerHTML = m2;
seconds2.innerHTML = s2;
