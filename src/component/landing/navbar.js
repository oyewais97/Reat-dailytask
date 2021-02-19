import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './navbar.css';



function Navbar() {
 

    return(
        <nav className='navbar'>
        
       
        <ul>
          <li className='nav-item'>
            <Link to='/' className='nav-links' >
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/userform' className='nav-links' >
              Form 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Todolist' className='nav-links' >
              Todo
            </Link>
          </li>

          </ul>
          </nav>
          
    );
}
export default Navbar;