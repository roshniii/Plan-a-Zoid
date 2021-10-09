import React from "react";
import Sessions from "./Sessions";
import "./scheduleitem.css";

const ScheduleItem = (props) => {
  

  let sessions;
   sessions = props.items.details.map((session)=>(
      <Sessions items={session}/>
    ));
  


  return (
    <React.Fragment>
      <div className="app-card schedule-item">
        <div className="row">
          <div className="col-4 task">
            <h4>{props.items.TaskName}</h4>
          </div>
          <div className="col-8">
            <div className="row">
                {sessions}

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleItem;
