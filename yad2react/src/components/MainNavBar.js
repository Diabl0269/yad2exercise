import React from "react";

const MainNavBar = () => {
  const dosentExistAlert = text => alert(`כאן יהיה עמוד ${text}`);
  const mainNavBarCategories = [
    { text: 'נדל"ן', clickHandler: dosentExistAlert },
    { text: "רכב", clickHandler: dosentExistAlert },
    { text: "יד שנייה", clickHandler: dosentExistAlert },
    { text: "הכל לעסק", clickHandler: dosentExistAlert },
    { text: "דרושים", clickHandler: dosentExistAlert },
    { text: "חיות מחמד", clickHandler: dosentExistAlert },
    { text: "בעלי מקצוע", clickHandler: dosentExistAlert },
    { text: "עוד...", clickHandler: dosentExistAlert }
  ];

  const mainNavBarActions = [
    { text: "השוואת רכבים", clickHandler: dosentExistAlert },
    { text: "חיפושים אחרונים", clickHandler: dosentExistAlert },
    { text: "מודעות שמורות", clickHandler: dosentExistAlert },
    { text: "אזור אישי", clickHandler: dosentExistAlert }
  ];

  return (
    <div className="main-nav-bar--container">

       <ul className="list__nav-bar right-list">
        <li className="main-nav-bar--image" key='img'>
          <button className="main-nav-bar--image">
            <img src="/images/Yad2_logo_white2.svg" alt="yad2logo" />
          </button>
        </li>
        {mainNavBarCategories.map(category => (
          <li key={category.text}>
            <button
              className="main-nav-bar-button"
              onClick={() => category.clickHandler(category.text)}
            >
              {category.text}
            </button>
          </li>
        ))}
      </ul>

      <ul className="list__nav-bar">
        {mainNavBarActions.map(action => (
          <li key={action.text} >
            <button
              className="main-nav-bar-button"
              onClick={() => action.clickHandler(action.text)}
            >
              {action.text}
            </button>
          </li>
        ))}
        <li key='addListingButton'>
          <button className="main-nav-bar-button add-post-button">
            פרסום מודעה
          </button>
        </li>
      </ul> 
      
    </div>
  );
};

export default MainNavBar;