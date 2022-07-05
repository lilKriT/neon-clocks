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

const hoursCircle = document.querySelector(
  ".neonTwo .circle:nth-child(1) circle:nth-of-type(2)"
);
const minutesCircle = document.querySelector(
  ".neonTwo .circle:nth-child(2) circle:nth-of-type(2)"
);
const secondsCircle = document.querySelector(
  ".neonTwo .circle:nth-child(3) circle:nth-of-type(2)"
);

setInterval(() => {
  let h2 = new Date().getHours() % 12;
  let m2 = new Date().getMinutes();
  let s2 = new Date().getSeconds();
  let ampm2 = h2 >= 12 ? "pm" : "am";

  hours2.innerHTML = String(h2).padStart(2, "0");
  minutes2.innerHTML = String(m2).padStart(2, "0");
  seconds2.innerHTML = String(s2).padStart(2, "0");
  timeOfDay2.innerHTML = ampm2;

  hoursCircle.style.strokeDashoffset = 440 - (440 * h2) / 12;
  minutesCircle.style.strokeDashoffset = 440 - (440 * m2) / 60;
  secondsCircle.style.strokeDashoffset = 440 - (440 * s2) / 60;
});
