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

const ResrtrurantContainer = (props) => {
  console.log(props?.resData);
  const { name, cuisine, rating, ...otherProps } = props?.resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-card"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${otherProps.imgCode}`}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} star</h4>
      <h4>{otherProps.duration} mins</h4>
    </div>
  );
};

const resList = [
  {
    id: '000001',
    name: "Dada boudi",
    cuisine: "Biriyani,chinese,asian,North indian etc",
    rating: "4.4",
    duration: "50",
    imgCode: "92e3de73d82b7bcda7d8f1636f33f237",
  },
  {
    id: '000002',
    name: "dominoz",
    cuisine: "Burger,pizza...........",
    rating: "4.4",
    duration: "50",
    imgCode: "xkewcpshufsgvrkl9rns",
  },
  {
    id: '000003',
    name: "Dada boudi",
    cuisine: "momo,thukpa.........",
    rating: "4.4",
    duration: "50",
    imgCode: "0984acc0ed7b914206dbbcb90297becc",
  },
  {
    id: '000004',
    name: "kfc",
    cuisine: "burger,pizza........",
    rating: "4.4",
    duration: "50",
    imgCode: "56c9ab92bd79745fd152a30fa2525426",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map((resDataObj) => (
          <ResrtrurantContainer key={resDataObj?.id} resData={resDataObj} />
        ))}
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
