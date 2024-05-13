import { NextFunction, Request, Response } from "express";
import { getTradeByIdService } from "../services/getTradeById";

export const getTradeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trade = await getTradeByIdService(req.params.id);
    if (!trade) {
      return res.status(404).send(`ID not found`);
    }
  } catch (error) {
    next(error);
  }
};
