import React,{useState} from 'react';
import './BookFilter.css';

function BookFilter(props) {

    const dropdownChoices = [
        {year: 'All' , id: 'dc1'},
        {year: '2018' , id: 'dc2'},
        {year: '2019' , id: 'dc3'},
        {year: '2020' , id: 'dc4'},
        {year: '2021' , id: 'dc5'},
    ];
    const [year,setYear] = useState('All');

    const handleChange = (e) =>{
        props.onChangeFilter(e.target.value);
        setYear(e.target.value);
    }

    return (
        <div className="filters">
            <div className="filter">
                <label>Filtered By Year</label>
                <select value={year} onChange={handleChange}>
                    {dropdownChoices.map(choice=><option key={choice.id} value={choice.year}>{choice.year}</option>)}
                </select>
            </div>
        </div>
    )
}

export default BookFilter;
