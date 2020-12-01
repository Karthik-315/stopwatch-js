var timerBlock = document.querySelector("h2");
var seconds = 00;
var minutes = 00;
var hours = 00;
var start = document.getElementById("startButton");
var stop = document.getElementById("stopButton");
var reset = document.getElementById("resetButton");

//Disabling the Stop button on start-up
stop.disabled = true;

//Setting initial timer to 00 hrs, mins, secs.
timerBlock.innerHTML = "00:00:00";

//Function below adds increments the seconds by 1 per second.
function addTime(){
    seconds++;

    //If seconds reach 60, increment minute by one and re-set seconds to 0.
    if(seconds > 59){
        minutes++;
        seconds=0;
    }

    //If minutes reach 60, increment hour by one and re-set minutes to 0.
    if(minutes > 59){
        hours++;
        minutes=0;
    }

    //Display timer on web-page with precison of two numbers.
    timerBlock.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00" ) + ":" +
                       (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00" ) + ":" +
                       (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00" );
}


function startTimer(){
    //Runs funciton addTime with an interval of 1000ms (1 secs).
    timer = setInterval(addTime, 1000);
}

//Start button start the timer.
start.onclick = function() {
    startTimer();

    //Disables the start button (as timer is already started), and enables the stop button.
    start.disabled = true;
    stop.disabled = false;

    //Border set to green, to denote timer is running.
    document.documentElement.style.setProperty('--border-color', "green");

    //The button last clicked is set to be a bit wider.
    start.style.width = "100%";
    stop.style.width = "70%";
    reset.style.width = "70%";
}

stop.onclick = function() {
    //Pauses the timer
    clearTimeout(timer);

    //Changes the display text of start button to "Resume".
    start.innerHTML = "Resume";

    //Disables the stop button (as timer is already stopped), and enables the start button.
    start.disabled = false;
    stop.disabled = true;

    //Border set to red, to denote timer is stopped.
    document.documentElement.style.setProperty('--border-color', "red");

    //The button last clicked is set to be a bit wider.
    start.style.width = "70%";
    stop.style.width = "100%";
    reset.style.width = "70%";
}

reset.onclick = function() {

    //Timer value and start button text is reset to original state.
    timerBlock.innerHTML = "00:00:00";
    hours = seconds = minutes = 00;
    start.innerHTML = "Start";

    //Border set to black, to denote timer is reset.
    document.documentElement.style.setProperty('--border-color', "black");
    
    //The button last clicked is set to be a bit wider.
    start.style.width = "70%";
    stop.style.width = "70%";
    reset.style.width = "100%";
}