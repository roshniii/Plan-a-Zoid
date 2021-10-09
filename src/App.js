import React from "react";
import { useState } from "react";
import Homescreen from "./components/Homescreen";


const App = () => {
  const [schedules, setSchedules] = useState([
    {
      "TaskName": "Chemistry",
      "details": [{
      "session": "1",
      "start": "15:00",
      "end": "15:25"
      },
      {
      "session": "2",
      "start": "15:30",
      "end": "15:55"
      },
      {
      "session": "3",
      "start": "16:00",
      "end": "16:25"
      },
      ]
    }
  ]);


  return (
    <div>
      <Homescreen items={schedules}/>
    </div>
  );
};

export default App;
