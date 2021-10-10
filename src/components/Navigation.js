import React from 'react'

import { IconContext } from "react-icons";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

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

          <a className="btn" href="homePage/#notify-modal">
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
          <a href="https://jamboard.google.com/d/1CgFuADM85dgbVtLXOrbBv6f8meAwECKjj_favfFw2gk/edit?usp=sharing" target="_blank" className="btn">
            <div className="app-card">
              <span>
                <IconContext.Provider
                  value={{ color: "White", size: "35px" }}
                >
                  <div>
                    <BsPencilSquare />
                  </div>
                </IconContext.Provider>
              </span>
            </div>
          </a>
        </div>

      
      </div>
      </React.Fragment>
    )
}

export default Navigation
