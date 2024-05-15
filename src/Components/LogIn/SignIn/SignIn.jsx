import React, { useState } from 'react'
import netflixLogo from '../../../assets/Images/icons/nflxlogo.png'
import './signin.css'
import { Link,useNavigate} from 'react-router-dom'
// import axios from 'axios'

import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

function SignIn() {

    const [loginemail,setLoginEmail]=useState('')
    const [loginPassword,setLoginPassword]=useState('')
    const navigateTo = useNavigate()


    const auth = getAuth()
    async function handleSignIn(e){
        // e.preventDefault()
        e.preventDefault()

        signInWithEmailAndPassword(auth,loginemail,loginPassword).then((user)=>{
                console.log(user)
                navigateTo('/')
        }).catch((err)=>{
                 console.log(err)
       })
  }

//     const LoginUser = (event)=>{

//         event.preventDefault();

//         axios.post('http://localhost:1234/signin',
//                    {
//                             LoginEmail:loginemail,
//                             LoginPassword:loginPassword
//                     }).then((response)=>{
//                             console.log(response)
//                             console.log(response.data)
//                             if(response.data.length>0){
//                                 navigateTo('/home')
//                             }
//                             else{
//                                 navigateTo('/signin')
//                             }

//         // response.data.message? Navigate('/'):Navigate('/movies')
//                })
//    }

        return (
                <div className='body'>
                    <nav>
                        <div className="netflix-logo"><img src={netflixLogo} alt="Netflix-Logo" /></div>
                    </nav>

                    <div className="form-wrapper">

                        <h2>Sign In</h2>
                        <form action="">

                                <div className="form-control">
                                    <input type="email" required onChange={(event)=>setLoginEmail(event.target.value)}/>
                                    <label htmlFor="">Email or Phone number</label>
                                </div>

                                <div className="form-control">
                                    <input type="password" required onChange={(event)=>{setLoginPassword(event.target.value)}}/>
                                    <label htmlFor="">password</label>
                                </div>

                                <button type='button' className='sign' onClick={handleSignIn}>Sign In</button>
                                
                                <div className="form-help">
                                    <div className="remember-me">
                                        <input type="checkbox" name="" id="remember-me" />
                                        <label htmlFor="remember-me">Remember me</label>
                                    </div>
                                    <Link to="/">Need help ?</Link>
                                </div>

                        </form>

                                <p>New to Netflix ? <Link to="/signup">Sign Up now</Link></p>
                                <small>
                                    This page is protected by Google reCAPTCHA to ensure you're not bot <Link to="/">learn more </Link>
                                </small>
                    </div>

                    {/* <Footer /> */}

                </div> 
        )
}

export default SignIn