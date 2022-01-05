import React from 'react';
import BookDate from "./BookDate";
import './BookItem.css';

function BookItem(props) {
    return (
        <div className="book">
            <div><BookDate date={props.date} /></div>
            <div>
                <h2 className="book__title">{props.title}</h2>
                <div className="book__price">${props.price}</div>
            </div>
        </div>
    )
}

export default BookItem;
