
import "../Css/CardCarousel.css"
import React from 'react'
import Card from './Card'


const CardCarousel = () => {
  
    const details = [
        {id:1,img:"https://zoomcar-assets.zoomcar.com/images/original/8817436b968b007373388a0ce0528400920889b1.png?1680509928",text:"Zero Security Deposit"},
        {id:2,img:"https://zoomcar-assets.zoomcar.com/images/original/d09afb8f29763525cd9823221791be7188b31460.png?1672044204",text:"Enjoy Unlimited Kilometers"},

        {id:3,img:"https://zoomcar-assets.zoomcar.com/images/original/26c37197e51e47e79bbda243c0f0f0937e3f4879.png?1680509810",text:"100% Free Cancellation before 6 hrs of trip start"},

        {id:4,img:"https://zoomcar-assets.zoomcar.com/images/original/70c7dcbb07c25b9a819a578ce6fb0b5045d5e0e1.png?1680509880",text:"ZERO Toll Charges"},

        {id:5,img:"https://zoomcar-assets.zoomcar.com/images/original/bb32fcf3eb9047ee20809f2dbf6e88ae739fb4d9.png?1672044584",text:"Reschedule for FREE"},

    ]


    const ref = React.useRef(null)


  
    const prebtn2=()=>{
       let width2 = ref.current.clientWidth 
       ref.current.scrollLeft = ref.current.scrollLeft - (width2/3)
    }
    const nextbtn2=()=>{
        let width2 = ref.current.clientWidth 
       ref.current.scrollLeft = ref.current.scrollLeft + width2/3
       console.log("GG")
    }

  return (
    <div className='outerDiv' >
        <button  className='pre-btn2'  onClick={prebtn2}  > <p>&lt;</p> </button>
       <button    className='next-btn2' onClick={nextbtn2} > <p>&gt;</p> </button>

       <div className='secondDiv' ref={ref} >
           {
            details.map((el)=>{
                return <Card key={el.id} img={el.img} text={el.text} />
            })
           }
       </div>


    </div>
  )
}

export default CardCarousel