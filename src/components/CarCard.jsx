import React from 'react'

const CarCard = ({img}) => {
 
    const reff = React.useRef(null)


  return (
    <div className='CarCard'>
        <img  src={img} alt="pic" />
    </div>
  )
}

export default CarCard