import React, { useEffect } from "react";
import { Formik, ErrorMessage } from "formik"; // import Formik from formik
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/useAuthSlice";
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";
// import useLocalStorage from "../utils/useLocalStorage";

// create a schema for Email and Password validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required")
    .email("Enter Valid Email"),
  password: Yup.string()
    .required("Password is a required")
    .min(8, "Password must be 8 characters long"),
});

const Login = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // call custom hook useLocalStorage for getting localStorage value of user

  useEffect(() => {
    // if length of token is equal to 100 then navigate to previous page
    if (user?.token?.length === 100) {
      navigate(-1);
    }
  }, []);

  function handleNavigate(values) {
    let index = values?.email.indexOf("@");
    let name = values?.email.slice(0, index);

    // generate 100 character random string
    const genRandomStringNthChar = () => {
      return [...Array(100)].map(() => Math.random().toString(36)[2]).join("");
    };

    // store userName and token in localStorage
    dispatch(
      addUser({
        userName: name,
        token: genRandomStringNthChar(),
      })
    );
    // navigate to previous page
    navigate(-1);
  }

  // if length of token is equal to 100 then return null
  if (user?.token?.length === 100) return null;

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // invoke handleNavigate function and pass input filed data
          handleNavigate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
            <div className="login-form">
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="p-3 my-2 rounded-md bg-[#333] w-full"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                {/* <p className="error">
                  {errors.email && touched.email && errors.email}
                </p> */}
                <span className="text-[red]">
                  <ErrorMessage name="email" />
                </span>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="p-3 my-2 rounded-md bg-[#333] w-full"
                />
                {/* If validation is not passed show errors */}
                {/* <p className="error">
                  {errors.password && touched.password && errors.password}
                </p> */}
                <span className="text-[red]">
                  <ErrorMessage name="password" />
                </span>
                {/* Click on submit button to submit the form */}
                <button
                  type="submit"
                  className="p-4 my-4 rounded-md w-full bg-[#e50914] font-medium text-xl"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
