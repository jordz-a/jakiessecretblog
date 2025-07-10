function checkPassword() {
  const input = document.getElementById('password-input').value;
  const error = document.getElementById('error-message');

  if (input === 'roheartsjakie') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    error.textContent = "Wrong code! Try again 💔";
  }
}
