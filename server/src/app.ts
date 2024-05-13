import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
const app: Application = express();
import swagger from "swagger-ui-express";
import { swaggerSpecs } from "./utils/swagger";
import cookieParser from "cookie-parser";
import tradeRoute from "./routers/traderoute";
app.use(`/api-docs`, swagger.serve, swagger.setup(swaggerSpecs));
app.use(cookieParser());

app.use(`/api/trade`, tradeRoute);
