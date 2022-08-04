
import { Router } from 'express'
import { authController } from '../controller'

const router = Router()

router.get('/test', authController.test)
router.post('/create/admin', authController.addAdmin)
router.get('/view/admin', authController.viewAdmin)
router.post('/create/student', authController.addStudent)
router.get('/view/student', authController.viewStudents)

export default router
