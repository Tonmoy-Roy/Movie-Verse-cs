import { Outlet } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import UseBookmark from '../Hooks/UseBookmark';
import { BsBookmarkPlus } from "react-icons/bs";

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [bookmark] = UseBookmark();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex">
            <Helmet><title>Dashboard</title></Helmet>
            {/* Toggle Button for Mobile */}
            <button
                className="md:hidden p-3 fixed top-4 left-4 z-30 bg-yellow-600 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoMdMenu className="text-2xl" />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-20 bg-yellow-600 min-h-screen w-48 p-4 transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-[15vw] md:block`}
            >
                <ul className="menu space-y-4 mt-20">
                    <li>
                        <NavLink to="/dashboard/bookmark" onClick={() => setIsOpen(false)}>
                            <div className="flex items-center">
                                <IoMdHome className="text-2xl mr-2" />
                                User Home
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" onClick={() => setIsOpen(false)}>
                            <div className="flex items-center">
                                <BsBookmarkPlus className='text-2xl mr-2'/>
                                My watchlist ({bookmark.length})
                            </div>
                        </NavLink>
                    </li>
                    <p className="divider md:w-[14vw]"></p>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                            <div className="flex items-center">
                                <IoMdHome className="text-2xl mr-2" />
                                Home
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" onClick={() => setIsOpen(false)}>
                            <div className="flex items-center">
                                <IoMdMenu className="text-2xl mr-2" />
                                Movies
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-[15vw] p-3 sm:p-4">
                <p className="mb-6 text-xl md:text-2xl">My Watchlist</p>
                <Outlet />
            </div>
        </div>
    );
};
export default Dashboard;