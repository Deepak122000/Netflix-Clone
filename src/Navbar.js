import React from 'react'
import "./App.css"
import {BrowserRouter, NavLink,} from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
      <BrowserRouter>
        <img width="100px" height= "60px" src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"/>
        
        <div className='link'>
            <NavLink>Home</NavLink>
         </div>
         <div className='link'> 
            <NavLink>TV Shows</NavLink>
            </div>
        <div className='link'>
             <NavLink>Categories</NavLink>
          </div>
         <div className='link'>
            <NavLink>Login</NavLink>
      </div>

            </BrowserRouter>
      
    </div>
  )
}

export default Navbar

