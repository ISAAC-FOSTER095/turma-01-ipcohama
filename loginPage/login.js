const CORRECT_USERNAME = "admin"; const CORRECT_PASSWORD = "admin"

const CORRECT = "Dani";
const CORRECT_PASS = "1234";

const CORRECT_USER = "Arthur"; const CORRECT_WORD = "Arthur";
const USERNAME = "Diogo"; const PASSWORD = "Diogo";



function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("is-visible", "is-success", "is-error");
  toast.classList.add("is-visible", type === "success" ? "is-success" : "is-error");

  clearTimeout(showToast.hideTimer);
  showToast.hideTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3000);
}

function validate() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD){
    showToast("Login successful.", "success");
    return true;
  }
  if (username === CORRECT && password === CORRECT_PASS) {
    showToast("Login successful.", "success");
    return true;
  }
  if (username === CORRECT_USER && password === CORRECT_WORD) {
    showToast("Login successful.", "success");
    return true;
  }
  if (username === USERNAME && password === PASSWORD) {
    showToast("Login successful.", "success");
    return true;
  }

  showToast("Incorrect username or password.", "error");
  return false;
}

document.getElementById("login-btn").addEventListener("click", validate);
