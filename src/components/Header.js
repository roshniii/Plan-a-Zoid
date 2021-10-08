import React from 'react'
import { useState, useEffect } from 'react';
 
const Header = () => {


  // date
var date = new Date();
var n = date.toDateString();

// time 
const [clockState, setClockState] = useState();

useEffect(() => {
  setInterval(() => {
    const date = new Date();
    setClockState(date.toLocaleTimeString());
  }, 1000);
}, []);


    return (
        <React.Fragment>
            <div className="header">
            <div className="header-menu">
              <h2>UserName</h2>
              {/* <img
                className="profile-img"
                src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""
              ></img> */}
            </div>

            <div className="header-profile">
              <div className="dateTime">
              <div className="date" id="date">
                  <h5>{n}</h5>
                </div>
                <div className="time">
                  <button id="time">
                  {clockState}
                  </button>
                </div>
              
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Header
