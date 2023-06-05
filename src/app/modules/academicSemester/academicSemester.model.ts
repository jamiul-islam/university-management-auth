import { Schema, model } from 'mongoose'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'

const Month = [
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
]

const AcademicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: ['Winter', 'Fall', 'Summer'] },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: ['01', '02', '03'] },
    startMonth: { type: String, required: true, enum: Month },
    endMonth: { type: String, required: true, enum: Month },
  },
  { timestamps: true } //mongoose will set createdAt and updatedAt fields automatically
)

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  AcademicSemesterSchema
)
