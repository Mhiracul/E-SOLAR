import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/Auth';
import { FaUserCircle } from 'react-icons/fa';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
     setNav(!nav);
    }
    const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
    return(
        <div className= ' flex justify-between items-center h-26 max-w-[1240px] mx-auto px-6 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#dc2626]'>E-SOLAR.</h1>
            <ul className='hidden md:flex'>
               <Link to= "/"><li className='p-4'>Home</li></Link> 
                <Link to="/about-us"><li className='p-4'>About</li></Link>
              <Link to="/register">  <li className='p-4'>Contact</li> </Link>
               <div>
        {user  ? (
            <div className='flex justify-between items-center'>
            
            <button onClick={handleSignOut} className='p-4 bg-[#dc2626] w-[100px] rounded-md font-medium my-3  mx-auto px-6 py-1'>
            Logout
          </button> 
          <FaUserCircle size={24} className='mr-2 ml-3' />
            <span className='text-sm font-medium text-gray-500 inline-block' style={{ display: "inline-block !important", whiteSpace: "nowrap" }}>{user.displayName}</span>
            {user.email && <span className="text-sm font-medium text-gray-500 inline-block" style={{ display: "inline-block !important", whiteSpace: "nowrap" }}>
                ({user.email})
              </span>}
          </div>
        ) : (
          <Link to= "/login">  <li className='p-4 bg-[#dc2626] rounded-md font-medium my-3  mx-auto px-6 py-1'>Login</li> </Link>

        )} 
      </div>
     
            </ul>
            <div onClick={handleNav} className = 'block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            <ul className={nav ?  'fixed left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-[#000300] ease-in-out duration-500' :  ' ease-in-out duration 500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#dc2626] m-4'>E-SOLAR.</h1>
            {user ? (
            <div className='flex justify-between items-center'>
            
            
          <FaUserCircle size={24} className='mr-2 ml-3' />
            <span className='text-sm font-medium text-gray-500 inline-block ' style={{ display: "inline-block !important", whiteSpace: "nowrap" }}>{user.displayName}</span>
            {user.email && <span className="text-sm font-medium text-gray-500 inline-block px-12" style={{ display: "inline-block !important", whiteSpace: "nowrap" }}>
                ({user.email})
              </span>}
          </div>
        ) : (
          <Link to= "/login">  <li className='p-4'>Login</li> </Link>

        )} 
              <Link to = "/">  <li className='p-4 border-b border-gray-600'>Home</li></Link> 
              <Link to= "/about-us" ><li className='p-4 border-b border-gray-600'>About</li></Link> 
                                    <li className='p-4 border-b border-gray-600'>Contact</li>
              <Link to= "/login">  <li className='p-4 border-b border-gray-600'>Login</li> </Link>
              <button onClick={handleSignOut} className='p-4 bg-[#dc2626] w-[100px] rounded-md font-medium my-3  mx-auto px-6 py-1'>
            Logout
          </button> 
            </ul>
            </div>
        
    )
}

export default Navbar