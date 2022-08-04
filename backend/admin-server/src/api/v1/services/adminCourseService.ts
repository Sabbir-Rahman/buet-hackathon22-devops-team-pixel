import CourseModel from '../models/course'
import { logGeneralError } from '../../../../../auth-server/logger/customLogger'
import { CourseDoc } from '../interfaces/modelInterfaces/course.interface'

const FILENAME = '/backend/src/api/vi/services/adminCourseServices.ts'

async function addCourse(name: string): Promise<CourseDoc | boolean> {
  try {
    const course = CourseModel.create({ name })
    return course
  } catch (error) {
    logGeneralError('admin-service', FILENAME, 'addCourse', String(error))
    return false
  }
}

export default {
  addCourse
}