//getting the elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const buttons = document.querySelectorAll(".buttonStyle");

//variables for operations
let minutes = 0;
let seconds = 0;
let stopClicked = false;
let resetClicked = false;
let startClicked = false;

//adding eventListner to buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

//this function will handle buttons click
function handleButtonClick(event) {
  const buttonName = event.target.textContent;
  if (buttonName === "start") {
    // if startCLicked call handleStart]
    event.target.setAttribute("disabled", "");
    resetClicked = false;
    stopClicked = false;
    handleStart(event.target);
  } else if (buttonName === "stop") {
    //if stop clicked call handleStop
    handleStop();
  } else {
    // call handleReset
    handleReset();
  }
}

//displays stopwatch
function display() {
  if (minutes < 10 || seconds < 10) {
    if (minutes < 10 && seconds < 10) {
      minutesDisplay.innerHTML = "0" + minutes;
      secondsDisplay.innerHTML = "0" + seconds;
    } else if (minutes < 10) {
      minutesDisplay.innerHTML = "0" + minutes;
      secondsDisplay.innerHTML = seconds;
    } else {
      minutesDisplay.innerHTML = minutes;
      secondsDisplay.innerHTML = "0" + seconds;
    }
    return;
  }
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;
}

//handleReset function
function handleReset() {
  minutes = 0;
  seconds = 0;
  resetClicked = true;
  display();
}
//increment seconds
function incrementSeconds() {
  return (seconds += 1);
}
//increment minutes
function incrementMinutes() {
  seconds = 0;
  minutes += 1;
}

//starting stopwatch
function handleStart(target) {
  const intervalId = setInterval(function () {
    if (stopClicked || resetClicked) {
      clearInterval(intervalId);
      if (resetClicked) {
        resetClicked = false;
      }
      if (stopClicked) {
        stopClicked = false;
      }
      target.removeAttribute("disabled");
      return;
    }
    let secs = incrementSeconds();
    if (secs === 60) {
      incrementMinutes();
    }
    display();
  }, 1000);
}

//stoping the watch
function handleStop() {
  stopClicked = true;
}
