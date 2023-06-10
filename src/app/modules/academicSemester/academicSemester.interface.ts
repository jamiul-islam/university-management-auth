import { Model } from 'mongoose';

// type of calendar months names
export type MonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemester = {
  title: 'Winter' | 'Fall' | 'Summer';
  year: number;
  code: '01' | '02' | '03';
  startMonth: MonthName;
  endMonth: MonthName;
};

export type AcademicSemesterModel = Model<
  IAcademicSemester,
  Record<string, unknown>
>;
