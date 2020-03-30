import React from "react";

const Checkbox = ({ item, selectedItems, setItem }) => {
  const handleCheckboxClick = item => {
    let newSelectedItems;
    if (selectedItems.includes(item))
      newSelectedItems = selectedItems.filter(curItem => curItem !== item);
    else newSelectedItems = selectedItems.concat(item);
    setItem(newSelectedItems);
  };

  return (
    <li className="checkbox__list-item" key={item}>
      <input
        type="checkbox"
        className="checkbox"
        onClick={() => handleCheckboxClick(item)}
      />
      {item}
    </li>
  );
};
export default Checkbox;
