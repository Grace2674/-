document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const goToRegisterLink = document.getElementById('go-to-register');
    const goToLoginLink = document.getElementById('go-to-login');

    goToRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        container.classList.add('show-register');
    });

    goToLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        container.classList.remove('show-register');
    });
});
