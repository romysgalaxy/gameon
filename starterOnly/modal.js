// responsif navBar
function editNav() {
  var myTopnav = document.getElementById("myTopnav");
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const modalbgConfirm = document.querySelector(".bground-confirm");
const modalBtnConfirm = document.querySelectorAll(".modal-btn-confirm");
const formData = document.querySelectorAll(".formData");
const header = document.querySelector('header#myTopnav')
const section = document.querySelector('section.hero-section')
const footer = document.querySelector('footer')
const main = document.querySelector('main')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  section.style.display = 'none';
  footer.style.display = 'none';
  header.style.display = 'flex';
  main.style.margin = 0;
  if (window.innerWidth > 801) {
      header.style.display = 'none'; 
  }
}

// hide modal form
function closeModal() {
  modalbg.style.display = "none"; 
  section.style.display = 'flex';
  header.style.display = 'flex';
  footer.style.display = 'block';
  main.style.margin = '0 24px';
}

// hide confirmation modal
function closeModalConfirm() {
  modalbgConfirm.style.display = "none"; 
  section.style.display = 'flex';
  header.style.display = 'flex';
  footer.style.display = 'block';
  main.style.margin = '0 24px';
}



