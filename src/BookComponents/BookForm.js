import React,{useState} from 'react';
import './BookForm.css';

function BookForm(props) {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [date,setDate] = useState('');

    const titleChangeHandler = (e) =>{
        setTitle(e.target.value);
        //console.log(e.target.value);
    }
    const priceChangeHandler = (e) =>{
        setPrice(e.target.value);
        //console.log(e.target.value);
    }
    
    const dateChangeHandler = (e) =>{
        setDate(e.target.value);
        //console.log(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const bookData = {
            title, 
            price,
            date:new Date(date)
        };
        setTitle('');
        setPrice('');
        setDate('');
        //console.log(bookData);
        props.onSaveBookData(bookData);
        props.handleShowForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new_books">
                <div className="new_book">
                    <label>Title</label>
                    <input
                        type = "text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new_book">
                    <label>Price</label>
                    <input
                        type = "number"
                        min = '0.1'
                        step= '0.1'
                        value = {price}
                        onChange={priceChangeHandler}
                    />
                </div>
                <div className="new_book">
                    <label>Date</label>
                    <input
                        type= "date"
                        min = '2000-01-01'
                        max = '2021-12-31'
                        value = {date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new_book_submit'>
                    <button type='submit'>Add Book</button>
                </div>
            </div>
        </form>
    )
}

export default BookForm;
