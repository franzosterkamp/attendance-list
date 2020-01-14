import React from "react";
import { AttendanceInterface } from "./attendances";

interface AttendanceProps {
  attendance: AttendanceInterface;
}

const Attendance: React.FC<AttendanceProps> = ({ attendance }) => {
  return (
    <div>
      {attendance.name}{" "}
      <input type="checkbox" checked={attendance.isPresentAtAM} disabled />{" "}
      <input type="checkbox" checked={attendance.isPresentAtPM} disabled />
      <input type="checkbox" checked={attendance.excused} disabled />
    </div>
  );
};

export default Attendance;
