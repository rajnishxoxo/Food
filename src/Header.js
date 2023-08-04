import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = () => {

  const [buttonText,setButtonText] = useState('Login');

  function handleClick(){
    setButtonText('Logout')
    if(buttonText==="Logout"){
      setButtonText('login')
    }
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/jpeg;base64,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"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button className="btn-login" onClick={handleClick}>{buttonText}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
