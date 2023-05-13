// get references to HTML elements
const form = document.querySelector('#form');
const showUsersButton = document.querySelector('#show-users');
const clearUsersButton = document.querySelector('#clear-users');
const dataShowDiv = document.querySelector('.data-show');

// event listener for form submit
form.addEventListener('submit', function(event) {
 
  event.preventDefault();

  
  const firstName = document.querySelector('#fname').value;
  const lastName = document.querySelector('#lname').value;
  const age = document.querySelector('#age').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const lang = document.querySelectorAll('input[name="lang"]:checked');
  const hobbies = document.querySelector('#hobbies').value;

  // create user object
  const user = {
    firstName,
    lastName,
    age,
    email,
    phone,
    gender,
    lang: Array.from(lang, el => el.value),
    hobbies
  };

  // get existing users from local storage or create empty array
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // add user to users array
  users.push(user);

  // store updated users array in local storage
  localStorage.setItem('users', JSON.stringify(users));

  // clear form inputs
  form.reset();

  // show success message
  alert('User registered successfully!');
});

// event listener for show users button
showUsersButton.addEventListener('click', function() {
  // get users from local storage or create empty array
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // create HTML to display users
  let html = '<table><thead><tr><th>First Name&ensp;</th><th>Last Name&ensp;</th><th>Age&ensp;</th><th>Email&ensp;</th><th>Phone&ensp;</th><th>Gender&ensp;</th><th>Languages&ensp;</th><th>Hobbies&ensp;</th></tr></thead><tbody>';

  for (let user of users) {
    html += '<tr><td>' + user.firstName + '</td><td>' + user.lastName + '</td><td>' + user.age + '</td><td>' + user.email + '</td><td>' + user.phone + '</td><td>' + user.gender + '</td><td>' + user.lang.join(', ') + '</td><td>' + user.hobbies + '</td></tr>';
  }

  html += '</tbody></table>';

  // display users HTML in data show div
  dataShowDiv.innerHTML = html;
});

// event listener for clear users button
clearUsersButton.addEventListener('click', function() {
  // remove users from local storage
  localStorage.removeItem('users');

  // clear data show div
  dataShowDiv.innerHTML = '';
});
