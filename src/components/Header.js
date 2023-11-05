import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnState, setBtnstate] = useState("Logout");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
          <button
            className="button-logIn-logOut"
            onClick={() =>
              btnState === "Logout"
                ? setBtnstate("Login")
                : setBtnstate("Logout")
            }
          >
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
