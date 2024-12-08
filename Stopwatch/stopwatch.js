window.onload = function () {
  // Variables to store seconds and tens of seconds
  var seconds = 00; 
  var tens = 00; 
  
  // Elements to display the time
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  
  // Buttons to start, stop, and reset the timer
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  
  // Variable to store the interval
  var Interval;

  // Function to start the timer
  buttonStart.onclick = function() {
    clearInterval(Interval); // Clear any existing interval
    Interval = setInterval(startTimer, 10); // Start a new interval calling startTimer every 10ms
  };

  // Function to stop the timer
  buttonStop.onclick = function() {
    clearInterval(Interval); // Clear the interval to stop the timer
  };

  // Function to reset the timer
  buttonReset.onclick = function() {
    clearInterval(Interval); // Clear the interval
    tens = "00"; // Reset tens to 00
    seconds = "00"; // Reset seconds to 00
    appendTens.innerHTML = tens; // Update the display for tens
    appendSeconds.innerHTML = seconds; // Update the display for seconds
  };

  // Function that updates the timer
  function startTimer() {
    tens++; // Increment tens
    
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens; // Display tens with a leading zero if less than 10
    }
    
    if (tens > 9) {
      appendTens.innerHTML = tens; // Display tens as is if greater than 9
    } 
    
    if (tens > 99) {
      seconds++; // Increment seconds
      appendSeconds.innerHTML = "0" + seconds; // Display seconds with a leading zero if less than 10
      tens = 0; // Reset tens to 0
      appendTens.innerHTML = "0" + 0; // Update the display for tens
    }
    
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds; // Display seconds as is if greater than 9
    }
  }
}
