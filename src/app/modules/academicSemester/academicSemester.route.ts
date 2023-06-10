import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterDataController } from './academicSemester.controller';
import { AcademicSemesterZodValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(
    AcademicSemesterZodValidation.createAcademicSemesterZodSchema
  ),
  AcademicSemesterDataController.createSemester
);

router.patch(
  '/:id',
  validateRequest(
    AcademicSemesterZodValidation.updateAcademicSemesterZodSchema
  ),
  AcademicSemesterDataController.updateSemester
);

router.get('/', AcademicSemesterDataController.getAllSemesters);

export const SemesterRoutes = router;
