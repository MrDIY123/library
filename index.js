const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  updateLibraryUI();
}

function updateLibraryUI() {
  const libraryContainer = document.getElementById("library");
  if (!libraryContainer) {
    console.error("Library container not found!");
    return;
  }

  libraryContainer.innerHTML = ""; // Clear existing books

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card"); // Optional for styling

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>Status: <strong>${book.read ? "Read" : "Not Read"}</strong></p>
      <button class="toggle-read" data-id="${book.id}">Toggle Read</button>
      <button class="remove-btn" data-id="${book.id}">Remove</button>
    `;

    libraryContainer.appendChild(bookCard);
  });

  // Add event listeners to buttons AFTER elements are created
  document.querySelectorAll(".toggle-read").forEach((button) => {
    button.addEventListener("click", (e) => {
      toggleRead(e.target.dataset.id);
    });
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      removeBook(e.target.dataset.id);
    });
  });
}

function toggleRead(id) {
  const book = myLibrary.find((b) => b.id === id);
  if (book) {
    book.toggleRead();
    updateLibraryUI();
  }
}

function removeBook(id) {
  const index = myLibrary.findIndex((b) => b.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    updateLibraryUI();
  }
}

// ✅ Ensure DOM is loaded before adding event listener
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("book-form");
  if (!form) {
    console.error("Book form not found!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);

    // ✅ Clear form fields after adding a book
    form.reset();
  });
});
