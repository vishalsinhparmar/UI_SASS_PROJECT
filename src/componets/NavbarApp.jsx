  import React, { useEffect, useState } from 'react'
  import { FiAlignJustify } from 'react-icons/fi'
  import {  Link, NavLink } from 'react-router-dom'

  export default function NavbarApp() {
    const [open ,setopen] = useState(false);
    
    const handelingNavbar = ()=>{
    setopen(!open)
  }  
  return (
      <nav className='container'>
          <div className='containerMain' >
              {/* <img src="" className='logo'/> */}
              <h2>SASIRO.</h2>
              <div onClick={handelingNavbar}>
              <FiAlignJustify className='sidebar'/>
              </div>

              <div className={`nav-links ${open ? 'open' : ''} `}>
                
              <ul >
                 
                  <li><NavLink className ='nav-link' to='Home'>Home</NavLink></li>
                  <li><NavLink className ='nav-link' to='About'>About</NavLink></li>
                  <li><NavLink className ='nav-link' to='Features'>Features</NavLink></li>
                  <li><NavLink className ='nav-link' to='Pricing'>Pricing</NavLink></li>
                  <li><NavLink  className ='nav-link' to='Contact'>Contact</NavLink></li>
                  </ul>
              <ul className='button-group'>           
              <li><button className='btn1 navlink'><a to='Contact' >Log In</a></button></li>
              <li><button className='btn'><a to='Contact'>Get Started</a></button></li>
              </ul>

           
              </div>
    
          </div>
      </nav>
    )
  }
