let secondsFirst = document.getElementById("special_1_sec");
let secondsSecond = document.getElementById("special_2_sec");
let minutesFirst = document.getElementById("special_1_min");
let minutesSecond = document.getElementById("special_2_min");

function countdown() {
  secondsFirst.innerText = secondsFirst.innerText - 1;
  secondsSecond.innerText = secondsSecond.innerText - 1;

  if (secondsFirst.innerText < 0) {
    secondsFirst.innerText = "59";
    minutesFirst.innerText = minutesFirst.innerText - 1;
    if (minutesFirst.innerText < 0) {
      minutesFirst.innerText = "59";
    }
  }
  if (secondsSecond.innerText < 0) {
    secondsSecond.innerText = "59";
    minutesSecond.innerText = minutesSecond.innerText - 1;
    if (minutesSecond.innerText < 0) {
      minutesSecond.innerText = "59";
    }
  }
}

setInterval(countdown, 1000);
