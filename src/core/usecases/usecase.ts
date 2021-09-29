import { Failure } from "../failures/failure";

export abstract class Usecase<ReturnType, ParamsType> {
  abstract call(params: ParamsType): Promise<Failure | ReturnType>;
}
