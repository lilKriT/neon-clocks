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
