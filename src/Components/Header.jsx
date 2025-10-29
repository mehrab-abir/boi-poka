import React from 'react';
import { NavLink } from 'react-router';
import { expandMenu } from '../Utilities/mobileNavbar';

const Header = () => {
    return (
        <header className='py-5 shadow-sm fixed w-full bg-white/90 backdrop-blur z-50'>
            <div className='w-[90%] mx-auto flex items-center justify-between'>
                <h1 className="text-3xl font-bold">BoiPoka</h1>
                <nav className='hidden md:flex items-center justify-between gap-8'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/wishList'>My Wish List</NavLink>
                    <NavLink to='/readBooks'>Read Books</NavLink>
                </nav>
                <div className='flex items-center'>
                    <button className='px-3 py-2 border rounded-lg bg-green-500 text-white cursor-pointer'>Sign In</button>
                    <button className='px-3 py-2 border rounded-lg bg-cyan-500 text-white cursor-pointer ml-2'>Sign Up</button>

                    <div className='flex md:hidden flex-col ietms-center justify-center ml-6 cursor-pointer' id="menuToggler" onClick={expandMenu}>
                        <span className='w-[30px] h-1 bg-black mt-1'></span>
                        <span className='w-[30px] h-1 bg-black mt-1'></span>
                        <span className='w-[30px] h-1 bg-black mt-1'></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;