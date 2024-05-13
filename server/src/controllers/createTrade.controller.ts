import { NextFunction, Request, Response } from "express";
import { createTradeService } from "../services/createTrade";
import { createTradeSchema } from "../utils/validator/createTradeValidator";

export const createTradeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trade = await createTradeService(req.body);
    res.status(201).json({ status: true, trade, message: "Successful" });
  } catch (error) {
    next(error);
  }
};
