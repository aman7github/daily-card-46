import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import "../Css/Mobile.css"
import { useNavigate } from 'react-router-dom'
import {Link as RouteLink} from "react-router-dom"



const Mobile = () => {

    const [val,setval] = React.useState('')
    const [inputOtp,setinputOtp] = React.useState('')

    const navigate = useNavigate()


    const ref = React.useRef(null)
    const ref2 = React.useRef(null)

      const handleContinue=()=>{
        alert("Your Otp is 7894")
        ref2.current.classList.add("showInput")
        ref.current.classList.add("hideBtn")
      }

      const handlechange=(e)=>{
        setval(e.target.value)
      }
       

     if(val.length==10){
        ref.current.classList.add("contiBtnChange")
     }

      const handleSecondInput=(e)=>{
        setinputOtp(e.target.value)
      }

      // <-----------------------------------button after otp recieve------------------------------------>

       const FinalStepforSigup=()=>{
          if(inputOtp==7894){
            alert("Signup Successfully Complete")
             navigate("/")
          }else{
            alert("Entered Wrong Opt")
          }
          
       }




  return (
    <div className='AllCompInsideThis'>

     <RouteLink to="/signup" >
      <BsArrowLeft className='leftArrowMobile' />
    </RouteLink>

      <h2 className='h2Mobile' >Enter Mobile Number</h2>

      <div className='mainMobileDiv' >
        <div className='MobileFirstdiv' ><p>IND +91</p></div>
        <div className='MobileSeconddiv'  >  <input type="number"   placeholder='Mobile Number' value={val}   onChange={handlechange}    /> </div>
      </div>

        <div className='otpInput' ref={ref2} >
            <input  className='otpbox' type="number" placeholder='Enter Your Otp ' onChange={handleSecondInput} />
            <button  className='signupBtn' onClick={FinalStepforSigup} >Signup</button>
        </div>
            

        <button className='contiBtn' onClick={handleContinue} ref={ref} >CONTINUE</button>


    </div>
  )
}

export default Mobile