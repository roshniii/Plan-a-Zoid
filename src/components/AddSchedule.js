import React from "react";

const AddSchedule = () => {
  return (
    <React.Fragment>
      <div className="col-8">
        <div className="content-section">
          <div className="content-section-title">Add your schedule</div>
          <div className="apps-card">
            <div className="app-card">
              <span>No Schedule</span>
              <div className="app-card__subtext">
                {/* <!-- Edit, master and create fully proffesional videos --> */}
              </div>
              <div className="app-card-buttons">
                <button className="content-button status-button">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddSchedule;
