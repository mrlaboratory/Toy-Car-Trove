import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext)

  const navitem = <> <NavLink className='text-gray-500' to='/'>Home</NavLink>
    {
      !user && <> <NavLink className='text-gray-500' to='/login'>Login</NavLink>
        <NavLink className='text-gray-500' to='/register'>Register</NavLink></>
    }
    <NavLink className='text-gray-500' to='/alltoys'>All Toys</NavLink>
 
    {
      user && <>
        <NavLink className='text-gray-500' to='/mytoys'>My Toys</NavLink>
        <NavLink className='text-gray-500' to='/addtoy'>Add A Toy</NavLink>
      </>
    }
       <NavLink className='text-gray-500' to='/blogs'>Blogs</NavLink>


  </>

  return (
    <div className="navbar " id='navbar'>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={5} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={5} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navitem}

          </ul>
        </div>
        <Link to='/' className=" ">
          <img className='w-[150px] h-full' src="https://i.ibb.co/X4yn9gt/Untitled-design-2.png" alt="" />
          <h1>Toy Car Trove</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-3 text-color">

          {navitem}

        </ul>
      </div>
      <div className="navbar-end " >
        {
          user ? <div className="dropdown dropdown-end tooltip hover:tooltip-open tooltip-left" data-tip={user?.displayName}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-primary " >

                <img className='w-full rounded-full ' src={user?.photoURL} />


              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

              <li><a onClick={signOutUser} >Logout</a></li>
            </ul>
          </div> : <Link to='login' className='btn btn-primary text-white'>Login</Link>
        }


      </div>
    </div>
  );
};

export default Navbar;