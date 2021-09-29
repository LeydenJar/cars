//express router here
import express from "express";
import jwt from "jsonwebtoken";
import instanciator from "../../../core/instanciator";

var router = express.Router();

router.post("/register", async (req: express.Request, res) => {
  const { username, password } = req.body;
  const usecase = instanciator.RegisterUseCase;

  const response = await usecase.call({ username, password });
  res.send(response);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const tokenSecret: string = process.env.TOKEN_SECRET as string;

  const usecase = instanciator.LoginUsecase;

  const response = await usecase.call({ username, password });
  // const user = await usecase.call({ username, password });

  const token = jwt.sign({ username: username }, tokenSecret, {
    expiresIn: "1h",
  });

  res.json({ success: true, token: token });

  //If no login
  //   res.status(401).json({ success: false, message: "Login inválido!" });
});

export default router;
