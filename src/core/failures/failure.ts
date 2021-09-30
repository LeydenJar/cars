export abstract class Failure {
  abstract message: string;
  abstract code: string;
}

export function instanceOfFailure(object: any): object is Failure {
  return "message" in object && "code" in object;
}
