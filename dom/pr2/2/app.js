const bookGrid = document.getElementById('bookGrid');
const template = document.getElementById('book_template');
const booksList = BOOKS_LIST; // из файла list.js

function buildNode(book) {

    const element = template.content.cloneNode(true).firstElementChild;

    const book__title = element.querySelector('.book__title');
    const book__author = element.querySelector('.book__author');
    const book__genre = element.querySelector('.book__genre');
    const book__price = element.querySelector('.book__price');
    const book__rating = element.querySelector('.book__rating');
    const book__date = element.querySelector('.book__date');

    book__title.textContent = book.title;
    book__author.textContent = book.author;
    book__genre.textContent = book.genre;
    book__price.textContent = book.price;
    book__rating.textContent = book.rating;
    book__date.textContent = book.releaseDate;

    return element;
}

function buildBooks(booksList) {
    bookGrid.innerHTML = '';
    const fragments = new DocumentFragment();
    booksList.forEach(item => {
        fragments.append(buildNode(item));
    });
    bookGrid.append(fragments);
}

const filterByGenre = (books, genre) => {
    return books.filter(book => book.genre === genre);
}

function sortByRating(books, isAscending) {
    if (isAscending) {
        return books.sort((a, b) => a.rating - b.rating)
    }
    return books.sort((a, b) => b.rating - a.rating)
}

function sortByDate(books, isAscending) {
    if (isAscending) {
        return books.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    }
    return books.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
}
function sortByName(books, isAscending) {
    if (isAscending) {
        return books.sort((a, b) => a.title.localeCompare(b.title, 'ru'))
    }
    return books.sort((a, b) => b.title.localeCompare(a.title, 'ru'));
}

const searchTitle = (books, title) => {
    const lowerCaseTitle = String(title).toLowerCase()
    return books.filter(book => String(book.title).toLowerCase().includes(lowerCaseTitle))
}

const fuzzySearch = (books, query) => {
    const lowerCaseQuery = String(query).toLowerCase()
    const matches = books.filter(book =>
        Object.values(book).some(value =>
            String(value).toLowerCase().includes(lowerCaseQuery)
        )
    )
    return matches
}

const sortBy = {
    rating: sortByRating,
    date: sortByDate,
    name: sortByName,
};

let currentGenre = '';
let currentSearch = '';
let currentSort = { method: 'rating', isAscending: true };

function applyFiltersAndSort() {
    let books = [...booksList];

    if (currentGenre) {
        books = filterByGenre(books, currentGenre);
    }

    if (currentSearch) {
        books = searchTitle(books, currentSearch);
    }

    books = sortBy[currentSort.method](books, currentSort.isAscending);

    buildBooks(books);
}

const genreSelector = document.getElementById('genre');
genreSelector.addEventListener('change', () => {
    currentGenre = genreSelector.value;
    applyFiltersAndSort();
});

const sortSelector = document.getElementById('sort');
sortSelector.addEventListener('change', () => {
    const sortName = sortSelector.value;
    if (sortName.endsWith('_asc')) {
        currentSort.isAscending = true
        currentSort.method = sortName.slice(0, -4);
    } else if (sortName.endsWith('_desc')) {
        currentSort.isAscending = false
        currentSort.method = sortName.slice(0, -5);
    }

    applyFiltersAndSort();
});

const searchInput = document.getElementById('search_name');
searchInput.addEventListener('input', () => {
    const title = searchInput.value;
    const books = searchTitle(booksList, title);

    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('search_name', title)
    window.history.replaceState(null, '', '?' + urlParams.toString())

    buildBooks(books);
});

const fuzzySearchInput = document.getElementById('search_fuzzy');
fuzzySearchInput.addEventListener('input', () => {
    const query = fuzzySearchInput.value;
    const books = fuzzySearch(booksList, query);
    buildBooks(books);
});

function updateUrl() {
    const params = new URLSearchParams();

    if (currentSearch) params.set('search_name', currentSearch);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ search: currentSearch }, '', newUrl);
}

function restoreStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    currentSearch = params.get('search_name') || ''; 
    searchInput.value = currentSearch;

    applyFiltersAndSort();
}

window.addEventListener('popstate', (event) => {
    if (event.state) {
        currentSearch = event.state.search || '';
        searchInput.value = currentSearch;

        applyFiltersAndSort();
    }
});

restoreStateFromUrl()
