import React from "react";
import Sessions from "./Sessions";
import "./scheduleitem.css";

const ScheduleItem = () => {
  return (
    <React.Fragment>
      <div className="app-card schedule-item">
        <div className="row">
          <div className="col-4 task">
            <h4>Task Name</h4>
          </div>
          <div className="col-8">
            <div className="row">
                <Sessions/>
                <Sessions/>
                <Sessions/>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleItem;
