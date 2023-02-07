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

let products = [
    {Price: 20, Name: 'Bike', Src: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {Price: 300, Name: 'Computer', Src: 'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {Price: 20, Name: 'Bike2', Src: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
];

renderProducts(products);

function renderProducts(products){    
    const cardContainer = document.querySelector('.cards-container');
    for(product of products){
        const newProduct = createProductDetail(product);
        cardContainer.appendChild(newProduct);
    }
}

function createProductDetail(product){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.Src;
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const container = document.createElement('div');
    const productName = document.createElement('p');
    productName.innerText = product.Name;

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.Price;

    const figure = document.createElement('figure');
    const img2 = document.createElement('img');
    img2.src = './icons/bt_add_to_cart.svg';

    figure.appendChild(img2);
    container.append(productPrice, productName);
    productInfo.append(container, figure);
    productCard.append(img, productInfo);
    
    return productCard;
}