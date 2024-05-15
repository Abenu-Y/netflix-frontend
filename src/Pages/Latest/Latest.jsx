
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'
import latestReq from '../../Utils/latestReq'

function Latest() {
  return (
    <>
       <Banner />
       <RowList array={latestReq}  />
    </>
  )
}

export default Latest