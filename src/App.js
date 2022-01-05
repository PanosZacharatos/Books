//import './App.css';
import Book from "./Book";

function App() {
  const books = [
    {
      id: 'b1',
      date: new Date(2012,3,22),
      title: 'Harry Potter',
      price: 32.45
    },
    {
      id: 'b2',
      date: new Date(2021,7,9),
      title: 'Lord of the rings',
      price: 77.59
    },
    {
      id: 'b3',
      date: new Date(2002,8,28),
      title: 'Hobbit',
      price: 12.11
    },
    {
      id: 'b4',
      date: new Date(2017,12,11),
      title: 'Game of thrones',
      price: 102.04
    }
  ];
  return (
    <div className="App">
      <Book books={books} />
    </div>
  );
}

export default App;
