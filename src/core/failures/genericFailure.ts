import { Failure } from "./failure";

export class GenericFailure implements Failure {
  constructor(inputObject: IGenericFailureInput) {
    this.message = inputObject.message;
    this.code = inputObject.code;
  }
  message: string;
  code: string;
}

interface IGenericFailureInput {
  message: string;
  code: string;
}
