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
    Input,useDisclosure
  } from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"





const Navbar = () => {

  


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


  return (
    <div className='navbar'  >
     
     <div >
        <Button ref={btnRef} onClick={onOpen} style={{marginLeft:"-440px", marginTop:"14px",color:"white",backgroundColor:"black",border:"1px solid white" }} >
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
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

 
      </div>



     <div className='icondiv' >

     </div>

        <div className='btndiv'>

        <button className='hostbtn'  >Become a Host</button>
        <button className='loginbtn'  >Login</button>
        <button className='signupbtn' > Signup</button>
        </div>
     

     



    </div>
  )
}

export default Navbar