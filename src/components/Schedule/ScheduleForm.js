import React from "react";
import { useState } from "react";

const ScheduleForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredStartTime, setEnteredStartTime] = useState("");
  const [enteredEndTime, setEnteredEndTime] = useState("");

  const taskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  const startTimeChangeHandler = (e) => {
    setEnteredStartTime(e.target.value);
  };

  const endTimeChangeHandler = (e) => {
    setEnteredEndTime(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const scheduleData = {
      task: enteredTask,
      startTime: enteredStartTime,
      endTime: enteredEndTime,
    };

    props.onSaveScheduleData(scheduleData);

    setEnteredTask("");
    setEnteredStartTime("");
    setEnteredEndTime("");
  };

  const cancelHandler = () => {
    setEnteredTask("");
    setEnteredStartTime("");
    setEnteredEndTime("");
  };

  return (
    <React.Fragment>
      <div className="app-card-buttons">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#demo"
          className="content-button status-button"
        >
          Add
        </button>
      </div>
      <div id="demo" className="collapse">
        <div className="app-card form">
          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="col-4 new-expense__control">
                <label>Add Task</label>

                <input
                  type="text"
                  value={enteredTask}
                  placeholder="Your Task"
                  onChange={taskChangeHandler}
                  required
                />
              </div>
              <div className="col-4 new-expense__control">
                <label>Start Time</label>
                <input
                  type="time"
                  value={enteredStartTime}
                  onChange={startTimeChangeHandler}
                  required
                />
              </div>{" "}
              <div className="col-4 new-expense__control">
                <label>End Time</label>
                <input
                  type="time"
                  value={enteredEndTime}
                  onChange={endTimeChangeHandler}
                  required
                />
              </div>
              <div className=" col-12 mt-4 button">
                <button
                  className="content-button status-button me-5"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                  onClick={cancelHandler}
                >
                  Cancel
                </button>
                <button
                  className="content-button status-button"
                  type="submit"
                  
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleForm;
