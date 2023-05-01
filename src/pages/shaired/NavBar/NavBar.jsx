import React, { useContext, useState } from 'react';
import './NavBar.css'
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const NavBar = () => {
    // const [user, setUser] = useState(null)
    const [open, setOpen] = useState(false);

    const { user, handleSignOut } = useContext(AuthContext);

    const params = useParams();
    // console.log("params",params)

    const location = useLocation();
    // console.log(location.pathname)
    // console.log(open)
    const handleLogOutButton = () => {
        handleSignOut()
    }

    return (
        <div className="navbar md:px-20 relative flex lg:gap-14 gap-5 z-30">
            {/* Menu bar design */}
            <div className='main lg:hidden z-50'>
                <input type="checkbox" className='menu-btn' id="menu-btn" />
                <label onClick={() => setOpen(!open)} htmlFor="menu-btn" className='menu-icon'> <span className='nav-icon'></span> </label>
            </div>

            {
                (location.pathname === '/') || (location.pathname === `/place/${params.id}`) ? <Link to='/' className="lg:navbar-center mr-auto">
                    <img className='w-32' src="/logo2.png" alt="" />
                </Link>
                    :
                    <Link to='/' className="lg:navbar-center mr-auto">
                        <img className='w-32' src=" /logo.png" alt="" />
                    </Link>
            }

            {/* search bar */}
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-[20%]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-200 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" ></path></svg>
                </div>
                <input type="text" id="simple-search" className="placeholder:text-white  bg-[#ffffff20] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-200 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>

            <div className={`lg:pl-0 lg:gap-10 gap-5 font-semibold  flex flex-col md:static md:flex-row absolute top-16 pl-12 lg:pr-0 pr-10 bg-blue-100 md:bg-transparent transition-all ${open ? "left-0" : "-left-48"}`}>
                <li className={`list-none ${(location.pathname === '/') || (location.pathname == `/place/${params.id}`) ? "text-white" : "text-black"}`}> <ActiveLink className='hover:text-blue-600' to="/news">News</ActiveLink></li>
                <li className={`list-none ${(location.pathname === '/') || (location.pathname == `/place/${params.id}`) ? "text-white" : "text-black"}`}> <ActiveLink className='hover:text-blue-600' to="/destination">Destination</ActiveLink></li>
                <li className={`list-none ${(location.pathname === '/') || (location.pathname == `/place/${params.id}`) ? "text-white" : "text-black"}`}> <ActiveLink className='hover:text-blue-600' to="/contact">Contact</ActiveLink></li>
                <li className={`list-none ${(location.pathname === '/') || (location.pathname == `/place/${params.id}`) ? "text-white" : "text-black"}`}> <ActiveLink className='hover:text-blue-600' to="/blog">Blog</ActiveLink></li>
            </div>
            {
                user ? <div>
                    <div className="mr-5">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogOutButton}><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                    :
                    <Link to='/login' className="btn-warning rounded-md normal-case px-6 h-10 font-bold">Login</Link>
            }
        </div>
    );
};

export default NavBar;