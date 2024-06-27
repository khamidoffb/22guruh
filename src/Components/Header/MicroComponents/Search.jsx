import React from 'react';

function Search(props) {
    return (
        <div>
            <input style={{
                border: '1px solid silver',
                outline: 'none',
                padding: '8px 15px',
                borderRadius: '25px'
            }} type="text" placeholder='Search' />
        </div>
    );
}

export default Search;