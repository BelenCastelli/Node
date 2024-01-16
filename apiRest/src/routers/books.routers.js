const {Router} = require ('express')
const router = Router();
const bookscrtl = require ('../controller/books.controllers')


router.get('/books', bookscrtl.getBooks);
router.get('/books/:id_book', bookscrtl.getBooksId);
router.post('/books', bookscrtl.postBooks);
router.put('/books', bookscrtl.putBook);
router.delete('/books', bookscrtl.deleteBook);

module.exports = router