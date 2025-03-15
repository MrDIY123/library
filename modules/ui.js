import { getLibrary } from "./library.js";

export function updateUi() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  getLibrary().forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<h3> Title: ${book.title} </h3>
      <h3> Author: ${book.author} </h3>
      <h3> Pages: ${book.pages} </h3>
      <h3> Read: ${book.read} </h3>`;
    bookList.appendChild(bookCard);
  });
}
