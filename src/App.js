    import React from "react";
    import ReactDOM from "react-dom";
    import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
    return(
        <Header/>
    )
}

root.render(<App/>)