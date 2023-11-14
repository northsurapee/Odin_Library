// GLOBAL VARIABLE
const myLibrary = []
let isRead = false

// REFERENCE VARIABLE
let title = document.querySelector('input.title')
let author = document.querySelector('input.author')
let pages = document.querySelector('input.pages')
let checkbox = document.querySelector('input.checkbox')
let addBtn = document.querySelector('.add-book')

// ADD EVENT LISTENER
addBtn.addEventListener('click', () => addBookToLibrary())

/* Book object constructor */
function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead
}

/* Add book when submit button is clicked */
function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value, pages.value, checkbox.checked))
    displayLibrary() // refresh library
}

/* Display all books in myLibrary */
function displayLibrary() {
    // Clear old library
    var cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = ''
    // Make new one based current book on myLibrary
    myLibrary.forEach((book) => {
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

// Remove Book
function removeBook(e) {
    let container = e.target.parentNode.parentNode.parentNode;
    let book = e.target.parentNode.parentNode;
    
    // Remove Book from myLibrary 
    let allBooks = container.childNodes
    for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i] === book) {
            myLibrary.splice(i, 1)
        }
    }
    // Remove Book from DOM
    container.removeChild(book);
}

// Toggle read/not-read button
function toggleRead(e) {
    let currentClass = e.target.className
    e.target.className = currentClass === 'read' ? 'not-read':'read'
}

// Initiate sample book
const book1 = new Book('book1', 'Supee', 100, true)
const book2 = new Book('book2', 'Dear', 200, true)
const book3 = new Book('book3', 'Natnicha', 300, false)
myLibrary.push(book1, book2, book3)
displayLibrary()




















