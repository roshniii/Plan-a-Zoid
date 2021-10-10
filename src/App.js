import { data } from "jquery";
import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homescreen from "./components/Homescreen";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Login/SignupPage";


const App = (props) => {
  const [schedules, setSchedules] = useState([
    {
      "TaskName": "Maths",
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

  const [fetchData, setFetchData]=useState([])


  const saveScheduleDataHandler =(enteredScheduleData) =>{
    // console.log(enteredScheduleData)
    const url = enteredScheduleData;
    fetch(url)
    .then(response=>response.json())
    .then(data => setSchedules(data));
    
    console.log(schedules)

    // setSchedules((preData)=>{
    //   return [fetchData, ...preData];
    // });

    // console.log(setSchedules)
  };

  
  console.log(schedules)


  

  return (

    <div>
   

      <Homescreen items={schedules}  onSaveScheduleData={saveScheduleDataHandler}/>
    </div>

  );
};

export default App;
