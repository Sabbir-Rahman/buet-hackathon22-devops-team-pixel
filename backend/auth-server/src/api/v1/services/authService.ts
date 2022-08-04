import AdminModel from '../models/course'
import { logGeneralError } from '../../../../logger/customLogger'
import { AdminDoc } from '../interfaces/modelInterfaces/auth.interface'

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

export default {
  addAdmin,
  viewAdmins,
}
