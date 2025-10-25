import React from 'react';
import Banner from '../../Components/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();

    return (
        <div>
            <div className='pt-24'>
                <Banner></Banner>
                <Books booksData={booksData}></Books>
            </div>
        </div>
    );
};

export default Home;