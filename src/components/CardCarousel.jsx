
import "../Css/CardCarousel.css"
import React from 'react'
import Card from './Card'


const CardCarousel = () => {
  
    const details = [
        {id:1,img:"https://zoomcar-assets.zoomcar.com/images/original/92ede006e6e6bf849d2fe715761e3e6833aad5ec.png?1671712552",text:"Zero Security Deposit"},
        {id:2,img:"https://zoomcar-assets.zoomcar.com/images/original/d09afb8f29763525cd9823221791be7188b31460.png?1672044204",text:"Enjoy Unlimited Kilometers"},

        {id:3,img:"https://zoomcar-assets.zoomcar.com/images/original/ac74c0e87023949496768b9557c52936bc35090b.png?1672044356",text:"100% Free Cancellation before 6 hrs of trip start"},

        {id:4,img:"https://zoomcar-assets.zoomcar.com/images/original/5d9694e98e7716aab66ea6e0a0f6b7bd7a4958c8.png?1672044544",text:"ZERO Toll Charges"},

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