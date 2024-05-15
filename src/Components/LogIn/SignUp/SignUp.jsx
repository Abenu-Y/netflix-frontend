import React, { useState } from 'react'
import netflixLogo from '../../../assets/Images/icons/nflxlogo.png'
import { Link } from 'react-router-dom'
import './signup.css'
import '../../Footer/footer.css'
// import axios from 'axios'

import tv from '../../../assets/LoginImages/tv.png'
import mob from '../../../assets/LoginImages/mob.jpeg'
import kids from '../../../assets/LoginImages/kids.png'
import video from '../../../assets/Video/videoontv.mp4'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'


function SignUp() {

   const [email,setEmail] = useState('')
   const [password,setPassword]=useState('')
   const auth = getAuth()
   async function handleSignUp(e){
            e.preventDefault()
          createUserWithEmailAndPassword(auth,email,password).then((user)=>{
          // console.log(user)
         }).catch((err)=>{
          console.log(err)
         })
    }

  //  const createUser = (event)=>{

  //       event.preventDefault();

  //       axios.post('http://localhost:1234/signup',{
  //         Email:email,
  //         Password:password
  //       }).then(()=>{
  //         console.log('user has been created ')
  //       })
  //  }

   //console.log(email)
   //console.log(password)

  return (

    <>
            <div className='signUp-back-wall'>
                        
                <div className='signUp-header'>
                        <div><img src={netflixLogo} alt="Logo" /></div>
                        <div><button><Link to="/signin">Sign In</Link></button></div>
                </div>


                <div className='netflix-intro'>
                        <div className='netflix-intro-title'>Unlimted movies ,Tv shows and more </div>
                        <div className='netflix-intro-desc'>Watch anywhere. Cancel any time</div>
                </div>

                <form action="">
                            
                        <div className='ready'>Ready to watch? Enter your email or mobile number to create or restart your membership</div>

                        <div >
                                    <div className='signIn-form'>  
                                            <input type="email"  required onChange={(event)=>setEmail(event.target.value)} />
                                            <label htmlFor="">Email or Phone number</label>
                                    </div>

                                    <div className='signIn-form'>  
                                            <input type="password"  required onChange={(event)=>setPassword(event.target.value)}/>
                                            <label htmlFor="">password</label>
                                    </div>

                        </div>

                      <div className="bbtn" onClick={handleSignUp}>
                           <button type='submit' id='sign'>Get Start</button>
                      </div>
                                    
                   

                </form>

            </div>



   

       <div className="signup-grid-container">

               <div className=" item1">
                    <div className="tv-title">Enjoy on your TV </div>
                    <div className="tv-description">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
                </div>



                <div className="item2">
                    <img src={tv} alt="tv" />
                    <div className='video-wrapper'>
                      <video autoPlay playsInline muted loop>
                        <source src={video} type='video/mp4' />
                      </video>
                    </div>
                </div>


                <div className="item3">
                    <img src={mob} alt="watch-offline" />
                 </div>

                <div className="item4">
                    <div className="item4-title">Download your shows to watch offline </div>
                    <div className="item4-description">Save your favorites easily and always have something to watch.</div>
                </div>


                <div className="item5">
                   <div className='item5-title'>Watch everywhere</div>
                   {/* <div><h1>everywhere</h1></div> */}
                   <div className='item5-description'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
                </div>


                <div className="item6">
                    <img src={kids} alt="kids" />
                 </div>

                <div className="item7">
                    <div className="item7-title">Create profiles for kid</div>
                    <div className="item7-description">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</div>
                </div>

         
       </div>



{/* <div className='acc'>

    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div> */}



             {/* sixth-section */}

             {/* <div className="frequently-asked">

                   <div>Frequently Asked Questions</div>

                   <div>
                         <div>
                               <div>What is Netflix ?</div>
                               <div>
                                <p>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                </p>

                                <p>
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                                </p>
                               </div>
                         </div>

                         <div>
                               <div>How much does Netflix Cost ?</div>
                               <div>
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.</p>
                               </div>
                         </div>

                         <div>
                               <div>Where can I watch ?</div>
                               <div>
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>

                                <p>
You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                               </div>
                         </div>

                         <div>
                               <div>How do I cancel ?</div>
                               <div>
                                <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                               </div>
                         </div>

                         <div>
                               <div>What can I Watch on Netflix</div>
                               <div>
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                </div>
                         </div>

                         <div>
                               <div>Is Netflix good for kids ?</div>
                               <div>
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                               </div>
                         </div>

                        
                   </div>
             </div> */}


            <div className="footer-outer-wrapper">

                    <div className="footer">
                      

                      <div className='footer-links pad'>
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


                  </div>
            </div>

     

                 

    </>
  )
}

export default SignUp