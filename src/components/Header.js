import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [btnState, setBtnstate] = useState("Logout");

  useEffect(() => {

  }, [btnState])

  const navLinkStyle = (props) => {
    const { isActive } = props;
    // console.log(props)
    return {
      color: isActive ? "Red" : "black",
      textDecoration: isActive ? "none" : "none"
    }
  }
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={""}><img className="logo" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><NavLink to={""} style={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to={"about"} style={navLinkStyle}>About us</NavLink></li>
          <li><NavLink to={"contact"} style={navLinkStyle}>contact us</NavLink></li>
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
