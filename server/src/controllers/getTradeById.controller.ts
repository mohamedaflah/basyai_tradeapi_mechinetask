import { NextFunction, Request, Response } from "express";
import { getTradeByIdService } from "../services/getTradeById";

export const getTradeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params,' ()()()()())()***');
    
    const trade = await getTradeByIdService(Number(req.params.id));
    console.log(req.params);
    if (!trade) {
      return res.status(404).send(`ID not found`);
    }
    return res.status(200).json({ status: true, message: "Successful", trade });
  } catch (error) {
    next(error);
  }
};
