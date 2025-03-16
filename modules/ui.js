import { getLibrary } from "./library.js";
import { toggleReadStatus } from "./library.js";

const bookList = document.getElementById("book-list");

export function updateUi() {
  bookList.innerHTML = "";
  getLibrary().forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<h3> Title: ${book.title} </h3>
      <h3> Author: ${book.author} </h3>
      <h3> Pages: ${book.pages} </h3>
      <h3> Read: ${book.read} </h3>
      <button class="complete" data-id="${book.id}">100%</button>`;
    bookList.appendChild(bookCard);
  });
}

bookList.addEventListener("click", (event) => {
  if (event.target.classList.contains("complete")) {
    console.log("100% clicked");
    toggleReadStatus(event.target.dataset.id);
    updateUi();
  }
});
