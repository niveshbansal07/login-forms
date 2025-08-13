document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('auth-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }
    alert('Login clicked!');
  });
});


