
const register = document.querySelector(".register");
const login = document.querySelector(".login");
let registerForm = document.querySelector(".register-form");
let logoForm = document.querySelector(".logo-form");

register.onclick = function() {
	registerForm.classList.remove("hidden");
	registerForm.classList.add("visible");
	logoForm.classList.add("hidden");

	login.classList.remove("active");
	login.classList.add("staticText");
	register.classList.remove("staticText");
	register.classList.add("active");
  }

login.onclick = function() {
	logoForm.classList.remove("hidden");
	logoForm.classList.add("visible");
	registerForm.classList.add("hidden");

	register.classList.remove("active");
	register.classList.add("staticText");
	login.classList.remove("staticText");
	login.classList.add("active");
  }


