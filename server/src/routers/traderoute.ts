import { Router } from "express";
import { createTradeController } from "../controllers/createTrade.controller";
import { getAllTradeController } from "../controllers/getAlltrade.controller";
import { getTradeByIdController } from "../controllers/getTradeById.controller";

import { validateCreateTradeData } from "../middlewares/validate/createTradeValidator";
import { createTradeSchema } from "../utils/validator/createTradeValidator";
import { deleteTradeController } from "../controllers/deleteTrade.controller";
import { updateTradeController } from "../controllers/updateTrade.controller";

const tradeRoute = Router();
/**
 * @swagger
 * /api/trade:
 *   post:
 *     description: Create a new Trade
 *     parameters:
 *       - name: type
 *         in:   path
 *         description: type of the trade
 *         required: true
 *         type: String
 *     responses:
 *       201:
 *         description: Success
 */
tradeRoute
  .route(`/`)
  .post(validateCreateTradeData(createTradeSchema), createTradeController)
  .get(getAllTradeController);
tradeRoute
  .route(`/:id`)
  .get(getTradeByIdController)
  .patch(updateTradeController)
  .delete(deleteTradeController);

export default tradeRoute;
