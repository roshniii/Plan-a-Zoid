import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import LoginLogo from "./top.png";

import './LoginPage.css'

const SignupPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
  return (
    <React.Fragment>
      <div className="container" id="loginContainer">
        <div className="form" data-aos="fade-up" data-aos-duration="1000">
          <form action="" className="form">
            <h2
            className="m-0"
            >
              Plan-A-Zoid
            </h2>
            <div data-aos="fade-up">
              <img src={LoginLogo} alt="" />
            </div>
            <h2> Create Account</h2>
            <div className="inputBox">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required="required"
              />
            </div>
            <div className="inputBox">
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="inputBox password">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
                id="password-input"
                required="required"
              />
              <a href class="password-control" onClick={togglePassword}></a>
            </div>
            <div className="inputBox">
              <input type="submit" value="Create Account" disabled />
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/" id="login">
              login
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupPage;
