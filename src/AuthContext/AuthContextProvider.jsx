
import React from 'react'


export const AuthContext = React.createContext()


const AuthContextProvider = ({children}) => {

   const [choosedLocation,setchoosedLocation] = React.useState(null)
   const [selectedDate1,setselectedDate1] = React.useState('')
   const [selectedDate2,setselectedDate2] = React.useState('')
   const [selectedTime1,setselectedTime1] = React.useState('')
   const [selectedTime2,setselectedTime2] = React.useState('')
   

    const GetChoosedLocation=(val)=>{
       setchoosedLocation(val)
    }
   
    const Sdate1=(val)=>{
      setselectedDate1(val)
    }
    const Sdate2=(val)=>{
      setselectedDate2(val)
    }
    const Stime1=(val)=>{
      setselectedTime1(val)
    }
    const Stime2=(val)=>{
      setselectedTime2(val)
    }




  return (
    <AuthContext.Provider  value={{choosedLocation,GetChoosedLocation,selectedDate1,Sdate1,selectedDate2,Sdate2,selectedTime1,Stime1,selectedTime2,Stime2}}>
     {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider