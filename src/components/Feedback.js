import React from 'react'

const Feedback = () => {
  return (
  
    <div className='feedback'>
    
        <div className='side' id='side-title1'>
            <h1>Stay connected</h1>

        </div>
        <div className='side' id='side-title2'>
            <p className='side-data'>Sign up for our newsletter and be the
         first to know about new arrivals and exclusive offers</p>
        <form>
            <input type='gmail' placeholder='email' required/>
           
            <input type='submit' value='Suscribe now'/>
        </form>
        </div>
    


    </div>
      
  
  )
}

export default Feedback
