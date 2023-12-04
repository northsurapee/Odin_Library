// REFERENCE VARIABLE
let title = document.querySelector('input.title')
let author = document.querySelector('input.author')
let pages = document.querySelector('input.pages')
let checkbox = document.querySelector('input.checkbox')
let addButton = document.querySelector('.add-book')

// ADD EVENT LISTENER
addButton.addEventListener('click', () => addNewBookToLibrary())

// BOOK CLASS
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = isRead
    }
    toggleRead() {
        this.isRead = !(this.isRead)
    }
}

// LIBRARY CLASS
class Library {
    constructor() {
        this.books = []
    }
    // Method
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }
    getBook(title) {
        return this.books.find((book) => book.title === title)
    }
    toggleRead(title) {
        this.books.find((book) => book.title === title).toggleRead()
    }
}

// Render all books in library
function render() {
    // Clear old library
    var cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = ''
    // Make new one based current book on library
    library.books.forEach((book) => {
        // Create the element
        var cardDiv = document.createElement("div");
        var titleParagraph = document.createElement("p");
        var authorParagraph = document.createElement("p");
        var pageParagraph = document.createElement("p");
        var upperCard = document.createElement("div");
        var isReadButton = document.createElement("button");
        var removeButton = document.createElement("button");
        var lowerCard = document.createElement("div");
        // Add class to element
        cardDiv.classList.add('card')
        titleParagraph.classList.add('title')
        authorParagraph.classList.add('author')
        pageParagraph.classList.add('page')
        upperCard.classList.add('upper-card')
        isReadButton.classList.add(book.isRead ? 'read' : 'not-read')
        lowerCard.classList.add('lower-card')
        removeButton.classList.add('remove')
        // Set textContent
        titleParagraph.textContent = book.title;
        authorParagraph.textContent = `by ${book.author}`;
        pageParagraph.textContent = `${book.pages} pages`;
        isReadButton.textContent = book.isRead ? "Read" : "Not read";
        removeButton.textContent = "Remove";
        // Append elements to upperCard
        upperCard.appendChild(titleParagraph)
        upperCard.appendChild(authorParagraph)
        upperCard.appendChild(pageParagraph)
        cardDiv.appendChild(upperCard);
        // Append elements to lowerCard
        lowerCard.appendChild(isReadButton)
        lowerCard.appendChild(removeButton)
        cardDiv.appendChild(lowerCard);
        // Append upperCard and lowerCard to card-container
        cardContainer.appendChild(cardDiv);
        // Add event listener to button both
        isReadButton.addEventListener('click', (e) => toggleRead(e))
        removeButton.addEventListener('click', (e) => removeBook(e))
    })
}

// Add newBook to library (when addButton is clicked)
function addNewBookToLibrary() {
    library.addBook(new Book(title.value, author.value, pages.value, checkbox.checked))
    render()
}

// Remove Book from library (when removeButton is clicked)
function removeBook(e) {
    let book = e.target.parentNode.parentNode;
    let Booktitle = book.querySelector('.upper-card .title').textContent
    library.removeBook(Booktitle)
    render()
}

// Toggle isRead properties of Book (when isReadButton is clicked)
function toggleRead(e) {
    let book = e.target.parentNode.parentNode;
    let Booktitle = book.querySelector('.upper-card .title').textContent
    library.toggleRead(Booktitle)
    render()
}

// Initiate library with sample books
const book1 = new Book('book1', 'Supee', 100, true)
const book2 = new Book('book2', 'Dear', 200, false)
const library = new Library()
library.addBook(book1)
library.addBook(book2)
render()




















