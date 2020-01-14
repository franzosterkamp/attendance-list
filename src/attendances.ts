export interface AttendanceInterface {
  name: string;
  isPresentAtAM: boolean;
  isPresentAtPM: boolean;
  excused?: boolean;
}

export type AttendancesInterface = Array<AttendanceInterface>;
