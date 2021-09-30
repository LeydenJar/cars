import jwt from "jsonwebtoken";
import * as express from "express";
import { SimpleApiResponse } from "../api_response/simpleApiResponse";
import { AuthenticationFailure } from "../failures/authenticationFailure";
import { config } from "../config/config";

/*

The token introspection middleware validates the token and puts the user in the request object
In this particular case it also returns an error in case the user is unauthenticated or if the token has expired

*/
export function tokenIntrospection(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  //Retornar erro de autenticação
  if (token == null)
    return res.json(
      new SimpleApiResponse(
        new AuthenticationFailure({
          code: "auth/unauthenticated",
          message: "Unauthenticated",
        })
      )
    );

  jwt.verify(token, config.app.tokenSecret, (err: any, user: any) => {
    //Token inválido
    if (err)
      return res.json(
        new SimpleApiResponse(
          new AuthenticationFailure({
            code: "auth/invalid_token",
            message: "Invalid Token",
          })
        )
      );

    req.user = user;
    next();
  });
}
