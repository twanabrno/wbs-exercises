class LibraryItem {
    #title; 
    #author; 

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    getInfo() {
        return `Title: ${this.#title}, Author: ${this.#author}`;
    }
}



class Book extends LibraryItem {
    #pages; 

    constructor(title, author, pages) {
        super(title, author);
        this.#pages = pages;
    }

    getPages() {
        return this.#pages;
    }

    getInfo() {
        return `${super.getInfo()}, Pages: ${this.#pages}`;
    }
}

class Member {
    #name; 
    #booksCheckedOut; 

    constructor(name) {
        this.#name = name;
        this.#booksCheckedOut = [];
    }

    checkOutBook(book) {
        this.#booksCheckedOut.push(book);
        console.log(`${this.#name} checked out "${book.getTitle()}".`);
    }

    
    returnBook(book) {
        const index = this.#booksCheckedOut.indexOf(book);
        if (index > -1) {
            this.#booksCheckedOut.splice(index, 1);
            console.log(`${this.#name} returned "${book.getTitle()}".`);
        } else {
            console.log(`${this.#name} does not have "${book.getTitle()}" checked out.`);
        }
    }

    
    listBooks() {
        if (this.#booksCheckedOut.length > 0) {
            console.log(`${this.#name} has checked out the following books:`);
            this.#booksCheckedOut.forEach(book => {
                console.log(book.getInfo());
            });
        } else {
            console.log(`${this.#name} has no books checked out.`);
        }
    }
}


const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const book2 = new Book('1984', 'George Orwell', 328);

const member = new Member('John Doe');

member.checkOutBook(book1);
member.checkOutBook(book2);

member.listBooks();

member.returnBook(book1);

member.listBooks();