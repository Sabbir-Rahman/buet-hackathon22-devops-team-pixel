import { Request, Response } from 'express'
import { logGeneralError } from '../../../../logger/customLogger'
import { courseEnrollService } from '../services'

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

async function enrollCourse(req: Request, res: Response): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Course not enrolled',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const course = await courseEnrollService.enrollCourse(req.body.studentId, req.body.courseId)

  if (course) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Course enrolled succesfully'
    response.data = course
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/authController.ts',
      'enrollCourse',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}

async function viewEnrolledCourse(req: Request, res: Response): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Admin not viwed',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const courses = await courseEnrollService.viewEnrolledCourse()

  if (courses) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Course viewed succesfully'
    response.data = courses
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/courseEnrollController.ts',
      'viewEnrolledCourse',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}

export default {
  test,
  enrollCourse,
  viewEnrolledCourse
}
