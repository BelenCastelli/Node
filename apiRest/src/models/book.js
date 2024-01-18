class Book {
    constructor(title, author,price, photo, id_book){
        this.title = title
        this.author = author;
        this.price = price
        this.photo = photo
        this.id_book = id_book
        this.id_user;
    }
}

module.exports = Book