import { Response } from 'express';

const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message?: string | null;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data?: T | null;
  }
): void => {
  res.status(data.statusCode).json({
    status: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  });
};

export default sendResponse;
