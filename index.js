import { updateUi } from "./modules/ui.js";
import { addBooksToLibrary } from "./modules/library.js";

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
  updateUi();
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
    const read = document.getElementById("read").checked;
    addBooksToLibrary(title, author, pages, read);
    updateUi();
    form.reset();
  });
  closeModal.addEventListener("click", () => {
    bookModal.close();
  });
});
