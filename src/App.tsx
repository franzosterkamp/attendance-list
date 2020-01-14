import React from "react";
import AttendanceList from "./AttendanceList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <AttendanceList
        attendances={[
          {
            name: "Franz",
            isPresentAtAM: true,
            isPresentAtPM: false
          },
          {
            name: "Peter",
            isPresentAtAM: false,
            isPresentAtPM: false,
            excused: false
          }
        ]}
      />
    </div>
  );
};

export default App;
