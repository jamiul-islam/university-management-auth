import status from 'http-status'
import ApiError from '../../../errors/ApiError'
import { AcademicSemesterTitleCodeMapper } from './academicSemester.contants'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (AcademicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      status.BAD_REQUEST,
      'Invalid Semester title and code combination!'
    )
  }

  const result = await AcademicSemester.create(payload)

  return result
}

export const AcademicSemesterService = {
  createAcademicSemester,
}
