import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
          />
          <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
            Remove Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
