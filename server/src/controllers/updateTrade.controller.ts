import { NextFunction, Request, Response } from "express";
import { updateTradeByIdService } from "../services/updateTrade";

export const updateTradeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const trade = await updateTradeByIdService(String(id), body);
    if (!trade) {
      return res.status(405).send(`Updation is not possible`);
    }
    res.status(200).json({ status: true, message: "Successful", trade });
  } catch (error) {
    next(error);
  }
};
