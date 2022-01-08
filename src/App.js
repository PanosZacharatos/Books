import React, {useState} from "react";
import Book from "./BookComponents/Book";
import NewBook from "./BookComponents/NewBook";

function App() {
  const DUMMY_BOOKS = [
    {
      id: 'b1',
      date: new Date(2021,3,22),
      title: 'Book 1',
      price: 32
    },
    {
      id: 'b2',
      date: new Date(2021,7,9),
      title: 'Book 2',
      price: 77
    },
    {
      id: 'b3',
      date: new Date(2018,8,28),
      title: 'Book 3',
      price: 12
    },
    {
      id: 'b4',
      date: new Date(2019,2,1),
      title: 'Book 4',
      price: 102
    }
  ];

  const [books,setBooks] = useState(DUMMY_BOOKS);

  const addNewBook = (bookData) => {
    //console.log(bookData);
    setBooks(previousBooks=>{
      return[bookData,...previousBooks]
    })
  };

  return (
    <div className="App">
      <NewBook onAddNewBook={addNewBook} />
      <Book books={books} />
    </div>
  );
}

export default App;
