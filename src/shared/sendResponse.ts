import { Response } from 'express'

const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number
    success: boolean
    message?: string | null
    data?: T | null
  }
): void => {
  res.send(data.statusCode).json({
    status: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  })
}

export default sendResponse
