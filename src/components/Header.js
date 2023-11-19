import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnstate] = useState("Logout");
  const onLineStatus = useOnlineStatus();
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
    <div className="flex items-center justify-between shadow-lg">
      <div className="logo-container">
        <Link to={""}><img className="w-56" src={LOGO_URL} /></Link>
      </div>
      <div className="flex items-center text-sl">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onLineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><NavLink to={""} style={navLinkStyle}>Home</NavLink></li>
          <li className="px-4"><NavLink to={"about"} style={navLinkStyle}>About us</NavLink></li>
          <li className="px-4"><NavLink to={"contact"} style={navLinkStyle}>contact us</NavLink></li>
          <li className="px-4"><NavLink to={"groceries"} style={navLinkStyle}>Grocery</NavLink></li>
          <li className="px-4">cart</li>
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
