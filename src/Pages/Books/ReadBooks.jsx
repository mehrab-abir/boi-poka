import React, { useEffect, useState } from "react";
import { getStoredIds } from "../../Utilities/localStorage";
import { useLoaderData } from "react-router";
import SingleBook from "./SingleBook";

const ReadBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredIds("readList"); //get all books ids of readlist from local storage
    const bookIds = storedBookIds.map((id) => parseInt(id));
    const readList = allBooks.filter((book) => bookIds.includes(book.bookId));
    setReadList(readList);
  }, [allBooks]);

  //   console.log(readList);

  const [sort, setSort] = useState("");

  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    } else {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="w-[90%] mx-auto pt-24 mb-10">
      <h1 className="text-3xl font-bold text-center mb-5">
        Read List ({readList.length})
      </h1>

      {/* dropdown box to select sort by: */}
      <div className="flex items-center justify-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-500 text-white"
          >
            Sort By : {sort ? sort : " "}
          </div>
          {open ? (
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
              <li
                onClick={() => {
                  handleSort("Pages");
                  document.activeElement.blur();
                }}
              >
                <a>Pages</a>
              </li>
              <li
                onClick={() => {
                  handleSort("Rating");
                  document.activeElement.blur();
                }}
              >
                <a>Rating</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {readList.map((book) => {
          return <SingleBook key={book.bookId} book={book}></SingleBook>;
        })}
      </div>
    </div>
  );
};

export default ReadBooks;
