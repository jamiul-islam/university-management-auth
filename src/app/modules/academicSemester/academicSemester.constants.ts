import { MonthName } from './academicSemester.interface';

// create academic semester month names with type validation
export const AcademicSemesterMonth: MonthName[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterTitle: string[] = ['Winter', 'Fall', 'Summer'];
export const AcademicSemesterCode: string[] = ['01', '02', '03'];
export const AcademicSemesterStartMonth: MonthName[] = AcademicSemesterMonth;
export const AcademicSemesterEndMonth: MonthName[] = AcademicSemesterMonth;

export const AcademicSemesterTitleCodeMapper: { [key: string]: string } = {
  Winter: '01',
  Fall: '02',
  Summer: '03',
};
