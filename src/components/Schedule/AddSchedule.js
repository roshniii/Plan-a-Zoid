import React from "react";
import ScheduleItem from "./ScheduleItem";
import ScheduleForm from "./ScheduleForm";

import "./AddSchedule.css";

const AddSchedule = (props) => {

  // console.log(props.items)


  const saveScheduleDataHandler =(enteredScheduleData) =>{
    
    // console.log(enteredScheduleData)
  }

  let scheduleContent = <p>No Schedule</p>;
  if(props.items.length >0){
    scheduleContent = props.items.map((schedule) =>(
      <ScheduleItem items={schedule}/>

    ));
  }
  return (
    <React.Fragment>
      <div className="col-8 schedule">
        <div className="content-section">
          <div className="content-section-title">Add your schedule</div>
          <div className="app-card">
            <ScheduleForm onSaveScheduleData={saveScheduleDataHandler} />

            {scheduleContent}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddSchedule;
