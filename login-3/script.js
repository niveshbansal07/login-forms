// Toggle between Login (default) and Sign Up states without page reload.
// Uses container class switch to drive CSS transitions (slide on desktop, fade on mobile).

(function () {
  const container = document.getElementById('authContainer');
  const toSignup = document.getElementById('toSignup');
  const toLogin = document.getElementById('toLogin');

  if (!container || !toSignup || !toLogin) return;

  function activateSignup() {
    container.classList.add('signup-active');
    toSignup?.setAttribute('aria-expanded', 'true');
    toLogin?.setAttribute('aria-expanded', 'true');
  }

  function activateLogin() {
    container.classList.remove('signup-active');
    toSignup?.setAttribute('aria-expanded', 'false');
    toLogin?.setAttribute('aria-expanded', 'false');
  }

  toSignup.addEventListener('click', (e) => {
    e.preventDefault();
    activateSignup();
  });

  toLogin.addEventListener('click', (e) => {
    e.preventDefault();
    activateLogin();
  });
})();


