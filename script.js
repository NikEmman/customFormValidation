const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const submit = document.querySelector("#submit");

// email validation
function validateEmail() {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.value);
}
function validateEmailInput() {
  if (validateEmail()) {
    email.setAttribute("isvalid", "true");
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Not valid email.");
  }
  email.reportValidity();
}
email.addEventListener("focusout", validateEmailInput);

// Country Validation
function validateCountry() {
  const countries = ["Mordor", "Rohan", "Shire"];

  return countries.includes(country.value);
}
function validateCountryInput() {
  if (validateCountry()) {
    country.setAttribute("isvalid", "true");
    country.setCustomValidity("");
  } else {
    country.setCustomValidity("Choose between Mordor, Rohan, Shire.");
  }
  country.reportValidity();
}
country.addEventListener("focusout", validateCountryInput);

// Zip code validation
function validateZip() {
  const re = /^(\d{5})$/;
  return re.test(zip.value);
}
function validateZipInput() {
  if (validateZip()) {
    zip.setAttribute("isvalid", "true");
    zip.setCustomValidity("");
  } else {
    zip.setCustomValidity("Zip can only be 5 numbers, ie 53241.");
  }
  zip.reportValidity();
}
zip.addEventListener("focusout", validateZipInput);

// password validation
function validatePassword() {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
  return re.test(password.value);
}

function validatePasswordInput() {
  if (validatePassword(password.value)) {
    password.setAttribute("isvalid", "true");
    password.setCustomValidity("");
  } else {
    const hasLowercase = /[a-z]/.test(password.value);
    const hasUppercase = /[A-Z]/.test(password.value);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/.test(password.value);

    hasLowercase && hasUppercase && hasSymbol;
    if (!hasLowercase) {
      password.setCustomValidity("Password must have a lower case letter");
    } else if (!hasUppercase) {
      password.setCustomValidity("Password must have an upper case letter");
    } else if (!hasSymbol) {
      password.setCustomValidity(
        "Password must have a symbol &,#,@,%,!,^ or *"
      );
    } else {
      password.setCustomValidity(
        `Password is ${password.value.length} chars, must be at least 6.`
      );
    }
  }
  password.reportValidity();
}
password.addEventListener("focusout", validatePasswordInput);

// Password2 validation
function validatePassword2() {
  return password2.value === password.value;
}

function validatePassword2Input() {
  if (!validatePassword2()) {
    password2.setCustomValidity("Your passwords don't match!");
  } else {
    password2.setAttribute("isvalid", "true");
    password2.setCustomValidity("");
  }
  password2.reportValidity();
}
password2.addEventListener("focusout", validatePassword2Input);
document.addEventListener("input", () => {
  submit.disabled = !(
    validateEmail() &&
    validateCountry() &&
    validateZip() &&
    validatePassword() &&
    validatePassword2()
  );
});
