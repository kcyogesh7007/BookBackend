const {
  createBook,
  getAllBooks,
  getBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/books").post(createBook).get(getAllBooks);
router.route("/books/:id").get(getBook).delete(deleteBook).patch(updateBook);

module.exports = router;
