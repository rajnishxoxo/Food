    import React from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./Header";
    import RestaurantCard from './RestaurantCard';
    import Body from "./Body";
    import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
    return(
       <>
        <Header/>
        <Body/>
        </>
    )
}

root.render(<App/>)