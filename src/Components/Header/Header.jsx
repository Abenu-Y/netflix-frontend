import React ,{useState,useEffect,useRef} from 'react'
import './header.css'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import netflixLogo from '../../assets/Images/icons/nflxlogo.png'
import { Link } from 'react-router-dom';

import {signOut,getAuth} from 'firebase/auth'


function Header() {

    const [show, handleShow] = useState(false);
    const dropDownMenu = useRef();



    const DropDownMenu =()=>{
        dropDownMenu.current.classList.toggle('disp')
     }

//      const DropdownOnResize =()=>{
             
//           if(window.innerWidth < 800){
//               dropDownMenu.current.style.display='none'      
//           }
//      }

const auth = getAuth()
async function handleSignOut(){
    try{
          await signOut(auth)
    }
    catch(err){
        console.log(err)
    }
}


    useEffect(() => {
            window.addEventListener("scroll", () => {
            if (window.scrollY > 25) {
                  handleShow(true);
            } 
            else handleShow(false);
            });

         
        
  
    }, []);






  return (
     <div className="nav-outer-wrapper">
          <div className={`nav-inner-wrapper ${show && "black"}`}>
                    <div className="netflix-logo"><img src={netflixLogo} alt="Netflix-Logo" /></div>
                    
                    
                    <div className="dropdown" id='weta'>

                            <div className="dropbtn" onClick={DropDownMenu} >
                                  Browse <span className="material-symbols-outlined">arrow_drop_down</span>
                            </div>

                            <div id="myDropdown" className="dropdown-content" ref={dropDownMenu} >
                                    <Link to="/">Home</Link>
                                    <Link to="/latest">Tv Shows</Link>
                                    <Link to="/movies">Movies</Link>
                                    <Link to="/latest">Latest</Link>
                                    <Link to="/tv-shows">My List</Link>
                                    <Link to="/movies">Browse by Languages</Link>
                            </div>
                         
                     </div>


                <div className="first-navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tv-shows">Tv Shows</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/latest">Latest</Link></li>
                        <li><Link to="/movies">My List</Link></li>
                        <li><Link to="/tv-shows">Browse by Languages</Link></li>
                    </ul>
                 </div>

                 <div className='nav-icons'>
                      <SearchIcon />
                      <NotificationsNoneOutlinedIcon />
                      <button onClick={()=>handleSignOut}><PersonOutlineIcon /></button>
                      <ArrowDropDownIcon />
                 </div>
          </div>


     </div>
  )
}

export default Header