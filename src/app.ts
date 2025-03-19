import cors from "cors";
import dotenv from "dotenv";
import express, { json, Request, Response, Express } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware";
import { UserRouter } from "./routes";
import { homeRouter } from "./routes/homeRouter";
import { cardRouter } from "./routes/cardRouter";
import { expensesRouter } from "./routes/expensesRouter";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app
    .get("/health", (req: Request, res: Response) => {
        return res.status(httpStatus.OK).send("Ok running! ");
    })
    .use("/user", UserRouter)
    .use("/home", homeRouter)
    .use("/card", cardRouter)
    .use("/expenses", expensesRouter)


app.use(errorHandlingMiddleware);


export default app;