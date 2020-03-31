import React, { useState } from 'react'
import Footer from '../utils/Footer'
import ListingsContainer from '../Listings/ListingsContainer'
import MainNavBar from '../utils/MainNavBar'
import SecondaryNavBar from '../utils/SeconderyNavBar'
import closeDropDownsHandler from '../../utils/closeDropDownsHandler'
import useQuery from '../../hooks/useQuery';

const MainPage = () => {
  window.onclick = e => closeDropDownsHandler(e)
  const [listings, setListings] = useState([])
  const queryObj = useQuery()
  return (
    <div className="align-column">
      <MainNavBar />
      <SecondaryNavBar setListings={setListings} queryObj={queryObj}/>
      <ListingsContainer listingsFromParent={listings} queryObjFromParent={queryObj} />
      <Footer />
    </div>
  )
}

export default MainPage
