import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/Books/BookDetails";

export const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    children : [
        {
            index : true,
            loader : ()=> fetch("booksData.json").then(res => res.json()),
            Component: Home
        },
        {
          path : '/bookDetails/:id',
          Component : BookDetails
        }
    ]
  },
  {
    path : '*',
    Component : ErrorPage
  }
])