import { RequestHandler } from 'express'
import { AcademicSemesterService } from './academicSemester.services'

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    )
    res.status(200).json({
      success: true,
      message: 'Academic SemesterData is created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const AcademicSemesterDataController = {
  createSemester,
}
