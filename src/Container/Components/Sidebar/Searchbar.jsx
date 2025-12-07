import React, { useState } from 'react';
import './style.css'


function Searchbar({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };
    return(
        <>
        <div className='searchbar-blogs'>
            <div className='searchbar-box'>
                <input type='search' 
                placeholder='Search here something...'
                value={query}
                onChange={handleChange}/>
            </div>
        </div>
        </>
    )
}

export default Searchbar