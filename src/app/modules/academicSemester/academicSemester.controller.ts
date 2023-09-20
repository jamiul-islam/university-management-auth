import { Request, Response } from 'express';
import httpStatus from 'http-status';
import pick from '../../../pick';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.services';

// create semester
const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  });
});

// get all semesters
const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  // filter query
  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year']);
  // pagination option
  const paginationOption = pick(req.query, [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
  ]);

  // get result
  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOption
  );

  // send response
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

// get single semester
const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester retrieved successfully !',
    data: result,
  });
});

// update a semester
const updateSemester = catchAsync(async (req: Request, res: Response) => {
  // retrieve id and updated data
  const id = req.params.id;
  const updateData = req.body;

  // update semester by id
  const result = await AcademicSemesterService.updateSemester(id, updateData);

  // send updated result
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester updated successfully !',
    data: result,
  });
});

// delete a semester
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.deleteSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Deleted successfully !',
    data: result,
  });
});

export const AcademicSemesterDataController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
