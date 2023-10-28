import Book from './Book';

const BookList = () => {
  const books = [
    { title: 'Mindset', author: 'Shadman', id: 0 },
    { title: 'Eat that frog', author: 'Naresh', id: 1 },
  ];

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BookList;
