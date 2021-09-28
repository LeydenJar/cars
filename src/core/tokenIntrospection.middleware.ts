import jwt from "jsonwebtoken";
import * as express from 'express';

export function tokenIntrospection(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]


  //Retornar erro de autenticação
  if (token == null) return res.json({success: false, message: "Unauthenticated"});

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err)


    //Token inválido
    if (err) return res.json({success: false, message: "invalid or expired token"})

    req.user = user

    next()
  })
}