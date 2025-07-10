function checkPassword() {
  const input = document.getElementById('password-input').value;
  const error = document.getElementById('error-message');
  if (input === 'roheartsjordz') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    error.textContent = "Oopsie! That's not the right secret 💔";
  }
}
function saveNote() {
  const note = document.getElementById("love-note").value;
  const now = new Date().getTime();
  localStorage.setItem("note", note);
  localStorage.setItem("noteTime", now.toString());
  document.getElementById("saved-note").textContent = note;
  document.getElementById("note-confirmation").textContent = "💖 Note saved!";
  document.getElementById("love-note").value = "";
}

// Load saved note if under 24 hours old
window.onload = function() {
  const saved = localStorage.getItem("note");
  const time = localStorage.getItem("noteTime");
  const now = new Date().getTime();

  if (saved && time && now - parseInt(time) < 86400000) {
    document.getElementById("saved-note").textContent = saved;
  } else {
    localStorage.removeItem("note");
    localStorage.removeItem("noteTime");
  }
};
// Show today's date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("today-date").textContent = "📅 " + today.toLocaleDateString(undefined, options);