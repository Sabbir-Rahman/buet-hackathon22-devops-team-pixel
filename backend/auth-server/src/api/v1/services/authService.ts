import AdminModel from '../models/admin'
import { logGeneralError } from '../../../../logger/customLogger'
import { AdminDoc, StudentDoc } from '../interfaces/modelInterfaces/auth.interface'
import StudentModel from '../models/student'

const FILENAME = '/backend/src/api/vi/services/authServices.ts'

async function addAdmin(
  name: string,
): Promise<AdminDoc | boolean> {
  try {
    const admin = AdminModel.create({ name })
    return admin
  } catch (error) {
    logGeneralError('auth-service', FILENAME, 'addAdmin', String(error))
    return false
  }
}

async function viewAdmins(): Promise<AdminDoc[] | boolean> {
  try {
    const admin = AdminModel.find()
    return admin
  } catch (error) {
    logGeneralError('auth-service', FILENAME, 'viewAdmins', String(error))
    return false
  }
}

async function addStudent(name: string,gender: string, year: number): Promise<StudentDoc | boolean> {
  try {
    const student = StudentModel.create({ name, gender, year })
    return student
  } catch (error) {
    logGeneralError('auth-service', FILENAME, 'addStudent', String(error))
    return false
  }
}

async function viewStudents(): Promise<StudentDoc[] | boolean> {
  try {
    const students = StudentModel.find()
    return students
  } catch (error) {
    logGeneralError('auth-service', FILENAME, 'viewStudents', String(error))
    return false
  }
}

export default {
  addAdmin,
  viewAdmins,
  addStudent,
  viewStudents
}
