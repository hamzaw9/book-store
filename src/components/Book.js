/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const Book = ({ title, author }) => {
  const [book, setBook] = useState('');
  useEffect(() => {
    setBook({ title, author });
  }, []);
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type="button">Delete Book</button>
    </div>
  );
};
export default Book;
