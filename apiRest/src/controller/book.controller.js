const Book = require('../models/book.js')
let book = new Book ('el color purpura', 'Alice Walker',1)
let book2 = null

function getStart(req, res){
    let respuesta = {error: false, codigo: 200, mensaje: 'punto de inicio'}
    res.send(respuesta)
}

// todos los libros, en este caso un objeto de la clase Book
function getBook(req, res){
    let respuesta; 
    if(book != null){
        respuesta = book
    } else {
        respuesta = {error: true, codigo:200, mensaje: 'el libro no existe'}
    }

    res.send(respuesta)
}
// un libro por parametro URL con query

function getBook2(req, res){
    let id_book = req.query.id_book
    console.log(id_book);
    let respuesta; 
    if(book != null &&(!id_book || title === book.id_book) ){
        respuesta = {error: false, codigo: 200, data: book}
    } else {
        respuesta = {error: true, codigo:200, mensaje: 'el libro no existe'}
    }

    res.send(respuesta)
}

// un libro por parametro URL con params

function getBook3(req, res){
    let id_book = req.params.id_book
    let respuesta; 
    if(book2 != null &&(!id_book || id_book === book2.id_book) ){
        respuesta = {error: false, codigo: 200, data: book2}
    } else {
        respuesta = {error: true, codigo:200, mensaje: 'el libro no existe'}
    }

    res.send(respuesta)
}

// Crear un libro en el caso de que book2 sea null
function postBook(req, res){
    let respuesta;
    console.log(req.body);
    if(book2 === null){

        book2 = new Book (req.body.title, req.body.author, req.body.id_book)

        respuesta = {error:false, codigo:200, mensaje: 'libro creado', data: book2}
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'el libro ya existe'}
    }
  
    res.send(respuesta)
}

// Modificar un libro identificando por id
function putBook(req, res){
    let respuesta;
    console.log(req.body);
    if(book2 != null && book2.id_book == req.body.id_book){

        book2.title = req.body.title
        book2.author = req.body.author

        respuesta = {error:false, codigo:200, mensaje: 'libro actualizado', data: book2}
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'el libro no existe'}
    }
  
    res.send(respuesta)
}

function deleteBook(req, res){
    let respuesta;
    console.log(req.body);
    if(book2 != null && book2.id_book == req.body.id_book){

        book2 = null

        respuesta = {error:false, codigo:200, mensaje: 'libro eliminado', data: book2}
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'el libro no existe'}
    }
  
    res.send(respuesta)
}
module.exports = {getStart, getBook, getBook2, getBook3, postBook, putBook, deleteBook}