let loginForm = document.querySelector(".main_sign_in_section_left_card_form");
let emailInput = document.querySelector(".email_input");
let passwordInput = document.querySelector(".password_input");


if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let savedEmail = localStorage.getItem("userEmail");
        let savedPassword = localStorage.getItem("userPassword");

        if (emailInput.value === savedEmail && passwordInput.value === savedPassword) {
            window.location.href = "movies.html";
        } else {
            console.log("Yanlş ");
        }
    });
}
