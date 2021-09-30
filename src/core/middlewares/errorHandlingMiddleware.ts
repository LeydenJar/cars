// import { SimpleApiResponse } from "../api_response/simpleApiResponse";
// import { GenericFailure } from "../failures/genericFailure";
// import express from "express";

// export function errorHandlingMiddleware(
//   err: Error,
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) {
//   res.status(500).json(
//     new SimpleApiResponse(
//       new GenericFailure({
//         code: "generic/unknown_error",
//         message: "An unknown failurehas ocurred on the server",
//       })
//     )
//   );
// }
