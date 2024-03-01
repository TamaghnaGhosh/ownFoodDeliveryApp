import { useContext, useEffect, useState } from "react";
// import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../utils/useAuthSlice";

const Header = () => {
  const location = useLocation();
  // const [btnState, setBtnstate] = useState("Logout");
  const onLineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const dispatch = useDispatch();

  // const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store?.cart?.items);

  // console.log(cartItems)

  const ReturnHome = () => {
    navigate("");
    window.location.reload(true);
  };
  const navLinkStyle = (props) => {
    const { isActive } = props;

    return {
      color: isActive ? "#00ab41" : "black",
      textDecoration: isActive ? "none" : "none",
    };
  };

  if (location.pathname === "/login") return null;

  return (
    <div className="flex items-center justify-between flex-col md:flex-row bg-gray-200 shadow-xl w-auto">
      <div className="logo-container">
        <div onClick={() => ReturnHome()}>
          <img
            className="h-[80px] w-[150px] rounded-full border border-black cursor-pointer m-4"
            src={LOGO_URL}
          />
        </div>
      </div>
      <div className="flex items-center text-sl">
        <ul className="flex p-4 m-4 flex-col md:flex-row">
          <li className="px-4 text-lg hover:text-yellow-500">
            Online Status: {onLineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-semibold text-lg">
            <NavLink to={"/"} style={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li className="px-4 text-lg font-semibold">
            <NavLink to={"about"} style={navLinkStyle}>
              About us
            </NavLink>
          </li>
          <li className="px-4 text-lg font-semibold">
            <NavLink to={"contact"} style={navLinkStyle}>
              contact us
            </NavLink>
          </li>
          <li className="px-4 text-lg font-semibold">
            <NavLink to={"groceries"} style={navLinkStyle}>
              Grocery
            </NavLink>
          </li>
          <li className="px-4 text-lg font-semibold hover:text-yellow-500 cursor-pointer">
            <span className="text-green-600 font-semibold text-lg ">
              ({cartItems.length})
            </span>{" "}
            <NavLink to={"cart"} style={navLinkStyle}>
              Cart
            </NavLink>
          </li>
          <li className="px-4 text-lg hover:text-yellow-500 font-bold">
            {user.userName}
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {user?.token ? (
              <button
                className="px-4 text-lg hover:text-yellow-500 font-bold"
                onClick={() => {
                  dispatch(clearUser());
                }}
              >
                Logout
                <span className={onLineStatus ? "text-[green]" : "text-[red]"}>
                  ●
                </span>
              </button>
            ) : (
              <button className="px-4 text-lg hover:text-yellow-500 font-bold" onClick={() => navigate("/login")}>
                Login
                <span className={onLineStatus ? "text-[green]" : "text-[red]"}>●</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
