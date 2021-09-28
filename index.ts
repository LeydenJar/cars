import express from "express";
import dotenv from "dotenv";
import authRouter from "./src/features/authentication/presentation/auth.controller";
import carsRouter from "./src/features/cars/presentation/cars.controller";

const env = dotenv.config()

if (env.error) {
  throw env.error
}

const app = express();
const PORT = process.env.APP_PORT;

//cors
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/cars', carsRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

//reference for organization https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/