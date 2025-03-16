import Book from "./Book.js";

const bookArray = [];

export function addBooksToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  bookArray.push(newBook);
}

export function getLibrary() {
  return bookArray;
}

export function toggleReadStatus(id) {
  const book = bookArray.find((b) => b.id === id);
  if (book) {
    book.toggleRead();
  }
}
/*export function removeBook() {}*/
