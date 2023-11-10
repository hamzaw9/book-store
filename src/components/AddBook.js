import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;

    dispatch(addBook({ title, author }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleAddBook}>
        <input
          className="input-text"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <input
          className="input-text"
          type="text"
          name="author"
          placeholder="Author"
          required
        />

        <button type="submit" className="input-submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
