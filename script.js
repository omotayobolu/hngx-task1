const day = document.getElementById("currentDay");
const time = document.getElementById("currentUTCTime");

weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();

const todayDay = today.getDay();
day.innerText = weekDays[todayDay];

const UTCTime = `${today.getUTCHours()}:${today
  .getUTCMinutes()
  .toString()
  .padStart(2, "0")}:${today.getUTCSeconds().toString().padStart(2, "0")} `;
time.innerHTML = UTCTime;
