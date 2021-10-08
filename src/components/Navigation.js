import React from 'react'

import { IconContext } from "react-icons";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";

const Navigation = () => {
    return (
        <React.Fragment>
        <div className="left-side">
        <div className="side-menu">
          <div id="notify-modal" className="modal-window">
            <div className="modal-content">
              <div className="row top">
                <div className="col-5">
                  <h4>Notification</h4>
                </div>
                <div className="col-2">
                  <a href="#" title="Close" className="modal-close">
                    Close
                  </a>
                </div>
              </div>

              <div className="row notify">
                <p>No notifications</p>
              </div>
            </div>
          </div>

          <a className="btn" href="#notify-modal">
            <div className="app-card">
              <span>
                <IconContext.Provider
                  value={{ color: "White", size: "35px" }}
                >
                  <div>
                    <RiNotificationBadgeFill />
                  </div>
                </IconContext.Provider>
              </span>
            </div>
          </a>

          <a className="btn">
            <div className="app-card">
              <span>
                <IconContext.Provider
                  value={{ color: "White", size: "35px" }}
                >
                  <div>
                    <AiTwotoneSetting />
                  </div>
                </IconContext.Provider>
              </span>
            </div>
          </a>
        </div>

        <div className="side-menu " id="volume">
          <div className="range-slider">
            <input
              className="input-range"
              orient="vertical"
              type="range"
              step="1"
              value="5"
              min="1"
              max="100"
            ></input>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
}

export default Navigation
