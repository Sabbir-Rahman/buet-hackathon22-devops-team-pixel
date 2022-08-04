/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express, { Response } from 'express'
import config from 'config'
import cors from 'cors'

const app = express()
const port = config.get<number>('PORT') || 5010

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
  res.send('Welcome from admin-server')
})

// catch all
app.all('*', (_, res: Response) => {
  res
    .status(501)
    .send({ message: 'This admin-service route is not implemented yet' })
})

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`)
})
