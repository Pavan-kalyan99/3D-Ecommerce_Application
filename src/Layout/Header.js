import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import profile from '../components/pavan_photo.jpg'
import logo from '../components/cart_logo.gif';
const Header = (children) => {
  return (
    <>
    <nav className='navbar'>
        <div className='container-fluid'>
          <img className='logo' src={logo} alt='my-logo'/>
          <div id='nav-title'>

            <h2 className='navbar-title'id='nav-title' >3D Ecommerce Hub</h2>
          </div>
            <img  className='profile-image' title='pavan kalyan' src={profile} alt='profile image'/>

        </div>

    </nav>

    </>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//       <Link  to='/' className="navbar-brand"> E-STORE</Link>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
//        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-1 " >
     
  
//      </ul>    
//   </div>
//     </div>
//   </nav>
  )
}

export default Header



