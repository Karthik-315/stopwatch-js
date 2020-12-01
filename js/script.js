var timerBlock = document.querySelector("h2");
var seconds = 00;
var minutes = 00;
var hours = 00;
var start = document.getElementById("startButton");
var stop = document.getElementById("stopButton");
var reset = document.getElementById("resetButton");

timerBlock.innerHTML = "00:00:00";

function addTime(){
    seconds++;
    if(seconds > 59){
        minutes++;
        seconds=0;
    }

    if(minutes > 59){
        hours++;
        minutes=0;
    }

    timerBlock.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00" ) + ":" +
                       (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00" ) + ":" +
                       (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00" );
}


function startTimer(){
    timer = setInterval(addTime, 1000);
}

start.onclick = function() {
    startTimer();
    start.disabled = true;
    stop.disabled = false;
    document.documentElement.style.setProperty('--border-color', "green");
    start.style.width = "100%";
    stop.style.width = "70%";
    reset.style.width = "70%";
}

stop.onclick = function() {
    clearTimeout(timer);
    start.innerHTML = "Resume";
    start.disabled = false;
    document.documentElement.style.setProperty('--border-color', "red");
    stop.disabled = true;
    start.style.width = "70%";
    stop.style.width = "100%";
    reset.style.width = "70%";
}

reset.onclick = function() {
    timerBlock.innerHTML = "00:00:00";
    hours = seconds = minutes = 00;
    start.innerHTML = "Start";
    document.documentElement.style.setProperty('--border-color', "black");
    start.style.width = "70%";
    stop.style.width = "70%";
    reset.style.width = "100%";
}