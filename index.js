const bookArray = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Yes" : "No";
    this.id = crypto.randomUUID();
  }
  toggleRead() {
    this.read === !this.read;
  }
}

function addBooksToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  bookArray.push(newBook);
  updateUi();
}

function updateUi() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  bookArray.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<h3> Title: ${book.title} </h3>
    <h3> Author: ${book.author} </h3>
    <h3> Pages: ${book.pages} </h3>
    <h3> Read: ${book.read} </h3>`;
    bookList.appendChild(bookCard);
  });
}

function addNewBook() {
  const bookModal = document.getElementById("book-modal");
  bookModal.addEventListener("click", () => {
    bookModal.showModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded - YAY!");
  addBooksToLibrary("Harry Potter", "JKR", 123, true);
  addBooksToLibrary("Smelly Dog", "Polly Pooks", 111, false);
  const bookModal = document.getElementById("book-modal");
  const newBookBtn = document.getElementById("new-book-btn");
  const closeModal = document.getElementById("close-modal");
  newBookBtn.addEventListener("click", () => {
    bookModal.showModal();
  });
  const form = document.getElementById("book-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    addBooksToLibrary(title, author, pages, read);
    form.reset();
  });
  closeModal.addEventListener("click", () => {
    bookModal.close();
  });
});
