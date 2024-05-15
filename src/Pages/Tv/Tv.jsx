import React from 'react'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'

import tvRequest from '../../Utils/tvRequests'


function Tv() {
  return (
    <>
       <Banner />
       <RowList array={tvRequest}  />
    </>
  )
}

export default Tv