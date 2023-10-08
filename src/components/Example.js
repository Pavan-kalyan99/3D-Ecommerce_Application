import React from 'react'
import Pic from './3d.jpg'
const Example = () => {
  return (
    <>
    <div className='card'>
        <h1 className='card-title'>Virtual storefront</h1>
        <p className='card-body'>Explore our virtual store and browse through a wide 
        range of products from the comfort of your home</p>
        <img  className='card-image' src={Pic} alt='3d image' />

    </div>
      
    </>
  )
}

export default Example
