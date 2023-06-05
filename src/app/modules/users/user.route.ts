import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserZodValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserZodValidation.createZodSchema),
  UserController.createUser
)

export const UserRoutes = router
