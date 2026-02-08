
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

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Re-apply hash anchor after full page load to avoid media/layout shift drift.
    window.addEventListener('load', function() {
        if (!window.location.hash) {
            return;
        }
        const target = document.querySelector(window.location.hash);
        if (!target) {
            return;
        }
        setTimeout(function() {
            target.scrollIntoView();
        }, 0);
    });
});
