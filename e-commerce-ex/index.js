import { fetchProducts } from './modules/network.js';
import { displayProducts } from './modules/ui.js';

const init = async () => {
    const products = await fetchProducts();
    displayProducts(products);
};

window.addEventListener('load', init);