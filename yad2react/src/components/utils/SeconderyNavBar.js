import React from "react";

const SecondaryNavBar = () => {
  const dosentExistAlert = text => alert(`כאן יהיה עמוד ${text}`);
  const secondaryNavBarCategories = [
    { text: "מכירה", clickHandler: dosentExistAlert },
    { text: "השכרה", clickHandler: dosentExistAlert },
    { text: "דירות שותפים", clickHandler: dosentExistAlert },
    { text: 'נדל"ן מסחרי', clickHandler: dosentExistAlert }
  ];

  const secondaryNavBarActions = [
    { text: "כונס נכסים", clickHandler: dosentExistAlert },
    { text: 'מדד הנדל"ן', clickHandler: dosentExistAlert },
    { text: "יד1 דירות חדשות", clickHandler: dosentExistAlert },
    { text: "הערכת שווי נכס", clickHandler: dosentExistAlert }
  ];

  return (
    <div className="secondary-nav-bar--container">
      <ul className="list__nav-bar right-list">
        {secondaryNavBarCategories.map(category => (
          <li key={category.text} className="list-item__nav-bar">
            <button
              className="secondary-nav-bar-button"
              onClick={() => category.clickHandler(category.text)}
            >
              {category.text}
            </button>
          </li>
        ))}
      </ul>
      <ul className="list__nav-bar">
        {secondaryNavBarActions.map(action => (
          <li key={action.text} className="list-item__nav-bar">
            <button
              className="secondary-nav-bar-button"
              onClick={() => action.clickHandler(action.text)}
            >
              {action.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondaryNavBar;
