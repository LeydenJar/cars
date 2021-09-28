
import Express from "express-serve-static-core";


interface User {
    username: string;
}

declare module 'express-serve-static-core' {
  export interface Request {
    user: null | User;
  }
}