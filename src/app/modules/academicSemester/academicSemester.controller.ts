/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const result = await AcademicSemesterService.createAcademicSemester(
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
  const filters = pick(req.query as any, [
    'searchTerm',
    'title',
    'code',
    'year',
  ]);
  // pagination option
  const paginationOption = pick(req.query as any, [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
  ]);

  // get result
  const result = await AcademicSemesterService.getAllAcademicSemesters(
    filters,
    paginationOption
  );

  // send response
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully!',
    data: result.data,
    meta: result.meta,
  });
});

export const AcademicSemesterDataController = {
  createSemester,
  getAllSemesters,
};
