const form = document.querySelector("form")
const submitButton = document.querySelector(".submit-button")


/* FORM ERROR(SUBMIT) */
submitButton.addEventListener("click", (event) => {
  if (!firstName.validity.valid) {
    firstNameShowError();
    event.preventDefault();
  } if (!lastName.validity.valid) {
    lastNameShowError();
    event.preventDefault();
  } if (!email.validity.valid) {
    emailShowError();
    event.preventDefault();
  } if (!password.validity.valid) {
    passwordShowError();
    event.preventDefault();
  } if (!phoneNumber.validity.valid) {
    phoneNumberShowError();
    event.preventDefault();
  } if (isValid == false) {
    confirmPasswordShowError();
    event.preventDefault();
  }
});



/* FIRST NAME ERROR */

const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector(".first-name-error");

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstNameError.className = "first-name-error";
  }
  else {
    firstNameShowError();
  }
});

function firstNameShowError() {
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "• You need to enter your first name."
  } 
  else if (firstName.validity.patternMismatch) {
    firstNameError.textContent = "• Can only contain letters; a-z."
  }

  firstNameError.className = "first-name-error active"

};

/* LAST NAME ERROR */


const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector(".last-name-error");

lastName.addEventListener("input", (event) => {
  if (lastName.validity.valid) {
    lastNameError.textContent = "";
    lastNameError.className = "last-name-error";
  }
  else {
    lastNameShowError();
  }
});

function lastNameShowError() {
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "• You need to enter your last name."
  } 
  else if (lastName.validity.patternMismatch) {
    lastNameError.textContent = "• Can only contain letters; a-z."
  }

  lastNameError.className = "last-name-error active"

};

/* EMAIL ERROR */

const email = document.querySelector("#email")
const emailError = document.querySelector(".email-error")

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "email-error"
  } else {
    emailShowError();
  }
})



function emailShowError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "• You need to enter an email."
  }
  else if (email.validity.typeMismatch) {
    emailError.textContent ="• Value has to be an email adress."
  }

  emailError.className = "email-error active"
}

/* PHONE NUMBER ERROR */

const phoneNumber = document.querySelector("#phone-number");
const phoneNumberError = document.querySelector(".phone-number-error");

phoneNumber.addEventListener("input", (event) => {
  if (phoneNumber.validity.valid) {
    phoneNumberError.textContent = ""
    phoneNumberError.className = "phone-number-error"
  } else {
    phoneNumberShowError();
  }
})

function phoneNumberShowError() {
  if (phoneNumber.validity.valueMissing) {
    phoneNumberError.textContent = "• You need to enter a phone number."
  } else if (phoneNumber.validity.patternMismatch) {
    phoneNumberError.textContent = "Example: '(555) 555-555'."
  }

  phoneNumberError.className = "phone-number-error active"
}

/* PASSWORD ERROR */

const password = document.querySelector("#password")
const passwordError = document.querySelector(".password-error")


password.addEventListener("input", (event) => {
  if (confirmPassword.value.length >0){
  let x = confirmPassword.value
  let y = password.value

  if (x == y && password.validity.valid) {
    isValid = true
  } else {
    isValid = false
  } 

  if (isValid) {
    confirmPasswordError.textContent = ""
    confirmPasswordError.className = "confirm-password-error"
    confirmPassword.setAttribute("id", "confirm-password valid")
  } else {
    confirmPasswordError.textContent = "Password doesn't match."
    confirmPasswordError.className = "confirm-password-error active"
    confirmPassword.setAttribute("id", "confirm-password invalid")
  }}

  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "password-error"
  }
  else {
    passwordShowError();
  }
});

function passwordShowError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "• You need to enter a password."
  }
  else if (password.validity.tooShort) {
    passwordError.textContent = `• Password should be min. ${password.minLength} characters.`;
  }

  passwordError.className = "password-error active"
}

/* CONFIRM PASSWORD ERROR */

const confirmPassword = document.querySelector("#confirm-password")
const confirmPasswordError = document.querySelector(".confirm-password-error")
let isValid = false;

confirmPassword.addEventListener("input", (event) => {
  
  let x = confirmPassword.value
  let y = password.value

  if (x == y && password.validity.valid) {
    isValid = true
  } else {
    isValid = false
  }

  if (isValid) {
    confirmPasswordError.textContent = ""
    confirmPasswordError.className = "confirm-password-error"
    confirmPassword.setAttribute("class", "valid")
  } else {
    confirmPasswordError.textContent = "Password doesn't match."
    confirmPasswordError.className = "confirm-password-error active"
    confirmPassword.setAttribute("class", "invalid")
  }
})

function confirmPasswordShowError() {
  if (isValid) {
    confirmPasswordError.textContent = ""
    confirmPasswordError.className = "confirm-password-error"
    
  } else if (confirmPasswordError.textContent.length == 0) {
    confirmPasswordError.textContent = "• You need to enter a password."
    confirmPasswordError.className = "confirm-password-error active"
  } 
  else {
    confirmPasswordError.textContent = "• Password doesn't match."
    confirmPasswordError.className = "confirm-password-error active"
  }
}


