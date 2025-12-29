import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {

    const  [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
   
    const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }

    const token = localStorage.getItem('token');
  
    return (
        <header className="backdrop-blur-sm bg-white/75 sticky top-0 z-50 border-b border-gray-100">
            <nav className="max-w-screen-2xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* left side */}
                    <div className="flex items-center md:gap-16 gap-4">
                        <Link to="/" className="transition-transform hover:scale-110">
                            <HiMiniBars3CenterLeft className="size-6 hover:text-primary" />
                        </Link>

                        {/* search input */}
                        <div className="relative sm:w-72 w-40">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IoSearchOutline className="text-gray-400" />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Search here"
                                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-50 border border-gray-200 
                                focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none
                                transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* right side */}
                    <div className="relative flex items-center md:space-x-4 space-x-3">
                        <div>
                            {currentUser ? (
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="transition-transform hover:scale-105 focus:outline-none"
                                    >
                                        <img 
                                            src={avatarImg} 
                                            alt="" 
                                            className={`size-8 rounded-full object-cover
                                            ${currentUser ? 'ring-2 ring-primary ring-offset-2' : ''}`} 
                                        />
                                    </button>
                                    
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg 
                                        border border-gray-100 transform opacity-100 scale-100 transition-all 
                                        duration-200 ease-out origin-top-right">
                                            <ul className="py-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <Link 
                                                            to={item.href} 
                                                            onClick={() => setIsDropdownOpen(false)}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 
                                                            hover:text-primary transition-colors duration-150"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <button
                                                        onClick={handleLogOut}
                                                        className="block w-full text-left px-4 py-2 text-sm text-red-600 
                                                        hover:bg-red-50 transition-colors duration-150"
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : token ? (
                                <Link to="/dashboard" className="text-primary font-medium hover:text-primary/80 
                                transition-colors duration-200">
                                    Dashboard
                                </Link>
                            ) : (
                                <Link to="/login" className="transition-transform hover:scale-110"> 
                                    <HiOutlineUser className="size-6 hover:text-primary" />
                                </Link>
                            )}
                        </div>
                        
                        <button className="hidden sm:block transition-transform hover:scale-110">
                            <HiOutlineHeart className="size-6 hover:text-primary" />
                        </button>

                        <Link to="/cart" className="group bg-primary hover:bg-primary/90 p-2 sm:px-6 px-3 
                        flex items-center rounded-lg transition-all duration-200 hover:shadow-lg 
                        hover:shadow-primary/20">
                            <HiOutlineShoppingCart className="text-white group-hover:scale-110 transition-transform" />
                            {cartItems.length > 0 && (
                                <span className="text-sm font-semibold text-white sm:ml-2 ml-1">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;