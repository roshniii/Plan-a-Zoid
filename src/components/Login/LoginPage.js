import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupPage from "./SignupPage";
import Homescreen from "../Homescreen";
import LoginLogo from "./top.png";
import { useState } from "react";

import "./LoginPage.css";
const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Router>
      <React.Fragment>
        <section className="section">
          <div className="box">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <div className="container" id="loginContainer">
                    <div
                      className="form"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <form action="" className="form">
                        <h2
                        //  style="margin: 0;"
                        >
                          Plan-A-Zoid
                        </h2>
                        <div>
                          <img src={LoginLogo} alt="" />
                        </div>
                        <h2>Login</h2>

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
                          <a
                            href
                            class="password-control"
                            onClick={togglePassword}
                          ></a>
                        </div>

                        <div className="inputBox">
                            <Link to="/homePage">
                          <input type="submit" value="Log in" />
                            </Link>
                        </div>
                      </form>

                      <p>
                        Forgot password? <a href>Click Here</a>
                      </p>
                      <p>
                        New to Here?{" "}
                        <Link to="/signupPage" id="signup">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              )}
            />
            <Route path="/signupPage" component={SignupPage} />
          </div>
        </section>
    <Route path="/homePage" component={Homescreen } />

      </React.Fragment>
    </Router>
  );
};

export default LoginPage;
