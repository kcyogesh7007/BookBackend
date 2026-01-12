const express = require("express");
const { books } = require("./database/connection");
const app = express();

require("./database/connection");

app.use(express.json());

app.get("/books", async (req, res) => {
  const allBook = await books.findAll();
  res.json({
    message: "Books fetched successfully",
    data: allBook,
  });
});

app.post("/books", async (req, res) => {
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
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
