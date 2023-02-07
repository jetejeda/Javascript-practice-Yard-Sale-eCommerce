const popUpUserProfile = document.querySelector('.navbar-email');
const hamburgerMenu = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

popUpUserProfile.addEventListener('click', showDesktopMenu);

hamburgerMenu.addEventListener('click', showMobileMenu);
const detail = document.querySelector('.product-detail');
shoppingCart.addEventListener('click', function(){toggleElement(detail, document.querySelector('.mobile-menu'))});

function showDesktopMenu(){
    const menu = document.querySelector('.desktop-menu');
    menu.classList.toggle('inactive')
};

function showMobileMenu(){
    const mobileMenu  = document.querySelector('.mobile-menu')
    detail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
};

function toggleElement(section, hideElement){//We can also pass the element from the eventListener and just have one function
    hideElement.classList.add('inactive');
    section.classList.toggle("inactive");
}