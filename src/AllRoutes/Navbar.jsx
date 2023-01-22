import React from 'react'
import "../Css/Navbar.css"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,useDisclosure,Box
  } from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"
import {Link as RouteLink} from "react-router-dom"
import {FaCar} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'





const Navbar = () => {

  


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()

    const handleClick=()=>{
      navigate("/signup")
    }


  return (
    <div className='navbar'  >
     
     <div >
        <Button ref={btnRef} className="hamburgerBtn" onClick={onOpen} style={{marginLeft:"-390px", marginTop:"14px",color:"white",backgroundColor:"black",border:"1px solid white" }} >
        <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <RouteLink to="/signup" >
             <DrawerHeader style={{backgroundColor:"rgb(210, 206, 206)",fontWeight:"700"}} >Login or Signup</DrawerHeader>
            </RouteLink>
            <DrawerBody>
              <RouteLink to="/booking">
               <Box style={{marginTop:"20px",fontSize:"18px",fontWeight:"500"}} >Change City</Box>
              </RouteLink> 
               <Box style={{marginTop:"20px",fontSize:"18px",fontWeight:"500"}} >Become a Host</Box>
               <Box style={{marginTop:"20px",fontSize:"18px",fontWeight:"500"}} >Zoom Car Fleet Vehicles Policies</Box>
               <Box style={{marginTop:"20px",fontSize:"18px",fontWeight:"500"}} >Help & Support</Box>
              

            </DrawerBody>
          
          </DrawerContent>
        </Drawer>

 
      </div>



     <div className='icondiv' >
     <FaCar className='CarIcon' /> <p className='iconLogoP' >   ZoomCar</p>
     </div>

        <div className='btndiv'>

        <button className='hostbtn'  >Become a Host</button>
        {/* <button className='loginbtn'  >Login</button> */}
        <button className='signupbtn' onClick={handleClick} > Signup/Login</button>
        </div>
     

     



    </div>
  )
}

export default Navbar