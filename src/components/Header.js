
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Header = () => {

  const [buttonName, setButtonName] = useState("Login");

 
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => { 
            
            buttonName === "Logout" ? setButtonName("Login") :
            setButtonName("Logout");            
            }}>{buttonName}</button>

        </ul>
      </div>
    </div>
  );
};

export default Header;
