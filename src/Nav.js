import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
              <Link to='/'>
              <img className='logo'src={logo} alt=''/>
              </Link>
            <ul className='nav-links' >
                <NavLink to='/' exact >
                
                <li  className='link link1'>О проекте Golf</li>
                
                </NavLink>
                <NavLink to='/comments'>
                <li  className='link link2'>Комментарии</li>
                </NavLink>
                <NavLink to='/gallery'>
                <li  className='link link3'>Галерея</li>
                </NavLink>
                <NavLink to='/golfseries'>
                <li  className='link link4'>Golf Series</li>
                </NavLink>
            </ul>
        </nav>



    );
}

export default Nav;