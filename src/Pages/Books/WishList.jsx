import React, { useEffect, useState } from "react";
import { getStoredIds } from "../../Utilities/localStorage";
import { useLoaderData } from "react-router";
import SingleBook from "./SingleBook";

const WishList = () => {
  const allBooks = useLoaderData();
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredIds("wishList"); //get all books ids of wishlist from local storage
    const bookIds = storedBookIds.map((id) => parseInt(id));
    const wishList = allBooks.filter((book) => bookIds.includes(book.bookId));
    setWishList(wishList);
  }, [allBooks]);

  // console.log(wishList);

  const [sort, setSort] = useState("");

  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedByPages = [...wishList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setWishList(sortedByPages);
    } else {
      const sortedByRating = [...wishList].sort((a, b) => a.rating - b.rating);
      setWishList(sortedByRating);
    }
  };

  return (
    <div className="pt-24 w-[90%] mx-auto mb-10">
      <h1 className="text-3xl font-bold text-center mb-5">
        Wish List ({wishList.length})
      </h1>

        {/* dropdown box to select sort by: */}
      <div className="flex items-center justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
            Sort By : {sort ? sort : " "}
          </div>
          {
            open ? <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            <li onClick={() => {
                handleSort("Pages");
                document.activeElement.blur();
            }}>
              <a>Pages</a>
            </li>
            <li onClick={() =>{
                handleSort("Rating");
                document.activeElement.blur();
            } }>
              <a>Rating</a>
            </li>
          </ul> : ""
          }
          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishList.map((book) => {
          return <SingleBook key={book.bookId} book={book}></SingleBook>;
        })}
      </div>
    </div>
  );
};

export default WishList;
