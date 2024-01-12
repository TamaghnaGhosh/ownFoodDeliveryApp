import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, createHashRouter, Outlet, RouterProvider } from "react-router-dom";

import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrurantMenuPage from "./components/RestrurantItems/RestrurantMenuPage";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./ScrollTop";

//import About from "./components/About";
const About = lazy(() => import("./components/About"));

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [loginName, setLoginName] = useState("");

  useEffect(() => {
    const data = {
      name: "Tell me what to write",
    };
    setLoginName(data.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: loginName, setLoginName }}>
          <div className="md:text-center">
            {/* We can always see the top view whenever the path changes */}

            <ScrollTop />

            <Header />

            {/* This Outlet element is replacing children elements */}
            <Outlet />

            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
      {/* {The Global Totaser is here} */}
      <Toaster />
    </>
  );
};

const appLayout = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restrurants/:resId",
        element: <RestrurantMenuPage />,
      },
    ],

    //This component helps when it gets a 404 error (errorElement)
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appLayout} />
  </React.StrictMode>
);
