const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, isRead: true },
    { title: "Володарка Озера", author: "Анджей Сапковський", year: 1999, isRead: false },
    { title: "Гаррі Поттер", author: "Дж. Роулінг", year: 1997, isRead: true }
];

books.forEach(book => {
    if (book.isRead) {
        console.log(`Вже прочитано: '${book.title}' автора ${book.author} (${book.year})`);
    } else {
        console.log(`Слід прочитати: '${book.title}' автора ${book.author} (${book.year})`);
    }
});