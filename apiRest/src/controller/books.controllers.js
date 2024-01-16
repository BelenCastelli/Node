const { log } = require('console');
const Book = require('../models/book.js')

let books = [
    new Book ("1984", "George Orwell", 100 ),
      new Book("Un mundo feliz", "Aldous Huxley", 101),
      new Book ("Fahrenheit 451", "Ray Bradbury", 102 ),
      new Book ("Orgullo y prejuicio", "Jane Austen", 103),
]

// let books = null


function getBooks(req, res){
    let respuesta; 
    if(books != null){
        respuesta = books
    } else {
        respuesta = {error: true, codigo:200, mensaje: 'el libro no existe'}
    }

    res.send(respuesta)
}

function getBooksId(req, res){
    let respuesta; 
    let id_book = req.params.id_book

    // if (books != null) {
    //     for(let book of books) {
    //         if(book.id_book == id_book){
    //             respuesta = {error: false, codigo: 200, data: book}
    //             break;
    //         } else {
    //             respuesta = {error:true, codigo: 200, mensaje: 'no existe el libro'}
    //         }
    //     } 
    // } else {
    //     respuesta = {error:true, codigo: 200, mensaje: 'no existen libros'}
    // }

    // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    if(books != null){
        let booksFilter = books.filter(book =>book.id_book == id_book)
        console.log(booksFilter);
        if(booksFilter.length > 0) {
            respuesta = {error: false, codigo: 200, data: booksFilter}
        } else {
            respuesta = {error:true, codigo: 200, mensaje: 'no existe el libro'}
        }

    }
    res.send(respuesta)
}

function postBooks(req, res){
    let respuesta;
    let id_book = req.body.id_book
    console.log(id_book);
    // if(books != null){
    //     let libroExiste = false
    //     for(let book of books){
    //         if(book.id_book === id_book){

    //             libroExiste = true
    //             break;
    //         } 
    //     }
    //     if(libroExiste == false) {
    //             books.push(new Book(req.body.title, req.body.author, req.body.id_book))
    //             respuesta = {error: false, codigo: 200, data: books}
    //         } else if (libroExiste == true){
    //             respuesta = {error:true, codigo: 200, mensaje: 'ya existe el libro'}
    //         }
    // } else {
    //     respuesta = {error:true, codigo: 200, mensaje: 'no existen libros'}
    // }

    // *El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
    // *Devuelve un valor de true/false

        if(books != null){
            let existe = books.some(book =>book.id_book === id_book)
            if(!existe) {
                books.push(new Book(req.body.title, req.body.author, req.body.id_book))
                respuesta = {error: false, codigo: 200, data: books}
            } else {
                respuesta = {error:true, codigo: 200, mensaje: 'ya existe el libro'}
            }

        } else {
            respuesta = {error:true, codigo: 200, mensaje: 'no existen libros'}
        }

    res.send(respuesta)
}

function putBook(req, res){
    let respuesta;
    let id_book = req.body.id_book

    if(books != null){
        let booksFilter = books.filter(book =>book.id_book == id_book)
        console.log(booksFilter);
        if(booksFilter.length > 0) {
            booksFilter[0].title = req.body.title
            booksFilter[0].author = req.body.author
            respuesta = {error:false, codigo:200, mensaje: 'libro actualizado', data: booksFilter}
        } else {
            respuesta = {error:true, codigo: 200, mensaje: 'no existe el libro'}
        }

    } else {
        respuesta = {error:true, codigo: 200, mensaje: 'no existen libros'}
    }
    res.send(respuesta)
}

function deleteBook(req, res){
    let respuesta;
    let id_book = req.body.id_book

    if(books != null){

        let indice = books.findIndex((book) => book.id_book == id_book)
        console.log(indice);
    
        if(indice != -1){
        books.splice(indice, 1)
        respuesta = {error:false, codigo:200, mensaje: 'libro eliminado', data: books}
    
        } else {
            respuesta = {error:true, codigo: 200, mensaje: 'no existe el libro'}
        }

    } else {
        respuesta = {error:true, codigo: 200, mensaje: 'no existen libros'}
    }
    res.send(respuesta)

    }

module.exports = {getBooks, getBooksId, postBooks, putBook, deleteBook}