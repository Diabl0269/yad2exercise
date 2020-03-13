import React, { useContext } from 'react';
import FiltersContext from '../../../../context/FiltersContext';
import OnlyWithButton from './OnlyWithButton';

const OnlyWithFilter = () => {
    const { onlyWithPhotos, onlyWithPrice } = useContext(FiltersContext).queryObj
    
    return <div className='align-row '>
        הצג מודעות
        <OnlyWithButton text='עם מחיר' only={onlyWithPrice}/>
        <OnlyWithButton text='עם תמונה' only={onlyWithPhotos}/>
    </div>
}

export default OnlyWithFilter;