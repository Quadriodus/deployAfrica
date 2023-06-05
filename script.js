window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

// var myInput = document.getElementById('myInput');
// var submitButton = document.getElementById('submitButton');

// myInput.addEventListener('input', function () {
//     if (myInput.value !== '') {
//         submitButton.disabled = false;
//         submitButton.classList.add('enabled');
//     } else {
//         submitButton.disabled = true;
//         submitButton.classList.remove('enabled');
//     }
// });

// function redirect() {
//     // if (confirm("Do you want to proceed?")) {
//     window.location.href = "registrationPage.html";
//     //}
// }

// const passwordInput = document.getElementById('password-input');
// const togglePassword = document.getElementById('toggle-password');

// togglePassword.addEventListener('click', function () {
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         togglePassword.classList.remove('fa-eye');
//         togglePassword.classList.add('fa-eye-slash');
//     } else {
//         passwordInput.type = 'password';
//         togglePassword.classList.remove('fa-eye-slash');
//         togglePassword.classList.add('fa-eye');
//     }
// });