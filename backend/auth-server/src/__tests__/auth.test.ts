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
  // testing create admin
    describe('create admin', () => {
        it('should return true', async () => {
            const res = await request(app).post('/api/v1/auth/create/admin').send({
            name: 'test admin',
            })
            expect(res.status).toBe(200)
            expect(res.body.message).toBe('Admin added succesfully')
        }
        )
        }
    )

    // testing view admin
    describe('view admin', () => {
        it('should return true', async () => {
            const res = await request(app).get('/api/v1/auth/view/admin')
            expect(res.status).toBe(200)
            expect(res.body.message).toBe('Admin viewed succesfully')
        }
        )
        }
    )
    // testing create student
    describe('create student', () => {
        it('should return true', async () => {
            const res = await request(app).post('/api/v1/auth/create/student').send({
            name: 'test student',
            gender: 'male',
            year:'2589'
            })
            expect(res.status).toBe(200)
            expect(res.body.message).toBe('Student added succesfully')
        }
        )
        }
    )
    // testing view student
    describe('view student', () => {
        it('should return true', async () => {
            const res = await request(app).get('/api/v1/auth/view/student')
            expect(res.status).toBe(200)
            expect(res.body.message).toBe('Student viewed succesfully')
        }
        )
        }
    )



})