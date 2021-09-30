import { Failure } from "../failures/failure";

/* 

This is the abstract definition of a usecase

*/
export abstract class Usecase<ReturnType, ParamsType> {
  abstract call(params: ParamsType): Promise<Failure | ReturnType>;
}
