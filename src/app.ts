import cors from "cors";
import dotenv from "dotenv";
import express, { json, Request, Response, Express } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware";
import { LoginRouter } from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app
    .use("/login", LoginRouter)
    .get("/health", (req: Request, res: Response) => {
        return res.status(httpStatus.OK).send("Ok running! ");
    })

app.use(errorHandlingMiddleware);


export default app;