export default class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Yes" : "No";
    this.id = crypto.randomUUID();
  }
  toggleRead() {
    this.read = this.read === "Yes" ? "No" : "Yes";
  }
}
