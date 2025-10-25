import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path : '/',
    Component : Root,
    children : [
        {
            index : true,
            loader : ()=> fetch("booksData.json"),
            Component: Home
        }
    ],
    errorElement : <ErrorPage></ErrorPage>
  }
])