import express from "express";
import { SimpleApiResponse } from "../../../core/api_response/simpleApiResponse";
import instanciator from "../../../core/instanciator";

var router = express.Router();

router.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;
    const usecase = instanciator.RegisterUseCase;
    const response = await usecase.call({ username, password });
    res.json(new SimpleApiResponse(response));
  }
);

router.post("/login", async (req: express.Request, res: express.Response) => {
  console.log("recieving request");
  const { username, password } = req.body;
  const usecase = instanciator.LoginUsecase;
  const response = await usecase.call({ username, password });
  res.json(new SimpleApiResponse(response));
});

export default router;
