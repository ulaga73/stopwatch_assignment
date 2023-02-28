// button elements
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const cast = document.getElementById("cast");

// timer elements
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const milliSeconds = document.getElementById("milli-second");

let hourHand = 0, minuteHand = 0, secondHand = 0, milliSecondHand = 0;
let startTimer;
start.addEventListener("click", () => {
    startTimer = setInterval(() => {
        milliSecondHand++;
        milliSeconds.innerText = milliSecondHand;
    }, 1)
})

pause.addEventListener("click", () => {
    clearInterval(startTimer);
})

reset.addEventListener("click", () => {

})

cast.addEventListener("click", () => {
    
})