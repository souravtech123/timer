let select = document.getElementById('select');
let countdown = document.getElementById('countdown');
let progress = document.getElementById('progress')

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let Enter = document.getElementById('Enter');
let work = document.getElementById('work');

let interval;
let inputvalue;
let totaltime ;

// Task input
Enter.addEventListener('click', function () {
  let task = document.getElementById('task').value;

  if (task.trim() !== "") {
    alert("Task is added");
    work.innerHTML = task;
    start.disabled = false; // Enable Start
  } else {
    alert("Add the task");
  }
});

// Start Timer
start.addEventListener('click', function () {
  inputvalue = parseInt(select.value) * 60;
  totaltime = inputvalue ;
  clearInterval(interval);

  interval = setInterval(function () {
    let min = Math.floor(inputvalue / 60);
    let second = inputvalue % 60;

    countdown.innerHTML = `${String(min).padStart(2, "0")} : ${String(second).padStart(2, "0")}`;
    
  
    if (inputvalue <= 0) {
      clearInterval(interval);
      countdown.innerHTML = "Dead Line is over";
      
   }

    inputvalue--;
  }, 1000);
});

// Pause Timer
pause.addEventListener('click', function () {
  clearInterval(interval);
  let min = Math.floor(inputvalue / 60);
  let second = inputvalue % 60;
  countdown.innerHTML = `${String(min).padStart(2, "0")} : ${String(second).padStart(2, "0")}`;
});

// Reset Timer
reset.addEventListener('click', function () {
  clearInterval(interval);
  countdown.innerHTML = "00 : 00";
  start.disabled = true; // Disable Start again until task added
  work.innerHTML = "";   // Clear task if you want
});

