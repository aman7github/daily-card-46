
import React from 'react'
import {HiOutlineArrowLeft} from "react-icons/hi"
import "../Css/Booking.css"
import {useNavigate} from "react-router-dom"
import {Link } from "react-router-dom"
import {BiCurrentLocation} from "react-icons/bi"
import {TbCurrentLocation} from "react-icons/tb"
import {BsMap} from "react-icons/bs"
import {TfiLocationPin} from "react-icons/tfi"
import { AuthContext } from '../AuthContext/AuthContextProvider'

const Booking = () => {

    const [currentlocation,setcurrentlocation] = React.useState()
    const [currentState,setcurrentState ] = React.useState()
    const [typed,settyped] = React.useState('')
    const [RecentSearched,setRecentSearch] = React.useState('')
    const{choosedLocation,GetChoosedLocation} = React.useContext(AuthContext)
  

    // <------------------------------Geting live location by using api------------------------------------>

    const Getlocation=()=>{
        fetch(`https://ipapi.co/json`)
        .then((res)=>res.json())
        .then((res)=>{
         setcurrentlocation(res.city)
         setcurrentState(res.region)
         settyped(res.city +" , " + res.region)
        })
        .catch((err)=>console.log(err))
    }
  
  
     const handleclick=()=>{
       Getlocation()
      }
    // console.log(currentlocation,currentState)


//   <------------------------Grab value which is type on input box-------------------------------------->
    
          const handlechange=(e)=>{
              settyped(e.target.value)
          }
         
    // <--------------------------Change button css when input box not empty-------------->
      
        const ref = React.useRef(null)

          if(typed!=''){
            ref.current.classList.add("ConfirmBtnAfterInputFilled")
          }


//   <--------function for Recent location----and by Authcontext set value of typed location globally--------------->
         

         const navigate = useNavigate()

         
            const btnclicked=()=>{
               setRecentSearch(typed)
               GetChoosedLocation(typed)
               navigate("/")
             
            }

            
            //console.log(choosedLocation)

              
             


  return (
    <>


    <Link to="/" >
     <HiOutlineArrowLeft className='arrow2' />
    </Link>

    {/* <-------------------First Div-------------------------> */}

   <div className='firstBookingDiv'>
     <div className='iconDiv'>
       <BiCurrentLocation className='location1' /> 
     </div>
     <input type="text" className='BookingInput' placeholder='select your starting point'  value={typed} onChange={handlechange}  />

     <div className='currentLocationDiv' onClick={handleclick} >
       <TbCurrentLocation className='location2' /> 
       <p>Current Location</p>
     </div>
      
      <div className='currentLocationDiv' >
       <BsMap className='map' />
       <p className='mapP' >Select Location on Map</p>

      </div>

    </div>


     {/* <---------------------secondDiv----------------------------> */}

    <div className='RecentSeacrchDiv'>
        <div>
          <div> <p>RECENTLY SEARCHED LOCATIONS</p> </div>
          <div>  <TfiLocationPin className='RecentSearchIcon' />  <p> {RecentSearched}</p> </div>
        </div>
         
        <div>
           <div> <p>SUGGESTED PICK UP LOCATIONS</p> </div>
           <div>  <TfiLocationPin className='RecentSearchIcon' />  <p>Bangalore International Airport</p> </div>
        </div>

    </div>
   {/* <-------------------------Button------------------------------------> */}
       
     



   
       <button  className='ConfirmBtn' onClick={btnclicked}  ref={ref}  >  CONFIRM PICKUP LOCATION</button>
    

    </>
  )
}

export default Booking

