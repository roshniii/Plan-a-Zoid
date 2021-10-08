import React from "react";

import Header from "./Header";
import DarkLight from "./DarkLight";
import AddSchedule from "./Schedule/AddSchedule";
import Timer from "./Timer";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import Navigation from "./Navigation";
import "./homescreen.css";

const Homescreen = () => {
  return (
    <React.Fragment>
      <div className="container">
        <DarkLight />
        <div className=" app">
          <Header />
          <div className="wrapper">
            <div className="main-container">
              <div className="content-wrapper">
                <div className="row">
                  <AddSchedule />
                  <Timer />
                </div>

                {/* <!-- bottom row --> */}

                <div className="row bottom">
                  <div className="col-5 room">
                    <div className="row">
                      <div className="col-6 content-section">
                        <a href="./room.html">
                          <div className="apps-card">
                            <div className="app-card">
                              <span>Create Room</span>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-6 content-section">
                        <a href="./room.html">
                          <div className="apps-card">
                            <div className="app-card">
                              <span>Join Room</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <MusicPlayer />
                </div>
              </div>
            </div>

            <Navigation />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homescreen;
