import { Request, Response } from 'express'
import { logGeneralError } from '../../../../logger/customLogger'
import { adminCourseService } from '../services'

async function test(
  req: Request<never, never, never>,
  res: Response
): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Admin test route ok',
    developerMessage: '',
    isReadOnly: false,
    data: { message: 'Admin test route ok' },
  }

  res.status(response.statusCode).json(response)
}

async function addCourse(
  req: Request,
  res: Response
): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Add course failed',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }
  const course = await adminCourseService.addCourse(req.body.name, req.body.description)

  if (course) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Course added succesfully'
    response.data = course
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/adminCourseController.ts',
      'addCourse',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}

async function viewCourses(req: Request, res: Response): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'View courses failed',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }
  const courses = await adminCourseService.viewCourses()

  if (courses) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Courses viwed succesfully'
    response.data = courses
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/adminCourseController.ts',
      'view courses',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}

export default {
  test,
  addCourse,
  viewCourses
}
