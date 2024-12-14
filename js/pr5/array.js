// id(уникальный идентификатор)
// title(название книги)
// author(автор)
// genre(жанр)
// price(цена)
// rating(рейтинг)
// releaseDate(дата выхода)

const books = [
    {
        id: 1,
        title: "Война и мир",
        author: "Лев Толстой",
        genre: "Классическая литература",
        price: 750,
        rating: 4.9,
        releaseDate: "1869-01-01",
    },
    {
        id: 2,
        title: "1984",
        author: "Джордж Оруэлл",
        genre: "Антиутопия",
        price: 550,
        rating: 4.7,
        releaseDate: "1949-06-08",
    },
    {
        id: 3,
        title: "Гарри Поттер и философский камень",
        author: "Дж. К. Роулинг",
        genre: "Фэнтези",
        price: 450,
        rating: 4.8,
        releaseDate: "1997-06-26",
    },
    {
        id: 4,
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        genre: "Классическая литература",
        price: 600,
        rating: 4.6,
        releaseDate: "1866-01-01",
    },
    {
        id: 5,
        title: "Властелин колец: Братство кольца",
        author: "Дж. Р. Р. Толкин",
        genre: "Фэнтези",
        price: 700,
        rating: 4.9,
        releaseDate: "1954-07-29",
    },
    {
        id: 6,
        title: "Гордость и предубеждение",
        author: "Джейн Остин",
        genre: "Классическая литература",
        price: 500,
        rating: 4.5,
        releaseDate: "1813-01-28",
    },
    {
        id: 7,
        title: "Убить пересмешника",
        author: "Харпер Ли",
        genre: "Современная классика",
        price: 480,
        rating: 4.7,
        releaseDate: "1960-07-11",
    },
    {
        id: 8,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        genre: "Фантастика",
        price: 650,
        rating: 4.8,
        releaseDate: "1967-01-01",
    },
    {
        id: 9,
        title: "Три товарища",
        author: "Эрих Мария Ремарк",
        genre: "Современная классика",
        price: 580,
        rating: 4.6,
        releaseDate: "1936-01-01",
    },
    {
        id: 10,
        title: "Сто лет одиночества",
        author: "Габриэль Гарсиа Маркес",
        genre: "Магический реализм",
        price: 630,
        rating: 4.5,
        releaseDate: "1967-05-30",
    },
    {
        id: 11,
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        genre: "Сказка",
        price: 300,
        rating: 4.8,
        releaseDate: "1943-04-06",
    },
    {
        id: 12,
        title: "Великий Гэтсби",
        author: "Ф. Скотт Фицджеральд",
        genre: "Классическая литература",
        price: 520,
        rating: 4.4,
        releaseDate: "1925-04-10",
    },
    {
        id: 13,
        title: "Анна Каренина",
        author: "Лев Толстой",
        genre: "Классическая литература",
        price: 680,
        rating: 4.7,
        releaseDate: "1877-01-01",
    },
    {
        id: 14,
        title: "Дюна",
        author: "Фрэнк Герберт",
        genre: "Научная фантастика",
        price: 720,
        rating: 4.6,
        releaseDate: "1965-08-01",
    },
    {
        id: 15,
        title: "Портрет Дориана Грея",
        author: "Оскар Уайльд",
        genre: "Классическая литература",
        price: 490,
        rating: 4.5,
        releaseDate: "1890-07-01",
    },
    {
        id: 16,
        title: "Над пропастью во ржи",
        author: "Дж. Д. Сэлинджер",
        genre: "Современная классика",
        price: 460,
        rating: 4.3,
        releaseDate: "1951-07-16",
    },
    {
        id: 17,
        title: "Гроздья гнева",
        author: "Джон Стейнбек",
        genre: "Классическая литература",
        price: 590,
        rating: 4.6,
        releaseDate: "1939-04-14",
    },
    {
        id: 18,
        title: "Алиса в Стране чудес",
        author: "Льюис Кэрролл",
        genre: "Сказка",
        price: 400,
        rating: 4.7,
        releaseDate: "1865-11-26",
    },
    {
        id: 19,
        title: "Граф Монте-Кристо",
        author: "Александр Дюма",
        genre: "Приключения",
        price: 780,
        rating: 4.8,
        releaseDate: "1844-08-28",
    },
    {
        id: 20,
        title: "Fahrenheit 451",
        author: "Рэй Брэдбери",
        genre: "Антиутопия",
        price: 540,
        rating: 4.5,
        releaseDate: "1953-10-19",
    }
];

function filterByGenre(books, genre) {
    return books.filter(book => book.genre === genre);
}

function sortByPrice(books, isAscending) {
    if (isAscending) {
        return books.sort((a, b) => a.price - b.price);
    }
    return books.sort((a, b) => b.price - a.price);
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

function sortByTitle(books, isAscending) {
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
    
    let res = ''
    let total = 0
    matches.forEach(match => {
        res += `${match.title} - ${match.author}, ${new Date(match.releaseDate).toLocaleDateString('ru-RU')}\n`
        total += match.price
    });

    let totalPrice = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);

    res += `\nЦена за перечисленные книги: ${totalPrice}`

    return res
}

// console.log(filterByGenre(books, "Классическая литература"));
// console.log(sortByRating(books, true));
// console.log(sortByDate(books, true));
// console.log(sortByPrice(books, true));
// console.log(sortByTitle(books, false));

console.log(fuzzySearch(books, 'толстой'))






