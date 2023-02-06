const popUpUserProfile = document.querySelector('.navbar-email');

popUpUserProfile.addEventListener('click', showDesktopMenu);

function showDesktopMenu(){
    const menu = document.querySelector('.desktop-menu');
    menu.classList.toggle('inactive')
};