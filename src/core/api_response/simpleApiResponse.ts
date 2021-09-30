import { Failure, instanceOfFailure } from "../failures/failure";
import { ApiResponse } from "./apiResponse";

export class SimpleApiResponse extends ApiResponse {
  constructor(object: Failure | object) {
    if (instanceOfFailure(object)) {
      super({ success: true, data: null, failures: [object] });
    } else {
      super({ success: true, data: object, failures: null });
    }
  }
}
