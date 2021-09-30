import { Failure } from "./failure";

export class AuthenticationFailure implements Failure {
  constructor(inputObject: IAuthenticationFailure) {
    this.message = inputObject.message;
    this.code = inputObject.code;
  }
  message: string;
  code: string;
}

interface IAuthenticationFailure {
  message: string;
  code: string;
}
