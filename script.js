document.addEventListener("DOMContentLoaded", () => {
  // Contact form validation and feedback
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('feedback');

  if (form && feedback) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const firstName = form.elements.firstName.value.trim();
      const lastName = form.elements.lastName.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (firstName === '') {
        feedback.textContent = 'Please give us your first name.';
        feedback.className = 'error';
        feedback.style.display = 'block';
        form.elements.firstName.focus();
        return;
      }

      if (lastName === '') {
        feedback.textContent = 'Please give us your last name.';
        feedback.className = 'error';
        feedback.style.display = 'block';
        form.elements.lastName.focus();
        return;
      }

      if (!emailPattern.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.className = 'error';
        feedback.style.display = 'block';
        form.elements.email.focus();
        return;
      }

      if (message.length > 400) {
        feedback.textContent = 'Your message is too long. Please keep it under 400 characters.';
        feedback.className = 'error';
        feedback.style.display = 'block';
        form.elements.message.focus();
        return;
      }

      form.reset();
      feedback.textContent = 'Thanks for submitting! We will get back to you as soon as we can!';
      feedback.className = 'success';
      feedback.style.display = 'block';

      setTimeout(() => {
        feedback.style.display = 'none';
        feedback.textContent = '';
        feedback.className = '';
      }, 5000);
    });
  }
});

