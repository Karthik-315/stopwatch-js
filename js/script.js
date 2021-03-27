// Variables
var timerBlock = document.querySelector(".timer");
var seconds = 00;
var minutes = 00;
var hours = 00;
var start = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var reset = document.getElementById("resetButton");

// Event listeners
window.addEventListener('load', function(){
    initialize();
    start.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);
});

// Functions
function initialize(){
    timerBlock.innerHTML = "00:00:00";
    hours = seconds = minutes = 00;
    start.innerHTML = "Start";
    stopButton.classList.add('disable');
    start.classList.remove('disable');
    document.documentElement.style.setProperty('--border-color', "black");
}

//Function below adds increments the seconds by 1 per second.
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
    start.classList.add('disable');
    stopButton.classList.remove('disable');
    document.documentElement.style.setProperty('--border-color', "green");
}

function stopTimer(){
    clearTimeout(timer);
    start.innerHTML = "Resume";
    stopButton.classList.add('disable');
    start.classList.remove('disable');
    document.documentElement.style.setProperty('--border-color', "red");
}

function resetTimer(){
    timerBlock.innerHTML = "00:00:00";
    hours = seconds = minutes = 00;
    start.innerHTML = "Start";
    document.documentElement.style.setProperty('--border-color', "black");
}