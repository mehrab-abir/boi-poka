import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/Books/BookDetails";
import WishList from "../Pages/Books/WishList";
import ReadBooks from "../Pages/Books/ReadBooks";

export const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    children : [
        {
            index : true,
            loader : ()=> fetch("/booksData.json"),
            Component: Home
        },
        {
          path : '/bookDetails/:id',
          loader : ()=> fetch("/booksData.json"),
          Component : BookDetails
        },
        {
          path : '/wishList',
          loader : ()=>fetch('/booksData.json'),
          Component : WishList
        },
        {
          path : '/readBooks',
          loader: () => fetch('/booksData.json'),
          Component : ReadBooks
        }
    ]
  },
  {
    path : '*',
    Component : ErrorPage
  }
])