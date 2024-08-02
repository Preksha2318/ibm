// script.js

// Selectors
const navLinks = document.querySelectorAll('nav ul li a');
const loginBtn = document.getElementById('login-btn');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const bookAppointmentForm = document.getElementById('book-appointment-form');

// Event Listeners
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

loginBtn.addEventListener('click', () => {
  const loginSection = document.getElementById('login');
  loginSection.classList.add('active');
});

bookAppointmentBtn.addEventListener('click', () => {
  const bookAppointmentSection = document.getElementById('book-appointment');
  bookAppointmentSection.classList.add('active');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // TO DO: Implement login logic here
  console.log('Login attempt with username:' &{username} ,'and password:' &{password});
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  // TO DO: Implement registration logic here
  console.log('Registration attempt with username:'&{username} ,' email:' &{email} ,' password: '&{password} ,' and confirm password:' &{confirmPassword});
});

bookAppointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  // TO DO: Implement book appointment logic here
  console.log('Book appointment attempt with doctor:' &{doctor},'date:' &{date},' and time:' &{time});
});
