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

router.get('/:id', AcademicSemesterDataController.getSingleSemester);

router.patch(
  '/:id',
  validateRequest(
    AcademicSemesterZodValidation.updateAcademicSemesterZodSchema
  ),
  AcademicSemesterDataController.updateSemester
);

router.delete('/:id', AcademicSemesterDataController.deleteSemester);

router.get('/', AcademicSemesterDataController.getAllSemesters);

export const SemesterRoutes = router;
