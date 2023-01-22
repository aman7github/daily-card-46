import React from 'react'
import "../Css/Home.css"
import { TbArrowsLeftRight } from 'react-icons/tb';
import {FaPlaneDeparture} from "react-icons/fa"
import {BiCurrentLocation} from "react-icons/bi"
import {Link as RouteLink} from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContextProvider';
import {BsCalendarDay} from "react-icons/bs"





const Upperdiv = () => {

   
    const Ref = React.useRef(null)
    const Ref2 = React.useRef(null)
    const Ref3 = React.useRef(null)
   

   
 

    // <-----------------Put the value of typed location in to input box --------------> 
      
         const {choosedLocation} = React.useContext(AuthContext)

         // console.log(choosedLocation)

     
    // <-----------------change css of input box and show calender input box  --------------> 
         
          const handleclick=()=>{
      
              Ref.current.classList.add("LastInput2Afterclick")
              Ref2.current.classList.add("lastInputbtnAfterclick")
              Ref3.current.classList.add("green")
              
          }
        
        
          // if(choosedLocation!=null){
          //   handleclick()
          // }




  return (
    <>

<div className='topdiv'>
        <img className='topdivImage' src="https://www.zoomcar.com/img/hero-banner-web.png" alt="pic" />

     <div className='topdivUpperdiv'>
     
      <p className='firstline' >The perfect car for your next trip is just around the corner</p>
      <p className='secondline'  >Book your drive now!</p>

     </div>

  <div className='topdivInputdiv' >
    
    <button className='uperrInputbtn' ><TbArrowsLeftRight className='arrowicon' /> Round Trip </button>
    <button  className='uperrInputbtn' onClick={handleclick}  ref={Ref3} > <FaPlaneDeparture className='arrowicon' />Confirm Trip Date </button>

    <RouteLink to="/booking" >
     <input type="text" className='LastInput' placeholder='   Pick up city,Airpot,Address or Hotel' value={choosedLocation}   />    <br />
    </RouteLink>

    <BiCurrentLocation className='locationicon' /> <br />

    <RouteLink to="/calendar" >
     <input type="text" className='LastInput2' placeholder='            Confirm Booking date' ref={Ref}  /><br />
    
    </RouteLink>
    

    <button  className='LastInputbtn' ref={Ref2}  >FIND CARS</button>
     
  </div>

    </div>
  
  <div className='headingBelowTopdiv'>
       <p>
         CHOOSE FROM OUR WIDE RANGE OF CARS
        </p>
  </div>



    </>
  )
}

export default Upperdiv