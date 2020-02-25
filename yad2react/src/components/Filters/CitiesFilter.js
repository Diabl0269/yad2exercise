import React from 'react';
import CitiesAutoComplete from '../CitiesAutoComplete';

const CitiesFilter = () => {
    return (
        <div className="filters--field-container">
          חפשו עיר
          <CitiesAutoComplete />
        </div>
    )
}

export default CitiesFilter;