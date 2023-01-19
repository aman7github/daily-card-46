import React from 'react'
import "../Css/Card.css"

const Card = ({img,text}) => {


  return (
    <div className='card'  >
        <img  src={img} alt="pic" />
        <p>
            {text}
        </p>

    </div>
  )
}

export default Card