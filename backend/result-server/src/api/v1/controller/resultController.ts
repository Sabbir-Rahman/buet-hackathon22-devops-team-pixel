import { Request, Response } from 'express'
import { logGeneralError } from '../../../../logger/customLogger'
import { resultService } from '../services'
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
// adding result to the database
async function addResult(req: Request, res: Response): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Result not added',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const result = await resultService.addResult(req.body.studentId, req.body.courseId, req.body.result)

  if (result) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Result added succesfully'
    response.data = result
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/authController.ts',
      'addResult',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}
// view all the results
async function viewResult(req: Request, res: Response): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Results not viewed',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const results = await resultService.getAllResults()

  if (results) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Results viewed succesfully'
    response.data = results
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/authController.ts',
      'viewResult',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}



export default {
  test,
  addResult,
  viewResult
}
