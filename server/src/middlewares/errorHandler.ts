import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json({ status: false, message: error.message });
};
