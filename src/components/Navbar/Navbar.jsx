import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    console.log(user);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                console.log("logged out successfully")
            })
            .catch(error => console.log("Error", error.message))
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/brands">Brands</NavLink></li>
        {
            user && <>
                <li><NavLink to="/myprofile">My Profile</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl logo cursor-pointer"><img className='w-24' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <a onClick={handleLogout} className='btn'>Logout</a>
                        </>
                        :
                        <>
                            <div className='flex gap-2'>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;