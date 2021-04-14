// Dom Elements
const daysRemaining = document.getElementById("days");
const hoursRemaining = document.getElementById("hours");
const minutesRemaining = document.getElementById("minutes");
const secondsRemaining = document.getElementById("seconds");

const msg = document.querySelector(".message");
let destintationDate = new Date("sept 18 2021, 00:00:00");

// Display Date Function
function displayDate() {
  // Current Date
  let srcDate = new Date();
  // Difference in Seconds
  let difference = (destintationDate - srcDate) / 1000;
  if (difference <= 0) {
    difference = 0;
    msg.style.visibility = "visible";
  }

  // Number Of Days
  let days = difference / 60 / 60 / 24;
  // Flooring The Days Number
  daysRemaining.textContent = Math.floor(days);

  // The Fraction of Days Converted Into Hours
  let hours = (days % 1) * 24;
  // Flooring the Hours Number
  hoursRemaining.textContent = Math.floor(hours);

  // The Fraction of Hours Converted Into Minutes
  let minutes = (hours % 1) * 60;
  // Flooring The Minutes Number
  minutesRemaining.textContent = Math.floor(minutes);
  // The Fraction Of Minutes Converted Into Seconds
  let seconds = (minutes % 1) * 60;
  // Flooring Seconds Number
  secondsRemaining.textContent = Math.floor(seconds);
}

// Initial Call
displayDate();
// Call Every 1 Second
setInterval(displayDate, 1000);

// Dom Element Fot Light-Dark Mode Toogler
document.querySelector("#light-dark-toogle").onclick = function (e) {
  // Giving The Class dark to the Body
  document.body.classList.toggle("dark");
  // Toggle The Moon Shape
  e.target.classList.toggle("fa-moon");
  // Toggle The Sun Shape
  e.target.classList.toggle("fa-sun");
};
