function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}


Book.prototype.summary = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? "Yes" : "No"}`;
};


const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);


console.log(myBook.summary());