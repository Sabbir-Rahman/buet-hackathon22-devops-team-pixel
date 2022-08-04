import { CourseEnrollDoc } from '../interfaces/modelInterfaces/courseEnroll.interface'
import CourseEnrollModel from '../models/courseEnroll'
import { logGeneralError } from '../../../../logger/customLogger'

const FILENAME = '/backend/src/api/vi/services/courseEnrollServices.ts'

async function enrollCourse(studentId: string, courseId: string): Promise<CourseEnrollDoc | boolean> {
  try {
    const course = CourseEnrollModel.create({ studentId, courseId })
    return course
  } catch (error) {
    logGeneralError('course-service', FILENAME, 'enrollCourse', String(error))
    return false
  }
}

async function viewEnrolledCourse(): Promise<CourseEnrollDoc[] | boolean> {
  try {
    const admin = CourseEnrollModel.find()
    return admin
  } catch (error) {
    logGeneralError('course-service', FILENAME, 'viewEnrolledCourse', String(error))
    return false
  }
}

export default {
  enrollCourse,
  viewEnrolledCourse
}
