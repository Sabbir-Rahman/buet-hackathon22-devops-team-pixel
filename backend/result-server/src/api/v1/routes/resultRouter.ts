import { Router } from 'express'
import { resultController } from '../controller'

const router = Router()

router.get('/test', resultController.test)
router.post('/add', resultController.addResult)
router.get('/view', resultController.viewResult)

export default router
