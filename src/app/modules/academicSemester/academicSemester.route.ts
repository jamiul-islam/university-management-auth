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

router.get(
  '/:id',
  validateRequest(AcademicSemesterZodValidation.updateAcademicSemesterZodSchema)
);
router.patch('/:id', AcademicSemesterDataController.updateSemester);

router.get('/', AcademicSemesterDataController.getAllSemesters);

export const SemesterRoutes = router;
