import React, { useContext } from 'react';
import FiltersContext from '../../../context/FiltersContext';


const SearchAndReset = () => {

    const {getFilterdListings} = useContext(FiltersContext);

    return <div className='align-row'>
        <button className='main-nav-bar-button margin-right-half' onClick={getFilterdListings}>חיפוש</button>
        <button className='button-size margin-left ' onClick={() => alert('כאן יהיה כפתור ניקוי')}>ניקוי</button>
    </div>
}

export default SearchAndReset;