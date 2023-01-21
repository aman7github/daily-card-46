
import React from 'react'


export const AuthContext = React.createContext(null)


const AuthContextProvider = ({children}) => {

   const [choosedLocation,setchoosedLocation] = React.useState('')

    const GetChoosedLocation=(val)=>{
       setchoosedLocation(val)
    }

  return (
    <AuthContext.Provider  value={{choosedLocation,GetChoosedLocation}}>
     {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider