import React from "react";

const sessions = (props) => {

  // console.log(props.items.session)
  return (
    <React.Fragment>
      <div className="col-4 session">
        <div className="col-12 session-title">
          <p>Session {props.items.session}</p>
        </div>
        <div className="col-12 session-time">{props.items.start} - {props.items.end}</div>
      </div>
    </React.Fragment>
  );
};

export default sessions;
