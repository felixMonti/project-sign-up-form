const alert = document.querySelector(".password-alert");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

password.addEventListener("input", () => {
    // Remove custom validity message as the user types
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    
    // Check if passwords match as password input changes
    if (password.value !== confirmPassword.value && confirmPassword.value !== "") {
        confirmPassword.setCustomValidity("Passwords do not match");
        alert.style.display = "inline-block";
    } else {
        confirmPassword.setCustomValidity("");
        alert.style.display = "none";
    }
});

confirmPassword.addEventListener("input", () => {
    // Check if passwords match as confirmPassword input changes
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.reportValidity();
        alert.style.display = "inline-block";
    } else {
        confirmPassword.setCustomValidity("");
        alert.style.display = "none";
    }
});

