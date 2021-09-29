//express router here
import express from "express";
import { tokenIntrospection } from "../../../core/tokenIntrospection.middleware";
import Instanciator from "../../../core/instanciator";

var router = express.Router();

router.get("/", async (req, res) => {
  const usecase = Instanciator.ListCarsUsecase;
  const response = await usecase.call();

  res.json(response);
});

router.get("/:id", async (req, res) => {
  const carId: string = req.params.id;
  const usecase = Instanciator.CarDetailUsecase;
  const response = await usecase.call(carId);
  res.json(response);
});

export default router;
