document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-desktop");
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        nav.classList.add("drawer-open");
        toggle.classList.add("open");
        overlay.classList.add("active");
        document.body.classList.add("no-scroll");
    }
    function closeMenu() {
        nav.classList.remove("drawer-open");
        toggle.classList.remove("open");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
    toggle.addEventListener("click", function () {
        if (nav.classList.contains("drawer-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    overlay.addEventListener("click", closeMenu);
    // Fecha com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });
});

