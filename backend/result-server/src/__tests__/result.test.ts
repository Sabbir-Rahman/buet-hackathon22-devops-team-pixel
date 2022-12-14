import { string } from 'zod'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
//import jwt from 'jsonwebtoken'
import createServer from '../api/v1/utils/server'

const app = createServer()
// testing the auth server
describe('Course Server', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })
  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })
  describe('true test', () => {
    it('should return true', () => {
      expect(true).toBe(true)
    }
    )
  })
  
  // testing posting result
  describe('posting a result by admin', () => {
    it('should return a result', async () => {
      const response = await request(app)
        .post('/api/v1/result/result/add')
        .send({
          studentId: '12345',
          result: 100,
          year: 2020,
        })
      expect(response.status).toBe(200)
      expect(response.body.isSuccess).toBe(true)
      expect(response.body.message).toBe('Result added succesfully')
      expect(response.body.data.studentId).toBe('12345')
    }
    )
  }
  )
})