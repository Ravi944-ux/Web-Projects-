let isSignup = false;

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

document.getElementById("authForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (isSignup && name.value.trim() === "") {
    document.getElementById("nameError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("passwordError").style.display = "none";
  }

  if (valid) {
    document.getElementById("successMsg").innerText =
      isSignup ? "Signup Successful 🎉" : "Login Successful ✅";

    document.querySelector(".container").style.animation =
      "none";
    document.querySelector(".container").offsetHeight;
    document.querySelector(".container").style.animation =
      "float 4s ease-in-out infinite";
  }
});
