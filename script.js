const mobileNav = document.querySelector('.header');
const openMenu = document.querySelector('.menuOpen');
const closeMenu = document.querySelector('.menuClose');

openMenu.addEventListener('click', function () {
    mobileNav.classList.add('hidden');
});

closeMenu.addEventListener('click', () => {
        mobileNav.classList.remove('hidden');
    });

