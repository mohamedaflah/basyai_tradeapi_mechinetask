import { NextFunction, Request, Response } from "express";
import { updateTradeByIdService } from "../services/updateTrade";

export const updateTradeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      throw new Error(`Updation is not possible`);
    }
    const trade = await updateTradeByIdService(Number(req.params.id), req.body);
    if (!trade) {
      return res.status(405).send(`Updation is not possible`);
    }
    res.status(200).json({ status: true, message: "Successful", trade });
  } catch (error) {
    next(error);
  }
};
