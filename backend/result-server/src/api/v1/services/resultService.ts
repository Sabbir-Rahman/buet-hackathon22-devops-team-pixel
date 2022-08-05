import { Result, ResultDoc } from './../interfaces/modelInterfaces/resultInterface';
import ResultModel from '../models/result'
import { logGeneralInfo } from '../../../../logger/customLogger'

const FILENAME = '/backend/src/api/vi/services/resultService.ts'

// adding result to the database
async function addResult(studentId: string, year: string, result: string): Promise<ResultDoc| boolean> {
  try {
    const resultDoc = await ResultModel.create({
      studentId,
      result,
      year
    })

    return resultDoc
  } catch (error) {
    logGeneralInfo(
      'result-service',
      FILENAME,
      'addResult',
      String(error)
    )
    return false
  }
}
  
// getting all results 
async function getAllResults(): Promise<Result[]| boolean> {
  try {
  const resultDoc = await ResultModel.find()
  return resultDoc
  } catch (error) {
    logGeneralInfo(
      'result-service',
      FILENAME,
      'getAllResults',
      String(error)
    )
    return false
  }
}


export default {
  addResult,
  getAllResults,
}

