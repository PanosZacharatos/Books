import React,{useState} from 'react';
import './BookFilter.css';

function BookFilter(props) {

    const [year,setYear] = useState(2020)

    const handleChange = (e) =>{
        props.onChangeFilter(e.target.value);
        setYear(e.target.value);
    }

    return (
        <div className="filters">
            <div className="filter">
                <label>Filtered By Year</label>
                <select value={year} onChange={handleChange}>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    )
}

export default BookFilter;
