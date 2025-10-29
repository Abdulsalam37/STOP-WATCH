let hours = 0;

let minutes = 0;

let seconds = 0;

let timer;

let running = false;

function updateDisplay() {

 let h = hours < 10 ? "0" + hours : hours;

 let m = minutes < 10 ? "0" + minutes : minutes;

 let s = seconds < 10 ? "0" + seconds : seconds;

 document.getElementById("display").textContent = h + ":" + m + ":" + s;

}

function count() {

 seconds++;

 if (seconds === 60) {

   seconds = 0;

   minutes++;

 }

 if (minutes === 60) {

   minutes = 0;

   hours++;

 }

 updateDisplay();

}

function toggle() {

 if (!running) {

   timer = setInterval(count, 1000);

   running = true;

 } else {

   clearInterval(timer);

   running = false;

 }

}

document.getElementById("clearText").addEventListener("click", () => {

 clearInterval(timer);

 running = false;

 hours = 0;

 minutes = 0;

 seconds = 0;

 updateDisplay();

});

updateDisplay();