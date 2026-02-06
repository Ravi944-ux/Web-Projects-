let isSignup = false;

const lamp = document.createElement("div");
lamp.className = "lamp";

const light = document.createElement("div");
light.className = "light";

document.body.appendChild(lamp);
document.body.appendChild(light);

function toggleForm() {
  isSignup = !isSignup;

  document.getElementById("formTitle").innerText = isSignup ? "Sign Up" : "Login";
  document.getElementById("submitBtn").innerText = isSignup ? "Sign Up" : "Login";
  document.getElementById("toggleText").innerText = isSignup
    ? "Already have an account?"
    : "Don't have an account?";
  document.getElementById("toggleLink").innerText = isSignup ? "Login" : "Sign Up";

  document.getElementById("nameGroup").style.display = isSignup
    ? "block"
    : "none";

  document.getElementById("successMsg").innerText = "";
}

function togglePassword() {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
}

/* Lamp follows focus */
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", e => {
    const rect = e.target.getBoundingClientRect();
    lamp.style.left = rect.left + rect.width / 2 - 60 + "px";
    light.style.left = rect.left + rect.width / 2 - 130 + "px";
  });
});

/* Lamp looks away on password */
document.getElementById("password").addEventListener("focus", () => {
  lamp.style.transform = "rotate(-15deg)";
  light.style.opacity = "0.3";
});

document.getElementById("password").addEventListener("blur", () => {
  lamp.style.transform = "rotate(0deg)";
  light.style.opacity = "1";
});

document.getElementById("authForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("successMsg").innerText =
    isSignup ? "Signup Successful ✨" : "Login Successful 🌟";
});
