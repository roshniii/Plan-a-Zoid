import React from "react";

const timer = () => {
  return (
    <React.Fragment>
      <div className="col-4">
        <div className="content-section">
          <div className="content-section-title">Timer</div>
          <div className="apps-card">
            <div className="app-card">
              <span>Time left for *taskName*</span>
              <h1>00:00</h1>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="content-section-title">Break Timer</div>
          <div className="apps-card">
            <div className="app-card">
              <span>Your Break Starts in:</span>
              <h1>00:00</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default timer;
