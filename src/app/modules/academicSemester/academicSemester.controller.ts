import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AcademicSemesterService } from './academicSemester.services'

// create semester
const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully!',
      data: result,
    })
    next()
  }
)

// get all semesters
const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // pagination option
    const paginationOption = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      sortBy: req.query.sortBy as string,
      sortOrder: req.query.sortOrder as string,
    }

    // get result
    const result = await AcademicSemesterService.getAllAcademicSemesters(
      paginationOption
    )

    // send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semesters retrieved successfully!',
      data: result,
    })
    next()
  }
)

export const AcademicSemesterDataController = {
  createSemester,
  getAllSemesters,
}
