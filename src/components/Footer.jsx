import React from 'react'
import "../Css/Footer.css"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsInstagram,BsFacebook,BsYoutube} from "react-icons/bs"
import {TiSocialLinkedinCircular} from "react-icons/ti"



const Footer = () => {
  return (
    <div className='container' >

    
     <p  className='containerFirstP' >We operate in many other cities</p>
      
      <div className='secondDiv2' >

        <div>Bangalore</div>
        <div>Pune</div>
        <div>Delhi NCR</div>
        <div>Mumbai</div>
        <div>Chennai</div>
        <div>Hyderabad</div>
        <div>Hyderabad</div>
        <div>Kolkata</div>
        <div>Ahmedabad</div>
        <div>Coimbatore</div>
        <div>Indore</div>
        <div>Indore</div>
        <div>Mangalore</div>
        <div>Mangalore</div>
        <div>Vizag</div>
        <div>Goa</div>
        <div>Nagpur</div>
        <div>Kochi</div>
        <div>Vijayawada</div>
        <div>Siliguri</div>
        <div>Bhopal</div>
        <div>Lucknow</div>
        <div>Guwahati</div>
        <div>Bhubaneswar</div>
        <div>Vadodara</div>
        <div>Vadodara</div>
        <div>Udupi-Manipal</div>
        <div>Trichy</div>
        <div>Madurai</div>

      </div>
     
       <div className='icon' >
        <p>Let's keep in touch</p>
        <div>
         <AiFillTwitterCircle />
         <BsInstagram />
         <BsFacebook />
         <BsYoutube className='youtube' />
         <TiSocialLinkedinCircular className='link' />
        </div>
       </div>

       <div className='lastDiv2'  >

         <div>Never Stop Living.</div>
          <div className='lastInnerdiv' >
            <div>
                <img src="https://www.zoomcar.com/img/image.png" alt="pic" />
                <p>Scan this QR code to download app.</p>
            </div>
            <div>
                <p>DOWNLOAD ZOOMCAR APP</p>
                <p>We have incredible offers,</p>
                <p>discounts & much more in our app.</p>
            </div>
          </div>
       </div>
     
     <hr  className='hr' />
     <p className='finalLastP' >By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2012-2022 © Zoomcar™ Ltd. All rights reserved.</p>

    </div>
  )
}

export default Footer