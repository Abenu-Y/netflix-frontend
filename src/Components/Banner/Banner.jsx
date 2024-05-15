
import React, { useEffect, useState } from 'react'
import axios from '../../Utils/axios'
import requests from '../../Utils/requests'
import bannerStyle from './banner.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';


const Banner = () => {
    const [movie,setMovie]=useState({})

    useEffect(()=>{
        (async () =>{

            try {
                //   const request = await axios.get(requests.fetchNetflixOriginals)
                //   const request = await axios.get(requests[0].fetchUrl)
                  const request = await axios.get(`http://localhost:1234/fetchData`)
 
                //   console.log(request)
                  setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            }
            catch(err){
                console.log("error",err)
            }
        })()
    },[])

    const truncate =(str,n)=>{
           return str?.length >n ? str.substr(0,n-1)+'...' :str;
    }


  return (
    <div className={bannerStyle.banner} style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        paddingTop:'150px',
        
    }}>

        <div className={bannerStyle.banner_contents} >

            <div></div>

            <h1 className={bannerStyle.banner_title}>{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className={bannerStyle.banner_buttons}>

                <button className={bannerStyle.banner_button} id={bannerStyle.play}>
                    <span ><PlayArrowIcon /> Play</span>
                </button>

                <button className={`${bannerStyle.banner_button} ${bannerStyle.list_btn}`}>
                    <span ><ReadMoreRoundedIcon style={{marginRight:"5px"}} /> more info</span>
                </button>
            </div>

            <h1 className={bannerStyle.banner_description}>{truncate(movie?.overview,200)}</h1>
            
        </div>

        {/* { <div className={bannerStyle.banner_fadeBottom} > </div> } */}

    </div>
  )
}

export default Banner