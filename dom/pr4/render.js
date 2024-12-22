import * as request from './request.js'

const products = document.querySelector('.js-products')
const select = document.querySelector('.js-select')
const search = document.querySelector('.js-search')

export async function renderAllProducts() {
    const data = await request.getProducts();
    const prods = data.products;

    displayProducts(prods)
}

export async function renderAllCategories() {
    const categories = await request.getCategories()

    categories.forEach((category) => {
        const option = document.createElement('option')
        option.value = category.slug
        option.textContent = category.name
        select.append(option)
    })
}

export async function renderProductBySearch(query) {
    const data = await request.getProductBySearch(query)
    const prods = data.products

    displayProducts(prods)
}

export async function renderProductsByCategory(category) {
    const data = await request.getCategory(category)
    const prods = data.products

    displayProducts(prods)
}


const displayProducts = (prods) => {
    products.innerHTML = ''
    prods.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img class="product__img" src="${product.thumbnail}" alt="${product.title}">
            <div class="product__body">
                <p class="product__price">$ ${product.price}</p>
                <h2 class="product__title">${product.title}</h2>
                <p class="product__descr">${product.description}</p>
                <p class="product__brand">Brand: <span>${product.brand}</span></p>
                <p class="product__category">Category: <span>${product.category}</span></p>
                <div class="rating product__rating">
                    <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <p class="rating__value">${product.rating.toFixed(2)}</p>
                </div>
            </div>
        `;

        products.append(productDiv);
    });
}

select.addEventListener('change', () => {
    const category = select.value

    if (category === '') {
        renderAllProducts()
    } else {
        renderProductsByCategory(category)
    }
})

const debouncedSearch = _.debounce((query) => {
    if (query === '') {
        renderAllProducts();
    } else {
        renderProductBySearch(query);
    }
}, 500);

search.addEventListener('input', () => {
    const query = search.value.trim()

    debouncedSearch(query)
})