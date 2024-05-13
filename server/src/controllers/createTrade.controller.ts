import { NextFunction, Request, Response } from "express";
import { createTradeService } from "../services/createTrade";
import { createTradeSchema } from "../utils/validator/createTradeValidator";

export const createTradeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { values, error } = await createTradeSchema.validateAsync(req.body);
    if (error) {
      next(error);
    }
    console.log("🚀 ~ values:", values)
    const trade = await createTradeService(values);
    res.status(201).json({ status: true, trade, message: "Successful" });
  } catch (error) {
    next(error);
  }
};
