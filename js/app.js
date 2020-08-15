// global variables
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let email = document.getElementById("email");
let registerButton = document.getElementById("registerbutton");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let firstNameError = document.querySelector("form label:nth-of-type(1) span");
let lastNameError = document.querySelector("form label:nth-of-type(2) span");
let passwordError = document.querySelector("form label:nth-of-type(3) span");
let emailError = document.querySelector("form label:nth-of-type(5) span");

// blur event on input

firstName.addEventListener("blur", function () {
  if (firstName.value == Number("")) {
    firstNameError.style.display = "inline";
  } else {
    firstNameError.style.display = "none";
  }
});

lastName.addEventListener("blur", function () {
  if (lastName.value == Number("")) {
    lastNameError.style.display = "inline";
  } else {
    lastNameError.style.display = "none";
  }
});

passwordTwo.addEventListener("blur", function () {
  if (
    passwordOne.value == Number("") ||
    passwordTwo.value == Number("") ||
    String(passwordOne.value).length != String(passwordTwo.value).length ||
    String(passwordOne.value) != String(passwordTwo.value)
  ) {
    passwordError.style.display = "inline";
  } else {
    passwordError.style.display = "none";
  }
});

email.addEventListener("blur", function () {
  if (email.value == Number("") || !email.value.match(mailFormat)) {
    emailError.style.display = "inline";
    email.value = "example@email/com";
  } else {
    emailError.style.display = "none";
  }
});

// click event on button

registerButton.addEventListener("click", function (event) {
  if (String(firstName.value).length <= 0) {
    firstNameError.style.display = "inline";
  }
  if (String(lastName.value).length <= 0) {
    lastNameError.style.display = "inline";
  }

  if (String(passwordOne.value).length <= 0) {
    passwordError.style.display = "inline";
  }
  if (String(passwordTwo.value).length <= 0) {
    passwordError.style.display = "inline";
  }
  if (String(passwordOne.value) != String(passwordTwo.value)) {
    passwordError.style.display = "inline";
  }
  if (String(email.value).length <= 0) {
    emailError.style.display = "inline";
    email.value = "example@email/com";
  }
  if (!email.value.match(mailFormat)) {
    emailError.style.display = "inline";
    email.value = "example@email/com";
  }
  if (
    String(firstName.value).length > 0 &&
    String(lastName.value).length > 0 &&
    String(passwordOne.value).length > 0 &&
    String(passwordTwo.value).length > 0 &&
    passwordOne.value == passwordTwo.value &&
    email.value.match(mailFormat)
  ) {
    email.value = "";
    firstName.value = "";
    lastName.value = "";
    passwordTwo.value = "";
    passwordOne.value = "";
  }
  event.preventDefault();
});
