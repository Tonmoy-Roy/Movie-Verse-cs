import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../Provider/AuthProvider';
import { BsBookmarkPlus } from "react-icons/bs";
import UseBookmark from '../Hooks/UseBookmark';



moment().format();
const Navbar = () => {
    const { user, signoutUser } = useContext(AuthContext);
    const [bookmark] = UseBookmark();
    const currentDateTime = moment().format('MMMM Do YYYY, h:mm');

    const links = <>
        <li><NavLink><p>Home</p></NavLink></li>
        <li><NavLink to="/movies"><p>Movies</p></NavLink></li>
        {
            user && user.email ? "" : (<li><NavLink to="/register"><p>Register</p></NavLink></li>)
        }

        {
            user && user.email ? (<li><NavLink to=""><BsBookmarkPlus className='text-2xl'/>
                <div className="badge badge-secondary">+{bookmark.length}</div></NavLink></li>) : ""
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm bg-black text-white rounded">
            <p className="font-bold">Movie Verse</p>
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
                {/* <p>{currentDateTime}</p> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.email ?
                        <div className='md:flex mr-[5vw]'>
                            <div className='mt-5 mr-3'>
                                <p className='text-green-600 font-bold relative'>{user.displayName}</p>
                            </div>
                            <div className='mt-3'>
                                <img className='md:w-[5vw] md:h-[8vh] rounded-full relative' src={user.photoURL} alt="" />
                            </div>
                        </div> : ""
                }
                {
                    user && user.email ? (<Link to="/login" onClick={signoutUser} className='btn btn-primary relative'>Logout</Link>) : (<Link to="/login" className='btn btn-primary'>Login</Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;