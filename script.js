document.addEventListener("DOMContentLoaded", function () {
  const counterDisplay = document.getElementById("counter");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const resetBtn = document.getElementById("resetBtn");

  const MIN = -10;
  const MAX = 10;

  
  let count = localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0;

  function updateDisplay() {
    counterDisplay.textContent = count;


    if (count > 0) {
      counterDisplay.style.color = "green";
    } else if (count < 0) {
      counterDisplay.style.color = "red";
    } else {
      counterDisplay.style.color = "black";
    }

    localStorage.setItem("count", count);
  }

  function increment() {
    if (count < MAX) {
      count++;
      updateDisplay();
    }
  }

  function decrement() {
    if (count > MIN) {
      count--;
      updateDisplay();
    }
  }

  function reset() {
    count = 0;
    updateDisplay();
  }


  incrementBtn.addEventListener("click", increment);
  decrementBtn.addEventListener("click", decrement);
  resetBtn.addEventListener("click", reset);


  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      increment();
    } else if (event.key === "ArrowDown") {
      decrement();
    }
  });

  
  updateDisplay();
});
