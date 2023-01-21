
import React from 'react'
import "../Css/Calendar.css"
import {BsArrowLeft} from "react-icons/bs"
import Calendar from 'react-calendar'
import {Link as RouteLink} from "react-router-dom"



const CalendarFun = () => {

    const [date, setdate] = React.useState(new Date());

     const onChange=(date)=>{
        setdate(date)
     }
   console.log(date)
    
  // <--------------------for get time to range div------------------->

     const [value,setvalue]= React.useState('')
     const [value2,setvalue2]= React.useState('')

     const ref = React.useRef(null)
     const ref2 = React.useRef(null)
   
     const Getvalue=(e)=>{
        setvalue(e.target.value)
     }

     const Getvalue2=(e)=>{
      setvalue2(e.target.value)
   }

     console.log(value2)
    

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

      </div>

     {/* <-------------------calendar div --------------------------> */}

      <div className='calendarMainDiv'>
        
        <div >
        <Calendar className='calendar' onChange={onChange} value={date} />  
        </div>

        <div> 
        <Calendar className='calendar' onChange={onChange} value={date} />  
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

        <button  className='Continuebtn' >CONTINUE</button>
    </div>
  )
}

export default CalendarFun