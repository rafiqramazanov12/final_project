let signUpForm = document.querySelector(".main_sign_up_section_left_card_form");
let emailInput = document.querySelector(".email_input");
let passwordInput = document.querySelector(".password_input");
let repeatInput = document.querySelector(".repeat_input");
let emailError = document.querySelector(".main_sign_up_section_left_card_form_error_message_first");
let passwordError = document.querySelector(".main_sign_up_section_left_card_form_error_message_second");
let repeatError = document.querySelector(".main_sign_up_section_left_card_form_error_message_third");

if (signUpForm) {
    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        if (!emailInput.value.includes("@")) {
            emailError.style.display = "block";
            emailError.textContent = "Can’t be empty";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
            passwordError.textContent = "Can’t be empty";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        if (repeatInput.value !== passwordInput.value) {
            repeatError.style.display = "block";
            repeatError.textContent = "Can’t be empty";
            isValid = false;
        } else {
            repeatError.style.display = "none";
        }

        if (isValid) {
            localStorage.setItem("userEmail", emailInput.value);
            localStorage.setItem("userPassword", passwordInput.value);

            window.location.href = "login.html";
        }
    });
}
