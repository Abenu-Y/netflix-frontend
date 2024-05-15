import React from 'react'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'

import moviesRequests from '../../Utils/moviesRequest'

function Movies() {
  return (
    <>
       <Banner />
       <RowList array={moviesRequests} />
    </>
  )
}

export default Movies