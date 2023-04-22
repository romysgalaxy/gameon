//select elements
const form = document.getElementById('form');
const firstName = document.getElementById('first');
const firstNameError = document.getElementById('firstError');
const lastName = document.getElementById('last');
const lastNameError = document.getElementById('lastError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const birthdate = document.getElementById('birthdate');
const birthdateError = document.getElementById('birthdateError');
const tournamentQuantity = document.getElementById('quantity');
const tournamentQuantityError = document.getElementById('quantityError');
const myradiobtn = document.querySelectorAll('[name="location"]')
const myradiobtnError = document.querySelector('#locationError')
const termsCheckbox = document.getElementById('checkbox1');
const termsCheckboxError = document.getElementById('termsError');
const newsCheckbox = document.getElementById('checkbox2')
const submitBtn = document.getElementById('btn-submit');

// add listener for any input changed
form.addEventListener('submit', (e) => isFormValid(e))

// check if input are validated
function validateFirstName(firstName) {
    if (firstName.length >= 2) {
        firstNameError.textContent = ''
        return true
    } 
    firstNameError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom'
    return false
}

function validateLastName(lastName) {
    if (lastName.length >= 2) {
        lastNameError.textContent = ''
        return true
    } 
    lastNameError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom'
    return false
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        emailError.textContent = ''
        return true
    } 
    emailError.textContent = 'Veuillez entrer une adresse mail'
    return false
}

function validateBirthdate(birthdate) {
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (birthdateRegex.test(birthdate)) {
        birthdateError.textContent = ''
        return true
    } 
    birthdateError.textContent = 'Veuillez entrer une date de naissance'
    return false
}

function validateTournamentQuantity(tournamentQuantity) {
    const tournamentQuantityRegex = /^\d+$/;
    if (tournamentQuantityRegex.test(tournamentQuantity)) {
        tournamentQuantityError.textContent = ''
        return true
    } 
    tournamentQuantityError.textContent = 'Veuillez entrer un nombre'
    return false
}

function validateLocation() {
        for (let i = 0; i < myradiobtn.length; i++) {
            if(myradiobtn[i].checked) {
                myradiobtnError.textContent = ''
                return [true, myradiobtn[i].value]
            }
        }
        myradiobtnError.textContent = 'Vous etes obligé de selectionner une ville'
        return false
    }

function validateTermsCheckbox(termsCheckbox) {
    if (termsCheckbox.checked === true) {
        termsCheckboxError.textContent = ''
        return true
    } 
    termsCheckboxError.textContent = 'Vous êtes obligé d\'accepter les conditions d\'utilisation'
    return false
}

//check if all input are validated
function isFormValid(e) {
    e.preventDefault()
    const isFirstNameValid = validateFirstName(firstName.value)
    const isLastNameValid = validateLastName(lastName.value);
    const isEmailValid = validateEmail(email.value);
    const isBirthdateValid = validateBirthdate(birthdate.value);
    const isTournamentQuantityValid = validateTournamentQuantity(tournamentQuantity.value);
    const isLocationValid = validateLocation()
    const isTermsCheckboxValid = validateTermsCheckbox(termsCheckbox)
    console.log('firstName:', firstName.value)
    console.log('lastName:', lastName.value)
    console.log('email:', email.value)
    console.log('birthdate:', birthdate.value)
    console.log('tournamentQuantity:', tournamentQuantity.value)
    console.log('location', isLocationValid[1])
    console.log('termsCheckbox', termsCheckbox.checked)
    console.log('newsCheckbox', newsCheckbox.checked)
    if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isTournamentQuantityValid && isLocationValid[0] && isTermsCheckboxValid) {
        console.log('formulaire valide')   
    }
}

//     if (!isChecked) {
//         locationError.innerHTML = "Please select a location.";
//         return false;
//     }

//     locationError.innerHTML = "";
//     return true;
// }

// function validateTermsCheckbox() {
//     const termsCheckboxValue = this.checked;
//     const termsCheckboxError = document.getElementById('checkbox1Error');
//     if (!termsCheckboxValue) {
//         termsCheckboxError.textContent = 'Vous devez accepter les conditions d\'utilisation pour continuer';
//         // toggleSubmitBtnState(false);
//         return false;
//     } else {
//         termsCheckboxError.textContent = '';
//         // toggleSubmitBtnState(true);
//         return true;
//     }
// }


// PSEUDO CODE ALIX

// PREMIERE ETAPE TU DISABLED LE BOUTON SUBMIT

// SECONDE ETAPE TU RECUPERES TOUTES LES THIS.VALUE DE CHAQUE ELEMENT ET VERIFIE SI TOUT EST NON NULL OU NON EMPTY ''
// TROISIEME SI LA SECONDE EST VALIDE ALORS TU DEGRISES LE BTN
// QUATRIME AU SUBMIT, TU FAIS E.EPREVENT DEFAULT PR ANNULER LENVOI AUTOMATIQUE DU FORMULAIRE
// CINQUIEME ETAPE TU VERIFIES LA CONFORMITE DES DONNEES DU FORMULAIRE
// 6. FORM VALIDATOR VERIFIE SI TES DONNES SONT CONFORMES
// 7. SI DONNE CONFORME TU FAIS FETCH.TON URL TYPE POST AVEC PAYLOAD LES DONNES DU FORMULAIRE
// 7. BIS SI UNE OU PLUSIEURS DONNE PAS BONNE? TU LEVES LES ERREURS ET DE FAIT TU N4APPELLES PAS LA METHDOE FETCH