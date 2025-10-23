import React from 'react';

const Header = () => {
    return (
        <header className='py-5 shadow-sm fixed w-full bg-white/90 backdrop-blur z-50'>
            <div className='w-[90%] mx-auto flex items-center justify-between'>
                <h1 className="text-3xl font-bold">BoiPoka</h1>
                <nav className='flex items-center justify-between gap-4'>
                    <a href="#">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;