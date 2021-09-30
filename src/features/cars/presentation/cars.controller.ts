import express from "express";
import { tokenIntrospection } from "../../../core/middlewares/tokenIntrospection.middleware";
import Instanciator from "../../../core/instanciator";
import { SimpleApiResponse } from "../../../core/api_response/simpleApiResponse";

var router = express.Router();

router.get("/", tokenIntrospection, async (req, res) => {
  const usecase = Instanciator.ListCarsUsecase;
  const response = await usecase.call();
  res.json(new SimpleApiResponse(response));
});

router.get("/:id", tokenIntrospection, async (req, res) => {
  const carId: string = req.params.id;
  const usecase = Instanciator.CarDetailUsecase;
  const response = await usecase.call(carId);
  res.json(new SimpleApiResponse(response));
});

export default router;
