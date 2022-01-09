import React, {useState} from 'react';
import BookItem from "./Bookitem";
import BookFilter from './BookFilter';

function Book(props) {

    let [year,setYear] = useState('All');
    let filteredBooks = props.books ;
    const onChangeFilter = (givenYear) => {
      setYear(givenYear)

    }

    if(year !== 'All'){
      filteredBooks = props.books.filter(book=>year===book.date.getFullYear().toString());
    }

    return (
      <div>    
        <BookFilter onChangeFilter={onChangeFilter} />
        {
          filteredBooks.length === 0 ? 
          <p>No Books found</p> :
          filteredBooks.map(book=><BookItem key={book.id} date={book.date} title={book.title} price={book.price} />)
      
        }
        
      </div>
    )
}

export default Book;
