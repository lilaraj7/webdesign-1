import React from 'react'
import './navbar.css'
import { IoIosArrowDown } from 'react-icons/io';


export const Navbar = () => {
  return (
    
      <nav>
        <div >
          Lila Raj
        </div>
        <ul className='centeral-nav'>
          <li>
          Product<IoIosArrowDown className="down" />

          </li>
          <li>
            Template
           <IoIosArrowDown className='down'/>
          </li>
          <li className='nav-down'>Blog</li>
          <li className='nav-down'>Pricing</li>
        </ul>
        <ul className='right-nav'>
          <li className='nav-down'>
            Singin
          </li>
          <li className='nav-down'><div className='btn-start'>StartFree</div></li>
        </ul>
      </nav>
    
  )
}
