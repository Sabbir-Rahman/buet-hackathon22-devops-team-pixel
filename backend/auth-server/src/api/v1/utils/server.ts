import express, { Response } from 'express'
import cors from 'cors'

import { v1Router } from '..'

function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.get('/', (req, res) => {
    res.send('Welcome from auth-server ci-cd pipeline')
  })
  app.use('/api/v1/auth', v1Router)

  return app
}

export default createServer
