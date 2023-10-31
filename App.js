import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResrtrurantContainer = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-card"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/92e3de73d82b7bcda7d8f1636f33f237"
      />
      <h3>Dada boudi</h3>
      <h4>Biriyani,chinese,asian,North indian etc</h4>
      <h4>4.4 star</h4>
      <h4>50 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResrtrurantContainer />
        <ResrtrurantContainer />
        <ResrtrurantContainer />
        <ResrtrurantContainer />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <h1>{`© Copyright is ${new Date().getFullYear()}`}</h1>
      <div className="nav-items">
        <ul>
          <li>links</li>
          <li>Barrackpore, North 24 pgs </li>
          <li>pin - 700122</li>
          <li>contact us - 9163299575</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
