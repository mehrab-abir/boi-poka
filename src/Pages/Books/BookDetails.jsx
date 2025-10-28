import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToWishList } from "../../Utilities/localStorage";

const BookDetails = () => {
  const booksData = useLoaderData();
  const { id } = useParams(); //id comes as an object - type of id is string

  const book_id = parseInt(id);

  const singleBook = booksData.find((book) => book.bookId === book_id);

  const { author, category, bookName, image, rating, tags, review, publisher, totalPages, yearOfPublishing } =
    singleBook;
  // console.log(book_id) //number
  // console.log(booksData)

  const handleWishList = (id) =>{
    addToWishList(id);
  }
  return (
    <div className="py-24 w-[90%] mx-auto">
      <div className="bookDetailsCard flex flex-col md:flex-row gap-4 mt-6">
        <div className="bg-gray-100 p-8 md:w-1/2 flex items-center justify-center rounded-xl">
          <img src={image} alt="" className="w-1/2" />
        </div>
        <div className="md:w-1/2 p-3">
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p className="py-3"><span  className="font-bold">By: </span>{author}</p>
          <p className="py-2 border-y border-gray-300">{category}</p>
          <p className="py-3 text-gray-500 text-justify"> <span className="font-bold text-black">Review:</span>  {review}</p>
          <div className="flex gap-4 my-3 items-center">
            <span className="font-bold">Tags: </span>
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="text-green-500 bg-gray-100 px-2 py-1 rounded-full font-bold"
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="py-3 mt-2 border-t border-gray-300">
            <span className="font-bold text-sm">Number of pages: </span> <span className="text-sm">{totalPages}</span><br />
            <span className="font-bold text-sm">Publisher: </span>
            <span className="text-sm">{publisher}</span> <br />
            <span className="font-bold text-sm">Year of publishing: </span> <span className="text-sm">{yearOfPublishing}</span> <br />
            <span className="font-bold text-sm">Rating: </span> <span className="text-sm">{rating}</span>
          </div>

          <div className="flex gap-3">
            <button className="py-2 px-4 border border-gray-300 rounded-lg cursor-pointer">Mark as Read</button>
            <button className="py-2 px-3 border bg-blue-500 text-white rounded-lg cursor-pointer" onClick={()=> handleWishList(book_id)}>Add to Wishlist</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;
