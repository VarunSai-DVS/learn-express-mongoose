let BookInstance = require('../models/bookinstance');
const Book = require("../models/book");

function get_books () {
  return BookInstance.find({'status': 'Available'}, 'title status').populate('book');
}

exports.show_all_books_status = async function(res) {
  let books = await get_books().exec();
  return res.send(books.map(function(b) {
    return b.book.title + ' ' + b.status;
  }));
}