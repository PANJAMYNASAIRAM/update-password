let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let updateBtn = document.getElementById("updateBtn");
let warn = document.getElementById("updateBtn");

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let validateConfirmPassword = function() {
    let newpassword = newPasswordEl.value;
    let confirmPassword = confirmPasswordEl.value;

    if (newpassword !== confirmPassword) {
        confirmPasswordErrMsgEl.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
};

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
})

