function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalbgConfirm = document.querySelector(".bground-confirm");
const modalBtnConfirm = document.querySelectorAll(".modal-btn-confirm");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none"; // Cacher la fenêtre modale
}

function closeModalConfirm() {
  modalbgConfirm.style.display = "none"; // Cacher la fenêtre modale
}



