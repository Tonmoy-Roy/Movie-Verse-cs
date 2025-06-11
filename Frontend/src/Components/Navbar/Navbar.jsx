import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Trending</NavLink></li>
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a>Genres</a>
                            <ul className="p-2 text-black">
                                <li><a>Action</a></li>
                                <li><a>Adveneture</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <p className="text-xl">Movie Verse</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                    <li>
                        <details>
                            <summary>Genres</summary>
                            <ul className="p-2 text-black">
                                <li><a>Action</a></li>
                                <li><a>Adveneture</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Login</a>
            </div>
        </div>
    );
};

export default Navbar;