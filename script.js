function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("status").textContent = "Please fill out all fields.";
    return;
  }

  // This doesn't actually send email (need backend), just feedback
  document.getElementById("status").textContent = `Thanks, ${name}! I will get back to you soon.`;
  document.querySelector("form").reset();
}
