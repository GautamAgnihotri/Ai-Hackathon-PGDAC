exports.addNewBook = (req, res) => {
  res.json({ message: 'Add new book' });
};

exports.getAllBooks = (req, res) => {
  res.json({ message: 'Get all books' });
};

exports.getBookDetails = (req, res) => {
  res.json({ message: 'Get book details', bookId: req.params.id });
};

exports.updateBookInfo = (req, res) => {
  res.json({ message: 'Update book info', bookId: req.params.id });
};

exports.removeBook = (req, res) => {
  res.json({ message: 'Remove book', bookId: req.params.id });
};

exports.organizeBooksInRacks = (req, res) => {
  res.json({ message: 'Organize book in racks', bookId: req.params.id });
};
