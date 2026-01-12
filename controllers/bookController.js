const { books } = require("../database/connection");

exports.getAllBooks = async (req, res) => {
  const allBook = await books.findAll();
  res.json({
    message: "Books fetched successfully",
    data: allBook,
  });
};

exports.createBook = async (req, res) => {
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    return res.status(400).json({
      message: "please provide bookName,bookPrice,bookAuthor and bookGenre",
    });
  }
  await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre,
  });
  res.status(201).json({
    message: "Book added successfully",
  });
};

exports.getBook = async (req, res) => {
  const { id } = req.params;
  const book = await books.findByPk(id);
  res.status(200).json({
    message: "Book fetched succesfully",
    data: book,
  });
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  await books.destroy({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "Book deleted successfully",
  });
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.update(
    {
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,
    },
    {
      where: {
        id,
      },
    }
  );
  res.status(200).json({
    message: "Book updated successfully",
  });
};
