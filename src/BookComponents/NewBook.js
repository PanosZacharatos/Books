import React from 'react';
import BookForm from './BookForm';
import './NewBook.css';

function NewBook(props) {
    const handleBookData = (bookData) =>{
        const completedBookData = {
            ...bookData,
            id: 'b' + (Math.random()*10).toString()
        }; 
        props.onAddNewBook(completedBookData);     
    };

    return (
        <div className="new_book_add">
            <BookForm onSaveBookData={handleBookData} />
        </div>
    )
}

export default NewBook;
