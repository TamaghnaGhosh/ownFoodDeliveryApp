import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useNavigate, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnstate] = useState("Logout");
  const onLineStatus = useOnlineStatus();
  const navigate = useNavigate();

  const ReturnHome = () => {
    navigate("");
    window.location.reload()
  }
  const navLinkStyle = (props) => {
    const { isActive } = props;
    // console.log(props)
    return {
      color: isActive ? "Red" : "black",
      textDecoration: isActive ? "none" : "none"
    }
  }
  return (
    <div className="flex items-center justify-between shadow-lg">
      <div className="logo-container">
        <div onClick={() => ReturnHome()}><img className="w-36 cursor-pointer" src={LOGO_URL} /></div>
      </div>
      <div className="flex items-center text-sl">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">Online Status: {onLineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 text-lg"><NavLink to={""} style={navLinkStyle}>Home</NavLink></li>
          <li className="px-4 text-lg"><NavLink to={"about"} style={navLinkStyle}>About us</NavLink></li>
          <li className="px-4 text-lg"><NavLink to={"contact"} style={navLinkStyle}>contact us</NavLink></li>
          <li className="px-4 text-lg"><NavLink to={"groceries"} style={navLinkStyle}>Grocery</NavLink></li>
          <li className="px-4 text-lg">cart</li>
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
