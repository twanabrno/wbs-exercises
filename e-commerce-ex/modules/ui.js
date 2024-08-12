import { addToCart } from './storage.js';

export const createProductCard = (product) => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow-lg';

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    image.className = 'h-40 w-full object-contain mb-4';

    const title = document.createElement('h2');
    title.className = 'text-lg font-bold mb-2';
    title.textContent = product.title;

    const price = document.createElement('p');
    price.className = 'text-green-600 font-semibold mb-4';
    price.textContent = `$${product.price}`;

    const button = document.createElement('button');
    button.className = 'bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600';
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => {
        addToCart(product);
        alert(`${product.title} added to cart!`);
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    return card;
};

export const displayProducts = (products) => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
};