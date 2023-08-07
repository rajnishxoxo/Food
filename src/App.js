import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import Body from "./Body";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./About";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

root.render(<RouterProvider router={appRouter} />);
