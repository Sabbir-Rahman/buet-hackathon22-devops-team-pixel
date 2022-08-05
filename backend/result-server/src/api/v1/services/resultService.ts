import { Result } from './../interfaces/modelInterfaces/resultInterface';
import { CourseEnrollDoc } from '../interfaces/modelInterfaces/resultInterface'
import ResultModel from '../models/result'
import { logGeneralError } from '../../../../logger/customLogger'

const FILENAME = '/backend/src/api/vi/services/resultService.ts'

// adding result to the database
async function addResult(studentId: string, year: string, result: string): Promise<CourseEnrollDoc> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Result not added',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const resultDoc = await ResultModel.create({
    studentId,
    result,
    year
  })

  if (resultDoc) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Result added succesfully'
    response.data = resultDoc
  } else {
    logGeneralError(
      'admin-serive',
      FILENAME,
      'addResult',
      'Something wrong happen'
    )
  }
  return response
}

// getting all results 
async function getAllResults(): Promise<Result[]> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Results not found',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const resultDoc = await ResultModel.find()

  if (resultDoc) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Results found succesfully'
    response.data = resultDoc
  } else {
    logGeneralError(
      'admin-serive',
      FILENAME,
      'getAllResults',
      'Something wrong happen'
    )
  }
  return response 

}


export default {
  addResult,
  getAllResults
}
