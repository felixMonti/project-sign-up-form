const alert = document.querySelector(".password-alert");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

password.addEventListener("keyup", () => {
    if (password.value !== confirm.value && confirm.value !== "") {
        alert.style.display = "inline-block";
        password.style.outlineColor = "red";
        confirm.style.outlineColor = "red";
    } else if (password.value === confirm.value && password.value !== "") {
        alert.style.display = "none";
        password.style.outlineColor = "green";
        confirm.style.outlineColor = "green";
    }
});

confirm.addEventListener("keyup", () => {
    if (password.value === confirm.value && password.value !== "") {
        alert.style.display = "none";
        password.style.outlineColor = "green";
        confirm.style.outlineColor = "green";
    } else if (confirm.value !== "") {
        alert.style.display = "inline-block";
        password.style.outlineColor = "red";
        confirm.style.outlineColor = "red";
    }
});
