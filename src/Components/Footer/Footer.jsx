import React,{useState} from 'react'
import './footer.css'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';


function Footer() {
  const [code, setCode]=useState("Service Code")
  return (
    <div className="footer-outer-wrapper">
         <div className="footer-inner-wrapper">

            <div className="media">
              <a href="https://www.facebook.com/netflix" target='_blank'><FacebookOutlinedIcon /></a>
              <a href="https://www.instagram.com/netflix/" target='_blank'><InstagramIcon /></a>
              <a href="https://twitter.com/netflix" target='_blank'><TwitterIcon /></a>
              <a href="https://www.youtube.com/@Netflix" target='_blank'><YouTubeIcon /></a>
            </div>

            <div className='footer-links'>
                <ul>
                  <li><Link to="/description">Auto-Description</Link></li>
                  <li><Link to="/help-center">Help Center</Link></li>
                  <li><Link to="/gift-cards">Gift Cards</Link></li>
                  <li><Link to="/media-center">Media Center</Link></li>
                  <li><Link to="/investor-relations">Investor Relations</Link></li>
                  <li><Link to="/jobs">Jobs</Link></li>
                  <li><Link to="/terms-of-use">Terms of Use</Link></li>
                  <li><Link to="/privacy">Privacy</Link></li>
                  <li><Link to="/legal-notices">Legal Notices</Link></li>
                  <li><Link to="/cookie-preferences">Cookie Prefereneces</Link></li>
                  <li><Link to="/corporate-information">Corporate Information</Link></li>
                  <li><Link to="/contact-us">Contact Us </Link></li>
                </ul>
            </div>

            <button className="btn" onClick={()=>setCode("786-700")}>{code}</button>
            
            <div className="copy-right">&copy; 1997-2024 Netflix, inc.</div>
            <div className="dev">&#174; &trade; developed by <span><Link to="https://abenuy.com/" target='_blank'>Abenu Y</Link></span>.</div>
         </div>
    </div>
  )
}

export default Footer