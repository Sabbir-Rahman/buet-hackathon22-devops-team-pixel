/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express'
import { authRouter } from './routes'
const router = Router()

router.use('/', authRouter)

export default router
