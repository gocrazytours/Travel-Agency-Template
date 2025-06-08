// ✅ Your deployed Web App URL from Google Apps Script
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxEOenLYQxmoH9kYUblLyem40qX4lZsKPhlT1Aus7ibcdeazcKWtPD7dH8ZqKr3BvLng/exec";

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const toSignupLink = document.getElementById("to-signup");
  const toLoginLink = document.getElementById("to-login");
  const signupMessage = document.getElementById("signup-message");

  // Show login form and hide signup
  function showLogin() {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    signupMessage.textContent = "";
  }

  // Show signup form and hide login
  function showSignup() {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    signupMessage.textContent = "";
  }

  loginTab.addEventListener("click", showLogin);
  signupTab.addEventListener("click", showSignup);

  toSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    showSignup();
  });

  toLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    showLogin();
  });

  // Dummy signup submission handler
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would normally handle form submission to your backend API

    signupMessage.textContent = "Thank you for signing up! Please login.";
    signupForm.reset();
  });

  // Dummy login submission handler
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would normally handle login logic (authentication, etc)
    alert("Login form submitted");
  });
});
