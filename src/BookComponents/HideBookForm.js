import React from 'react';

function HideBookForm(props) {
    return (
        <div>
            <button onClick={props.handleShowForm}>Add New Book</button>
        </div>
    )
}

export default HideBookForm;
