import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Home = () => (
  <div className="home">
    <div className="container">
      <BookList />
      <AddBook />
    </div>
  </div>
);

export default Home;
