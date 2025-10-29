import React from 'react';
import { closeMenu } from '../Utilities/mobileNavbar';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const MobileNavbar = () => {

    return (
        <div className='flex md:hidden w-[200px] h-screen fixed top-0 right-0 bg-white translate-x-full transition-all duration-700 z-50 shadow-lg' id="mobileNav">

            <div className='w-[35px] h-[35px] border border-black rounded-full flex items-center justify-center m-5 cursor-pointer' onClick={closeMenu}>
                <ArrowRight className=''/>
            </div>
            
            <div className="menu-items flex flex-col absolute top-14 left-5 text-white">
                <Link to='/' className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold text-black'>Home</Link>
                <Link to='/wishList' className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold text-black'>My Wish List</Link>
                <Link to='/readBooks' className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold text-black'>Read Books</Link>
                </div>
        </div>
    );
};

export default MobileNavbar;