/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express'
import { adminCourseRouter } from './routes'
const router = Router()

router.use('/course', adminCourseRouter)

export default router
