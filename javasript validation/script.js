const form = document.querySelector("#form");
const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const CPassword = document.querySelector("#CPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameval = username.value.trim();
  const Emailval = Email.value.trim();
  const Passwordval = Password.value.trim();
  const CPasswordval = CPassword.value.trim();

  if (usernameval === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (Emailval === "") {
    setError(Email, "Email is required");
  } else if (!validateEmail(Emailval)) {
    setError(Email, "Please enter a valid email");
  } else {
    setSuccess(Email);
  }
  if (Passwordval === "") {
    setError(Password, "Password is required");
  } else if (Passwordval.length < 8) {
    setError(Password, "Password must be at least 8 characters");
  } else {
    setSuccess(Password);
  }
  if (CPasswordval === "") {
    setError(CPassword, "Confirm password is required");
  } else if (CPasswordval !== Passwordval) {
    setError(CPassword, "Passwords do not match");
  } else {
    setSuccess(CPassword);
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (Email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(String(Email).toLowerCase());
};
