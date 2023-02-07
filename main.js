const popUpUserProfile = document.querySelector('.navbar-email');
const hamburgerMenu = document.querySelector('.menu')

popUpUserProfile.addEventListener('click', showDesktopMenu);

hamburgerMenu.addEventListener('click', showMobileMenu);

function showDesktopMenu(){
    const menu = document.querySelector('.desktop-menu');
    menu.classList.toggle('inactive')
};

function showMobileMenu(){
    const mobileMenu  = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('inactive')
};

function toggleElement(section){//We can also pass the element from the eventListener and just have one function
    section.classList.toggle("inactive");
}