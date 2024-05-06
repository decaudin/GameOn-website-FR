// DOM Elements

const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalContent = document.querySelector('.content');
const modalClose = document.querySelector('.close');
const form = document.querySelector('form[name="reserve"]');
const formValidated = document.querySelector('.form-validated');
const modalValidateClose = document.querySelector('.btn-close');

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}


// Close modal

modalClose.addEventListener('click', () => {
  modalbg.style.display = 'none';
  formValidated.classList.remove('done');
  form.style.display='block';
})

modalbg.addEventListener('click', () => {
  modalbg.style.display = 'none';
  formValidated.classList.remove('done');
  form.style.display='block';
})

modalValidateClose.addEventListener('click', () => {
  modalbg.style.display = 'none';
  formValidated.classList.remove('done');
  form.style.display='block';
})

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
})


// Add confirmation when sending successfully

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) {
    e.preventDefault();
  } else {
    form.reset();
    form.style.display = 'none';
    formValidated.classList.add('done');
  }
})


// Validate form

// DOM Elements

const errorFirst = document.querySelector(".error-first");
const errorLast = document.querySelector(".error-last");
const errorEmail = document.querySelector(".error-email");
const errorBirthdate = document.querySelector(".error-birthdate");
const errorQuantity = document.querySelector(".error-quantity");
const errorLocation = document.querySelector(".error-location");
const errorCondition = document.querySelector(".error-condition");

// Validation email function

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Validation form function

const validateForm = () => {

  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const checkbox = document.getElementById("checkbox1");
  
  let formValid = true;
  
  if (firstName.length < 2) {
    errorFirst.style.display = 'block';
    formValid = false;
  } else {
      errorFirst.style.display = 'none';
  }
  
  if (lastName.length < 2) {
    errorLast.style.display = 'block';
    formValid = false;
  } else {
      errorLast.style.display = 'none';
  }

  if (!validateEmail(email)) {
      errorEmail.style.display = 'block';
      formValid = false;
  } else {
      errorEmail.style.display = 'none';
  }

  if (!birthdate) {
    errorBirthdate.style.display = 'block';
    formValid = false;
  } else {
      errorBirthdate.style.display = 'none';
    }

  if (!quantity) {
    errorQuantity.style.display = 'block';      
    formValid = false;
  } else {
      errorQuantity.style.display = 'none';
    }

  let radioButtonChecked = false;
  radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
          radioButtonChecked = true;
      }
  });

  if (!radioButtonChecked) {
      errorLocation.style.display = 'block';
      formValid = false;
  } else {
      errorLocation.style.display = 'none';
  }

  if (!checkbox.checked) {
    errorCondition.style.display = 'block';
    formValid = false;
  } else {
      errorCondition.style.display = 'none';
  }
  
  return formValid;  
}


