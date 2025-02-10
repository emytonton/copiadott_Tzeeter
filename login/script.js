document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitButton");
    const emailError = document.getElementById("emailError");

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function checkFormValidity() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!validateEmail(email) && email.length > 0) {
            emailError.textContent = "Por favor, insira um email válido.";
        } else {
            emailError.textContent = "";
        }

        submitButton.disabled = !(email.length > 0 && password.length > 0 && validateEmail(email));
    }

    emailInput.addEventListener("input", checkFormValidity);
    passwordInput.addEventListener("input", checkFormValidity);
    
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login efeituado com sucesso!");
    });
});
