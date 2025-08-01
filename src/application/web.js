import express from "express";
import router from "../route/public-api.js";
import errorMiddleware from "../middleware/error-middleware.js";

export const web = express();
web.use(express.json());
web.use(router);
web.use(errorMiddleware);
