import { Router } from 'express'
import { courseEnrollController } from '../controller'

const router = Router()

router.get('/test', courseEnrollController.test)
router.post('/enroll', courseEnrollController.enrollCourse)
router.get('/view', courseEnrollController.viewEnrolledCourse)

export default router
