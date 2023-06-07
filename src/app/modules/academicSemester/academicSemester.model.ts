import status from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../../errors/ApiError'
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

AcademicSemesterSchema.pre('save', async function (next) {
  const doesExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (doesExist) {
    throw new ApiError(status.CONFLICT, 'Academic Semester already exists')
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  AcademicSemesterSchema
)
