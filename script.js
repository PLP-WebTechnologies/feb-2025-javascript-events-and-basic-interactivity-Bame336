// Button click to change text
document.getElementById('changeTextButton').addEventListener('click', function() {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "#4CAF50";
});

// Hover effect for images
const images = document.querySelectorAll('.galleryImage');
images.forEach(image => {
  image.addEventListener('mouseenter', function() {
    this.style.transform = "scale(1.1)";
  });
  image.addEventListener('mouseleave', function() {
    this.style.transform = "scale(1)";
  });
});

// Keypress detection
document.addEventListener('keypress', function(event) {
  if (event.key === 'a') {
    alert('You pressed the "A" key!');
  }
});

// Secret action on double-click
document.getElementById('changeTextButton').addEventListener('dblclick', function() {
  alert('Double-click detected! Here’s a secret!');
});

// Tabs functionality
function showTab(tabId) {
  const allTabs = document.querySelectorAll('.tabContent');
  allTabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// Form validation with real-time feedback
document.getElementById('userForm').addEventListener('input', function() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('feedback');

  // Email validation
  if (!email.validity.valid) {
    feedback.textContent = "Please enter a valid email address.";
  } else if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

// Form submission prevention for validation
document.getElementById('userForm').addEventListener('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault(); // Prevent form submission if validation fails
    alert('Please fill out the form correctly.');
  }
});
