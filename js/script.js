
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (!hamburger || !navMenu) {
        return;
    }

    hamburger.addEventListener('click', function() {
        const menuIsOpen = navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(menuIsOpen));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});
