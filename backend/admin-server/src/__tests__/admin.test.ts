import { string } from 'zod'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
//import jwt from 'jsonwebtoken'
import createServer from '../api/v1/utils/server'

const app = createServer()
// testing the auth server
describe('Auth', () => {
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
  
  // testing the admin test route
  describe('admin test route', () => {
    it('should return 200', async () => {
      const response = await request(app).get('/api/v1/admin/course/test')
      expect(response.status).toBe(200)
    }
    )
  })
  // testing the admin add course route
  describe('admin add course route', () => {
    it('should return 200', async () => {
      const response = await request(app).post('/api/v1/admin/course/add')
      .send({ name: 'test course' })
      expect(response.status).toBe(200)
    }
    )
  })

  // testing the admin view courses route
  describe('admin view courses route', () => {
    it('should return status 200 and an array of the courses', async () => {
      const response = await request(app).get('/api/v1/admin/course/view')
      expect(response.status).toBe(200)
      expect(response.body.data).toBeInstanceOf(Array)
      
    }
    )
  })
})