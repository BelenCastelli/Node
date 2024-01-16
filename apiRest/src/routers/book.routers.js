const {Router} = require ('express')
const router = Router();
const bookctrl = require('../controller/book.controller')

router.get('/', bookctrl.getStart);
// router.get('/book', bookctrl.getBook)
router.get('/book', bookctrl.getBook2);
router.get('/book/:title', bookctrl.getBook3);
router.post('/book', bookctrl.postBook);
router.put('/book', bookctrl.putBook);
router.delete('/book', bookctrl.deleteBook);

module.exports = router;