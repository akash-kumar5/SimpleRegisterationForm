// Password strength calculation
const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    updatePasswordStrengthIndicator(strength);
});

function calculatePasswordStrength(password) {
    // Implement your password strength calculation logic here
    // You can use a library or write your own logic based on length, complexity, etc.
    // For simplicity, we'll use a basic example

    const lengthScore = Math.min(password.length / 8, 1);
    const complexityScore = /[A-Za-z0-9]/.test(password) ? 1 : 0;

    const totalScore = (lengthScore + complexityScore) / 2;
    return totalScore;
}

function updatePasswordStrengthIndicator(strength) {
    let text = 'Password Strength: ';

    if (strength < 0.3) {
        text += 'Weak';
        passwordStrength.style.color = '#ff6347'; // Red color for weak
    } else if (strength < 0.7) {
        text += 'Moderate';
        passwordStrength.style.color = '#ffa500'; // Orange color for moderate
    } else {
        text += 'Strong';
        passwordStrength.style.color = '#00cc00'; // Green color for strong
    }

    passwordStrength.textContent = text;
}

// Form validation
function validateForm(event) {
    event.preventDefault();

    const form = document.getElementById('registrationForm');
    if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // Your additional validation logic here

    // If all validations pass, redirect to a confirmation page
    const confirmationMessage = 'Registration successful!';
    alert(confirmationMessage);

    // Redirect to a confirmation page
    window.location.href = 'confirmation.html'; // Replace 'confirmation.html' with the actual path or URL of your confirmation page
}
