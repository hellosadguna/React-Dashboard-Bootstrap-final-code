import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import bg from "../../assets/images/bg.svg";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                  <form action="">
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
                        <i
                          className={`fa ${
                            showPassword ? "fa-eye" : "fa-eye-slash"
                          } eye-icon`}
                          aria-hidden="true"
                          onClick={togglePasswordVisibility}
                        ></i>
                      </span>
                      <div className="abc">
                        <span>
                          <p>
                            Forgot Password <Link to="">Click Here</Link>
                          </p>
                        </span>
                      </div>
                    </div>
                    {/* Forgot Password  */}
                    <Link className="cmm_btn" to="/dashboard">
                      {" "}
                      Sign In{" "}
                    </Link>{" "}
                    &nbsp;
                    <Link className="cmm_btn" to="/Signup">
                      Sign Up
                    </Link>
                  </form>
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
