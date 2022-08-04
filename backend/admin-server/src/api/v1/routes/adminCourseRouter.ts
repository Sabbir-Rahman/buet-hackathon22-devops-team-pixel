import { Router } from 'express'
import { adminCourseController } from '../controller'

const router = Router()

router.get(
  '/test',
  adminCourseController.test
)

export default router
