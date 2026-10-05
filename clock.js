const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

function tick() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString("en-US");
  timeEl.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
  dateEl.dateTime = now.toISOString().slice(0, 10);
  timeEl.dateTime = now.toTimeString().slice(0, 8);
}

tick();
setInterval(tick, 1000);
