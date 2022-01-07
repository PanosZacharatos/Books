import React from 'react'
import BookItem from "./Bookitem";

function Book(props) {
    return (
      <div>    
        <BookItem date={props.books[0].date} title={props.books[0].title} price={props.books[0].price} />
        <BookItem date={props.books[1].date} title={props.books[1].title} price={props.books[1].price} />
        <BookItem date={props.books[2].date} title={props.books[2].title} price={props.books[2].price} />
        <BookItem date={props.books[3].date} title={props.books[3].title} price={props.books[3].price} />
      </div>
    )
}

export default Book;
