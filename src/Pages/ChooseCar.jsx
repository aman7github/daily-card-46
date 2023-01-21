import React from 'react'
import "../Css/ChooseCar.css"
import Navbar from '../AllRoutes/Navbar'
import {BiCurrentLocation} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import {GrStar} from "react-icons/gr"
import {BsBookmarkCheck,BsArrowDown,BsArrowUp} from "react-icons/bs"
import {GiWaterDrop} from "react-icons/gi"
import {MdElectricalServices,MdLocalGasStation,MdAirlineSeatReclineNormal} from "react-icons/md"
import {TbManualGearbox} from "react-icons/tb"







const ChooseCar = () => {


   let Cardata = [
    {id:1,name:"Maruti Swift",price:2896,rating:4,seats:5,fuel:"petrol",   type:"mannual",img:"https://zoomcar-assets.zoomcar.com/photographs/original/f1850c781ba0aeae715eaa922dc15b4dc3654a09.png?1663874619"},
    {id:2,name:"Tata Tiago",price:2096,rating:3.8,seats:5,fuel:"diesel", type:"mannual",img:"https://zoomcar-assets.zoomcar.com/photographs/original/797b7600d995f17cc6404b3c9b09e227ea9c1fa2.png?1663876487"},
    {id:3,name:"Maruti Brezza",price:2126,rating:4.2,seats:6,fuel:"diesel",type:"automatic",img:"https://zoomcar-assets.zoomcar.com/photographs/original/5f9e0fc31aa8107e2d487ce5756126703915c2e1.png?1663874214"},
    {id:4,name:"Dastun Redi-go",price:2378,rating:4.5,seats:5,fuel:"petrol", type:"mannual",img:"https://zoomcar-assets.zoomcar.com/photographs/original/4ce151fca9d2de514fcec42977b2689e10bdff7d.png?1663871983"},
    {id:5,name:"Mahindra Bolero",price:2156,rating:3.9,seats:7,fuel:"diesel", type:"mannual",img:"https://zoomcar-assets.zoomcar.com/photographs/original/1991f1ff448f44b8a3fd0ba99843f923285b06c5.png?1663873790"},
    {id:6,name:"Suzuki Baleno",price:3896,rating:4.1,seats:5,fuel:"petrol",type:"automatic",img:"https://zoomcar-assets.zoomcar.com/photographs/original/719d59fca3d2cbd73874cc76f6e78cf7979a452f.png?1663874180"},
    {id:7,name:"Tata Nexon",price:3296,rating:4.5,seats:6,fuel:"petrol",type:"automatic",img:"https://zoomcar-assets.zoomcar.com/photographs/original/199675b25d7039eb0713c43ba5f13f2cbd65cb85.png?1663876397"},
    {id:8,name:"Maruti Ciaz",price:2996,rating:4.7,seats:5,fuel:"petrol", type:"mannual",img:"https://zoomcar-assets.zoomcar.com/photographs/original/4591ed5749ed95845712e7f86a42f2575b5cc6a3.png?1663874318"},
 
   ]

    const [data,setdata] = React.useState(Cardata)

// <------------------------------------------sort by price---------------------------------->  
    const LowToHighPrice=()=>{
      
        data.sort((a,b)=>{
            if(a.price>b.price) return 1
            if(a.price<b.price) return -1
            return 0
        })
        setdata(data)
        console.log(data)
      
    }
 
   const HighToLowPrice=()=>{
      
    data.sort((a,b)=>{
        if(a.price>b.price) return -1
        if(a.price<b.price) return 1
        return 0
    })
     setdata(data)
}
  

//  <----------------------------------sort by raitng------------------------------------->

    const HighRating=()=>{
      
    data.sort((a,b)=>{
        if(a.rating>b.rating) return -1
        if(a.rating<b.rating) return 1
        return 0
    })
    setdata(data)
 } 


// <-------------------------------------filter by seats-------------------------------->

      const FilterBySeats5=()=>{
         data =  data.filter((el)=>{
           return  el.seats<=5    
      })
         setdata(data)
      }

      const FilterBySeats6=()=>{
        data =  data.filter((el)=>{
          return  el.seats==6    
     })
        setdata(data)
     }
     const FilterBySeats7=()=>{
        data =  data.filter((el)=>{
          return  el.seats==7    
     })
       setdata(data)
     }

//   <-------------------------------------filter by fuel------------------------------>
        
      const SortbyPetrol=()=>{
        data = data.filter((el)=>{
            return el.fuel=="petrol"
        })
        setdata(data)
      }
     
      const SortbyDiesel=()=>{
        data = data.filter((el)=>{
            return el.fuel=="diesel"
        })
        setdata(data)
      }


//   <---------------------------------------fileter by Transmission--------------------------------->
    
 

  const SortbyAutomatic=()=>{
    data = data.filter((el)=>{
        return el.type=="automatic"
    })
    setdata(data)
  }
  

    const SortbyMannual=()=>{
        data = Cardata.filter((el)=>{
            return el.type=="mannual"
        })
        setdata(data)
    }
     
 











  return (
    <>
    <Navbar />

    <div  className='MainContainer'>


      <div className='sortingDiv'>

          <div className='heading' >
            <h3>Sort & Filters</h3>
            <h3>RESET</h3>
           
          </div>
 {/* <------------------------------------sort section--------------------------------->  */}
         <p className='P2' >Sort By</p>

         <div className='filterDiv' >
          
           <div>
           <BsBookmarkCheck className='relevanceIcon' /> <p>Relevance</p>
           </div>

           <div onClick={LowToHighPrice} >
             <div className='divForRupeeIcon'>
                 <p> ₹ </p>
                 <BsArrowDown className='downarrow' />
             </div>
           
             <p>Low to High</p>
           </div>

           <div onClick={HighToLowPrice}>
             <div className='divForRupeeIcon'>
               <p>₹</p>
               <BsArrowUp className='downarrow'/> 
             </div>   
             <p>High to Low</p>
           </div>

           <div onClick={HighRating}>
             <GrStar className='staricon2' />
             <p>Best rated</p>
           </div>


         </div>

      
    {/* <------------------------------------------fuel type div---------------------------------------> */}

          <p className='FuelP' >Fuel type</p>

          <div className='FuelDiv'>

            <div onClick={SortbyPetrol} >
              <GiWaterDrop className='FuelIconComman' />
              <p>Petrol</p>
            </div>

            <div onClick={SortbyDiesel} >
              <GiWaterDrop className='FuelIconComman' />
              <p>Diesel</p>
            </div>

            <div  className='blur' >
              <MdElectricalServices className='FuelIconComman2' />
              <p>Electric</p>
            </div>

            <div className='blur' >
               <MdLocalGasStation className='FuelIconComman2' />
               <p>CNG</p>
            </div>

          </div>

   {/* <---------------------------------------------seats div--------------------------------------> */}
            
           <p className='seatP' > Seats </p>
          <div className='seatDiv' >
              
            <div onClick={FilterBySeats5} >
              <MdAirlineSeatReclineNormal className='FuelIconComman' />
              <p>5 Seater</p>
            </div>
           
            <div onClick={FilterBySeats6} >
              <MdAirlineSeatReclineNormal className='FuelIconComman' />
              <p>6 Seater</p>
            </div>
            
            <div onClick={FilterBySeats7} >
              <MdAirlineSeatReclineNormal className='FuelIconComman' />
              <p>7 Seater</p>
            </div>

          </div>

    {/* <--------------------------------------Transmission div--------------------------------------> */}
         
    <p className='TransmissionP' > Transmission </p>

    <div className='TransmissionDiv' >
              
              <div onClick={SortbyMannual} >
                <TbManualGearbox className='TransmissionIcon' />
                <p>Manual</p>
              </div>
             
              <div onClick={SortbyAutomatic} >
                <TbManualGearbox className='TransmissionIcon' />
                <p>Automatic</p>
              </div>
              
  
            </div>








      </div>







  {/* <----------------------------------------------Right side divs------------------------------------------> */}

      <div className='showCarDiv'>

        {/* <----------------------------time and date divs-----------------------> */}

        <div className='TimeAnddateDiv'>

          <div className='locationdiv'>
           <BiCurrentLocation className='locationIcon' />
           <p></p>
          </div>
          

          <div className='time'>
            <div className='timeInnerDiv' >
                <p>START DATE/TIME</p>
                <p>hjkkjk</p>
            </div>

           <BsArrowRight className='rightArrowIcon' />
             
             <div className='dateMainDiv' >
                <p className='P1' >END DATE/TIME</p>
                <p>ljkjlljl</p>
             </div>

          </div>
           
         </div>

       {/* <-------------------------------right side car grid div------------------> */}

        <div className='gridDiv' >
          
          {
            data.map((el)=>{
                return <div key={el.id} >
                   <img src={el.img} alt="pic" />
                    <div className='stardiv'>
                      <GrStar className='staricon' />
                       <h6> {el.rating} </h6>
                   </div>
                   <h4>{el.name}</h4>

                   <div className='detailingDiv' >
                     <p>{el.type} . {el.fuel} . {el.seats} seats</p>
                   </div>
                   <h3> ₹ {el.price}</h3>
                </div>
            })
          }

        </div>

          




       </div>





    </div>
    
    
    
    </>
  )
}

export default ChooseCar


