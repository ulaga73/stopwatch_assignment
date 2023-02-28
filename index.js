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
        if(milliSecondHand == 1000){
            milliSecondHand = 0;
            secondHand++;
            if(secondHand == 60){
                secondHand = 0;
                minuteHand++;
                if(minuteHand == 60){
                    minuteHand = 0;
                    hourHand++;
                    if(hourHand == 24) hourHand = 0;
                }
            }
        }
        hours.innerText = hourHand < 10 ? "0"+hourHand : hourHand;
        minutes.innerText = minuteHand < 10 ? "0"+minuteHand : minuteHand;
        seconds.innerText = secondHand < 10 ? "0"+secondHand : secondHand;
        milliSeconds.innerText = milliSecondHand < 10 ? "00"+milliSecondHand : milliSecondHand < 100 ? "0"+milliSecondHand : milliSecondHand;
    }, 1)
})

pause.addEventListener("click", () => {
    clearInterval(startTimer);
})

reset.addEventListener("click", () => {
    clearInterval(startTimer);
    [hourHand, minuteHand, secondHand, milliSecondHand] = [0, 0, 0, 0];
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
    milliSeconds.innerText = "000";
})

cast.addEventListener("click", () => {
    
})