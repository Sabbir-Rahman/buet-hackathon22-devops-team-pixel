import { Request, Response } from 'express'

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
}

export default {
  test,
}
