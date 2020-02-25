import React from 'react';

const PriceFilter = ({price, setPrice}) => {
    return (
        <div className="filters--field-container">מחיר בש"ח
        <div className='filters__price-container'>
            <div className='filters__price-inner-container'></div>
            <div className='filters__price-inner-container'></div>
        </div>
        </div>
    )
}

export default PriceFilter;