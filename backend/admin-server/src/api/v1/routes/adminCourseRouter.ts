import { Router } from 'express'
import { adminCourseController } from '../controller'

const router = Router()

router.get('/test', adminCourseController.test)
router.post('/add', adminCourseController.addCourse)
router.get('/view', adminCourseController.viewCourses)

export default router
