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
})