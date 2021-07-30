export enum StatusCode {
    Unknown = 0, // Usually client side from browser
    OK = 200,
    Created = 201,
    BadRequest = 400,
    UnAuthorized = 401,
    InternalServerError = 500,
    NotFound = 404,
    Conflict = 409,
    Forbidden = 403,
  }