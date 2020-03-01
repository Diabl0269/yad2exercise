import React from "react";

const Checkbox = ({ item, selectedItems, setItem }) => {
  const handleCheckboxClick = item => {
    let newSelectedItem;
    if (selectedItems.includes(item))
      newSelectedItem = selectedItems.filter(curItem => curItem !== item);
    else newSelectedItem = selectedItems.concat(item);
    setItem(newSelectedItem);
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
