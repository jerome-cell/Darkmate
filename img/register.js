// Form validation and submission
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('from_name').value;
  const email = document.getElementById('name').value;
  const referralId = document.getElementById('password').value;
  const age = document.getElementById('enter').value;
  const country = document.getElementById('country').value;
  const phone = document.getElementById('phone').value;

  if (!username || !email || !referralId || !age || !country || !phone) {
    alert('Please fill in all fields.');
    return;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email address.');
    return;
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Invalid phone number. Please use 10 digits.');
    return;
  }

  // Age validation
  if (age < 18) {
    alert('You must be at least 18 years old to register.');
    return;
  }

  // Submit form data to server
  const formData = {
    username,
    email,
    referralId,
    age,
    country,
    phone,
  };

  // Use EmailJS to send form data to server
  emailjs.send('your_service_id', 'your_template_id', formData)
    .then((response) => {
      console.log('Form submitted successfully.', response);
      alert('Registration successful!');
      form.reset();
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    });
});