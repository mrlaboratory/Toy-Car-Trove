import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

const navitem = <> <NavLink to='/'>Home</NavLink>
<NavLink to='/about'>About</NavLink>
<NavLink to='/contact'>Contact</NavLink>
<NavLink to='/addcars'>Add cars</NavLink>
</>
  
  return (
    <div className="navbar " id='navbar'>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
{navitem}

          </ul>
        </div>
        <Link to='/' className="btn btn-ghost  text-xl uppercase">Toy Car Trove</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-3 text-color">
    
          {navitem}
          
        </ul>
      </div>
      <div className="navbar-end " >
     
       
       
            <img  className='w-12 ml-3 rounded-full border-2 border-primary ' src='https://mrlaboratory.github.io/img/user.png' alt="" />
      
       
        
      </div>
    </div>
  );
};

export default Navbar;