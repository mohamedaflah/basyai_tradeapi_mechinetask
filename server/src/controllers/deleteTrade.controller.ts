import { NextFunction, Request, Response } from "express";
import { deleteTradeById } from "../services/deleteTradeById";

export const deleteTradeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const trade = await deleteTradeById(req.params.id);
    console.log("🚀 ~ trade:", trade)
    if (!trade) {
      return res
        .status(405)
        .json({ status: false, message: "Modifying not possible" });
    }
    res.status(200).json({ status: true, trade, message: "Successful" });
  } catch (error) {
    next(error);
  }
};
