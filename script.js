window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

var myInput = document.getElementById('myInput');
var submitButton = document.getElementById('submitButton');

myInput.addEventListener('input', function () {
    if (myInput.value !== '') {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
});

function redirect() {
    // if (confirm("Do you want to proceed?")) {
    window.location.href = "registrationPage.html";
    //}
}