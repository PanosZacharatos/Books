import React,{useState} from 'react';
import BookForm from './BookForm';
import HideBookForm from './HideBookForm';
import './NewBook.css';

function NewBook(props) {

    const [showForm,setShowForm]=useState(false);
    
    const handleShowForm = () =>{
        setShowForm(!showForm);
    }

    const handleBookData = (bookData) =>{
        const completedBookData = {
            ...bookData,
            id: 'b' + (Math.random()*10).toString()
        }; 
        props.onAddNewBook(completedBookData);     
    };

    return (
        <div className="new_book_add">
            {showForm ? 
                <BookForm onSaveBookData={handleBookData} handleShowForm={handleShowForm} /> :
                <HideBookForm handleShowForm={handleShowForm} />
            }
        </div>
    )
}

export default NewBook;
