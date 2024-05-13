import { Router } from "express";
import { createTradeController } from "../controllers/createTrade.controller";
import { getAllTradeController } from "../controllers/getAlltrade.controller";
import { getTradeByIdController } from "../controllers/getTradeById.controller";
import { updateTradeByIdService } from "../services/updateTrade";

const tradeRoute = Router();

tradeRoute.route(`/`).post(createTradeController).get(getAllTradeController);
tradeRoute
  .route(`/:id`)
  .get(getTradeByIdController)
  .patch(updateTradeByIdService);

export default tradeRoute;
