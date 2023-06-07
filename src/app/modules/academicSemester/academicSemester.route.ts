import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterDataController } from './academicSemester.controller'
import { AcademicSemesterZodValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(
    AcademicSemesterZodValidation.createAcademicSemesterZodSchema
  ),
  AcademicSemesterDataController.createSemester
)

export const SemesterRoutes = router
