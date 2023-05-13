// Get form element
const form = document.getElementById('form');

// Get input fields
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Set event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  // Validate first name
  if (firstName.value === '') {
    alert('Please enter your first name.');
    firstName.focus();
    return false;
  }

  // Validate age
  if (age.value === '') {
    alert('Please enter your age.');
    age.focus();
    return false;
  }

  // Validate phone number
  if (phone.value === '') {
    alert('Please enter your phone number.');
    phone.focus();
    return false;
  } else if (!(/^\d{10}$/.test(phone.value))) {
    alert('Please enter a valid 10-digit phone number.');
    phone.focus();
    return false;
  }

  // Validate email
  if (email.value !== '' && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
    alert('Please enter a valid email address.');
    email.focus();
    return false;
  }

  // If all validations pass, submit form
  alert('Form submitted successfully!');
  form.submit();
});
