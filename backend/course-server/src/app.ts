/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express, { Response } from 'express'
import config from 'config'
import cors from 'cors'
import { logGeneralInfo } from '../logger/customLogger'
import { v1Router } from './api/v1'
import connect from './api/v1/utils/mongodbConnect'
import createServer from './api/v1/utils/server'

//const app = express()
const app = createServer()
const port = config.get<number>('PORT') || 5010
const FILENAME = '/backend/course-server/src/app.ts'

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/api/v1/course', v1Router)

app.get('/', (req, res) => {
  res.send('Welcome from admin-server')
})

// // catch all
// app.all('*', (_, res: Response) => {
//   res
//     .status(501)
//     .send({ message: 'This course-service route is not implemented yet' })
// })

app.listen(port, async () => {
  logGeneralInfo(
    'course-server',
    FILENAME,
    'app-listen',
    `Server listening on port ${port}`
  )

  await connect()
})
