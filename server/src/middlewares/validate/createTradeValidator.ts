import { NextFunction, Request, Response } from "express";

export const validateCreateTradeData = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({ message: error?.errors });
    }
  };
};
