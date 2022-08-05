/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express'
import { resultRouter } from './routes'
const router = Router()

router.use('/result', resultRouter)

export default router
