import React from 'react'

import CarCarousel from "../components/CarCarousel"
import Upperdiv from '../components/Upperdiv'
import Picdiv from "../components/Picdiv"
import CardCarousel from "../components/CardCarousel"
import Picdiv2 from "../components/Picdiv2"
import Footer from "../components/Footer"
import Navbar from "../AllRoutes/Navbar"



const Home = () => {
  
//     const Ref = React.useRef(null)
//     const Ref2 = React.useRef(null)
//     const Ref3 = React.useRef(null)
  

//     const handleclick=()=>{

//          Ref.current.classList.add("LastInput2Afterclick")
//          Ref2.current.classList.add("lastInputbtnAfterclick")
//          Ref3.current.classList.add("green")

//     }

//  console.log(Ref.current)



  return (
    <>
    {/* <div className='topdiv'>
        <img className='topdivImage' src="https://www.zoomcar.com/img/hero-banner-web.png" alt="pic" />

     <div className='topdivUpperdiv'>
     
      <p className='firstline' >The perfect car for your next trip is just around the corner</p>
      <p className='secondline'  >Book your drive now!</p>

     </div>

  <div className='topdivInputdiv' >
    
    <button className='uperrInputbtn' ><TbArrowsLeftRight className='arrowicon' /> Round Trip </button>
    <button  className='uperrInputbtn' onClick={handleclick}  ref={Ref3} > <FaPlaneDeparture className='arrowicon' />Airport Round Trip </button>

    <RouteLink to="/booking" >
    <input type="text" className='LastInput' placeholder='      Pick up city,Airpot,Address or Hotel' /> <br />
    </RouteLink>

    <BiCurrentLocation className='locationicon' /> <br />
    <input type="text" className='LastInput2' ref={Ref}  /><br />
    <button  className='LastInputbtn' ref={Ref2}  >FIND CARS</button>
     
  </div>

    </div>
  
  <div className='headingBelowTopdiv'>
       <p>
         CHOOSE FROM OUR WIDE RANGE OF CARS
        </p>
  </div> */}
        <Navbar />
       <Upperdiv />
       <CarCarousel />
        <Picdiv />
        <CardCarousel />
        <Picdiv2 />
        <Footer />


    </>
  )
}

export default Home