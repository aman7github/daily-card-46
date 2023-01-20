import React from 'react'
import "../Css/CarCarousel.css"
import CarCard from './CarCard'


const CarCarousel = () => {

   const images = [
    {id:1, img:"https://zoomcar-assets.zoomcar.com/photographs/original/4563f5b9cae2d3dd1229130cbf7fca43858e665d.png?1663876442"},
     {id:2, img:"https://zoomcar-assets.zoomcar.com/photographs/original/a49559a67ba1d5fd7e2ffea2f78f654691ee018e.png?1663874345"},
     {id:3, img:"https://zoomcar-assets.zoomcar.com/photographs/original/038cccdbf5e006c84ade0277edc7d3927f307568.png?1663872447"},
     {id:4, img:"https://zoomcar-assets.zoomcar.com/photographs/original/c636626530713d99c1ad9531d6a6fe24986b46b0.png?1663875952"},
     {id:5, img:"https://zoomcar-assets.zoomcar.com/photographs/original/4591ed5749ed95845712e7f86a42f2575b5cc6a3.png?1663874318"},
     {id:6, img:"https://zoomcar-assets.zoomcar.com/photographs/original/96394b473a49a813d73864d12e4a899ceb7f15a4.png?1663873936"},
     {id:7,img:"https://zoomcar-assets.zoomcar.com/photographs/original/a5365254b0ec86479db01ab4c92fdf75048a2030.png?1663876555"},
      {id:8,img:"https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143"}
   ]

     
        const ref = React.useRef(null)
       // const ref2 = React.useRef(null)
       // const box = document.querySelector(".carousel-div")

     const prebtn=()=>{
        let width = ref.current.clientWidth
        ref.current.scrollLeft = ref.current.scrollLeft - (2*width/5)
        //console.log(ref.current.scrollLeft)
    

     }

     const nextbtn=()=>{
      let width = ref.current.clientWidth
      ref.current.scrollLeft = ref.current.scrollLeft +  (2*width/5)
      //console.log(ref.current.scrollLeft)
     
     }

   //console.log(ref2.current)

  return (
    <div className='maindiv' >
    
       <button  className='pre-btn'  onClick={prebtn}  > <p>&lt;</p> </button>
       <button  className='next-btn' onClick={nextbtn} > <p>&gt;</p> </button>
     
       <div className='carousel-div' ref={ref} >
         {
               images.map((el)=>{
                  return  <CarCard   key={el.id} img={el.img} />
               })
         }
       </div>

    
     
   


    </div>
  )
}

export default CarCarousel