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
const header = document.querySelector('header#myTopnav')
const section = document.querySelector('section.hero-section')
const footer = document.querySelector('footer')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  if (window.screen.width > 799) {
      section.style.display = 'none';
      header.style.display = 'none';
      footer.style.display = 'none';
  }
}

function closeModal() {
  modalbg.style.display = "none"; // Cacher la fenêtre modale
  if (window.screen.width > 799) {
    section.style.display = 'flex';
    header.style.display = 'flex';
    footer.style.display = 'block';
}
}

function closeModalConfirm() {
  modalbgConfirm.style.display = "none"; // Cacher la fenêtre modale
}



