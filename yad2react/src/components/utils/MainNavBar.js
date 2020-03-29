import React from 'react'
import { A } from 'hookrouter'
const MainNavBar = () => {
  const personalZoneUri = `/user`
  const favoritesUri = '/user/favorites'
  const newListingUri = '/user/listings/add'
  const dosentExistAlert = text => alert(`כאן יהיה עמוד ${text}`)

  const mainNavBarCategories = [
    { text: 'נדל"ן', clickHandler: dosentExistAlert },
    { text: 'רכב', clickHandler: dosentExistAlert },
    { text: 'יד שנייה', clickHandler: dosentExistAlert },
    { text: 'הכל לעסק', clickHandler: dosentExistAlert },
    { text: 'דרושים', clickHandler: dosentExistAlert },
    { text: 'חיות מחמד', clickHandler: dosentExistAlert },
    { text: 'בעלי מקצוע', clickHandler: dosentExistAlert },
    { text: 'עוד...', clickHandler: dosentExistAlert }
  ]

  const mainNavBarActions = [
    { text: 'השוואת רכבים', clickHandler: dosentExistAlert },
    { text: 'חיפושים אחרונים', clickHandler: dosentExistAlert },
    { text: 'מודעות שמורות', clickHandler: dosentExistAlert },
    { text: 'אזור אישי' }
  ]

  return (
    <div className="main-nav-bar--container">
      <ul className="list__nav-bar right-list">
        <li className="main-nav-bar--image" key="img">
          <button className="main-nav-bar--image">
            <img src="/images/Yad2_logo_white2.svg" alt="yad2logo" />
          </button>
        </li>
        {mainNavBarCategories.map(category => (
          <li key={category.text}>
            {(category.text === 'נדל"ן' && (
              <div className="main-nav-bar-button">
                <A className="white-text" href="/">
                  {category.text}{' '}
                </A>
              </div>
            )) || (
              <button
                className="main-nav-bar-button"
                onClick={() => category.clickHandler(category.text)}
              >
                {category.text}
              </button>
            )}
            <div className="dropdown">
              בלה בלה בלה
              <br />
              ננסה ככה
            </div>
          </li>
        ))}
      </ul>
      <ul className="list__nav-bar">
        {mainNavBarActions.map(action => {
          return (
            <li key={action.text}>
              {(action.text === 'אזור אישי' && (
                <div className="main-nav-bar-button">
                  <A className="white-text" href={personalZoneUri}>
                    {action.text}{' '}
                  </A>
                </div>
              )) ||
                (action.text === 'מודעות שמורות' && (
                  <div className="main-nav-bar-button">
                    <A className="white-text" href={favoritesUri}>
                      {action.text}{' '}
                    </A>
                  </div>
                )) || (
                  <button
                    className="main-nav-bar-button"
                    onClick={() => action.clickHandler(action.text)}
                  >
                    {action.text}
                  </button>
                )}
            </li>
          )
        })}
        <li key="addListingButton">
          <A className="main-nav-bar-button add-post-button" href={newListingUri}>פרסום מודעה </A>
        </li>
      </ul>
    </div>
  )
}

export default MainNavBar
