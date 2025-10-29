import { Star } from "lucide-react";
import { Link } from "react-router";

const SingleBook = ({ book }) => {
  const { author, category, bookId, bookName, image, rating, tags, totalPages } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="bookCard border border-gray-200 p-4 rounded-xl">
        <div className="bg-gray-200 py-6 rounded-xl">
          <img src={image} alt="" className="h-40 mx-auto" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 mt-3 flex-wrap">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="text-green-500 text-sm bg-gray-100 px-2 py-1 rounded-full font-bold"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="border-b border-dashed border-gray-300 my-6 pb-4">
            <h1 className="text-xl font-bold">{bookName}</h1>
            <p className="mt-2">By : {author}</p>
            <p>Pages: {totalPages}</p>
          </div>
          <div className="flex items-center justify-between">
            <span>{category}</span>
            <div className="flex gap-2">
              <span>{rating}</span>
              <span>
                <Star className="w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
