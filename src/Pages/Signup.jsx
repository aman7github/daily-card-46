import React from 'react'
import "../Css/signup.css"
import {BsFacebook,BsGoogle} from "react-icons/bs"
import {Link as RouteLink} from "react-router-dom"



const Signup = () => {




  return (
    <>
     
     <div className='Imagediv'>
      <img src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="pic" />
      
       <h2>Enter details to login/sign-up</h2>
     
     </div>

      <div className='mobileNumberDiv'>
        <div className='mobilefirstdiv' ><p>IND +91</p></div>
        <div className='mobileseconddiv' > <RouteLink to="/mobile" ><p className='mobileSecondP' >Enter Mobile Number</p></RouteLink> </div>

      </div>
     
     <div className='emailDiv' ><p>Continue with Email ID</p></div>

     <div className='Social' ><p>Continue via Social </p> <BsFacebook className='face' /> <BsGoogle className='google' />   </div>

    </>
  )
}

export default Signup