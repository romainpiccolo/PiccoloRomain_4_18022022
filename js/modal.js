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
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch close event
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
    modalbg.style.display = "none";
}

// Set Field Error
function setError(fieldId, error){
    document.getElementById(fieldId).parentElement.setAttribute('data-error', error);
    document.getElementById(fieldId).parentElement.setAttribute('data-error-visible', true);
}

// Reset Field Error
function resetError(fieldId){
    document.getElementById(fieldId).parentElement.setAttribute('data-error-visible', false);
}

// Reset all Error
function resetAllErrors() {
    const formDatas = document.querySelectorAll('.formData');

    formDatas.map(formData => {
        formData.setAttribute('data-error-visible', false);
        formData.removeAttribute('data-error');
    })
}