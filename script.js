let countdownInterval;

function startCountdown() {
  const input = document.getElementById("targetDate").value;
  const theme = document.getElementById("themeSelect").value;
  const display = document.getElementById("countdownDisplay");
  const body = document.getElementById("body");

  if (theme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  if (!input) {
    display.textContent = "Please select a valid date and time.";
    return;
  }

  const targetTime = new Date(input).getTime();
  if (isNaN(targetTime) || targetTime <= Date.now()) {
    display.textContent = "Select a future date and time.";
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      display.textContent = "⏰ Time's up!";
      alert("Countdown complete!");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    display.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
