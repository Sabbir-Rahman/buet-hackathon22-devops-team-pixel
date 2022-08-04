/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express'
import { courseEnrollRouter } from './routes'
const router = Router()

router.use('/', courseEnrollRouter)

export default router
