    import React from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./Header";
    import RestaurantCard from './RestaurantCard';
    import Body from "./Body";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import About from "./About";
    import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Footer from "./Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));



const App = ()=>{
    
    return(
       <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },  {
        path:'/about',
        element:<About/>
    },
    

])

root.render(<RouterProvider router={appRouter}/>)