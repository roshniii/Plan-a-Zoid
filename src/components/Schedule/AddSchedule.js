import React from "react";
import ScheduleItem from "./ScheduleItem";

const AddSchedule = () => {
  return (
    <React.Fragment>
      <div className="col-8 schedule">
        <div className="content-section">
          <div className="content-section-title">Add your schedule</div>
          <div className="app-card">
            <ScheduleItem/>
            <ScheduleItem/>
            <ScheduleItem/>
            <div className="app-card-buttons">
              <button className="content-button status-button">Add</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddSchedule;
