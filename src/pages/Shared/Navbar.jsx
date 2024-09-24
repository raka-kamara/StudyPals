import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const navItems = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-red-400 hover:bg-red-400 hover:scale-110"
              : "font-bold text-white hover:scale-110"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-red-400 hover:bg-red-400 hover:scale-110"
              : "font-bold text-white hover:scale-110"
          }
        >
          Assignments
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/create-assignments"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-red-400 hover:bg-red-400 hover:scale-110"
              : "font-bold text-white hover:scale-110"
          }
        >
          Create Assignments
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/pending-assignments"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-red-400 hover:bg-red-400 hover:scale-110"
              : "font-bold text-white hover:scale-110"
          }
        >
          Pending Assignments
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-red-400 hover:bg-red-400 hover:scale-110"
              : "font-bold text-white hover:scale-110"
          }
        >
          About
        </NavLink>{" "}
      </li>
      {/* { user?.email ?  <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li> <Link to="/login">Login</Link> </li>
       } */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-transparent absolute top-0 left-0 z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-transparent rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img className="w-36 h-36 hover:scale-110" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          

          {!user &&(
              <Link to="/login" className="px-3 py-2 mx-3 mt-2 btn bg-transparent text-white border-red-400 hover:bg-red-400">Login</Link>)}
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
          
              {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-16 rounded-full border border-red-400'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm my-10 dropdown-content pl-32 lg:pl-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/myProfile' className='justify-between'>
                  My Profile
                </Link>
              </li>
              
              <li className='mt-2'>
                <button
                   onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
