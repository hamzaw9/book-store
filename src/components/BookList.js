/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBookItems } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, []);
  return (
    <div className="bookList">
      {books.length > 0
        && books.map((book) => <Book key={book.item_id} bookProp={book} />)}
    </div>
  );
};

export default BookList;
