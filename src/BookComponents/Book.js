import React from 'react'
import BookItem from "./Bookitem";
import BookFilter from './BookFilter';
import BookDate from './BookDate';

function Book(props) {

    

    const onChangeFilter = (givenYear) => {
      console.log(givenYear);
    }

    return (
      <div>    
        <BookFilter onChangeFilter={onChangeFilter} />
        {props.books.map(book=><BookItem key={book.id} date={book.date} title={book.title} price={book.price} />)}
        
      </div>
    )
}

export default Book;
