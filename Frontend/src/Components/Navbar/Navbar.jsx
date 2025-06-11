import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


moment().format();
const Navbar = () => {
    const currentDateTime = moment().format('MMMM Do YYYY, h:mm');
    const links = <>
        <li><NavLink><p>Home</p></NavLink></li>
        <li><NavLink to="/movies"><p>Movies</p></NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm bg-black text-white rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        {links}

                    </ul>
                </div>
                <p className="text-xl">Movie Verse</p>
                {/* <p>{currentDateTime}</p> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Login</a>
            </div>
        </div>
    );
};

export default Navbar;