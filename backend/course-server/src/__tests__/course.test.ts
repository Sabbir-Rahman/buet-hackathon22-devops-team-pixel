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
  // testing enroll course
    describe('enroll course', () => {
        it('should return status 200', async () => {
            const response = await request(app)
                .post('/api/v1/course/enroll')
                .send({
                    studentId: '5e9f8f8f8f8f8f8f8f8f8f8',
                    courseId: '5e9f8f8f8f8f8f8f8f8f8f8'
                })
                .set('Accept', 'application/json')
                .expect(200)
            expect(response.body.isSuccess).toBe(true)
            expect(response.body.statusCode).toBe(200)
        }
        )
    }
    )
    // testing view enrolled course
    describe('view enrolled course', () => {
        it('should return status 200', async () => {
            const response = await request(app)
                .get('/api/v1/course/view')
                .set('Accept', 'application/json')
                .expect(200)
            expect(response.body.isSuccess).toBe(true)
            expect(response.body.statusCode).toBe(200)
            expect(response.body.data).toBeInstanceOf(Array)
            expect(response.body.data[0]).toHaveProperty('courseId')
        }
        )
    })
})
