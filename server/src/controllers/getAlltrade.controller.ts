import { NextFunction, Request, Response } from "express";
import { getAllTradeService } from "../services/getAllTrade";

export const getAllTradeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trades = await getAllTradeService(req.query);
    return res
      .status(200)
      .json({ status: true, message: "Successful", trades });
  } catch (error) {
    next(error);
  }
};
