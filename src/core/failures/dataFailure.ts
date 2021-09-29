import { Failure } from "./failure";

export class DataFailure implements Failure {
  constructor(inputObject: IDataFailureInput) {
    this.message = inputObject.message;
    this.code = inputObject.code;
  }
  message: string;
  code: string;
}

interface IDataFailureInput {
  message: string;
  code: string;
}
