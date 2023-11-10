import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrurantMenuPage from "./components/RestrurantMenuPage";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />

      {/* This Outlet element is replacing children elements */}
      <Outlet />

      <Footer />
    </div>
  );
};

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restrurants/:resId",
        element: <RestrurantMenuPage />
      }
    ],

    //This component helps when it gets a 404 error (errorElement)
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout} />);
