import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import bg from "../../assets/images/bg.svg";

// Functional component for Login
export const Login = () => {
  // State variables for password visibility and form switching
  const [showPassword, setShowPassword] = useState(false);
  const [switchh, setSwitchh] = useState("login");

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to switch between login, signup, forgot password, and change password forms
  const switchsec = (e) => {
    setSwitchh(e);
  };

  return (
    <div>
      <div id="main_div">
        <div className="container">
          <div className="row ds">
            <div className="col-md-6">
              <div className="img_sec">
                <img src={bg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="img_sec-ava">
                    <img src={avatar} alt="" />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  {/* Login Form */}
                  {switchh === "login" && (
                    <form action="" id="login_forms">
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control"
                            id="first"
                            type="email"
                            placeholder=" "
                          />
                          <label htmlFor="first">Email</label>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control mb-2"
                            id="second"
                            type={showPassword ? "text" : "password"}
                            placeholder=" "
                          />
                          <label htmlFor="second" className="">
                            Password
                          </label>
                          {/* Toggle password visibility icon */}
                          <i
                            className={`fa ${
                              showPassword ? "fa-eye" : "fa-eye-slash"
                            } eye-icon`}
                            aria-hidden="true"
                            onClick={togglePasswordVisibility}
                          ></i>
                        </span>
                        {/* Forgot Password link */}
                        <div className="abc">
                          <span>
                            <p>
                              Forgot Password{" "}
                              <Link to="" onClick={() => switchsec("forgotpp")}>
                                Click Here
                              </Link>
                            </p>
                          </span>
                        </div>
                      </div>
                      {/* Sign In and Sign Up buttons */}
                      <Link className="cmm_btn" to="/dashboard/homepage">
                        {" "}
                        Sign In{" "}
                      </Link>{" "}
                      &nbsp;
                      <Link
                        className="cmm_btn"
                        onClick={() => switchsec("signnup")}
                      >
                        Sign Up
                      </Link>
                    </form>
                  )}

                  {/* Signup Form */}
                  {switchh === "signnup" && (
                    <form action="" id="login_forms">
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder=" "
                          />
                          <label htmlFor="name">Name</label>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control"
                            id="signup-email"
                            type="email"
                            placeholder=" "
                          />
                          <label htmlFor="signup-email">Email</label>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control mb-2"
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder=" "
                          />
                          <label htmlFor="signup-password" className="">
                            Password
                          </label>
                          {/* Toggle password visibility icon */}
                          <i
                            className={`fa ${
                              showPassword ? "fa-eye" : "fa-eye-slash"
                            } eye-icon`}
                            aria-hidden="true"
                            onClick={togglePasswordVisibility}
                          ></i>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control mb-2"
                            id="confirm-password"
                            type="password"
                            placeholder=" "
                          />
                          <label htmlFor="confirm-password" className="">
                            Confirm Password
                          </label>
                        </span>
                      </div>
                      {/* Forgot Password link */}
                      <div className="abc">
                        <span>
                          <p>
                            Forgot Password{" "}
                            <Link to="" onClick={() => switchsec("forgotpp")}>
                              Click Here
                            </Link>
                          </p>
                        </span>
                      </div>
                      {/* Sign Up and Sign In buttons */}
                      <Link
                        className="cmm_btn"
                        onClick={() => switchsec("login")}
                      >
                        Sign Up
                      </Link>{" "}
                      &nbsp;
                      <Link
                        className="cmm_btn"
                        to=""
                        onClick={() => switchsec("login")}
                      >
                        {" "}
                        Sign In{" "}
                      </Link>{" "}
                    </form>
                  )}

                  {/* Forgot Password Form */}
                  {switchh === "forgotpp" && (
                    <form action="" id="login_forms">
                      <p>forgot password</p>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control"
                            id="first"
                            type="email"
                            placeholder=" "
                          />
                          <label htmlFor="first">Email</label>
                        </span>
                      </div>
                      {/* Submit and Sign In buttons */}
                      <Link
                        className="cmm_btn"
                        onClick={() => switchsec("changepassword")}
                      >
                        Submit
                      </Link>
                      <Link
                        className="cmm_btn"
                        to=""
                        onClick={() => switchsec("login")}
                      >
                        {" "}
                        Sign In{" "}
                      </Link>{" "}
                      &nbsp;
                    </form>
                  )}

                  {/* Change Password Form */}
                  {switchh === "changepassword" && (
                    <form action="" id="login_forms">
                      <p>change password </p>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control"
                            id="first"
                            type="email"
                            placeholder=" "
                            disabled
                            value={"test@gmail.com"}
                          />
                          <label htmlFor="first">Email</label>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control"
                            id="otp"
                            type="number"
                            placeholder=" "
                          />
                          <label htmlFor="first">OTP</label>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control mb-2"
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder=" "
                          />
                          <label htmlFor="signup-password" className="">
                            New Password
                          </label>
                          {/* Toggle password visibility icon */}
                          <i
                            className={`fa ${
                              showPassword ? "fa-eye" : "fa-eye-slash"
                            } eye-icon`}
                            aria-hidden="true"
                            onClick={togglePasswordVisibility}
                          ></i>
                        </span>
                      </div>
                      <div className="form-group">
                        <span className="has-float-label">
                          <input
                            className="form-control mb-2"
                            id="confirm-password"
                            type="text"
                            placeholder=" "
                          />
                          <label htmlFor="confirm-password" className="">
                            Confirm Password
                          </label>
                        </span>
                      </div>
                      {/* Submit button */}
                      <Link
                        className="cmm_btn"
                        onClick={() => switchsec("login")}
                      >
                        Submit
                      </Link>
                      {/* Sign In button */}
                      &nbsp;
                    </form>
                  )}
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
