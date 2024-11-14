import { fioModule } from "./modules/fioModule.js";
import { passwordModule }  from "./modules/passwordModule.js";

document.addEventListener("DOMContentLoaded", () => {
  const fioInput = document.getElementById("fio");
  const passwordInput = document.getElementById("password");
  const fioStatusIcon = document.getElementById("fioStatusIcon");
  const passwordStatusIcon = document.getElementById("passwordStatusIcon");
  const fioFeedback = document.getElementById("error-fio");
  const passwordFeedback = document.getElementById("error-password");
  const form = document.getElementById("form");
  const submitButton = document.querySelector(".submit-btn");

  const passwordField = new passwordModule("");
  const fioField = new fioModule("");

  function changeButtonStatus() {
    submitButton.disabled = !(passwordField.isValidPassword() && fioField.isValidFIO());
  }

  fioInput.addEventListener("input", () => {
    const fioValue = fioInput.value.trim();
    fioField.setFIO(fioValue);
    fioField.validateFio();
    if (fioValue === "") {
      fioInput.classList.remove("success", "error");
      fioStatusIcon.style.display = "none";
      fioFeedback.style.display = "none";
      changeButtonStatus();
      return;
    }

    if (fioField.isValidFIO()) {
      fioInput.classList.add("success");
      fioInput.classList.remove("error");
      fioStatusIcon.textContent = "✔";
      fioStatusIcon.style.display = "inline-block";
      fioFeedback.style.display = "none";
      changeButtonStatus();
    } else {
      fioInput.classList.add("error");
      fioInput.classList.remove("success");
      fioStatusIcon.textContent = "✖";
      fioStatusIcon.style.display = "inline-block";
      fioFeedback.innerHTML = fioField.getErrors().join("<br>");
      fioFeedback.style.display = "block";
      changeButtonStatus();
    }
  });

  passwordInput.addEventListener("input", () => {
    const passwordValue = passwordInput.value.trim();
    passwordField.setPassword(passwordValue);
    passwordField.validatePassword();
    if (passwordValue === "") {
      passwordInput.classList.remove("success", "error");
      passwordStatusIcon.style.display = "none";
      passwordFeedback.style.display = "none";
      changeButtonStatus();
      return;
    }
    if (passwordField.isValidPassword()) {
      passwordInput.classList.add("success");
      passwordInput.classList.remove("error");
      passwordStatusIcon.textContent = "✔";
      passwordStatusIcon.style.display = "inline-block";
      passwordFeedback.style.display = "none";
      changeButtonStatus();
    } else {
      passwordInput.classList.add("error");
      passwordInput.classList.remove("success");
      passwordStatusIcon.textContent = "✖";
      passwordStatusIcon.style.display = "inline-block";
      passwordFeedback.innerHTML = passwordField.getErrors().join("<br>");
      passwordFeedback.style.display = "block";
      changeButtonStatus();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Форма успешно отправлена!");
    form.reset();
    fioInput.classList.remove("success", "error");
    passwordInput.classList.remove("success", "error");
    fioStatusIcon.style.display = "none";
    passwordStatusIcon.style.display = "none";
    fioFeedback.style.display = "none";
    passwordFeedback.style.display = "none";
    fioField.cleanErrors();
    fioField.setFIO("");
    fioField.changeValid();
    passwordField.cleanErrors();
    passwordField.setPassword("");
    passwordField.changeValid();
    changeButtonStatus();
  });
});
