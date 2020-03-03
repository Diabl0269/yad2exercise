import React, {useContext} from "react";
import FiltersContext from '../../../context/FiltersContext';
import Checkbox from '../../Checkbox';

const AssetAttributes = () => {

const {selectedAttributes, setSelectedAttributes} = useContext(FiltersContext);

    const attributes = [
        "דלתות פנדור",
        "חניה",
        "מעלית",
        "מיזוג",
        "מרפסת",
        'ממ"ד',
        "סורגים",
        "מחסן",
        "גישה לנכים",
        "משפוצת",
        "מרוהטת",
        "בבלעדיות"
      ];

  return (
    <div className="filters__advanced--asset-attributes-container border-bottom">
      <b>מאפייני דירה</b>
      <div className="filters__advanced--asset-attributes checkbox__list-row">
        {attributes.map(
          attribute =>
            <Checkbox key={attribute} item={attribute} selectedItems={selectedAttributes} setItem={setSelectedAttributes}/>
        )}
      </div>
    </div>
  );
};

export default AssetAttributes;