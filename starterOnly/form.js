//select elements in HTML
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const firstNameError = document.getElementById("firstError");
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("lastError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");
const tournamentQuantity = document.getElementById("quantity");
const tournamentQuantityError = document.getElementById("quantityError");
const myradiobtn = document.querySelectorAll('[name="location"]');
const myradiobtnError = document.querySelector("#locationError");
const termsCheckbox = document.getElementById("checkbox1");
const termsCheckboxError = document.getElementById("termsError");
const newsCheckbox = document.getElementById("checkbox2");
const submitBtn = document.getElementById("btn-submit");
const modal = document.querySelector(".bground");
const modalConfirm = document.querySelector(".bground-confirm");

// check if the first name is 2 characters or more
function validateFirstName(firstName) {
  if (firstName.length >= 2) {
    firstNameError.textContent = "";
    return true;
  }
  firstNameError.textContent =
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  return false;
}

// check if the last name is 2 characters or more
function validateLastName(lastName) {
  if (lastName.length >= 2) {
    lastNameError.textContent = "";
    return true;
  }
  lastNameError.textContent =
    "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  return false;
}

// check if the email is in the correct format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    emailError.textContent = "";
    return true;
  }
  emailError.textContent = "Veuillez entrer une adresse mail";
  return false;
}

// check if the date is in the correct format
function validateBirthdate(birthdate) {
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (birthdateRegex.test(birthdate)) {
    birthdateError.textContent = "";
    return true;
  }
  birthdateError.textContent = "Veuillez entrer une date de naissance";
  return false;
}

// check if the email is in the correct format
function validateTournamentQuantity(tournamentQuantity) {
  const tournamentQuantityRegex = /^\d+$/;
  if (tournamentQuantityRegex.test(tournamentQuantity)) {
    tournamentQuantityError.textContent = "";
    return true;
  }
  tournamentQuantityError.textContent = "Veuillez entrer un nombre";
  return false;
}

// check if one of the inputs is checked
function validateLocation() {
  for (let i = 0; i < myradiobtn.length; i++) {
    if (myradiobtn[i].checked) {
      myradiobtnError.textContent = "";
      return [true, myradiobtn[i].value];
    }
  }
  myradiobtnError.textContent = "Vous etes obligé de selectionner une ville";
  return false;
}

// check that the input is checked
function validateTermsCheckbox(termsCheckbox) {
  if (termsCheckbox.checked === true) {
    termsCheckboxError.textContent = "";
    return true;
  }
  termsCheckboxError.textContent =
    "Vous êtes obligé d'accepter les conditions d'utilisation";
  return false;
}

// clear form input
function clearForm() {
  firstName.value = "";
  firstNameError.textContent = "";
  lastName.value = "";
  lastNameError.textContent = "";
  email.value = "";
  emailError.textContent = "";
  birthdate.value = "";
  birthdateError.textContent = "";
  tournamentQuantity.value = "";
  tournamentQuantityError.textContent = "";
  for (let i = 0; i < myradiobtn.length; i++) {
    myradiobtn[i].checked = false;
  }
  myradiobtnError.textContent = "";
  termsCheckboxError.textContent = "";
  termsCheckbox.checked = false;
  newsCheckbox.checked = false;
}

// add listener for submit button
form.addEventListener("submit", (e) => isFormValid(e));

//check if all input are valid
function isFormValid(e) {
  e.preventDefault();
  const isFirstNameValid = validateFirstName(firstName.value);
  const isLastNameValid = validateLastName(lastName.value);
  const isEmailValid = validateEmail(email.value);
  const isBirthdateValid = validateBirthdate(birthdate.value);
  const isTournamentQuantityValid = validateTournamentQuantity(tournamentQuantity.value);
  const isLocationValid = validateLocation();
  const isTermsCheckboxValid = validateTermsCheckbox(termsCheckbox);
  console.log("firstName:", firstName.value);
  console.log("lastName:", lastName.value);
  console.log("email:", email.value);
  console.log("birthdate:", birthdate.value);
  console.log("tournamentQuantity:", tournamentQuantity.value);
  console.log("location", isLocationValid[1]);
  console.log("termsCheckbox", termsCheckbox.checked);
  console.log("newsCheckbox", newsCheckbox.checked);
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isTournamentQuantityValid &&
    isLocationValid[0] &&
    isTermsCheckboxValid
  ) {
    modal.style.display = "none";
    modalConfirm.style.display = "block"; // display confirmation modal if all input are valid
    clearForm(); // clear form fields
    console.log("formulaire valide");
  } else {
    console.log("formulaire invalide");
  }
}
