import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
const app: Application = express();
import swagger from "swagger-ui-express";
import { swaggerSpecs } from "./utils/swagger";
import cookieParser from "cookie-parser";
import tradeRoute from "./routers/traderoute";
import { errorHandler } from "./middlewares/errorHandler";
app.use(`/api-docs`, swagger.serve, swagger.setup(swaggerSpecs));
app.use(cookieParser());
app.use(express.json());

app.use(`/api/trade`, tradeRoute);
app.use(errorHandler);
export default app.listen(Number(process.env.PORT), () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
