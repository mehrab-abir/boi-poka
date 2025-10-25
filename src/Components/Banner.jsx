import React from 'react';
import bannerImg from '../assets/bannerImg.png'

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-16 my-10 rounded-xl bg-gray-200'>
            <div className='w-full md:w-[50%]'>
                <h1 className="text-4xl font-bold">Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-500 text-white mt-8'>View the List</button>
            </div>
            <div className='w-1/3'>
                <img src={bannerImg} alt="" className='rounded-xl' />
            </div>
        </div>
    );
};

export default Banner;