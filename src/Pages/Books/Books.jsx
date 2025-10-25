import React, { useEffect, useState } from 'react';
import SingleBook from './SingleBook';

const Books = ({booksData}) => {

    /* const [allBooks, setAllBooks] = useState([]);

    useEffect(()=>{
        fetch("booksData.json")
        .then(res => res.json())
        .then(data => setAllBooks(data))
        .catch(err => console.log("Error: ",err))
    },[])

    console.log(allBooks) */

    console.log("Books Data: ",booksData)

    return (
        
        <div className='w-[90%] mx-auto mb-10'>
            <h1 className="text-3xl font-bold text-center mb-5">Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    booksData.map(book =>{
                        return <SingleBook key={book.bookId} book={book}></SingleBook>
                    })
                }
            </div>
        </div>
    );
};

export default Books;