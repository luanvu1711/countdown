const newYear = '2021-12-02 00:00:00';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const hpn = document.getElementById('hpn');
const countdownTimer = document.getElementById('countdown-timer');

function countdown() {
  const currentDate = new Date();
  const newYearDate = new Date(newYear);
  // milisecond, needs to be divided by 1000 to get total seconds
  const totalSeconds = (newYearDate - currentDate) / 1000;
  // total seconds divide by 60 minutes, 60 seconds and 24 hours for days
  const days = Math.floor(totalSeconds / 3600 / 24);
  //total seconds divide by 60 minutes, 60 seconds AND Modulus--Division Remainder to 24 to find the hours
  const hours = Math.floor(totalSeconds / 3600) % 24;
  //total seconds devide by 60 minutes and modulus 60 for minutes
  const minutes = Math.floor(totalSeconds / 60) % 60;
  //total seconds just need to module 60 for the remaining seconds
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secsEl.innerHTML = seconds;
  if (totalSeconds < 0) {
    clearInterval(timer);
    countdownTimer.classList.add('disappear');
    hpn.classList.add('appear');
  }
}

var timer = setInterval(countdown, 1000)
