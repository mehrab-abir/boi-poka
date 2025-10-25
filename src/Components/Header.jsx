import React from 'react';

const Header = () => {
    return (
        <header className='py-5 shadow-sm fixed w-full bg-white/90 backdrop-blur z-50'>
            <div className='w-[90%] mx-auto flex items-center justify-between'>
                <h1 className="text-3xl font-bold">BoiPoka</h1>
                <nav className='flex items-center justify-between gap-8'>
                    <a href="#">Home</a>
                    <a href="">Listed Books</a>
                    <a href="">Pages to Read</a>
                </nav>
                <div>
                    <button className='px-3 py-2 border rounded-lg bg-green-500 text-white cursor-pointer'>Sign In</button>
                    <button className='px-3 py-2 border rounded-lg bg-cyan-500 text-white cursor-pointer ml-2'>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;