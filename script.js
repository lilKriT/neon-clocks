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
const timeOfDay2 = document.querySelector(".neonTwo .ampm");

setInterval(() => {
  let h2 = new Date().getHours() % 12;
  let m2 = new Date().getMinutes();
  let s2 = new Date().getSeconds();
  let ampm2 = h2 >= 12 ? "pm" : "am";

  hours2.innerHTML = String(h2).padStart(2, "0");
  minutes2.innerHTML = String(m2).padStart(2, "0");
  seconds2.innerHTML = String(s2).padStart(2, "0");
  timeOfDay2.innerHTML = ampm2;
});
