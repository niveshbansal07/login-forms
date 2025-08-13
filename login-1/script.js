// DOM elements
const loginForm = document.querySelector('.form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.login-button');

// Form validation and submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Basic validation
    if (!username || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (username.length < 3) {
        showMessage('Username must be at least 3 characters long', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Simulate login process
    handleLogin(username, password);
});

// Input focus effects
[usernameInput, passwordInput].forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
    
    // Real-time validation
    input.addEventListener('input', function() {
        validateField(this);
    });
});

// Field validation
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    
    if (fieldType === 'text') {
        if (value.length > 0 && value.length < 3) {
            field.style.borderColor = '#ff6b6b';
        } else if (value.length >= 3) {
            field.style.borderColor = '#51cf66';
        } else {
            field.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    }
    
    if (fieldType === 'password') {
        if (value.length > 0 && value.length < 6) {
            field.style.borderColor = '#ff6b6b';
        } else if (value.length >= 6) {
            field.style.borderColor = '#51cf66';
        } else {
            field.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    }
}

// Login handling
function handleLogin(username, password) {
    // Show loading state
    loginButton.disabled = true;
    loginButton.textContent = 'LOGGING IN...';
    loginButton.style.opacity = '0.7';
    
    // Simulate API call
    setTimeout(() => {
        // For demo purposes - replace with actual authentication logic
        if (username === 'demo' && password === 'password123') {
            showMessage('Login successful!', 'success');
            // Redirect or show dashboard
            setTimeout(() => {
                alert('Welcome! This is a demo login form.');
                resetForm();
            }, 1000);
        } else {
            showMessage('Invalid username or password', 'error');
            resetForm();
        }
    }, 1500);
}

// Message display
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Style based on type
    if (type === 'error') {
        messageDiv.style.color = '#ff6b6b';
    } else if (type === 'success') {
        messageDiv.style.color = '#51cf66';
    }
    
    // Insert message
    loginForm.insertBefore(messageDiv, loginButton);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Reset form
function resetForm() {
    loginButton.disabled = false;
    loginButton.textContent = 'LOGIN';
    loginButton.style.opacity = '1';
    
    // Reset input borders
    [usernameInput, passwordInput].forEach(input => {
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.activeElement === passwordInput) {
        loginForm.dispatchEvent(new Event('submit'));
    }
});

// Accessibility improvements
loginButton.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        loginForm.dispatchEvent(new Event('submit'));
    }
});

// Add loading animation class
loginButton.addEventListener('click', function() {
    if (!this.disabled) {
        this.classList.add('loading');
    }
});

// Demo credentials hint (remove in production)
setTimeout(() => {
    const hint = document.createElement('div');
    hint.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-size: 12px;
        font-family: 'Open Sans', sans-serif;
        opacity: 0.8;
        pointer-events: none;
    `;
    hint.textContent = 'Demo: demo / password123';
    document.body.appendChild(hint);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        hint.style.opacity = '0';
        setTimeout(() => hint.remove(), 500);
    }, 10000);
}, 3000); 