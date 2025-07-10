function checkPassword() {
  const input = document.getElementById('password-input').value;
  const error = document.getElementById('error-message');
  if (input === 'ilovero') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    error.textContent = "Oopsie! That's not the right secret 💔";
  }
}

// Make "Enter" key work too
document.getElementById("password-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") checkPassword();
});