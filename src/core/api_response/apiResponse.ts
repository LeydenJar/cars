import { Failure } from "../failures/failure";

/*

Definition of the response object that will be sent in every 

*/

export class ApiResponse {
  constructor({ success, data, failures }: IApiResponseInput) {
    this.success = success;
    this.data = data;
    this.failures = failures;
  }

  success: boolean;
  data: object[] | object | null;
  failures: Failure[] | null;
}

interface IApiResponseInput {
  success: boolean;
  data: object[] | object | null;
  failures: Failure[] | null;
}
