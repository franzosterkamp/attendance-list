import React from "react";
import Attendance from "./Attendance";
import { AttendancesInterface } from "./attendances";

interface AttendanceListProps {
  attendances: AttendancesInterface;
}

const AttendanceList: React.FC<AttendanceListProps> = ({ attendances }) => {
  return (
    <div>
      {attendances.map(attendance => (
        <Attendance key={attendance.name} attendance={attendance} />
      ))}
    </div>
  );
};

export default AttendanceList;
