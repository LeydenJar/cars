import express from "express";
import dotenv from "dotenv";
import authRouter from "./src/features/authentication/presentation/auth.controller";
import carsRouter from "./src/features/cars/presentation/cars.controller";
import mongoose from "mongoose";
import { initializeData } from "./src/core/seed_data/initializeData";
import { config } from "./src/core/config/config";

const env = dotenv.config();

if (env.error) {
  throw env.error;
}

const app = express();

//cors
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/cars", carsRouter);

mongoose
  .connect(config.mongo.connString, {
    user: config.mongo.user,
    pass: config.mongo.password,
    dbName: config.mongo.dbName,
  })
  .then(
    async () => {
      // await initializeData();
      app.listen(config.app.appPort, () => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${config.app.appPort}`
        );
      });
    },
    (err) => {
      console.log("error connecting to mongodb");
      console.log(err);
    }
  );
