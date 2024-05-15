import React from 'react'

import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'
import requests from '../../Utils/requests'

function Home() {
  return (
    <>
       <Banner />   
       <RowList array={requests} />
  

    </>
  )
}

export default Home;


