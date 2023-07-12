const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('navbar-menu-open');
    });

    const navbarLinks = document.querySelectorAll('.navbar-item a');

    navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
    navbarMenu.classList.remove('navbar-menu-open');
        });
    });

    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);