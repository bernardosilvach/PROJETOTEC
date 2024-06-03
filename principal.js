// Get the button and alert box elements
const registerButton = document.getElementById('registerButton');
const alertBox = document.getElementById('alertBox');

// Add an event listener to the button
registerButton.addEventListener('click', () => {
  // Show the alert box
  alertBox.style.display = 'block';
  alert("Please fill out the registration form:");
});