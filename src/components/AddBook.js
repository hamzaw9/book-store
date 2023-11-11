import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, getBookItems } from '../redux/books/booksSlice';

const AddBook = () => {
  const books = useSelector((state) => state.books.books);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        item_id: `item${books.length + 1}`,
        title,
        author,
        category: 'Category',
      }),
    ).then(() => {
      dispatch(getBookItems());
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <p className="form-heading">ADD NEW BOOK</p>
      <form onSubmit={handleSubmit}>
        <input
          className="input-text"
          value={title}
          onChange={onTitleChange}
          type="text"
          required
        />
        <input
          className="input-text"
          value={author}
          onChange={onAuthorChange}
          type="text"
          required
        />
        <select>
          <option className="default-option">Category</option>
          <option value="option1">Action</option>
          <option value="option2">fiction</option>
          <option value="option3">Romance</option>
        </select>
        <input className="input-submit" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default AddBook;
