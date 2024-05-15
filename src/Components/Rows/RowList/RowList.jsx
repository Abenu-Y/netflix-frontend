import React from 'react'
import Row from '../Row/Row'
// import requests from '../../../Utils/requests'


function RowList({array}) {
  return (
        <>
            {/* <Row title='Netflix Original' fetchUrl={requests.fetchNetflixOriginals} />
            <Row title='Treding Now' fetchUrl={requests.fetchTrending} isLargeRow={true}/>
            <Row title='Top Rated Movies' fetchUrl={requests.fetchTopRatedMovies} isLargeRow={true}/>
            <Row title='Action' fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
            <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Romance' fetchUrl={requests.fetchRomaceMovies} isLargeRow={true}/>
            <Row title='Family' fetchUrl={requests.fetchFamilyMovies} />
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow={true}/>
            <Row title='Tv Show' fetchUrl={requests.fetchTvShow} />
            <Row title='History' fetchUrl={requests.fetchHistory} isLargeRow={true}/>
            <Row title='Mystery' fetchUrl={requests.fetchMystery}/> */}

            {
            
              array?.map((item,index)=>(<Row key={index} title={item.title} fetchUrl={item.fetchUrl} isLargeRow={item?.isLargeRow}/>))
            }

        </>
  )
}

export default RowList