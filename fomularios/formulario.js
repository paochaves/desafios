"use strict";
/*imports*/
/*variables*/

const d = document;

const $signUp = d.getElementById("signUp");
/*eventos*/
d.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});
const credentials = {
  name: $signUp.name.value,
  email: $signUp.email.value,
  password: $signUp.password.value,
};
const checks = [false, false, false, false];

let allowSubmit = false;

/*funciones*/
function eventListeners() {
  $signUp.name.addEventListener("input", () => {
    checkInput("name");
  });
  $signUp.name.addEventListener("blur", () => {
    checkInput("name");
  });

  $signUp.email.addEventListener("input", () => {
    checkInput("email");
  });
  $signUp.email.addEventListener("blur", () => {
    checkInput("email");
  });

  $signUp.password.addEventListener("input", () => {
    checkInput("password");
  });
  $signUp.password.addEventListener("blur", () => {
    checkInput("password");
  });

  $signUp.passwordConfirm.addEventListener("input", () => {
    checkInput("passwordConfirm");
  });
  $signUp.passwordConfirm.addEventListener("blur", () => {
    checkInput("passwordConfirm");
  });

  $signUp.addEventListener("submit", handleSubmit);
}

function checkInput(inputName) {
  let count = 0;
  if (inputName === "name") {
    checks[0] = false;
    const $nameWarning = d.getElementById("nameWarning");
    credentials.name = $signUp.name.value.trim();
    if (credentials.name == "") {
      $nameWarning.textContent = "Please, enter your name";
    } else {
      $nameWarning.textContent = "";
      checks[0] = true;
    }
  }
  if (inputName === "email") {
    checks[1] = false;
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $emailWarning = d.getElementById("emailWarning");
    credentials.email = $signUp.email.value.trim();
    if (credentials.email == "") {
      $emailWarning.textContent = "Please, enter your email address";
    } else if (!regExp.test(credentials.email)) {
      $emailWarning.textContent = "Please, enter a valid email address";
    } else {
      $emailWarning.textContent = "";
      checks[1] = true;
    }
  }
  if (inputName === "password") {
    checks[2] = false;
    const $passwordWarning = d.getElementById("passwordWarning");
    credentials.password = $signUp.password.value.trim();
    if (credentials.password == "") {
      $passwordWarning.textContent = "Please, enter your password";
    } else {
      $passwordWarning.textContent = "";
      checks[2] = true;
    }
  }
  if (inputName === "passwordConfirm") {
    checks[3] = false;
    const $passwordConfirmWarning = d.getElementById("passwordConfirmWarning");
    credentials.passwordConfirm = $signUp.passwordConfirm.value.trim();
    if (credentials.passwordConfirm == "") {
      $passwordConfirmWarning.textContent = "Please, confirm your password";
    } else if (credentials.password != credentials.passwordConfirm) {
      $passwordConfirmWarning.textContent = "Your password doesn't match";
    } else {
      $passwordConfirmWarning.textContent = "";
      checks[3] = true;
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("submit: ", credentials);
  console.log(checks);
  for (let i = 0; i < checks.length; i++) {
    if (checks[i] === false) {
      break;
    }
    allowSubmit = true;
  }

  if (allowSubmit) {
    console.log("enviar datos a un backend para su procesamiento...");
  } else {
    console.log("informar al usuario...");
  }
}

/*code*/
