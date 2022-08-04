
import { Router } from 'express'
import { authController } from '../controller'

const router = Router()

router.get('/test', authController.test)
router.post('/create/admin', authController.addAdmin)
router.get('/view/admin', authController.viewAdmin)

export default router
