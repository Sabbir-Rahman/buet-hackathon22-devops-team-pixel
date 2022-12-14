import CourseModel from '../models/course'
import { logGeneralError } from '../../../../logger/customLogger'
import { CourseDoc } from '../interfaces/modelInterfaces/course.interface'

const FILENAME = '/backend/src/api/vi/services/adminCourseServices.ts'

async function addCourse(name: string, description: string): Promise<CourseDoc | boolean> {
  try {
    const course = CourseModel.create({ name, description })
    return course
  } catch (error) {
    logGeneralError('admin-service', FILENAME, 'addCourse', String(error))
    return false
  }
}

async function viewCourses(): Promise<CourseDoc[] | boolean> {
  try {
    const courses = CourseModel.find()
    return courses
  } catch (error) {
    logGeneralError('admin-service', FILENAME, 'viewCourses', String(error))
    return false
  }
}

export default {
  addCourse,
  viewCourses
}