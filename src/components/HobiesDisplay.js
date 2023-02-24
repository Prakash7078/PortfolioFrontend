import React from 'react'

function HobiesDisplay(props) {
    const {product}=props;
  return (
    <div className='product'>
        <img src={product.image}/>
        <p>{product.desc}</p>
    </div>
  )
}

export default HobiesDisplay