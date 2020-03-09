import React from 'react';
import FloorFilter from './FloorFilter';
import SquareMetersFilter from './SquareMetersFilter'
import EntranceDateFilter from './EntranceDateFilter';

const AssetDetails = () => {
    
    return <div className="filters--fields-container border-bottom">
        <FloorFilter />
        <SquareMetersFilter />
        <EntranceDateFilter />
    </div>
}

export default AssetDetails;
