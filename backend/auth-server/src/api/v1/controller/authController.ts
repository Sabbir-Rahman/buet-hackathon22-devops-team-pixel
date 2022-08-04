import { Request, Response } from 'express'
import { authService } from '../services'
import { logGeneralError } from '../../../../logger/customLogger'

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

async function addAdmin(
  req: Request,
  res: Response
): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Admin not added',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const admin = await authService.addAdmin(req.body.name)

  if (admin) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Admin added succesfully'
    response.data = admin
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/authController.ts',
      'addAdmin',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}

async function viewAdmin(req: Request, res: Response): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 200,
    message: 'Admin not viwed',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const admins = await authService.viewAdmins()

  if (admins) {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Admin viewed succesfully'
    response.data = admins
  } else {
    logGeneralError(
      'admin-serive',
      '/controller/authController.ts',
      'viewAdmin',
      'Something wrong happen'
    )
  }
  res.status(response.statusCode).json(response)
}

export default {
  test,
  addAdmin,
  viewAdmin
}
