
import React from 'react'
import "../Css/Calendar.css"
import {BsArrowLeft,BsArrowRight} from "react-icons/bs"
import Calendar from 'react-calendar'
import {Link as RouteLink} from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContextProvider'




const CalendarFun = () => {

    const{Sdate1,Sdate2,Stime1,Stime2} = React.useContext(AuthContext)

    const [date, setdate] = React.useState(new Date());
   
     const onChange=(date)=>{
      
        setdate(date)
        Sdate1(date)
        
     }
  
     const [date2, setdate2] = React.useState(new Date());
   
     const onChange2=(date2)=>{
      
        setdate2(date2)
        Sdate2(date2)
        
     }
   
    
  // <--------------------for get time to range div------------------->

     const [value,setvalue]= React.useState('')
     const [value2,setvalue2]= React.useState('')

     const ref = React.useRef(null)
     const ref2 = React.useRef(null)
   
     const Getvalue=(e)=>{
        setvalue(e.target.value)
        Stime1(e.target.value)
     }

     const Getvalue2=(e)=>{
      setvalue2(e.target.value)
      Stime2(e.target.value)
   }

   
   

  return (
    <div className='MainContainer'>

  {/* <--------------------arrow navigation--------------------> */}

    <div className='arrowdiv' >
      <RouteLink to="/"  >
       <BsArrowLeft className='leftarrow' />
      </RouteLink>
       <p>Choose Trip Dates</p>
    </div>


  {/* <-----------------selected date store div----------------> */}

      <div className='dateDiv' >
          <div>
          <p>Date - { date.toDateString()}</p>
          <p> Time -  {value}</p>
          </div>
          <BsArrowRight className='rightarrow' />
          <div>
          <p>Date - { date2.toDateString()}</p>
          <p> Time -  {value2}</p>
          </div>
      </div>

     {/* <-------------------calendar div --------------------------> */}

      <div className='calendarMainDiv'>
        
        <div >
        <Calendar className='calendar' onChange={onChange} value={date} />  
        </div>

        <div> 
        <Calendar className='calendar' onChange={onChange2} value={date2} />  
        </div>

      </div>

     {/* <-------------------date Range-------------------------------> */}
      
      <div className='Rangediv'>
        <label className='label' > Pick Up Time </label>
       <input ref={ref} className="rangebar" type="range" name="range"  min="00.00" max="24.00" step="0.01" value={value} onChange={Getvalue} />
       
       <br />

       <label className='label' > Drop Off Time </label>
       <input ref={ref2} className="rangebar" type="range" name="range2"  min="00.00" max="24.00" step="0.01" value={value2} onChange={Getvalue2} />
       
      </div>
       
       <RouteLink to="/choosecar">
        <button  className='Continuebtn' >CONTINUE</button>
       </RouteLink>
    </div>
  )
}

export default CalendarFun