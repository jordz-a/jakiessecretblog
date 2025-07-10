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
