import './navbar.css'
import React from 'react'
import {Menuitems} from './Menuitems'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className='navbaritems'>
    <h1 className='nav-logo'> Trip py</h1>
     <ul className='nav-menu'>
      {Menuitems.map((item,index)=>{
        return(
          <li key={index}>
            <a className={item.cName} href='/'>
              <i className={item.icon}></i>
              {item.title}
            </a>
            </li>
          
        )
      })}
      <button>Signup</button>
     </ul>
  </nav>
  )
}

export default Navbar

